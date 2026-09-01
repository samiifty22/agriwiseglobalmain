import {
  company,
  seo,
  products,
  founders,
  markets,
} from "@/lib/content";

/**
 * schema.org / JSON-LD structured data.
 * helps google understand what agriwise is, show rich results, and
 * associate the brand with agri-trade / agricultural export queries.
 *
 * validate at https://validator.schema.org and
 * https://search.google.com/test/rich-results
 */
export function StructuredData() {
  const org = {
    "@type": ["Organization", "Corporation"],
    "@id": `${company.url}/#organization`,
    name: "AgriWise Global",
    legalName: "AgriWise Global Ltd.",
    url: company.url,
    logo: `${company.url}/brand/agriwise_logo.png`,
    image: `${company.url}/hero/1.jpg`,
    description: seo.description,
    slogan: company.tagline,
    foundingDate: company.foundingYear,
    foundingLocation: { "@type": "Place", name: "Dhaka, Bangladesh" },
    email: company.email,
    telephone: company.phoneHref,
    knowsAbout: seo.keywords,
    areaServed: markets.map((m) => ({ "@type": "Country", name: m.name })),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.addressParts.street,
      addressLocality: company.addressParts.city,
      postalCode: company.addressParts.postalCode,
      addressCountry: company.addressParts.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        telephone: company.phoneHref,
        availableLanguage: ["en", "bn"],
      },
    ],
    founder: founders.map((f) => ({ "@type": "Person", name: f.name })),
    sameAs: company.social,
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: p.name,
        category: "agricultural produce",
        countryOfOrigin: "Bangladesh",
      },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${company.url}/#website`,
    url: company.url,
    name: "agriwise global",
    description: seo.description,
    publisher: { "@id": `${company.url}/#organization` },
    inLanguage: "en",
  };

  const productList = {
    "@type": "ItemList",
    "@id": `${company.url}/#products`,
    name: "agriwise global — export-ready agricultural produce",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: `${company.url}${p.image}`,
        category: "agricultural produce",
        countryOfOrigin: "Bangladesh",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
          businessFunction: "http://purl.org/goodrelations/v1#Sell",
        },
        additionalProperty: [
          { "@type": "PropertyValue", name: "sourcing region", value: p.location },
          { "@type": "PropertyValue", name: "season", value: p.season },
          { "@type": "PropertyValue", name: "certification", value: p.cert },
        ],
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [org, website, productList],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

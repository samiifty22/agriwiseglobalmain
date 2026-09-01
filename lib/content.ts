/**
 * single source of truth for all site copy and data.
 *
 * ▸ to change wording, numbers, founders, products, investments or news,
 *   edit this file only — every section reads from here.
 * ▸ everything is written lowercase on purpose (brand style).
 * ▸ images live in /public — paths below are relative to /public.
 */

export const company = {
  name: "agriwise global",
  legalName: "agriwise global ltd.",
  tagline: "rooted in bangladesh. growing globally.",
  url: "https://www.agriwiseglobal.com",
  domain: "www.agriwiseglobal.com",
  email: "connect@agriwiseglobal.com",
  phone: "+880 1711792823",
  phoneHref: "+8801711792823",
  whatsapp: "8801711792823",
  foundingYear: "2024",
  address:
    "3rd floor, house 87-89, road 4, block b, niketan, gulshan 1, dhaka 1212",
  addressParts: {
    street: "3rd floor, house 87-89, road 4, block b, niketan, gulshan 1",
    city: "dhaka",
    postalCode: "1212",
    country: "BD",
  },
  /** social / external profiles — used for SEO (schema.org sameAs). fill these in. */
  social: [
    // "https://www.linkedin.com/company/agriwise-global",
    // "https://www.facebook.com/agriwiseglobal",
    // "https://www.instagram.com/agriwiseglobal",
  ] as string[],
} as const;

/**
 * SEO — the phrases we want agriwise to rank for on google.
 * used in <meta keywords>, structured data and page copy.
 */
export const seo = {
  primary: "agri-trade company",
  keywords: [
    "agri-trade company",
    "agritrade",
    "agricultural export company bangladesh",
    "agro export bangladesh",
    "agricultural produce exporter",
    "sustainable agri-trade",
    "traceable agricultural supply chain",
    "chinigura rice exporter",
    "bangladesh mango exporter",
    "mustard oil exporter",
    "spice exporter bangladesh",
    "ethical sourcing agriculture",
    "farmer pre-finance",
    "agriculture investment",
  ],
  titleDefault:
    "agriwise global — agri-trade & agricultural export company, bangladesh",
  description:
    "agriwise global is a bangladesh-based agri-trade and agricultural export company connecting smallholder farmers with global markets — ethical, traceable, sustainable sourcing of chinigura rice, mangoes, okra, mustard oil and spices, backed by farmer pre-finance and guaranteed buy-back.",
} as const;

export const nav = [
  { label: "about", href: "/#about" },
  { label: "how it works", href: "/#how" },
  { label: "products", href: "/#products" },
  { label: "impact", href: "/#impact" },
  { label: "global", href: "/#global" },
  { label: "partner", href: "/#partner" },
  { label: "grow with agriwise", href: "/invest" },
] as const;

export const hero = {
  eyebrow: "ethical · traceable · sustainable agri-trade",
  headline: "empowering farmers, elevating agri-trade, expanding horizons.",
  body: "agriwise global is a bangladesh-based agri-trade and agricultural export company — connecting smallholder farmers with global markets through technology, financial expertise and deep agricultural knowledge.",
  primaryCta: { label: "explore products", href: "/#products" },
  secondaryCta: { label: "grow with agriwise", href: "/invest" },
} as const;

export const stats = [
  { value: 60, suffix: "+", label: "sourcing regions" },
  { value: 40, suffix: "%", label: "co₂ saved" },
  { value: 120, suffix: "+ tons", label: "food waste prevented" },
  { value: 1200, suffix: "+", label: "women trained" },
] as const;

export const about = {
  number: "01",
  kicker: "our story",
  title: "a seamless bridge between the farm and the world",
  body: "agriwise global was founded with a simple yet powerful goal — to connect the world's finest agricultural produce with global markets. by combining technology, financial expertise, and deep agricultural knowledge, we enable ethical, traceable, and sustainable trade across borders.",
  image: "/hero/1.jpg",
  imageAlt:
    "boxes of fresh produce beside a container ship — agriwise global agricultural exports leaving bangladesh",
  points: [
    {
      title: "our mission",
      body: "to create a seamless, transparent, and profitable agro-export ecosystem that benefits both producers and global consumers.",
    },
    {
      title: "our vision",
      body: "to become a leading force in global agriculture by empowering farmers and suppliers with innovation, fair trade, and market access.",
    },
    {
      title: "what makes us different",
      body: "we don't just buy from farmers — we pre-finance the crop, train for export quality, guarantee the buy-back, and carry full documentation all the way to the retail shelf.",
    },
  ],
} as const;

/**
 * how it works — the agriwise model, end to end.
 * rendered as a numbered process diagram on the homepage.
 */
export const howItWorks = {
  number: "02",
  kicker: "how it works",
  title: "from a smallholder plot to a retail shelf, one accountable chain",
  intro:
    "every shipment moves through the same five steps. each one is documented, so a buyer can trace a bag of rice back to the field it grew in.",
  steps: [
    {
      icon: "sprout",
      title: "source directly",
      body: "we buy straight from smallholder farmers and cooperatives in 60+ regions — no middlemen diluting price or traceability.",
    },
    {
      icon: "hand-coins",
      title: "pre-finance & train",
      body: "farmers receive input finance and export-grade training up front, with a guaranteed buy-back price agreed before planting.",
    },
    {
      icon: "boxes",
      title: "aggregate & grade",
      body: "produce is collected at regional hubs, cleaned, graded and packed to each buyer's specification.",
    },
    {
      icon: "badge-check",
      title: "certify & document",
      body: "bsti, usda, haccp and iso 22000 aligned checks, with full export paperwork issued for every lot.",
    },
    {
      icon: "ship",
      title: "export & deliver",
      body: "consolidated, shipped and delivered to retailers and distributors across the usa, uae, canada and china.",
    },
  ],
} as const;

export const founders = [
  {
    name: "muhammad refayet chowdhury",
    role: "global vision & investment",
    image: "/founders/refayet.jpg",
  },
  {
    name: "md nazibur rahman",
    role: "trade operations & supply chain",
    image: "/founders/nazibur.jpg",
  },
  {
    name: "sakib mahmud zakaria",
    role: "agro sourcing & strategy",
    image: "/founders/sakib.jpg",
  },
] as const;

export type Product = {
  name: string;
  category: string;
  image: string;
  note: string;
  location: string;
  season: string;
  cert: string;
  format: string;
};

export const products: Product[] = [
  {
    name: "chinigura rice",
    category: "aromatic grain",
    image: "/products/rice.jpg",
    note: "small-grain aromatic rice, prized for biryani and payesh — milled and packed to each buyer's spec.",
    location: "natore",
    season: "nov–feb",
    cert: "bsti, usda",
    format: "bulk, jute bags",
  },
  {
    name: "mangoes",
    category: "fresh fruit",
    image: "/products/mango.jpg",
    note: "himsagar, langra and amrapali varieties, hand-picked at the right ripeness and cold-chained to port.",
    location: "rajshahi",
    season: "may–june",
    cert: "haccp",
    format: "retail, bulk",
  },
  {
    name: "fresh okra",
    category: "fresh vegetable",
    image: "/products/okra.jpg",
    note: "tender, uniform pods graded to length and packed for private-label retail.",
    location: "jashore",
    season: "year-round",
    cert: "iso 22000",
    format: "private label packs",
  },
  {
    name: "mustard oil",
    category: "cold-pressed oil",
    image: "/products/mustard.jpg",
    note: "kachi ghani cold-pressed mustard oil, high pungency, bottled or supplied in bulk.",
    location: "khulna",
    season: "jan–mar",
    cert: "usda organic",
    format: "glass bottles, bulk",
  },
];

export const certifications = [
  { name: "usda organic", image: "/certs/usda.png" },
  { name: "iso 22000", image: "/certs/iso22000.png" },
  { name: "brc", image: "/certs/brc.png" },
  { name: "halal", image: "/certs/halal.png" },
];

export const impact = [
  {
    title: "farmer empowerment",
    body: "training, pre-finance & buy-back for over 3,000 smallholder farmers.",
  },
  {
    title: "women in agriculture",
    body: "empowering 1,200+ women-led farms with resources and reach.",
  },
  {
    title: "sustainability first",
    body: "zero-waste, eco-packaging and climate-conscious operations.",
  },
] as const;

/** headline numbers shown as a strip in the impact section */
export const impactStats = [
  { value: "3,000+", label: "smallholder farmers supported" },
  { value: "1,200+", label: "women-led farms" },
  { value: "60+", label: "sourcing regions" },
  { value: "40%", label: "co₂ saved vs. conventional routes" },
] as const;

export const markets = [
  { name: "usa", flag: "/flags/us.svg" },
  { name: "uae", flag: "/flags/uae.svg" },
  { name: "canada", flag: "/flags/ca.svg" },
  { name: "china", flag: "/flags/cn.svg" },
] as const;

/**
 * news & media — edit / add / remove entries freely.
 * `href` is optional (link to a full article or press piece).
 */
export type NewsItem = {
  date: string; // e.g. "mar 2026"
  tag: "news" | "press" | "event" | "update";
  title: string;
  excerpt: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "mar 2026",
    tag: "news",
    title: "agriwise opens a second sourcing hub in rajshahi",
    excerpt:
      "the new hub adds cold storage and grading lines close to the mango and rice belts, cutting time-to-port for growers in the region.",
  },
  {
    date: "feb 2026",
    tag: "press",
    title: "featured: building traceable agri-trade out of bangladesh",
    excerpt:
      "a look at how pre-finance and guaranteed buy-back are changing the economics for smallholder farmers we work with.",
  },
  {
    date: "jan 2026",
    tag: "update",
    title: "first verified shipments land with retail partners in canada",
    excerpt:
      "chinigura rice and mustard oil clear customs under full documentation, opening a fourth active export market.",
  },
];

/**
 * faq — shown on the homepage and emitted as schema.org FAQPage
 * (can earn an expandable rich result on google). edit freely.
 */
export const faq = [
  {
    q: "what is agriwise global?",
    a: "agriwise global is a bangladesh-based agri-trade and agricultural export company. we source export-ready produce directly from smallholder farmers and move it to retailers and distributors around the world under full documentation.",
  },
  {
    q: "what products does agriwise export?",
    a: "chinigura (aromatic) rice, mangoes, fresh okra, cold-pressed mustard oil and a growing range of spices — sourced from natore, rajshahi, jashore, khulna and other regions of bangladesh.",
  },
  {
    q: "which countries does agriwise export to?",
    a: "we currently ship to established buyers in the usa, uae, canada and china, with the sourcing and buyer network expanding each season.",
  },
  {
    q: "how does agriwise support farmers?",
    a: "through training, pre-finance and guaranteed buy-back for over 3,000 smallholder farmers, including 1,200+ women-led farms. this removes price risk for growers and secures supply quality for buyers.",
  },
  {
    q: "is agriwise produce certified?",
    a: "our processes are aligned with bsti, usda organic, haccp and iso 22000, and every shipment travels with full export documentation and traceability from the sourcing region to the retail shelf.",
  },
  {
    q: "can i invest in agriwise?",
    a: "yes — the 'grow with agriwise' programme offers curated agri-trade investment opportunities with farmer pre-finance, guaranteed buy-back and transparent reporting. see the invest page or contact the team.",
  },
] as const;

export const partnerTypes = [
  {
    title: "retailers & distributors",
    body: "bulk exports, white-label packaging, export compliance & private labeling.",
  },
  {
    title: "ngos & development orgs",
    body: "collaborate on rural upliftment, farmer training, and sustainable income programs.",
  },
  {
    title: "investors & funds",
    body: "strategic partnerships, long-term value in sustainable exports & traceability tech.",
  },
] as const;

export type Investment = {
  slug: string;
  title: string;
  image: string;
  blurb: string;
  minInvestment: string;
  expectedReturn: string;
  duration: string;
  unitPrice: number;
  roiRate: number;
  funded: number; // 0-100
};

export const investments: Investment[] = [
  {
    slug: "chinigura-rice",
    title: "chinigura rice programme",
    image: "/products/rice.jpg",
    blurb:
      "pre-finance aromatic rice cultivation in natore with guaranteed buy-back at harvest.",
    minInvestment: "$5,000",
    expectedReturn: "12–15% p.a.",
    duration: "24 months",
    unitPrice: 300,
    roiRate: 0.12,
    funded: 64,
  },
  {
    slug: "rajshahi-mango-orchard",
    title: "rajshahi mango orchard",
    image: "/products/mango.jpg",
    blurb:
      "seasonal working capital for haccp-certified mango sourcing, packing and export.",
    minInvestment: "$3,000",
    expectedReturn: "14–18% p.a.",
    duration: "18 months",
    unitPrice: 250,
    roiRate: 0.15,
    funded: 41,
  },
  {
    slug: "cold-chain-logistics",
    title: "cold-chain & logistics",
    image: "/hero/1.jpg",
    blurb:
      "build shared cold storage and reefer capacity that cuts post-harvest loss across regions.",
    minInvestment: "$10,000",
    expectedReturn: "10–13% p.a.",
    duration: "36 months",
    unitPrice: 500,
    roiRate: 0.11,
    funded: 28,
  },
];

export const investWhy = [
  {
    title: "sustainable impact",
    body: "make a positive impact on agriculture while earning competitive returns.",
  },
  {
    title: "proven track record",
    body: "consistent returns through carefully vetted agricultural projects.",
  },
  {
    title: "secure investment",
    body: "protected investments with transparent monitoring and reporting.",
  },
] as const;

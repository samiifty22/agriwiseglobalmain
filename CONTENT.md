# editing the site — where everything lives

almost everything you'll want to change is in **`lib/content.ts`**.
edit that one file, save, and the page updates. no other file needs to be touched
for wording, numbers, people, products, investments or news.

all text is written lowercase on purpose (brand style) — keep it that way.

---

## `lib/content.ts` — the content file

| you want to change… | edit this export |
| --- | --- |
| company address / phone / email / whatsapp number | `company` |
| top menu items (and their order) | `nav` |
| hero headline, sub-text, button labels | `hero` |
| the 4 hero counters (60+, 40%, …) | `stats` |
| "our story" heading, paragraph, the framed photo, mission / vision / difference | `about` |
| **"how it works"** — the 5-step process diagram | `howItWorks` |
| the big impact numbers strip (3,000+ etc.) | `impactStats` |
| **founders** — name, role, photo | `founders` |
| products — name, category, one-line note, location, season, cert, format, photo (shown in the interactive product explorer) | `products` |
| certification logos under "about" | `certifications` |
| the 3 "our impact" points | `impact` |
| export-market flags + names | `markets` |
| **news & media** items (date, tag, title, excerpt, optional link) | `news` |
| **faq** questions & answers (also feeds google's FAQ rich result) | `faq` |
| "partner with us" — the 3 partner types | `partnerTypes` |
| **seo keywords / meta title / meta description** | `seo` |
| social profile links (linkedin, facebook…) — used for google | `company.social` |
| investment programmes on `/invest` (title, min, return, term, unit price, roi, % funded, photo) | `investments` |
| "why invest with agriwise" points | `investWhy` |

### adding a news item
open `lib/content.ts`, find `export const news`, copy one `{ … }` block and edit it:

```ts
{
  date: "apr 2026",
  tag: "news",            // news | press | event | update
  title: "your headline here",
  excerpt: "one or two sentences.",
  href: "https://…",      // optional — omit the line for no link
},
```

### changing a founder / their photo
1. put the new photo in `public/founders/` (jpg, portrait, ideally ~1200px tall).
2. in `lib/content.ts` update that person's `name`, `role`, and `image: "/founders/yourfile.jpg"`.
   to remove a founder, delete their whole `{ … }` block — the grid re-flows automatically.

---

## images — `public/`

drop files in these folders and reference them as `/folder/name.ext`:

| folder | used for |
| --- | --- |
| `public/brand/` | logo (`agriwise_logo.png`) |
| `public/hero/` | hero background (`hero.mp4`, poster `1.jpg`) |
| `public/products/` | product photos |
| `public/founders/` | founder portraits |
| `public/certs/` | certification badges |
| `public/flags/` | country flags |

---

## look & feel

| what | where |
| --- | --- |
| colours, fonts, spacing tokens | `app/globals.css` (the `@theme` block at the top) |
| **the font** | brand font is futura. it isn't free on the web, so we ship **jost** (a close match) and the css stack is `"futura", jost, …`. to use real futura, add `Futura.woff2` to `app/fonts/` and switch `app/layout.tsx` to `next/font/local`. |
| page tab title / SEO description | `app/layout.tsx` (`metadata`) |
| section order on the homepage | `app/page.tsx` |
| a specific section's layout | `components/sections/<name>.tsx` |
| header / nav / mobile menu | `components/site-header.tsx` |
| footer | `components/site-footer.tsx` |
| the contact / partner / quote **forms** and where mail goes | `app/api/contact/route.ts` + `.env` (see `.env.example`) |

---

## seo — what's already built in

The technical SEO is done: keyword-rich titles/descriptions, canonical URLs,
Open Graph + a generated share image, `robots.txt`, `sitemap.xml`, a web
manifest, and schema.org structured data (Organization, WebSite, product
ItemList, FAQPage). One `<h1>` per page, descriptive image `alt` text,
compressed hero video, deferred/mobile-off video for fast mobile loading.

**To actually rank, you still need to do this (off the site):**

1. **Deploy to the real domain** `agriwiseglobal.com` (Vercel) — nothing ranks from localhost.
2. **Google Search Console** — verify the domain (paste the token into
   `verification.google` in `app/layout.tsx`), then submit
   `https://www.agriwiseglobal.com/sitemap.xml`.
3. **Google Business Profile** — create one for the Dhaka office; this is the
   single biggest lever for "…company bangladesh" style searches.
4. **Fill in `company.social`** in `lib/content.ts` with your real LinkedIn /
   Facebook / Instagram URLs, and link back to the site from those profiles.
5. **Get listed** in export directories, trade bodies (EPB Bangladesh),
   B2B marketplaces, and earn a few backlinks from press / partners.
6. **Publish content** — turn each `news` item into a real dated update; add
   more over time. Fresh, specific pages about "chinigura rice export",
   "mango export from rajshahi" etc. are what win those long-tail searches.

Ranking #1 is earned over months through 3–6; the site itself is now built to
support it.

## running it

```bash
npm run dev     # http://localhost:3000 — live reload while you edit
npm run build   # check everything still compiles before deploying
```

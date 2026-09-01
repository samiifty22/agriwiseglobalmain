# AgriWise Global

Marketing site for AgriWise Global, built as the foundation for the future
AgriWise trading platform.

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — design tokens in [`app/globals.css`](app/globals.css)
- **motion** (Framer Motion) for scroll reveals, hero and counters
- **lucide-react** icons

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the build
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Landing page — composes the section components |
| `app/invest/page.tsx` | "Grow with AgriWise" — investment programmes + ROI calculator |
| `app/api/contact/route.ts` | Unified form handler (contact / partner / product enquiry) |
| `lib/content.ts` | **All copy and data** — single source of truth |
| `components/` | `site-header`, `site-footer`, `hero`, `sections/*`, `forms`, `reveal`, `ui` |
| `public/` | Images (`hero/`, `products/`, `founders/`, `flags/`, `certs/`, `brand/`) |
| `legacy/` | The original static HTML site, kept for reference only |

## Forms / email

`POST /api/contact` validates the payload and, if `RESEND_API_KEY` is set,
sends via [Resend](https://resend.com). Without it, submissions are logged to
the server console and the request still succeeds (useful for previews).
See [`.env.example`](.env.example).

## Deploy (Vercel)

1. Import the repo in Vercel (framework auto-detected).
2. Add env vars from `.env.example` (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`).
3. Point the `agriwiseglobal.com` domain at the project.

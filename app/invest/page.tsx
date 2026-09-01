import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";
import { InvestList } from "@/components/sections/invest-list";
import { investWhy } from "@/lib/content";

export const metadata: Metadata = {
  title: "grow with agriwise — agriculture investment opportunities",
  description:
    "invest in sustainable agriculture with agriwise global. curated agri-trade programmes — chinigura rice, mango orchards, cold-chain — with farmer pre-finance, guaranteed buy-back, transparent monitoring and competitive returns.",
  keywords: [
    "agriculture investment",
    "agri-trade investment bangladesh",
    "sustainable agriculture fund",
    "farmland investment",
    "impact investing agriculture",
  ],
  alternates: { canonical: "/invest" },
  openGraph: {
    title: "grow with agriwise — agriculture investment opportunities",
    description:
      "curated, sustainable agri-trade investment programmes with guaranteed buy-back and transparent reporting.",
    url: "https://www.agriwiseglobal.com/invest",
    type: "website",
  },
};

export default function InvestPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-forest-950 text-white">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(65%_60%_at_25%_0%,rgba(99,194,131,0.18),transparent)]" />
          <div className="container-x flex min-h-[70svh] flex-col justify-end pb-14 pt-32 md:pb-20">
            <Reveal>
              <p className="text-xs tracking-[0.24em] text-mist/70">
                grow with agriwise
              </p>
              <h1 className="mt-6 max-w-[16ch] text-[2.7rem] leading-[0.98] text-balance sm:text-6xl md:text-[4.75rem]">
                invest in sustainable agriculture
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-mist/80">
                join us in revolutionising agriculture through sustainable
                investments. choose from our carefully curated opportunities —
                each with guaranteed buy-back and transparent reporting.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-14 md:py-24">
          <div className="container-x">
            <SectionHeader
              number="01"
              kicker="opportunities"
              title="curated investment programmes"
              intro="indicative figures shown for modelling only. final terms are set per allocation and confirmed in your investment agreement."
            />
            <div className="mt-14">
              <InvestList />
            </div>
          </div>
        </section>

        <section className="bg-canvas-2 py-14 md:py-24">
          <div className="container-x">
            <SectionHeader
              number="02"
              kicker="why agriwise"
              title="why invest with agriwise?"
            />
            <div className="mt-12">
              {investWhy.map((card, i) => (
                <Reveal
                  key={card.title}
                  delay={i * 0.08}
                  className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-8"
                >
                  <span className="text-sm text-forest md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl text-ink md:col-span-5 md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft md:col-span-6">
                    {card.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col items-start gap-4 border border-line bg-canvas p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg text-ink">ready to talk allocations?</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    our team will walk you through the current pipeline and terms.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="shrink-0 rounded-sm bg-forest px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-forest-deep"
                >
                  contact the team
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function News() {
  return (
    <section id="news" className="scroll-mt-24 bg-canvas-2 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="07"
          kicker="news & media"
          title="what's happening at agriwise"
          intro="announcements, press coverage and shipment milestones."
        />

        <div className="mt-12">
          {news.map((item, i) => {
            const inner = (
              <>
                <div className="flex shrink-0 items-center gap-4 md:w-48 md:flex-col md:items-start md:gap-1">
                  <span className="text-sm text-ink-soft">{item.date}</span>
                  <span className="text-xs tracking-[0.18em] text-forest">
                    {item.tag}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-ink md:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                    {item.excerpt}
                  </p>
                </div>
                {item.href ? (
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted transition-colors group-hover:text-forest" />
                ) : null}
              </>
            );

            return (
              <Reveal key={item.title} delay={i * 0.06}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group flex flex-col gap-3 border-t border-line py-8 last:border-b md:flex-row md:gap-8"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="flex flex-col gap-3 border-t border-line py-8 last:border-b md:flex-row md:gap-8">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

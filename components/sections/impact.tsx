import { impact, impactStats } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 bg-forest-950 py-14 text-mist md:py-24">
      <div className="container-x">
        <SectionHeader
          number="05"
          kicker="our impact"
          title="changing lives from the roots"
          intro="uplifting farmers, women and the planet — measured, not claimed."
          invert
        />

        <Reveal className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 md:mt-16 md:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-forest-950 p-5 md:p-6">
              <p className="text-2xl text-white md:text-[2.25rem]">{s.value}</p>
              <p className="mt-1 text-xs text-mist/60 md:text-[13px]">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-14">
          {impact.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.08}
              className="grid grid-cols-1 gap-4 border-t border-white/15 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="text-sm text-leaf-bright md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl text-white md:col-span-5 md:text-[1.9rem]">
                {card.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-mist/75 md:col-span-6">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

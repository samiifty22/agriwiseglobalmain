import { howItWorks } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Icon, SectionHeader } from "@/components/ui";

export function HowItWorks() {
  const { number, kicker, title, intro, steps } = howItWorks;

  return (
    <section id="how" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader number={number} kicker={kicker} title={title} intro={intro} />

        {/* ---- desktop: horizontal process rail ---- */}
        <ol className="mt-16 hidden grid-cols-5 gap-6 lg:grid">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} as="li" className="relative">
              {/* connector line */}
              {i < steps.length - 1 ? (
                <span
                  className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-7 border-t border-dashed border-line"
                  aria-hidden
                />
              ) : null}
              <div className="relative flex flex-col items-start">
                <span className="frame flex size-14 items-center justify-center bg-canvas text-forest">
                  <Icon name={step.icon} className="size-6" />
                </span>
                <span className="mt-5 text-xs tracking-[0.2em] text-muted">
                  step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* ---- mobile / tablet: vertical timeline ---- */}
        <ol className="mt-12 lg:hidden">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06} as="li" className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="frame flex size-12 shrink-0 items-center justify-center bg-canvas text-forest">
                  <Icon name={step.icon} className="size-5" />
                </span>
                {i < steps.length - 1 ? (
                  <span className="mt-1 w-px flex-1 border-l border-dashed border-line" aria-hidden />
                ) : null}
              </div>
              <div className="pb-2">
                <span className="text-xs tracking-[0.2em] text-muted">
                  step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-3 border border-line bg-forest-950 p-7 text-mist sm:flex-row sm:items-center sm:justify-between md:p-9">
            <p className="text-[15px] leading-relaxed sm:max-w-xl">
              the guaranteed buy-back is the part that changes everything — the
              farmer knows the price before planting, and the buyer knows the
              supply is locked.
            </p>
            <p className="shrink-0 text-xs tracking-[0.2em] text-leaf-bright">
              price certainty, both ends
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

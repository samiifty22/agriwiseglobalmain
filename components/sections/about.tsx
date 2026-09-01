import Image from "next/image";
import { about, certifications } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number={about.number}
          kicker={about.kicker}
          title={about.title}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
              {about.body}
            </p>

            <div className="mt-8 text-forest">
              <div className="frame overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={about.image}
                    alt={about.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            {about.points.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="border-t border-line py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 border-t border-line pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs tracking-[0.2em] text-muted">
              certified &amp; compliant
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {certifications.map((c) => (
                <Image
                  key={c.name}
                  src={c.image}
                  alt={`${c.name} certification`}
                  width={140}
                  height={52}
                  className="h-11 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

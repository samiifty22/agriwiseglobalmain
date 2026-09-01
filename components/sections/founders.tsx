import Image from "next/image";
import { founders } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function Founders() {
  return (
    <section className="bg-canvas-2 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="04"
          kicker="leadership"
          title="meet the founders"
          intro="a team spanning agro sourcing, trade operations, supply chain and global investment."
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.08}>
              <figure className="mx-auto max-w-[240px] sm:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-canvas">
                  <Image
                    src={person.image}
                    alt={`${person.name}, ${person.role} — co-founder of agriwise global`}
                    fill
                    sizes="240px"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas-2/70 to-transparent" />
                </div>
                <figcaption className="mt-3 border-t border-line pt-3">
                  <p className="text-[15px] text-ink">{person.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{person.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

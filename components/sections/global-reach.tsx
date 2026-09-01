import Image from "next/image";
import { markets } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function GlobalReach() {
  return (
    <section id="global" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="06"
          kicker="global reach"
          title="from rural bangladesh to trusted retailers in 4+ countries"
          intro="verified, documented exports moving to established buyers across three continents — with the network expanding each season."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs tracking-[0.2em] text-muted">origin</p>
            <p className="mt-3 text-2xl text-ink">dhaka, bangladesh</p>
            <p className="mt-6 text-xs tracking-[0.2em] text-muted">
              active export lanes
            </p>
            <ul className="mt-3">
              {markets.map((m) => (
                <li
                  key={m.name}
                  className="flex items-center gap-4 border-t border-line py-4 last:border-b"
                >
                  <Image
                    src={m.flag}
                    alt=""
                    width={40}
                    height={26}
                    className="h-6 w-9 object-cover"
                  />
                  <span className="text-lg text-ink">{m.name}</span>
                  <span className="ml-auto text-xs tracking-[0.18em] text-muted">
                    shipping
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="text-forest">
            <div className="frame h-full bg-forest-950 p-8 text-mist md:p-10">
              <p className="text-xs tracking-[0.2em] text-leaf-bright">
                what verified means
              </p>
              <ul className="mt-6 space-y-5 text-[15px] leading-relaxed">
                <li className="border-t border-white/15 pt-5">
                  full export documentation on every shipment
                </li>
                <li className="border-t border-white/15 pt-5">
                  traceable from the sourcing region to the retail shelf
                </li>
                <li className="border-t border-white/15 pt-5">
                  bsti, usda, haccp and iso 22000 aligned processes
                </li>
                <li className="border-t border-white/15 pt-5">
                  established, repeat buyers in each market
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

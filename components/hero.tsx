"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { hero, stats } from "@/lib/content";
import { ButtonLink } from "@/components/ui";
import { StatCounter } from "@/components/stat-counter";

export function Hero() {
  const reduce = useReducedMotion();
  const [showVideo, setShowVideo] = useState(false);

  // load the background video only on larger screens, after first paint,
  // and never on data-saver / reduced-motion — keeps mobile LCP tiny.
  useEffect(() => {
    if (reduce) return;
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    if (nav.connection?.saveData) return;
    if (nav.connection?.effectiveType && /2g/.test(nav.connection.effectiveType)) return;
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;
    const t = setTimeout(() => setShowVideo(true), 400);
    return () => clearTimeout(t);
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-950">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero/poster.jpg"
          alt="rice paddy fields in rural bangladesh at harvest"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero/poster.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          >
            <source src="/hero/hero.mp4" type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/75 to-forest-950/55" />
      </div>

      <div className="container-x flex min-h-[92svh] flex-col justify-end pb-16 pt-28 md:min-h-screen md:pb-16">
        <motion.p {...rise(0)} className="text-xs tracking-[0.24em] text-mist/70">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="mt-6 max-w-[16ch] text-[2.7rem] leading-[0.98] text-white text-balance sm:text-6xl md:max-w-[18ch] md:text-[5rem] lg:text-[5.75rem]"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          {...rise(0.12)}
          className="mt-7 max-w-lg text-[15px] leading-relaxed text-mist/80 md:text-base"
        >
          {hero.body}
        </motion.p>

        <motion.div {...rise(0.18)} className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href} variant="light" withArrow>
            {hero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </ButtonLink>
        </motion.div>

        <motion.dl
          {...rise(0.26)}
          className="mt-14 grid grid-cols-2 border-t border-white/15 md:mt-20 md:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-white/15 py-5 md:py-6 ${
                i > 0 ? "md:border-l md:pl-6" : ""
              } ${i % 2 === 1 ? "border-l pl-4 md:pl-6" : ""} ${
                i < 2 ? "border-b md:border-b-0" : ""
              }`}
            >
              <dd className="text-[1.75rem] text-white md:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs text-mist/60 md:text-[13px]">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

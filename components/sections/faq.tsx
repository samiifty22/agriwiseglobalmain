import { faq } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 bg-canvas-2 py-14 md:py-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x">
        <SectionHeader number="09" kicker="faq" title="questions, answered" />

        <dl className="mt-12">
          {faq.map((f, i) => (
            <Reveal
              key={f.q}
              delay={i * 0.04}
              className="grid gap-2 border-t border-line py-7 last:border-b md:grid-cols-12 md:gap-8"
            >
              <dt className="text-lg text-ink md:col-span-5">{f.q}</dt>
              <dd className="text-[15px] leading-relaxed text-ink-soft md:col-span-7">
                {f.a}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

"use client";

import { partnerTypes } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/ui";
import {
  Field,
  FormStatus,
  Honeypot,
  SubmitButton,
  fieldCls,
  useContactForm,
} from "@/components/forms";

export function Partner() {
  const { status, message, submit } = useContactForm();

  return (
    <section id="partner" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="08"
          kicker="partner with us"
          title="scaling ethical agri-trade, together"
          intro="whether you're a buyer, an ngo or an investor — there's a clear way to work with agriwise."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {partnerTypes.map((type, i) => (
              <Reveal
                key={type.title}
                delay={i * 0.08}
                className="border-t border-line py-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-forest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg text-ink">{type.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {type.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-line bg-canvas-2 p-7 md:p-10">
              <h3 className="text-xl text-ink">send a partnership inquiry</h3>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <input type="hidden" name="form_type" value="partner-inquiry" />
                <Honeypot />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="your name">
                    <input name="name" required className={fieldCls} />
                  </Field>
                  <Field label="organization">
                    <input name="organization" required className={fieldCls} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="email">
                    <input type="email" name="email" className={fieldCls} />
                  </Field>
                  <Field label="type">
                    <select name="type" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>
                        select…
                      </option>
                      <option>retailer</option>
                      <option>investor / fund</option>
                      <option>ngo / development org</option>
                    </select>
                  </Field>
                </div>
                <Field label="how would you like to collaborate?">
                  <textarea name="message" rows={4} required className={fieldCls} />
                </Field>
                <SubmitButton status={status}>submit inquiry</SubmitButton>
                <FormStatus status={status} message={message} />
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

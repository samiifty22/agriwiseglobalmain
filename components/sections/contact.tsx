"use client";

import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/content";
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

export function Contact() {
  const { status, message, submit } = useContactForm();

  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="10"
          kicker="contact"
          title="let's talk trade"
          intro="tell us what you're sourcing or how you'd like to work together — we usually reply within one business day."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="text-sm text-ink-soft">
              <li className="flex gap-3 border-t border-line py-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3 border-t border-line py-4">
                <Phone className="mt-0.5 size-4 shrink-0 text-forest" />
                <a href={`tel:${company.phoneHref}`} className="hover:text-forest">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3 border-t border-line py-4">
                <Mail className="mt-0.5 size-4 shrink-0 text-forest" />
                <a href={`mailto:${company.email}`} className="hover:text-forest">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3 border-y border-line py-4">
                <Globe className="mt-0.5 size-4 shrink-0 text-forest" />
                <span>{company.domain}</span>
              </li>
            </ul>

            <div className="mt-6 border border-line">
              <iframe
                title="agriwise global location"
                src="https://www.google.com/maps?q=Niketan,+Gulshan+1,+Dhaka+1212&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-line bg-canvas-2 p-7 md:p-10">
              <h3 className="text-xl text-ink">get in touch</h3>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <input type="hidden" name="form_type" value="contact" />
                <Honeypot />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="your name">
                    <input name="name" required className={fieldCls} />
                  </Field>
                  <Field label="organization">
                    <input name="organization" className={fieldCls} />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="email">
                    <input type="email" name="email" required className={fieldCls} />
                  </Field>
                  <Field label="type">
                    <select name="type" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>
                        select…
                      </option>
                      <option>retailer</option>
                      <option>ngo / trade body</option>
                      <option>investor / fund</option>
                    </select>
                  </Field>
                </div>
                <Field label="message">
                  <textarea name="message" rows={4} required className={fieldCls} />
                </Field>
                <SubmitButton status={status}>submit</SubmitButton>
                <FormStatus status={status} message={message} />
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

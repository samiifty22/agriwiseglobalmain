import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-mist/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Image
            src="/brand/agriwise_logo.png"
            unoptimized
            alt="agriwise global"
            width={56}
            height={56}
            className="size-12 rounded-[3px] bg-canvas p-1"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {company.tagline}
          </p>
          <p className="mt-8 text-xs tracking-[0.2em] text-leaf-bright">
            coming soon
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">
            the agriwise trading platform — live sourcing, contracts and
            settlement in one place.
          </p>
        </div>

        <nav className="md:col-span-4">
          <p className="text-xs tracking-[0.2em] text-mist/50">explore</p>
          <ul className="mt-3 text-sm">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 transition-colors hover:text-leaf-bright"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs tracking-[0.2em] text-mist/50">contact</p>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
              <a
                href={`tel:${company.phoneHref}`}
                className="break-all py-0.5 hover:text-leaf-bright"
              >
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
              <a
                href={`mailto:${company.email}`}
                className="break-all py-0.5 hover:text-leaf-bright"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 pb-24 pt-6 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>© {new Date().getFullYear()} {company.legalName} all rights reserved.</p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}

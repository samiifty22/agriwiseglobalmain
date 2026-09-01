"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";
import { cn } from "@/components/ui";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-canvas/90 backdrop-blur"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="agriwise global" className="shrink-0">
          <Image
            src="/brand/agriwise_logo.png"
            unoptimized
            alt="agriwise global"
            width={44}
            height={44}
            priority
            className="size-11 rounded-[3px] bg-canvas p-px md:size-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] tracking-wide transition-colors",
                scrolled
                  ? "text-ink-soft hover:text-forest"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className={cn(
              "rounded-sm px-5 py-2.5 text-[13px] tracking-wide transition-colors",
              scrolled
                ? "bg-forest text-white hover:bg-forest-deep"
                : "border border-white/40 text-white hover:bg-white hover:text-forest",
            )}
          >
            contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn("p-2 lg:hidden", scrolled ? "text-ink" : "text-white")}
          aria-label="open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ink/50"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-canvas p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center justify-between">
                <Image
                  src="/brand/agriwise_logo.png"
                  unoptimized
                  alt="agriwise global"
                  width={40}
                  height={40}
                  className="size-9"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-2"
                  aria-label="close menu"
                >
                  <X className="size-6" />
                </button>
              </div>
              {nav.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-t border-line py-4 text-lg text-ink"
                >
                  <span className="text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-sm bg-forest px-5 py-3 text-center text-sm text-white"
              >
                contact
              </Link>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

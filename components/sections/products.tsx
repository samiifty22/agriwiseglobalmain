"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { products, type Product } from "@/lib/content";
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

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const AUTO_MS = 5200;

export function Products() {
  const [active, setActive] = useState(0);
  const [quote, setQuote] = useState<Product | null>(null);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  const select = useCallback((i: number) => {
    setActive((i + products.length) % products.length);
    setPaused(true);
  }, []);

  // gentle auto-advance until the visitor interacts
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % products.length),
      AUTO_MS,
    );
    return () => clearInterval(t);
  }, [paused, reduce]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      select(active + 1);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      select(active - 1);
    }
  };

  const p = products[active];

  return (
    <section id="products" className="scroll-mt-24 py-14 md:py-24">
      <div className="container-x">
        <SectionHeader
          number="03"
          kicker="products"
          title="export-ready produce, straight from the farm"
          intro="directly sourced from farmers across bangladesh, packed to spec and fully traceable. pick one to see the detail."
        />

        <div
          className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14"
          onMouseEnter={() => setPaused(true)}
        >
          {/* ---- selector ---- */}
          <div className="min-w-0 lg:col-span-4">
            {/* mobile: horizontal pills */}
            <div className="flex gap-2 overflow-x-auto pb-3 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {products.map((prod, i) => (
                <button
                  key={prod.name}
                  type="button"
                  onClick={() => select(i)}
                  className={`shrink-0 whitespace-nowrap border px-4 py-2.5 text-[13px] tracking-wide transition-colors ${
                    i === active
                      ? "border-forest bg-forest text-white"
                      : "border-line text-ink-soft"
                  }`}
                >
                  {prod.name}
                </button>
              ))}
            </div>

            {/* desktop: numbered list */}
            <div
              ref={listRef}
              aria-label="choose a product"
              tabIndex={0}
              onKeyDown={onKey}
              className="hidden outline-none lg:block"
            >
              {products.map((prod, i) => {
                const on = i === active;
                return (
                  <button
                    key={prod.name}
                    type="button"
                    aria-pressed={on}
                    onClick={() => select(i)}
                    className="group relative flex w-full items-baseline gap-4 border-t border-line py-5 text-left last:border-b"
                  >
                    {on && !reduce ? (
                      <motion.span
                        layoutId="product-marker"
                        transition={{ duration: 0.4, ease: EASE }}
                        className="absolute inset-y-0 left-0 w-0.5 bg-forest"
                      />
                    ) : null}
                    <span
                      className={`text-xs ${on ? "text-forest" : "text-muted"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block text-lg transition-colors ${
                          on
                            ? "text-ink"
                            : "text-ink-soft group-hover:text-ink"
                        }`}
                      >
                        {prod.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {prod.category} · {prod.location}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---- featured ---- */}
          <div className="min-w-0 lg:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-8">
              <div className="mx-auto w-full max-w-[240px] text-forest sm:col-span-2 sm:mx-0 sm:max-w-none">
                <div className="frame overflow-hidden">
                  <div className="relative aspect-[3/4] bg-canvas-2">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={p.image}
                        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.99 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={p.image}
                          alt={`${p.name} — export-ready ${p.category} sourced from ${p.location}, bangladesh by agriwise global`}
                          fill
                          sizes="(max-width: 640px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="min-w-0 sm:col-span-3">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={p.name}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: EASE }}
                  >
                    <p className="text-xs tracking-[0.2em] text-forest">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-2xl text-ink md:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {p.note}
                    </p>

                    <dl className="mt-6 grid grid-cols-2 border-t border-line">
                      <Spec k="sourcing region" v={p.location} />
                      <Spec k="season" v={p.season} border />
                      <Spec k="certification" v={p.cert} top />
                      <Spec k="format" v={p.format} border top />
                    </dl>

                    <button
                      type="button"
                      onClick={() => setQuote(p)}
                      className="mt-6 w-full border border-forest bg-forest px-5 py-3 text-[13px] tracking-wide text-white transition-colors hover:bg-forest-deep sm:w-auto"
                    >
                      request a quote
                    </button>
                  </motion.div>
                </AnimatePresence>

                {/* progress dots */}
                <div className="mt-8 flex gap-1.5">
                  {products.map((prod, i) => (
                    <button
                      key={prod.name}
                      type="button"
                      aria-label={`show ${prod.name}`}
                      onClick={() => select(i)}
                      className="group flex h-6 items-center"
                    >
                      <span
                        className={`block h-1 rounded-full transition-all ${
                          i === active
                            ? "w-8 bg-forest"
                            : "w-3 bg-line group-hover:bg-muted"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal product={quote} onClose={() => setQuote(null)} />
    </section>
  );
}

function Spec({
  k,
  v,
  border = false,
  top = false,
}: {
  k: string;
  v: string;
  border?: boolean;
  top?: boolean;
}) {
  return (
    <div
      className={`min-w-0 py-3 ${border ? "border-l border-line pl-4" : "pr-3"} ${
        top ? "border-t border-line" : ""
      }`}
    >
      <dt className="text-[11px] tracking-[0.12em] text-muted">{k}</dt>
      <dd className="mt-1 break-words text-sm text-ink">{v}</dd>
    </div>
  );
}

function QuoteModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { status, message, submit } = useContactForm(() =>
    setTimeout(onClose, 1600),
  );

  useEffect(() => {
    if (!product) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-ink/60" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md border border-line bg-canvas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.26, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 p-1.5 text-ink-soft hover:text-ink"
              aria-label="close"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-line p-5">
              <Image
                src={product.image}
                alt=""
                width={56}
                height={56}
                className="size-14 object-cover"
              />
              <div>
                <p className="text-xs tracking-[0.18em] text-muted">
                  request a quote
                </p>
                <p className="text-lg text-ink">{product.name}</p>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-3 p-5">
              <input type="hidden" name="form_type" value="product-enquiry" />
              <input type="hidden" name="product" value={product.name} />
              <Honeypot />
              <Field label="your name">
                <input name="name" required className={fieldCls} />
              </Field>
              <Field label="email">
                <input type="email" name="email" required className={fieldCls} />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="phone">
                  <input name="phone" required className={fieldCls} />
                </Field>
                <Field label="quantity (tons)">
                  <input
                    type="number"
                    name="quantity"
                    min={1}
                    required
                    className={fieldCls}
                  />
                </Field>
              </div>
              <SubmitButton status={status}>submit quote</SubmitButton>
              <FormStatus status={status} message={message} />
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

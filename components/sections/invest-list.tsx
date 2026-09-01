"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { investments, type Investment } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export function InvestList() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {investments.map((inv, i) => (
        <Reveal key={inv.slug} delay={i * 0.06}>
          <InvestCard inv={inv} />
        </Reveal>
      ))}
    </div>
  );
}

function InvestCard({ inv }: { inv: Investment }) {
  const [units, setUnits] = useState<number>(0);

  const { total, roi } = useMemo(() => {
    const t = inv.unitPrice * units;
    return { total: t, roi: t * inv.roiRate };
  }, [units, inv.unitPrice, inv.roiRate]);

  return (
    <article className="flex h-full flex-col border border-line bg-canvas">
      <div className="relative aspect-[4/3] overflow-hidden bg-canvas-2">
        <Image
          src={inv.image}
          alt={`${inv.title} — sustainable agriculture investment opportunity with agriwise global`}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover object-center"
        />
        <span className="absolute left-0 top-4 bg-forest px-3 py-1 text-xs tracking-wide text-white">
          {inv.funded}% funded
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-ink">{inv.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{inv.blurb}</p>

        <dl className="mt-5 grid grid-cols-3 border-y border-line">
          <Metric label="min." value={inv.minInvestment} />
          <Metric label="return" value={inv.expectedReturn} border />
          <Metric label="term" value={inv.duration} border />
        </dl>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>unit price</span>
            <span className="text-ink">{money(inv.unitPrice)}</span>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs tracking-wide text-muted">
              units
            </span>
            <input
              type="number"
              min={0}
              value={units || ""}
              placeholder="e.g. 25"
              onChange={(e) => setUnits(Math.max(0, Number(e.target.value) || 0))}
              className="w-full rounded-sm border border-line bg-canvas px-4 py-2.5 text-sm outline-none focus:border-forest"
            />
          </label>

          <div className="h-1 overflow-hidden bg-canvas-2">
            <div
              className="h-full bg-forest transition-all duration-300"
              style={{ width: `${Math.min(units, 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between border-t border-line pt-3 text-sm">
            <span className="text-ink-soft">total</span>
            <span className="text-ink">{money(total)}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted">
            <span>projected roi ({Math.round(inv.roiRate * 100)}%)</span>
            <span className="text-forest">{money(roi)}</span>
          </div>
        </div>

        <Link
          href="/#contact"
          className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-forest px-5 py-3 text-sm tracking-wide text-white transition-colors hover:bg-forest-deep"
        >
          register interest
        </Link>
      </div>
    </article>
  );
}

function Metric({
  label,
  value,
  border = false,
}: {
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div className={border ? "border-l border-line py-3 pl-3" : "py-3"}>
      <dt className="text-[10px] tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-0.5 text-[13px] text-ink">{value}</dd>
    </div>
  );
}

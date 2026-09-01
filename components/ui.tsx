import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  HandCoins,
  Ship,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const ICONS: Record<string, LucideIcon> = {
  sprout: Sprout,
  "hand-coins": HandCoins,
  boxes: Boxes,
  "badge-check": BadgeCheck,
  ship: Ship,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? Sprout;
  return <Cmp className={className} strokeWidth={1.5} aria-hidden />;
}

/** editorial section header: hairline rule → "NN · kicker" → big title */
export function SectionHeader({
  number,
  kicker,
  title,
  intro,
  invert = false,
  className,
}: {
  number: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-t pt-6",
        invert ? "border-white/15" : "border-line",
        className,
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-xs tracking-[0.22em]",
          invert ? "text-mist/70" : "text-muted",
        )}
      >
        <span className={invert ? "text-leaf-bright" : "text-forest"}>
          {number}
        </span>
        <span aria-hidden>·</span>
        <span>{kicker}</span>
      </p>
      <h2
        className={cn(
          "mt-5 max-w-3xl text-[2rem] leading-[1.03] text-balance sm:text-[2.6rem] md:text-[3rem]",
          invert ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-relaxed text-pretty",
            invert ? "text-mist/80" : "text-ink-soft",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "solid" | "outline" | "light";
  withArrow?: boolean;
};

export function ButtonLink({
  variant = "solid",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const styles = {
    solid: "bg-forest text-white hover:bg-forest-deep",
    outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-canvas",
    light: "border border-white/40 text-white hover:bg-white hover:text-forest",
  }[variant];

  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm tracking-wide transition-colors duration-200",
        styles,
        className,
      )}
      {...props}
    >
      {children}
      {withArrow ? (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

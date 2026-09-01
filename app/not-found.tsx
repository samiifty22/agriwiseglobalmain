import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.24em] text-forest">404</p>
      <h1 className="mt-4 text-3xl text-ink sm:text-4xl">page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-ink-soft">
        the page you're looking for has moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-forest px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-forest-deep"
      >
        back to home
      </Link>
    </main>
  );
}

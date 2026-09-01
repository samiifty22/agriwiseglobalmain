"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/components/ui";

type Status = "idle" | "loading" | "ok" | "error";

const fieldCls =
  "w-full rounded-sm border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted outline-none transition focus:border-forest";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs tracking-wide text-muted">{label}</span>
      {children}
    </label>
  );
}

export function useContactForm(onSuccess?: () => void) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const data = (await res.json()) as { ok: boolean; message: string };
      setMessage(data.message);
      if (data.ok) {
        setStatus("ok");
        form.reset();
        onSuccess?.();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setMessage("something went wrong. please try again.");
    }
  }

  return { status, message, submit };
}

export function FormStatus({
  status,
  message,
}: {
  status: Status;
  message: string;
}) {
  if (status === "idle" || status === "loading" || !message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-2 text-sm",
        status === "ok" ? "text-forest" : "text-red-600",
      )}
    >
      {status === "ok" ? <CheckCircle2 className="size-4" /> : null}
      {message}
    </motion.p>
  );
}

export function SubmitButton({
  status,
  children,
  className,
}: {
  status: Status;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={status === "loading"}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-sm bg-forest px-6 py-3 text-sm tracking-wide text-white transition-colors hover:bg-forest-deep disabled:opacity-70",
        className,
      )}
    >
      {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : null}
      {children}
    </button>
  );
}

export function Honeypot() {
  return (
    <input
      type="text"
      name="company_website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden
      className="hidden"
    />
  );
}

export { fieldCls };

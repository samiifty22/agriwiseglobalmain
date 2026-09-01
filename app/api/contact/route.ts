import { NextResponse } from "next/server";
import { company } from "@/lib/content";

/**
 * Unified form handler — replaces the old send-mail.php.
 * Handles: contact | partner-inquiry | product-enquiry
 *
 * Email delivery: if RESEND_API_KEY + CONTACT_TO are set it sends via
 * Resend's HTTP API (no SDK, works on Vercel edge/node). Otherwise it
 * logs the submission and still returns success so the UI is testable.
 */

export const runtime = "nodejs";

type Payload = Record<string, string>;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function bad(message: string) {
  return NextResponse.json({ ok: false, message }, { status: 422 });
}

async function readBody(req: Request): Promise<Payload> {
  const type = req.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    return (await req.json()) as Payload;
  }
  const form = await req.formData();
  return Object.fromEntries(
    [...form.entries()].map(([k, v]) => [k, String(v)]),
  );
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await readBody(req);
  } catch {
    return bad("could not read the submission.");
  }

  // Honeypot — bots fill hidden fields.
  if (str(body.company_website)) {
    return NextResponse.json({ ok: true, message: "thanks — we'll be in touch." });
  }

  const formType = str(body.form_type);
  const name = str(body.name);
  const email = str(body.email);

  if (!name) return bad("please enter your name.");
  if (email && !isEmail(email)) return bad("please enter a valid email address.");

  const lines: string[] = [`Name: ${name}`];
  let subject = "";

  switch (formType) {
    case "product-enquiry": {
      const product = str(body.product);
      const phone = str(body.phone);
      const quantity = str(body.quantity);
      if (!email) return bad("please enter your email.");
      if (!product) return bad("missing product reference.");
      subject = `Product quote request: ${product}`;
      lines.push(`Email: ${email}`, `Phone: ${phone}`, `Product: ${product}`, `Quantity: ${quantity} tons`);
      break;
    }
    case "partner-inquiry": {
      const organization = str(body.organization);
      const type = str(body.type);
      const message = str(body.message);
      if (!message) return bad("please tell us how you'd like to collaborate.");
      subject = `Partnership inquiry${organization ? ` from ${organization}` : ""}`;
      lines.push(`Organization: ${organization}`, `Type: ${type}`);
      if (email) lines.push(`Email: ${email}`);
      lines.push(`Message:\n${message}`);
      break;
    }
    case "contact": {
      const organization = str(body.organization);
      const type = str(body.type);
      const message = str(body.message);
      if (!email) return bad("please enter your email.");
      if (!message) return bad("please enter a message.");
      subject = `Contact form message from ${name}`;
      lines.push(`Organization: ${organization}`, `Email: ${email}`, `Type: ${type}`, `Message:\n${message}`);
      break;
    }
    default:
      return bad("unknown form type.");
  }

  const text = `New submission from the ${company.name} website\n\n${lines.join("\n")}\n\nSent: ${new Date().toISOString()}`;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? company.email;
  const from = process.env.CONTACT_FROM ?? "AgriWise Global <onboarding@resend.dev>";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject,
          text,
          ...(email ? { reply_to: email } : {}),
        }),
      });
      if (!res.ok) {
        console.error("Resend error", res.status, await res.text());
        return NextResponse.json(
          { ok: false, message: "we couldn't send that right now. please email us directly." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Resend request failed", err);
      return NextResponse.json(
        { ok: false, message: "we couldn't send that right now. please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.info(`[contact] ${subject}\n${text}\n---`);
  }

  return NextResponse.json({
    ok: true,
    message: "thank you — your message has been received. we'll get back to you soon.",
  });
}

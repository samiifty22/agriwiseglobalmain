import { MessageCircle } from "lucide-react";
import { company } from "@/lib/content";

export function WhatsappFab() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="chat on whatsapp"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-sm bg-forest px-3.5 py-3 text-sm tracking-wide text-white shadow-lift transition-transform duration-300 hover:-translate-y-0.5 md:bottom-6 md:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">chat with us</span>
    </a>
  );
}

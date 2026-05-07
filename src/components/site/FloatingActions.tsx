import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarCheck } from "lucide-react";

export function FloatingActions() {
  return (
    <>
      <a
        href="https://wa.me/8801318706223"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white inline-flex items-center justify-center shadow-gold hover:scale-110 transition float-slow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <Link
        to="/booking"
        className="fixed bottom-6 left-6 z-40 hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-5 py-3 text-sm font-medium shadow-gold hover:opacity-90 transition"
      >
        <CalendarCheck className="w-4 h-4" /> Quick Booking
      </Link>
    </>
  );
}

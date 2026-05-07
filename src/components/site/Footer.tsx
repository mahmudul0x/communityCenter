import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/30 bg-[oklch(0.1_0.005_60)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="font-display text-2xl text-gradient-gold">Paradise</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            North Bengal's premier community & convention center — where every celebration becomes extraordinary.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border-gold border inline-flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["About", "/about"], ["Facilities", "/facilities"], ["Services", "/services"],
              ["Gallery", "/gallery"], ["Booking", "/booking"],
            ].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><Phone className="w-4 h-4 text-gold mt-0.5"/><span>01318-706223</span></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 text-gold mt-0.5"/><span>info@paradisedinajpur.com</span></li>
            <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5"/><span>Jagoroni Mor, Newtown 3 No Bazar, Sadar, Dinajpur</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Open Daily — Always Available</li>
            <li>Event Coordination 24/7</li>
            <li>Reservations Recommended</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Paradise Community & Convention Center. All rights reserved.
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/facilities", label: "Facilities" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Booking" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparent = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "glass shadow-elegant"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground">
            <Sparkles className="w-5 h-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-wide text-gradient-gold">Paradise</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Community & Convention</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-3 inline-flex items-center rounded-full bg-gradient-gold px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-90 transition"
          >
            Book Event
          </Link>
          <ThemeToggle className="ml-2" />
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border-gold border text-gold"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-gold/30 animate-fade-up">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-gold bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
                className="px-3 py-3 rounded-md text-sm tracking-wide hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

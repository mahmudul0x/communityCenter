import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Phone, Clock, Building2, Sparkles, Users, Calendar, Star } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroCelebration from "@/assets/hero-celebration.jpg";
import aboutVenue from "@/assets/about-venue.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Community & Convention Center in Dinajpur | Paradise" },
      { name: "description", content: "Paradise Community & Convention Center — premium wedding venue, conference hall and grand celebration space in Dinajpur, Bangladesh." },
      { property: "og:title", content: "Paradise Community & Convention Center, Dinajpur" },
      { property: "og:description", content: "Where celebrations become extraordinary." },
    ],
  }),
  component: Home,
});

const slides = [
  {
    img: heroWedding,
    eyebrow: "Luxury Weddings",
    title: "Create Unforgettable Memories",
    sub: "Premium Community & Convention Center in Dinajpur",
    primary: { label: "Book Event", to: "/booking" },
    secondary: { label: "Explore Venue", to: "/facilities" },
  },
  {
    img: heroCorporate,
    eyebrow: "Corporate Events",
    title: "Elegant Space for Corporate Events",
    sub: "Modern conference setup with cinematic ambiance",
    primary: { label: "View Facilities", to: "/facilities" },
    secondary: { label: "Contact Us", to: "/contact" },
  },
  {
    img: heroCelebration,
    eyebrow: "Grand Celebrations",
    title: "Where Celebrations Become Extraordinary",
    sub: "Bespoke décor, fine dining and impeccable service",
    primary: { label: "Book Now", to: "/booking" },
    secondary: { label: "See Gallery", to: "/gallery" },
  },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === idx ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`w-full h-full object-cover ${i === idx ? "ken-burns" : ""}`}
            />
            <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
            <div className="absolute inset-0 bg-[oklch(0.09_0.005_60/0.45)]" />
          </div>
        ))}

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, k) => (
            <span
              key={k}
              className="absolute w-1 h-1 rounded-full bg-gold/60 float-slow"
              style={{
                left: `${(k * 53) % 100}%`,
                top: `${(k * 37) % 100}%`,
                animationDelay: `${k * 0.4}s`,
                boxShadow: "0 0 12px oklch(0.82 0.15 82 / 0.8)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 max-w-5xl mx-auto">
          <motion.span
            key={`eb-${i}`}
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[11px] md:text-xs tracking-[0.5em] uppercase text-gold"
          >{slides[i].eyebrow}</motion.span>

          <motion.h1
            key={`t-${i}`}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl text-gradient-gold leading-[1.05]"
          >{slides[i].title}</motion.h1>

          <motion.p
            key={`s-${i}`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.9 }}
            className="mt-5 max-w-2xl text-foreground/85 md:text-lg"
          >{slides[i].sub}</motion.p>

          <motion.div
            key={`b-${i}`}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4 justify-center"
          >
            <Link to={slides[i].primary.to} className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-gold hover:opacity-90 transition">
              {slides[i].primary.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to={slides[i].secondary.to} className="inline-flex items-center gap-2 rounded-full glass-light px-7 py-3.5 text-sm font-medium text-foreground hover:bg-gold/10 transition">
              {slides[i].secondary.label}
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Slide ${k + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === k ? "w-10 bg-gold" : "w-4 bg-foreground/30"}`}
            />
          ))}
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="relative -mt-20 z-20 px-5">
        <div className="mx-auto max-w-6xl glass rounded-2xl shadow-elegant grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20 overflow-hidden">
          {[
            { Icon: MapPin, t: "Dinajpur", s: "Newtown 3 No Bazar, Sadar" },
            { Icon: Building2, t: "Premium Hall", s: "Convention & Banquet" },
            { Icon: Phone, t: "01318-706223", s: "Reservations Hotline" },
            { Icon: Clock, t: "Always Open", s: "24/7 Coordination" },
          ].map(({ Icon, t, s }, k) => (
            <div key={k} className="p-6 flex items-center gap-4">
              <span className="inline-flex w-12 h-12 rounded-full bg-gold/10 text-gold items-center justify-center border-gold border">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <div className="font-display text-lg text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-5">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
            <img src={aboutVenue} alt="Paradise Convention Center" className="relative rounded-2xl shadow-elegant w-full" loading="lazy" />
            <div className="absolute -bottom-8 -right-8 hidden md:block glass rounded-2xl p-6 shadow-gold">
              <div className="font-display text-4xl text-gradient-gold">15+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">About Paradise</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-gold">
              North Bengal's Most Refined Address for Celebrations
            </h2>
            <div className="mt-5 gold-divider w-20" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From intimate engagements to grand corporate galas, Paradise Community & Convention Center
              brings together a magnificent interior, world-class amenities and a service philosophy
              inspired by the finest hospitality houses. Every event is crafted with personalized care,
              cinematic detail and an unwavering pursuit of perfection.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { Icon: Calendar, n: "1,200+", l: "Events Hosted" },
                { Icon: Users, n: "50,000+", l: "Happy Guests" },
                { Icon: Sparkles, n: "1,500", l: "Seating Capacity" },
              ].map(({ Icon, n, l }, k) => (
                <div key={k} className="rounded-xl glass p-5 text-center hover-lift">
                  <Icon className="w-5 h-5 text-gold mx-auto" />
                  <div className="mt-2 font-display text-2xl md:text-3xl text-gradient-gold">{n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mt-9 inline-flex items-center gap-2 rounded-full border-gold border px-6 py-3 text-sm hover:bg-gold hover:text-primary-foreground transition">
              Discover Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FACILITIES PREVIEW */}
      <section className="py-24 px-5 bg-[oklch(0.1_0.005_60)] relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <SectionTitle eyebrow="Facilities" title="Crafted for Every Occasion" sub="World-class amenities curated to elevate every moment of your event." />
        <div className="mx-auto max-w-7xl mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Wedding Hall", d: "Grand ballroom with floral architecture." },
            { t: "Conference Room", d: "Modern AV setup for corporate gatherings." },
            { t: "Catering Services", d: "Refined multi-cuisine fine-dining experience." },
            { t: "Premium Décor", d: "Bespoke design, lighting and stage setup." },
            { t: "Sound & Lighting", d: "Cinematic audio-visual production." },
            { t: "VIP Lounge", d: "Private suites for guests of honor." },
            { t: "Air Conditioning", d: "Climate-controlled comfort throughout." },
            { t: "Valet Parking", d: "Spacious, secured & guided parking." },
          ].map((f, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.05, duration: 0.6 }}
              className="group rounded-2xl glass p-6 hover-lift relative overflow-hidden"
            >
              <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-gold opacity-0 group-hover:opacity-15 blur-2xl transition" />
              <span className="inline-flex w-12 h-12 rounded-full bg-gold/10 text-gold items-center justify-center border-gold border">
                <Sparkles className="w-5 h-5" />
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/facilities" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3 text-sm font-medium shadow-gold">
            View All Facilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 px-5">
        <SectionTitle eyebrow="Gallery" title="Moments of Pure Elegance" />
        <div className="mx-auto max-w-7xl mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[g1, g2, g3, g5].map((src, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.08 }}
              className={`relative overflow-hidden rounded-2xl ${k % 2 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
            >
              <img src={src} alt="" className="w-full h-full object-cover transition duration-700 hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 to-transparent" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border-gold border px-6 py-3 text-sm hover:bg-gold hover:text-primary-foreground transition">
            Explore Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5">
        <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-elegant">
          <img src={heroCelebration} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-onyx/75" />
          <div className="relative z-10 text-center py-20 px-5">
            <Star className="w-7 h-7 text-gold mx-auto" />
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-gradient-gold">Begin Your Story With Us</h2>
            <p className="mt-4 text-foreground/85 max-w-2xl mx-auto">Reserve a private viewing of our halls and let our event curators design an experience worthy of your most precious moments.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-gold">Book Now</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass-light px-7 py-3.5 text-sm font-medium">Contact Concierge</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

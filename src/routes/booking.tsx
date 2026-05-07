import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Crown, Sparkles, Star, Clock } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Packages & Booking — Paradise Convention Center" },
      { name: "description", content: "Reserve your event at Paradise. Wedding, corporate and luxury décor packages with online booking." },
    ],
  }),
  component: BookingPage,
});

const packages = [
  {
    Icon: Sparkles, t: "Essential", price: "৳ 95,000",
    features: ["Up to 300 guests", "Standard décor", "Catering for 1 menu", "Sound system", "Basic lighting"],
  },
  {
    Icon: Crown, t: "Wedding Royal", price: "৳ 2,50,000", highlight: true,
    features: ["Up to 800 guests", "Premium floral décor", "Multi-cuisine fine dining", "Cinematic lighting & sound", "VIP bridal lounge", "Dedicated event manager"],
  },
  {
    Icon: Star, t: "Corporate Elite", price: "৳ 1,50,000",
    features: ["Up to 500 attendees", "Conference AV setup", "Tea / lunch service", "Stage & podium", "Branding support"],
  },
];

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", type: "Wedding", date: "", guests: "", message: "", slot: "" });

  const slots = [
    { id: "morning", label: "Morning", time: "9:00 AM – 12:00 PM" },
    { id: "afternoon", label: "Afternoon", time: "1:00 PM – 5:00 PM" },
    { id: "evening", label: "Evening", time: "6:00 PM – 10:00 PM" },
    { id: "fullday", label: "Full Day", time: "9:00 AM – 11:00 PM" },
  ];

  // Deterministic mock availability based on selected date — same on server & client
  function slotStatus(slotId: string): "available" | "limited" | "booked" {
    if (!form.date) return "available";
    const seed = [...form.date].reduce((a, c) => a + c.charCodeAt(0), 0) + slotId.length;
    const m = seed % 6;
    if (m === 0) return "booked";
    if (m === 1 || m === 2) return "limited";
    return "available";
  }

  return (
    <>
      <PageHero title="Packages & Booking" subtitle="Curated packages and instant inquiry — your celebration begins here." image={heroWedding} />

      <section className="py-24 px-5">
        <SectionTitle eyebrow="Packages" title="Choose Your Experience" />
        <div className="mx-auto max-w-7xl mt-14 grid lg:grid-cols-3 gap-6">
          {packages.map((p, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.1 }}
              className={`relative rounded-3xl p-8 hover-lift ${p.highlight ? "bg-gradient-gold text-primary-foreground shadow-gold" : "glass"}`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] bg-onyx text-gold border-gold border">Most Popular</span>
              )}
              <p.Icon className={`w-8 h-8 ${p.highlight ? "text-primary-foreground" : "text-gold"}`} />
              <h3 className={`mt-4 font-display text-3xl ${p.highlight ? "" : "text-gradient-gold"}`}>{p.t}</h3>
              <div className={`mt-1 text-sm ${p.highlight ? "opacity-80" : "text-muted-foreground"}`}>Starting from</div>
              <div className="mt-2 font-display text-4xl">{p.price}</div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className={`w-4 h-4 mt-0.5 ${p.highlight ? "text-primary-foreground" : "text-gold"}`} />
                    <span className={p.highlight ? "" : "text-foreground/85"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#booking-form" className={`mt-8 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition ${p.highlight ? "bg-onyx text-gold hover:bg-onyx/90" : "bg-gradient-gold text-primary-foreground"}`}>
                Reserve Now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="booking-form" className="py-24 px-5 bg-[oklch(0.1_0.005_60)]">
        <SectionTitle eyebrow="Online Booking" title="Reserve Your Date" sub="Share a few details and our concierge team will reach out within 24 hours." />
        <div className="mx-auto max-w-3xl mt-14">
          {submitted ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-3xl glass p-12 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-gold inline-flex items-center justify-center text-primary-foreground">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="mt-6 font-display text-3xl text-gradient-gold">Inquiry Received</h3>
              <p className="mt-3 text-muted-foreground">Thank you, {form.name || "esteemed guest"}. Our concierge will contact you shortly at {form.phone || "your number"}.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 inline-flex rounded-full border-gold border px-6 py-2 text-sm hover:bg-gold hover:text-primary-foreground transition">New Inquiry</button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-3xl glass p-8 md:p-10 grid md:grid-cols-2 gap-5"
            >
              {[
                { k: "name", l: "Full Name", t: "text" },
                { k: "phone", l: "Phone Number", t: "tel" },
                { k: "date", l: "Event Date", t: "date" },
                { k: "guests", l: "Guest Count", t: "number" },
              ].map((f) => (
                <label key={f.k} className="text-sm">
                  <span className="text-muted-foreground">{f.l}</span>
                  <input
                    required type={f.t}
                    min={f.t === "date" ? new Date().toISOString().slice(0, 10) : undefined}
                    value={form[f.k as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    className="mt-2 w-full bg-transparent border-gold/40 border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none transition"
                  />
                </label>
              ))}
              <div className="md:col-span-2">
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Preferred Time Slot{form.date ? ` — availability for ${form.date}` : ""}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {slots.map((s) => {
                    const st = slotStatus(s.id);
                    const disabled = st === "booked";
                    const selected = form.slot === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        disabled={disabled}
                        onClick={() => setForm({ ...form, slot: s.id })}
                        className={`relative rounded-xl border p-4 text-left transition ${
                          selected
                            ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold"
                            : disabled
                            ? "border-gold/15 opacity-50 cursor-not-allowed"
                            : "border-gold/40 hover:bg-gold/10"
                        }`}
                      >
                        <div className="font-display text-lg">{s.label}</div>
                        <div className={`text-[11px] mt-1 ${selected ? "" : "text-muted-foreground"}`}>{s.time}</div>
                        <span
                          className={`absolute top-2 right-2 text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            st === "available" ? "bg-[oklch(0.7_0.18_150/0.2)] text-[oklch(0.78_0.18_150)]"
                            : st === "limited" ? "bg-[oklch(0.78_0.15_82/0.2)] text-gold"
                            : "bg-[oklch(0.6_0.22_25/0.2)] text-[oklch(0.7_0.22_25)]"
                          }`}
                        >
                          {st === "available" ? "Available" : st === "limited" ? "Few Left" : "Booked"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <label className="text-sm md:col-span-2">
                <span className="text-muted-foreground">Event Type</span>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full bg-card border-gold/40 border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                >
                  {["Wedding", "Reception", "Engagement", "Corporate Conference", "Seminar", "Birthday", "Cultural Program", "Social Gathering"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm md:col-span-2">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-transparent border-gold/40 border rounded-lg px-4 py-3 text-foreground focus:border-gold focus:outline-none"
                />
              </label>
              <div className="md:col-span-2 flex justify-center">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-gold text-primary-foreground px-10 py-3.5 text-sm font-medium shadow-gold hover:opacity-90 transition">
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

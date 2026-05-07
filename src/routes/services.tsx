import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroCelebration from "@/assets/hero-celebration.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Events & Services — Paradise Convention Center" },
      { name: "description", content: "Weddings, receptions, conferences, seminars and cultural programs hosted with refined elegance." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: g5, t: "Wedding Ceremony", d: "Sacred traditions, royal staging and cinematic floral design — your wedding, perfected to the smallest detail." },
  { img: g1, t: "Reception", d: "Glittering receptions complete with bespoke décor, signature menus and live entertainment." },
  { img: g6, t: "Engagement", d: "Intimate, elegant settings for the moment that begins it all." },
  { img: g3, t: "Corporate Conference", d: "Cinematic AV, theater seating and premium hospitality for serious business." },
  { img: heroCelebration, t: "Seminar & Symposium", d: "A focused, refined environment for thought leaders and executives." },
  { img: g2, t: "Birthday & Anniversaries", d: "Personalized celebrations crafted around your story." },
  { img: g4, t: "Cultural Programs", d: "Concert-grade staging, lighting and sound for performances of every scale." },
  { img: g1, t: "Social Gathering", d: "From galas to community functions — luxury for every occasion." },
];

function ServicesPage() {
  return (
    <>
      <PageHero title="Events & Services" subtitle="A curated portfolio of celebrations crafted with cinematic care." image={heroCelebration} />
      <section className="py-24 px-5">
        <div className="mx-auto max-w-7xl space-y-16">
          {services.map((s, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${k % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative group rounded-2xl overflow-hidden shadow-elegant">
                <img src={s.img} alt={s.t} className="w-full aspect-[4/3] object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
              </div>
              <div>
                <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Service · 0{k + 1}</span>
                <h3 className="mt-3 font-display text-4xl md:text-5xl text-gradient-gold">{s.t}</h3>
                <div className="mt-5 gold-divider w-20" />
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.d}</p>
                <Link to="/booking" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-6 py-3 text-sm font-medium shadow-gold">
                  Reserve This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

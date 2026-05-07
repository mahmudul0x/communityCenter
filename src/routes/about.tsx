import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Crown, HeartHandshake, Sparkles } from "lucide-react";
import aboutVenue from "@/assets/about-venue.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Paradise Community & Convention Center" },
      { name: "description", content: "Discover Paradise — Dinajpur's premier convention center for weddings, conferences and grand celebrations." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="Our Story" subtitle="A legacy of refined hospitality and unforgettable celebrations." image={aboutVenue} />
      <section className="py-24 px-5">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <motion.img initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} src={g4} alt="" className="rounded-2xl shadow-elegant" loading="lazy" />
          <div>
            <SectionTitle center={false} eyebrow="The Paradise Standard" title="Where Tradition Meets Modern Luxury" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For over a decade, Paradise Community & Convention Center has been the chosen venue for North Bengal's most distinguished events.
              Set in the heart of Dinajpur, our hall blends classical architectural detail with state-of-the-art technology — every chandelier,
              every drape, every plate carefully composed for an unforgettable experience.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our dedicated concierge, master chefs and design partners work as one orchestra to bring your vision to life,
              whether it is a candlelit wedding reception, a high-stakes corporate summit or a milestone family gathering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-[oklch(0.1_0.005_60)]">
        <SectionTitle eyebrow="Why Paradise" title="The Mark of Excellence" />
        <div className="mx-auto max-w-6xl mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: Crown, t: "Premium Interiors", d: "Crystal chandeliers, marble floors and bespoke décor." },
            { Icon: HeartHandshake, t: "Personalized Service", d: "Dedicated event manager from booking to farewell." },
            { Icon: Sparkles, t: "Modern Technology", d: "Cinematic AV, climate control & seamless connectivity." },
            { Icon: Award, t: "Trusted Legacy", d: "1,200+ flawless events for North Bengal's finest." },
          ].map(({ Icon, t, d }, k) => (
            <motion.div key={k} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.08 }} className="rounded-2xl glass p-6 hover-lift">
              <Icon className="w-7 h-7 text-gold" />
              <h3 className="mt-4 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

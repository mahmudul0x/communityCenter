import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Mic2, Utensils, Sparkles, Music, Snowflake, Car, Crown, Lightbulb, Briefcase } from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Venue & Facilities — Paradise Convention Center" },
      { name: "description", content: "Explore the wedding hall, conference room, catering and luxury amenities at Paradise in Dinajpur." },
    ],
  }),
  component: FacilitiesPage,
});

const facilities = [
  { Icon: Building2, t: "Grand Wedding Hall", d: "Spacious 1,500-seat ballroom with crystal chandeliers and royal stage." },
  { Icon: Briefcase, t: "Conference Room", d: "Boardroom-style and theater seating for corporate meetings." },
  { Icon: Mic2, t: "Corporate Setup", d: "Stage podium, projection screens and high-fidelity sound." },
  { Icon: Utensils, t: "Catering Services", d: "Multi-cuisine fine dining curated by award-winning chefs." },
  { Icon: Sparkles, t: "Premium Decoration", d: "Bespoke floral, drape and stage design partners." },
  { Icon: Music, t: "Sound & Lighting", d: "Cinematic concert-grade audio and intelligent lighting." },
  { Icon: Snowflake, t: "Air Conditioning", d: "Whisper-quiet climate control across the venue." },
  { Icon: Car, t: "Valet Parking", d: "Secured parking for over 200 vehicles with valet service." },
  { Icon: Crown, t: "VIP Lounge", d: "Private bridal & dignitary suites with personal service." },
  { Icon: Lightbulb, t: "Stage Setup", d: "Custom stage configurations from intimate to grand." },
];

function FacilitiesPage() {
  return (
    <>
      <PageHero title="Venue & Facilities" subtitle="Every detail designed to transform your event into an extraordinary experience." image={heroCorporate} />
      <section className="py-24 px-5">
        <SectionTitle eyebrow="Amenities" title="A World of Luxury Under One Roof" />
        <div className="mx-auto max-w-7xl mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map(({ Icon, t, d }, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.05 }}
              className="group rounded-2xl glass p-7 hover-lift relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-20 blur-3xl transition" />
              <span className="inline-flex w-14 h-14 rounded-2xl bg-gold/10 text-gold items-center justify-center border-gold border">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

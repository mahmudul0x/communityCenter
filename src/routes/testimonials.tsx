import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import heroCelebration from "@/assets/hero-celebration.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Paradise Convention Center" },
      { name: "description", content: "Read what our clients say about their luxury events at Paradise in Dinajpur." },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  { n: "Tasnim & Rafiq", r: "Wedding Reception", q: "From the moment we walked in, every detail was magical. The staff turned our dream wedding into a fairytale.", s: 5 },
  { n: "Md. Hasanul Haque", r: "Corporate Conference", q: "Paradise hosted our annual summit with cinematic precision. The AV setup and hospitality were world-class.", s: 5 },
  { n: "Nusrat Jahan", r: "Engagement", q: "An unforgettable evening. Cinematic lighting, exquisite food and a team that anticipated every need.", s: 5 },
  { n: "The Karim Family", r: "50th Anniversary", q: "We searched all of North Bengal — nothing comes close to Paradise. Truly worthy of life's biggest milestones.", s: 5 },
  { n: "Dr. Selim Chowdhury", r: "Medical Symposium", q: "Flawless coordination, refined ambiance and impeccable service. Our delegates were thoroughly impressed.", s: 5 },
];

function TestimonialsPage() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <>
      <PageHero title="Testimonials" subtitle="Heartfelt words from clients who've made memories with us." image={heroCelebration} />
      <section className="py-24 px-5">
        <SectionTitle eyebrow="Voices of Paradise" title="Stories Crafted in Gold" />
        <div className="mx-auto max-w-4xl mt-16 relative">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-10 md:p-14 text-center shadow-elegant relative"
          >
            <Quote className="w-12 h-12 text-gold mx-auto" />
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(reviews[i].s)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
            </div>
            <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed text-foreground/95 italic">
              "{reviews[i].q}"
            </p>
            <div className="mt-8 gold-divider w-20 mx-auto" />
            <div className="mt-5">
              <div className="font-display text-xl text-gradient-gold">{reviews[i].n}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">{reviews[i].r}</div>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center gap-3">
            <button onClick={prev} className="w-12 h-12 rounded-full border-gold border text-gold inline-flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border-gold border text-gold inline-flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${i === k ? "w-10 bg-gold" : "w-3 bg-foreground/20"}`} aria-label={`Review ${k+1}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

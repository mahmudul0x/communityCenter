import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import heroCorporate from "@/assets/hero-corporate.jpg";
import heroCelebration from "@/assets/hero-celebration.jpg";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Paradise Convention Center" },
      { name: "description", content: "Browse stunning images of weddings, conferences, decorations and celebrations at Paradise." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroWedding, cat: "Wedding" },
  { src: g3, cat: "Conference" },
  { src: g1, cat: "Decoration" },
  { src: g4, cat: "Lighting" },
  { src: g2, cat: "Food" },
  { src: g5, cat: "Wedding" },
  { src: g6, cat: "Stage" },
  { src: heroCorporate, cat: "Conference" },
  { src: heroCelebration, cat: "Decoration" },
] as const;

const cats = ["All", "Wedding", "Conference", "Decoration", "Stage", "Lighting", "Food"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <>
      <PageHero title="Gallery" subtitle="A visual journey through our most cherished moments." image={g1} />
      <section className="py-20 px-5">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide border-gold border transition ${
                filter === c ? "bg-gradient-gold text-primary-foreground" : "text-foreground/80 hover:bg-gold/10"
              }`}
            >{c}</button>
          ))}
        </div>

        <motion.div layout className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((it, k) => (
              <motion.button
                layout key={`${filter}-${k}`}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: k * 0.04 }}
                onClick={() => setLightbox(it.src)}
                className="mb-5 block w-full break-inside-avoid rounded-2xl overflow-hidden group relative"
              >
                <img src={it.src} alt={it.cat} className="w-full transition duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Paradise</span>
                  <div className="font-display text-xl">{it.cat}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-onyx/95 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 w-11 h-11 rounded-full border-gold border text-gold inline-flex items-center justify-center" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox} alt="" className="max-w-[92vw] max-h-[88vh] rounded-2xl shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

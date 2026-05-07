import { motion } from "framer-motion";

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover ken-burns" />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-radial-gold)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-[11px] tracking-[0.4em] uppercase text-gold"
        >Paradise — Dinajpur</motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 font-display text-5xl md:text-7xl text-gradient-gold"
        >{title}</motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 max-w-2xl text-foreground/85 text-base md:text-lg"
          >{subtitle}</motion.p>
        )}
        <div className="mt-6 gold-divider w-32" />
      </div>
    </section>
  );
}

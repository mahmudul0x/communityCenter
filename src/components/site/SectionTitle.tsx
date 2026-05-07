export function SectionTitle({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: string; sub?: string; center?: boolean; }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{eyebrow}</span>}
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-gradient-gold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>}
      <div className={`mt-6 gold-divider w-24 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle, Send, Check } from "lucide-react";
import aboutVenue from "@/assets/about-venue.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Paradise Community & Convention Center, Dinajpur" },
      { name: "description", content: "Reach Paradise at 01318-706223, Jagoroni Mor, Newtown 3 No Bazar, Sadar, Dinajpur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Contact" subtitle="Our concierge team awaits your call." image={aboutVenue} />
      <section className="py-24 px-5">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionTitle center={false} eyebrow="Get in Touch" title="Let's Plan Something Extraordinary" />
            <div className="mt-10 space-y-5">
              {[
                { Icon: Phone, t: "Phone", v: "01318-706223", href: "tel:01318706223" },
                { Icon: MessageCircle, t: "WhatsApp", v: "Chat with concierge", href: "https://wa.me/8801318706223" },
                { Icon: Mail, t: "Email", v: "info@paradisedinajpur.com", href: "mailto:info@paradisedinajpur.com" },
                { Icon: MapPin, t: "Address", v: "Jagoroni Mor, Newtown 3 No Bazar, Sadar, Dinajpur" },
              ].map(({ Icon, t, v, href }, k) => (
                <a key={k} href={href} className="flex items-start gap-4 rounded-2xl glass p-5 hover-lift">
                  <span className="inline-flex w-12 h-12 rounded-full bg-gold/10 text-gold border-gold border items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-gold">{t}</div>
                    <div className="mt-1 text-foreground/90">{v}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl glass p-8 md:p-10 shadow-elegant"
          >
            <h3 className="font-display text-3xl text-gradient-gold">Send a Message</h3>
            <div className="mt-3 gold-divider w-16" />
            {sent ? (
              <div className="mt-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground inline-flex items-center justify-center"><Check className="w-7 h-7"/></div>
                <p className="mt-4 font-display text-xl">Thank you — we'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
                {["Name", "Email", "Subject"].map((l) => (
                  <input key={l} required placeholder={l} className="w-full bg-transparent border-gold/40 border rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition" />
                ))}
                <textarea required rows={5} placeholder="Your message" className="w-full bg-transparent border-gold/40 border rounded-lg px-4 py-3 focus:border-gold focus:outline-none transition" />
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3 text-sm font-medium shadow-gold hover:opacity-90 transition">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl mt-20 rounded-3xl overflow-hidden border-gold border shadow-elegant">
          <iframe
            title="Paradise Location"
            src="https://www.google.com/maps?q=Newtown+3+No+Bazar+Dinajpur&output=embed"
            className="w-full h-[420px] grayscale-[20%]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

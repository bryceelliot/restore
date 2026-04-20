import type { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}
function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" /></svg>;
}
function XIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Kelowna Flooring Superstore. Visit our showroom at Unit 16, 830 McCurdy Place, Kelowna BC or call (250) 860-7847. Free estimates available.",
  alternates: { canonical: "https://www.kfssflooring.com/contact" },
};

const hours = [
  { day: "Monday – Tuesday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Wednesday", time: "9:00 AM – 2:00 PM", closed: false },
  { day: "Thursday – Friday", time: "9:00 AM – 5:00 PM", closed: false },
  { day: "Saturday", time: "10:00 AM – 2:00 PM", closed: false },
  { day: "Sunday", time: "Closed", closed: true },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/showroom-05.webp"
          alt=""
          fill
          aria-hidden="true"
          priority
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/95 via-[#0d1526]/70 to-[#0d1526]/30" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              We&apos;d Love to<br />
              <span className="text-accent">Hear From You</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
              Whether you have a question about flooring, want to book a free estimate,
              or just want to visit our showroom — we&apos;re here to help.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Contact grid ──────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">

          {/* Form — first on mobile and desktop */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-28">
              <h2 className="text-2xl font-black text-charcoal mb-1">Send Us a Message</h2>
              <p className="text-gray-600 text-sm mb-7">We typically respond within 1 business day.</p>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Info cards */}
          <AnimateOnScroll direction="right">
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal text-lg mb-1">Showroom</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Unit 16, 830 McCurdy Place<br />Kelowna, BC V1X 8C8
                    </p>
                    <a
                      href="https://gmb.kfssflooring.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-2 hover:text-accent transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <Phone size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-1">Call Us</h3>
                  <a href="tel:2508607847" className="text-gray-500 text-sm hover:text-accent transition-colors font-medium">
                    (250) 860-7847
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-7 card-hover border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#243566] flex items-center justify-center mb-4">
                    <Mail size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-1">Email</h3>
                  <a href="mailto:kfssteam@gmail.com" className="text-gray-500 text-sm hover:text-accent transition-colors font-medium break-all">
                    kfssteam@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-charcoal flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-charcoal text-lg mb-4">Store Hours</h3>
                    <div className="space-y-2.5">
                      {hours.map((h) => (
                        <div key={h.day} className="flex justify-between items-center gap-4">
                          <span className="text-gray-500 text-sm">{h.day}</span>
                          <span className={`text-sm font-semibold ${h.closed ? "text-accent" : "text-charcoal"}`}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-charcoal mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: "https://facebook.kfssflooring.com", label: "Facebook", Icon: FacebookIcon },
                    { href: "https://instagram.kfssflooring.com", label: "Instagram", Icon: InstagramIcon },
                    { href: "https://x.com/KelownaFloorSS", label: "Twitter / X", Icon: XIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-xl bg-light hover:bg-primary hover:text-white flex items-center justify-center text-charcoal transition-all border border-gray-100"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────────── */}
      <section className="relative">
        <div className="bg-primary px-4 sm:px-6 py-4 flex items-center justify-between max-w-none">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <MapPin size={16} className="text-accent" />
              <span className="font-semibold text-sm">Unit 16, 830 McCurdy Place, Kelowna, BC V1X 7S5</span>
            </div>
            <a
              href="https://gmb.kfssflooring.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold text-xs hover:text-white transition-colors"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
        <iframe
          title="Kelowna Flooring Superstore Map"
          width="100%"
          height="480"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Unit+16+830+McCurdy+Place+Kelowna+BC&t=&z=15&ie=UTF8&iwloc=&output=embed"
        />
      </section>
    </>
  );
}

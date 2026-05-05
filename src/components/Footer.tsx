"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { trackPhoneClick } from "@/lib/ga";
import EmailSignup from "@/components/EmailSignup";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const flooringLinks = [
  { name: "Laminate", href: "/flooring/laminate" },
  { name: "Hardwood", href: "/flooring/hardwood" },
  { name: "Carpet", href: "/flooring/carpet" },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank" },
  { name: "Linoleum Sheet", href: "/flooring/linoleum-sheet" },
  { name: "Tile", href: "/flooring/tile" },
  { name: "Commercial", href: "/flooring/commercial" },
  { name: "Area Rugs", href: "/flooring/area-rugs" },
];

const hours = [
  { day: "Monday – Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 2:00 PM" },
  { day: "Thursday – Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "10:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    if (!key) { setStatus("sent"); return; }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: key,
          subject: "[NEWSLETTER] Newsletter Signup — KFSS Website",
          from_name: "KFSS Newsletter",
          replyto: email,
          email,
          source: "Footer newsletter",
          route_to: "kfss.bryce@gmail.com",
          botcheck: "",
        }),
      });
      const r = await res.json().catch(() => ({}));
      setStatus(res.ok && r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-primary border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-base">Get Sale Alerts & Flooring Tips</p>
            <p className="text-white/50 text-base mt-0.5">No spam. Just deals and advice from our Kelowna team.</p>
          </div>
          {status === "sent" ? (
            <p className="text-accent font-bold text-base">You&apos;re subscribed — thanks!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 sm:w-64 bg-white/10 border border-white/20 text-white placeholder-white/35 rounded-xl px-4 py-2.5 text-base focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white font-bold px-4 py-2.5 rounded-xl text-base transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Send size={14} /> Subscribe
              </button>
            </form>
          )}
        </div>
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2 text-right">Something went wrong — please try again.</p>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0d1526] text-white border-t-4 border-accent">
      <NewsletterStrip />
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div>
          <Link href="/" className="block mb-2">
            <div className="inline-block bg-white rounded-lg px-4 py-2 mb-1">
              <Image
                src="/logo.webp"
                alt="Flooring Superstores — Kelowna"
                width={220}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-white/55 text-sm font-semibold tracking-[0.18em] uppercase mt-2">
              Kelowna, BC
            </div>
          </Link>
          <p className="text-white/55 text-base leading-relaxed mb-6">
            Kelowna&apos;s premier flooring destination. A massive selection of
            flooring with expert installation across the Okanagan. Order from samples — arrives in 3–5 days.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/kelownaflooringsuperstore" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/kelownaflooringss/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@KelownaFlooringSuperstore-w3d" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z"/>
              </svg>
            </a>
            <a href="https://www.houzz.com/pro/peter-b96/kelowna-flooring-superstore" target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.5 12.5L12 9.25v6.5l-5.5-3.25V22h11v-9.5zM6.5 2v8.25L17.5 16.5V8.25L6.5 2z"/>
              </svg>
            </a>
            <a href="https://x.com/KelownaFloorSS" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com/in/shaun-chartrand-13079a47" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href="https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Flooring types */}
        <div>
          <h3 className="text-white font-bold text-base uppercase tracking-widest mb-5">
            Flooring Types
          </h3>
          <ul className="space-y-2.5">
            {flooringLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/55 hover:text-accent text-base transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-bold text-base uppercase tracking-widest mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {[
              { name: "Free Estimate",         href: "/estimates" },
              { name: "Financing",             href: "/financing" },
              { name: "Current Sales",         href: "/sales" },
              { name: "Recent Projects",       href: "/projects" },
              { name: "Service Areas",         href: "/service-areas" },
              { name: "About Us",              href: "/about" },
              { name: "Contact",               href: "/contact" },
              { name: "FAQ",                   href: "/faq" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/55 hover:text-accent text-base transition-colors"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & hours */}
        <div>
          <h3 className="text-white font-bold text-base uppercase tracking-widest mb-5">
            Visit Us
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kelowna+Flooring+Superstore+Unit+16+830+McCurdy+Place+Kelowna+BC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white text-base leading-relaxed transition-colors"
              >
                Unit 16, 830 McCurdy Place<br />Kelowna, BC V1X 8C8
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-accent mt-0.5 shrink-0" />
              <a
                href="tel:2508607847"
                onClick={() => trackPhoneClick("footer")}
                className="text-white/55 hover:text-white text-base transition-colors"
              >
                (250) 860-7847
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="text-accent mt-0.5 shrink-0" />
              <div className="space-y-1.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex flex-col">
                    <span className="text-white/80 text-sm font-semibold">{h.day}</span>
                    <span className="text-white/50 text-sm">{h.time}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/55 text-sm">
            &copy; {new Date().getFullYear()} Kelowna Flooring Superstore. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="text-white/55 hover:text-white/80 text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-sm">·</span>
            <p className="text-white/55 text-sm">
              Proudly serving Kelowna &amp; the Central Okanagan
            </p>
            <span className="text-white/20 text-sm hidden sm:inline">·</span>
            <p className="text-white/55 text-sm">
              Designed by{" "}
              <a
                href="https://bryceelliot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-accent font-semibold transition-colors"
              >
                Elliot Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

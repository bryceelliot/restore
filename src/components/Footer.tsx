"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { trackPhoneClick } from "@/lib/ga";

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
    try {
      const res = await fetch("https://formspree.io/kfssteam@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Newsletter Signup — KFSS Website" }),
      });
      setStatus(res.ok ? "sent" : "error");
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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
            <div className="text-white/40 text-sm font-semibold tracking-[0.18em] uppercase mt-2">
              Kelowna, BC
            </div>
          </Link>
          <p className="text-white/55 text-base leading-relaxed mb-6">
            Kelowna&apos;s premier flooring destination. A massive selection of
            flooring with expert installation across the Okanagan. Order from samples — arrives in 3–5 days.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/KelownaFlooringSuperStore" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/kelownaflooringss" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <InstagramIcon />
            </a>
            <a href="https://x.com/KelownaFloorSS" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors text-white">
              <XIcon />
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
              { name: "Free Estimate",    href: "/estimates" },
              { name: "Financing",        href: "/financing" },
              { name: "Room Visualizer",  href: "/room-visualizer" },
              { name: "Current Sales",    href: "/sales" },
              { name: "FAQ",              href: "/faq" },
              { name: "About Us",         href: "/about" },
              { name: "Blog",             href: "/blog" },
              { name: "Contact",          href: "/contact" },
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
                href="https://maps.google.com/?q=Unit+16+830+McCurdy+Place+Kelowna+BC"
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
          <p className="text-white/35 text-sm">
            &copy; {new Date().getFullYear()} Kelowna Flooring Superstore. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-sm">·</span>
            <p className="text-white/40 text-sm">
              Proudly serving Kelowna &amp; the Central Okanagan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

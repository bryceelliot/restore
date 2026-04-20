"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Trash2, ArrowRight, Phone, ExternalLink } from "lucide-react";
import { getWishlist, toggleWishlist } from "@/lib/wishlist";
import { flooringTypes } from "@/lib/flooring-data";

const SEND_URL = "https://formspree.io/kfssteam@gmail.com";

export default function WishlistPage() {
  const [slugs, setSlugs]     = useState<string[]>([]);
  const [notes, setNotes]     = useState("");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSlugs(getWishlist());
  }, []);

  function remove(slug: string) {
    toggleWishlist(slug);
    setSlugs(getWishlist());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (slugs.length === 0) return;
    setStatus("sending");
    const items = slugs.map(s => flooringTypes.find(f => f.slug === s)?.name ?? s).join(", ");
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Sample / Estimate Request — KFSS Website",
          name,
          email,
          phone,
          flooring_interest: items,
          notes,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const savedItems = slugs
    .map(s => flooringTypes.find(f => f.slug === s))
    .filter(Boolean) as typeof flooringTypes;

  if (!mounted) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {savedItems.length === 0 ? (
        <div className="text-center py-24">
          <Heart size={48} className="text-white/20 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white mb-3">Your wishlist is empty</h2>
          <p className="text-white/50 text-lg mb-8">
            Browse our flooring types and save the ones you&apos;re interested in.
          </p>
          <Link
            href="/flooring"
            className="inline-flex items-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-8 py-4 rounded-xl text-base transition-all"
          >
            Browse Flooring <ArrowRight size={18} />
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

          {/* Saved items */}
          <div>
            <p className="text-white/60 text-sm mb-5">{savedItems.length} flooring {savedItems.length === 1 ? "type" : "types"} saved</p>
            <div className="space-y-3">
              {savedItems.map(f => (
                <div
                  key={f.slug}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
                >
                  <span
                    className="w-10 h-10 rounded-lg shrink-0"
                    style={{ background: f.accentColor }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold">{f.name}</p>
                    <p className="text-white/45 text-sm truncate">{f.tagline}</p>
                  </div>
                  <Link
                    href={`/flooring/${f.slug}`}
                    className="text-white/30 hover:text-accent transition-colors shrink-0"
                    aria-label={`View ${f.name}`}
                  >
                    <ExternalLink size={15} />
                  </Link>
                  <button
                    onClick={() => remove(f.slug)}
                    className="text-white/30 hover:text-red-400 transition-colors shrink-0"
                    aria-label={`Remove ${f.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
            <Link
              href="/flooring"
              className="inline-flex items-center gap-2 text-accent hover:text-white text-sm font-semibold mt-5 transition-colors"
            >
              Browse more flooring <ArrowRight size={14} />
            </Link>
          </div>

          {/* Request form */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              {status === "sent" ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={24} className="fill-green-400 text-green-400" />
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">Request Sent!</h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Our team will reach out within 1 business day to arrange your samples and estimate.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-black text-xl mb-1">Request Samples</h3>
                  <p className="text-white/50 text-sm mb-5">
                    We&apos;ll pull samples of your saved flooring types and follow up to arrange a look.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (optional)"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
                    />
                    <textarea
                      rows={3}
                      placeholder="Notes — room sizes, timeline, questions..."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                    <div className="bg-white/5 rounded-lg px-3 py-2.5 text-xs text-white/40">
                      Requesting samples for: <span className="text-white/70">{savedItems.map(f => f.name).join(", ")}</span>
                    </div>
                    {status === "error" && (
                      <p className="text-red-400 text-xs">Something went wrong — please try again or call us.</p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 bg-accent-dark hover:bg-[#a8281e] text-white font-bold px-5 py-3.5 rounded-xl text-sm transition-all disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending..." : "Send Sample Request"}
                    </button>
                  </form>
                  <a
                    href="tel:2508607847"
                    className="flex items-center justify-center gap-2 text-white/40 hover:text-white text-xs mt-3 transition-colors"
                  >
                    <Phone size={12} /> Or call us: (250) 860-7847
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

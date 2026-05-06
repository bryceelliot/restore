"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function Instagram({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={size} height={size} className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ─── Instagram Feed ───────────────────────────────────────────────────────
 *
 * TWO MODES:
 *
 * 1. FALLBACK (default) — shows a curated 6-post grid built from your own
 *    showroom photos. Works immediately, zero setup. Uncomment / update the
 *    `posts` array below if you want to change which photos appear.
 *
 * 2. LIVE INSTAGRAM via Behold.so — free service that auto-pulls your latest
 *    Instagram posts. To switch:
 *      a) Sign up at https://behold.so (free for public IG accounts)
 *      b) Connect @kelownaflooringss
 *      c) Create a widget, copy the Widget ID (looks like: "abc123xyz")
 *      d) Set BEHOLD_WIDGET_ID below to that ID
 *    The component will automatically switch from fallback to live feed.
 *
 * Alternatives you can use instead of Behold:
 *   - lightwidget.com (free, has watermark on free tier)
 *   - snapwidget.com  (free, simple)
 *   - elfsight.com    (polished, paid beyond 200 views/mo)
 * ─────────────────────────────────────────────────────────────────────── */

const BEHOLD_WIDGET_ID = "wOFRXwOMUtYS0YnbqNQD";
const INSTAGRAM_HANDLE = "kelownaflooringss";
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

/* Fallback posts — shown until Behold is connected */
const fallbackPosts = [
  { src: "/assets/images/showroom-01.webp", alt: "Kelowna showroom — hardwood display" },
  { src: "/assets/images/showroom-06.webp", alt: "Luxury vinyl plank samples" },
  { src: "/assets/images/showroom-09.webp", alt: "Shaw carpet styles" },
  { src: "/assets/images/showroom-07.webp", alt: "Laminate & vinyl wall" },
  { src: "/assets/images/showroom-11.webp", alt: "Mohawk SmartStrand carpet" },
  { src: "/assets/images/showroom-04.webp", alt: "Area rugs & carpet selection" },
];

export default function InstagramFeed() {
  /* Load Behold script only when a widget ID is set */
  useEffect(() => {
    if (!BEHOLD_WIDGET_ID) return;
    if (document.querySelector('script[src*="behold.so"]')) return;
    const s = document.createElement("script");
    s.src = "https://w.behold.so/widget.js";
    s.type = "module";
    document.head.appendChild(s);
  }, []);

  return (
    <section className="py-12 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-md">
            <Instagram size={14} />
            Follow Along
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal leading-tight">
            See Our Latest<br className="sm:hidden" />{" "}
            <span className="gradient-text">Projects & Inspiration</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Follow <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">@{INSTAGRAM_HANDLE}</a> for flooring tips, before &amp; afters, and showroom updates.
          </p>
        </div>

        {/* Feed */}
        {BEHOLD_WIDGET_ID ? (
          /* Live Behold.so widget */
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any, react/no-unknown-property */
          <div dangerouslySetInnerHTML={{ __html: `<behold-widget feed-id="${BEHOLD_WIDGET_ID}"></behold-widget>` }} />
        ) : (
          /* Fallback photo grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {fallbackPosts.map((p, i) => (
              <a
                key={p.src}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden rounded-xl ${i === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 aspect-auto" : ""}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram size={16} className="text-[#DD2A7B]" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:shadow-xl hover:shadow-pink-400/30 text-white font-bold px-8 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5"
          >
            <Instagram size={18} />
            Follow @{INSTAGRAM_HANDLE}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

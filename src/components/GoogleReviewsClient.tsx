"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ExternalLink, ChevronDown } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { GoogleReview } from "@/lib/google-reviews";

interface Props {
  reviews: GoogleReview[];
  rating: number;
  total: number | null;
  allReviewsUrl: string;
}

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

function ReviewCard({ t, i }: { t: GoogleReview; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const tooLong = t.text.length > 360;
  const display = !expanded && tooLong ? t.text.slice(0, 340).trimEnd() + "…" : t.text;

  return (
    <AnimateOnScroll delay={i * 0.06}>
      <div className="bg-white rounded-2xl p-7 h-full flex flex-col shadow-card-warm border border-gray-100/50">
        <div className="flex items-center gap-4 mb-5">
          {t.profilePhotoUrl ? (
            <Image
              src={t.profilePhotoUrl}
              alt={t.authorName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover shrink-0"
              unoptimized
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-base shrink-0"
              style={{ background: t.color }}
            >
              {t.authorInitials}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-charcoal text-base truncate">{t.authorName}</div>
            <div className="flex items-center gap-2 mt-0.5">
              <GoogleG />
              <span className="text-gray-600 text-sm">Google · {t.relativeTime}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-gray-600 text-base leading-relaxed flex-1 whitespace-pre-line">
          &ldquo;{display}&rdquo;
        </p>
        {tooLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 self-start text-primary hover:text-accent text-sm font-bold transition-colors inline-flex items-center gap-1"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown size={14} className={expanded ? "rotate-180 transition-transform" : "transition-transform"} />
          </button>
        )}
      </div>
    </AnimateOnScroll>
  );
}

export default function GoogleReviewsClient({ reviews, rating, total, allReviewsUrl }: Props) {
  const [showAll, setShowAll] = useState(false);
  const initial = 3;
  const visible = showAll ? reviews : reviews.slice(0, initial);
  const hasMore = reviews.length > initial;

  return (
    <section className="py-12 sm:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll className="text-center mb-14">
          <span className="section-label mb-4">Real Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-black text-charcoal text-xl">{rating.toFixed(1)}</span>
            {total != null && (
              <span className="text-gray-500 text-sm">
                · <span className="font-bold text-charcoal">{total.toLocaleString()}</span> Google reviews
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Most recent reviews first — verified by Google from real Kelowna customers.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <ReviewCard key={`${t.authorName}-${i}`} t={t} i={i} />
          ))}
        </div>

        <AnimateOnScroll className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {hasMore && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-sm"
            >
              Show {reviews.length - initial} More Reviews <ChevronDown size={14} />
            </button>
          )}
          {showAll && hasMore && (
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary text-charcoal hover:text-primary font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
            >
              Show Less
            </button>
          )}
          <a
            href={allReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-sm hover:shadow-xl hover:shadow-accent/30"
          >
            <GoogleG /> Read All {total ? `${total}` : ""} Reviews on Google <ExternalLink size={13} />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

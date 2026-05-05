import { Star } from "lucide-react";
import Image from "next/image";
import { fetchGoogleReviews } from "@/lib/google-reviews";

interface Props {
  flooringName: string;        // "Laminate", "Hardwood", etc.
  /* Extra keywords to broaden the match. */
  extraKeywords?: string[];
}

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default async function FlooringTypeReviews({ flooringName, extraKeywords = [] }: Props) {
  const data = await fetchGoogleReviews();
  if (!data.reviews.length) return null;

  /* Build keyword set: the flooring name itself + any extras + sensible synonyms. */
  const term = flooringName.toLowerCase();
  const keywords = new Set<string>([term, ...extraKeywords.map((k) => k.toLowerCase())]);
  /* Common synonyms */
  if (term.includes("vinyl"))     { keywords.add("vinyl"); keywords.add("plank"); keywords.add("lvp"); keywords.add("lvt"); }
  if (term.includes("hardwood"))  { keywords.add("hardwood"); keywords.add("wood"); keywords.add("engineered"); }
  if (term.includes("carpet"))    { keywords.add("carpet"); keywords.add("rug"); }
  if (term.includes("laminate"))  { keywords.add("laminate"); }
  if (term.includes("tile"))      { keywords.add("tile"); keywords.add("ceramic"); keywords.add("porcelain"); }
  if (term.includes("linoleum"))  { keywords.add("linoleum"); keywords.add("sheet"); keywords.add("vinyl"); }
  if (term.includes("rug"))       { keywords.add("rug"); keywords.add("carpet"); }
  if (term.includes("cork"))      { keywords.add("cork"); }
  if (term.includes("commercial")){ keywords.add("commercial"); keywords.add("business"); }

  const matchedAll = data.reviews.filter((r) => {
    const text = r.text.toLowerCase();
    for (const k of keywords) if (text.includes(k)) return true;
    return false;
  });

  /* Put keyword-matched reviews first, then fill to 3 with other recent reviews.
   * Every flooring page should show reviews — hardwood doesn't have to skip the
   * section just because no reviewer typed "hardwood" in their review. */
  const othersNotMatched = data.reviews.filter((r) => !matchedAll.includes(r));
  const combined = [...matchedAll, ...othersNotMatched].slice(0, 3);
  if (combined.length === 0) return null;
  const matched = combined;
  const hasKeywordMatch = matchedAll.length > 0;

  return (
    <section className="py-10 sm:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="section-label mb-4">What Customers Say</span>
          <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
            {hasKeywordMatch
              ? `Real Google Reviews About Our ${flooringName}`
              : `What Kelowna Customers Are Saying`}
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            {hasKeywordMatch
              ? `Verified Google reviews mentioning ${flooringName.toLowerCase()} from real Kelowna customers.`
              : `4.9★ verified Google reviews from real Kelowna homeowners.`}
          </p>
        </div>
        <div className={`grid gap-6 ${matched.length === 1 ? "sm:grid-cols-1 max-w-xl mx-auto" : matched.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {matched.map((t, i) => (
            <div key={`${t.authorName}-${i}`} className="bg-white rounded-2xl p-7 h-full flex flex-col shadow-card-warm border border-gray-100/50">
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
              <p className="text-gray-600 text-base leading-relaxed flex-1 line-clamp-[10]">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

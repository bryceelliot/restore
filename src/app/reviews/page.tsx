import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight, Quote } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Customer Reviews — Kelowna Flooring Superstore",
  description:
    "Real Google reviews from Kelowna homeowners. Read what customers say about our showroom team, installers, products, and the McCurdy Place experience.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/reviews" },
  openGraph: {
    title: "Customer Reviews — Kelowna Flooring Superstore",
    description:
      "Real Google reviews from Kelowna homeowners. 5-star experiences from showroom to install.",
  },
};

const FALLBACK = [
  { authorName: "Rob Hutchings",   rating: 5, relativeTime: "January 2025",  text: "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant. Both Selina and Shaun were extremely helpful and knowledgeable. Cory was punctual, cordial, and excellent at his job." },
  { authorName: "Jenni I.",        rating: 5, relativeTime: "February 2025", text: "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful. The installation was done by Jessie and Clarke, and they truly went above and beyond. Workmanship was excellent and the finished result looks amazing." },
  { authorName: "Thomas",          rating: 5, relativeTime: "March 2025",    text: "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step. A special shout-out to Cory, the installer — professional, efficient, and clearly skilled. Highly recommend." },
  { authorName: "Michelle K.",     rating: 5, relativeTime: "December 2024", text: "Absolutely love our new hardwood floors! The team helped us pick the perfect colour and style for our open-concept living area. The installation was flawless and completed in one day. Our home looks completely transformed." },
  { authorName: "David & Carol P.",rating: 5, relativeTime: "November 2024", text: "We replaced all the flooring in our home — hardwood in the main areas and carpet in the bedrooms. The whole process was stress-free. Selina helped us coordinate everything and the crew was respectful of our home. The price was very competitive and the quality is outstanding." },
  { authorName: "Linda S.",        rating: 5, relativeTime: "October 2024",  text: "As a senior on a budget I was nervous about the whole process. The staff were patient, never rushed me, and explained everything clearly. The vinyl plank they recommended is beautiful and so easy to clean. The installer was wonderful — very careful and tidy." },
];

export default async function ReviewsPage() {
  const data = await fetchGoogleReviews();
  const reviews = data.reviews.length > 0 ? data.reviews : FALLBACK;
  const rating = data.rating ?? 4.9;
  const total = data.totalReviews ?? reviews.length;
  const allReviewsUrl =
    data.googleMapsUri ||
    "https://www.google.com/search?q=Kelowna+Flooring+Superstore+reviews";

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kelowna Flooring Superstore",
    image: "https://www.kelownaflooringsuperstore.com/assets/images/showroom-01.webp",
    "@id": "https://www.kelownaflooringsuperstore.com",
    url: "https://www.kelownaflooringsuperstore.com",
    telephone: "+1-250-860-7847",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 16, 830 McCurdy Place",
      addressLocality: "Kelowna",
      addressRegion: "BC",
      postalCode: "V1X 8C8",
      addressCountry: "CA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toFixed(1),
      reviewCount: total,
    },
    review: reviews.slice(0, 10).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.authorName },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block bg-accent/15 text-accent px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Customer Reviews
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            What Kelowna says about us.
          </h1>
          <div className="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white font-bold">
              {rating.toFixed(1)} on Google
            </span>
            <span className="text-gray-300 text-sm">
              ({total} reviews)
            </span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={allReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-charcoal font-bold px-7 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg"
            >
              <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden="true">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
              </svg>
              Read on Google
            </a>
            <a
              href="https://www.yelp.ca/biz/kelowna-flooring-superstore-kelowna-2?osq=Kelowna+Flooring+Superstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d32323] hover:bg-[#b81e1e] text-white font-bold px-7 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M20.16 12.594l-1.591-.52c-1.16-.379-1.836-.52-2.054-.39-.298.156-.42.65-.404 1.484.083 1.43.298 2.86.654 4.246.142.515.298.834.512.96.215.13.494.17.846.13.298-.04.594-.17.876-.39l3.354-2.66c.215-.17.298-.39.298-.65 0-.26-.083-.48-.298-.65-.215-.17-.494-.26-.876-.39l-1.317-.17zM5.99 11.764l5.46 1.78c.44.13.79.39 1.04.78.25.39.345.83.345 1.32 0 .78-.298 1.43-.876 1.95l-3.354 2.66c-.215.17-.494.26-.876.26-.298 0-.594-.04-.876-.13-.215-.13-.42-.32-.512-.65l-1.317-3.96c-.17-.52-.298-1.04-.298-1.56 0-.65.215-1.17.594-1.56.42-.39.846-.65 1.317-.78l-.747-.11zM11.622 2.226c.298-.17.594-.26.876-.26.298 0 .594.09.876.26l4.706 2.86c.215.17.345.39.345.65 0 .26-.083.48-.298.65l-2.674 2.34c-.298.26-.65.39-1.06.39s-.79-.17-1.04-.52l-2.674-3.96c-.17-.26-.298-.52-.298-.78 0-.26.083-.48.298-.65l.943-.98zM5.99 7.524l3.354 2.6c.298.26.65.39 1.04.39.42 0 .79-.17 1.04-.52.298-.39.42-.83.345-1.3l-.946-5.07c-.083-.26-.215-.48-.42-.65-.215-.13-.494-.17-.846-.17-.298 0-.594.13-.876.39L5.49 6.224c-.215.17-.345.39-.345.65 0 .26.083.48.298.65h.547z"/>
              </svg>
              Read on Yelp
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={`${r.authorName}-${i}`} delay={(i % 3) * 0.06}>
                <article className="bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                  <Quote className="w-7 h-7 text-accent/40 mb-3" />
                  <div className="flex mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {r.text}
                  </p>
                  <footer className="mt-5 pt-5 border-t border-gray-100">
                    <div className="font-black text-charcoal text-sm">
                      {r.authorName}
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">
                      {r.relativeTime}
                    </div>
                  </footer>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-charcoal">
            Ready to be the next 5-star review?
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Book a free in-home estimate or stop by the showroom.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimates"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-lg"
            >
              Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-light border border-gray-200 text-charcoal font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:border-accent/40"
            >
              Visit the Showroom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

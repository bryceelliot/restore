import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring Blog — Tips, Guides & Trends",
  description:
    "Flooring tips, inspiration, and guides from the experts at Kelowna Flooring Superstore. Covering hardwood, carpet, vinyl plank, tile and more.",
  alternates: { canonical: "https://www.kelownaflooringsuperstore.com/blog" },
};

const posts = [
  {
    title: "Vinyl Plank vs Laminate: Which is Right for Your Home?",
    excerpt: "Two of the most popular flooring choices in Kelowna — but which one is right for your space? We break down the key differences in durability, waterproofing, and cost.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Mar 2026",
    img: "/assets/images/hero-kurang.webp",
    focal: "center 45%",
    slug: "vinyl-plank-vs-laminate",
  },
  {
    title: "How to Care for Your Hardwood Floors in the Okanagan",
    excerpt: "The Okanagan's dry climate creates unique challenges for hardwood flooring. Learn how to maintain proper humidity levels and keep your floors beautiful year-round.",
    category: "Maintenance",
    readTime: "4 min read",
    date: "Feb 2026",
    img: "/assets/images/hero-walnut.webp",
    focal: "center 55%",
    slug: "hardwood-care-okanagan",
  },
  {
    title: "The Best Flooring for Kelowna Basements",
    excerpt: "Basements require special consideration — moisture, temperature fluctuations, and comfort all factor in. Here's what our experts recommend for Kelowna homes.",
    category: "Room Guide",
    readTime: "6 min read",
    date: "Jan 2026",
    img: "/assets/images/showroom-08.webp",
    focal: "center 50%",
    slug: "best-basement-flooring-kelowna",
  },
  {
    title: "Carpet Buying Guide: Pile Height, Fibre & More",
    excerpt: "Not all carpet is created equal. From pile height to fibre type to density ratings — here's everything you need to know before choosing carpet for your home.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "Dec 2025",
    img: "/assets/images/showroom-10.webp",
    focal: "center 40%",
    slug: "carpet-buying-guide",
  },
  {
    title: "Natural Stone Tile: Marble, Travertine, or Granite?",
    excerpt: "Natural stone adds unmatched elegance to any space, but each type has unique characteristics. We explain the differences and help you choose the right stone.",
    category: "Tile & Stone",
    readTime: "5 min read",
    date: "Nov 2025",
    img: "/assets/images/showroom-07.webp",
    focal: "center 50%",
    slug: "natural-stone-tile-guide",
  },
  {
    title: "Top Flooring Trends for Kelowna Homes in 2026",
    excerpt: "From wide-plank hardwood to patterned tile and ultra-realistic LVP — discover the flooring trends our designers are seeing in Kelowna homes this year.",
    category: "Trends",
    readTime: "4 min read",
    date: "Oct 2025",
    img: "/assets/images/hero-oak.webp",
    focal: "center 40%",
    slug: "flooring-trends-2026",
  },
];

const categoryColors: Record<string, string> = {
  "Buying Guide": "bg-primary",
  "Maintenance": "bg-[#243566]",
  "Room Guide": "bg-charcoal",
  "Tile & Stone": "bg-[#2d4a7a]",
  "Trends": "bg-accent",
};

export default function BlogPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src="/assets/images/showroom-01.webp"
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
              Expert Tips &amp; Inspiration
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Flooring<br />
              <span className="text-accent">Knowledge Hub</span>
            </h1>
            <p className="text-white/60 text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
              Buying guides, care tips, trends, and inspiration from our flooring
              experts — helping Kelowna homeowners make confident decisions.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-white/40 text-sm">{posts.length} articles</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/40 text-sm">Updated regularly</span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Featured post ─────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <Link href={`/blog/${posts[0].slug}`} className="group grid lg:grid-cols-2 gap-8 items-center bg-light rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm">
              <div className="relative h-72 lg:h-80 overflow-hidden">
                <Image
                  src={posts[0].img}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: posts[0].focal }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent lg:bg-gradient-to-r" />
                <span className={`absolute top-4 left-4 ${categoryColors[posts[0].category] ?? "bg-primary"} text-white text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full`}>
                  {posts[0].category}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {posts[0].date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {posts[0].readTime}</span>
                </div>
                <h2 className="text-charcoal font-black text-2xl sm:text-3xl leading-tight mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Blog grid ─────────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.07}>
                <article className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 shadow-sm flex flex-col h-full">
                  {/* Photo thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: post.focal }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/50 to-transparent" />
                    <span className={`absolute top-3 left-3 ${categoryColors[post.category] ?? "bg-primary"} text-white text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full`}>
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <h2 className="text-charcoal font-black text-lg leading-tight mb-3 flex-1">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-bold group-hover:gap-3 transition-all mt-auto">
                      Read Article <ArrowRight size={13} />
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#fff 0px,#fff 1px,transparent 1px,transparent 12px)" }} />
        <AnimateOnScroll className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Find Your Perfect Floor?
          </h2>
          <p className="text-white/65 mt-3 text-lg">
            Visit our Kelowna showroom or get a free in-home estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-accent/30">
              Free Estimate
            </Link>
            <Link href="/flooring" className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all">
              Shop Flooring
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}

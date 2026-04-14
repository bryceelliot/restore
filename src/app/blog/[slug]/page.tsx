import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight, Lightbulb } from "lucide-react";
import { posts, categoryColors, type BlogSection } from "@/lib/blog-data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.kelownaflooringsuperstore.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.img, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function renderSection(section: BlogSection, i: number) {
  switch (section.type) {
    case "intro":
      return (
        <p key={i} className="text-lg text-gray-600 leading-relaxed font-medium border-l-4 border-accent pl-5 mb-8">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-black text-charcoal mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-charcoal mt-6 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-5">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mb-6 space-y-2">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div key={i} className="flex gap-4 bg-primary/5 border border-primary/15 rounded-2xl p-5 my-6">
          <Lightbulb size={20} className="text-primary shrink-0 mt-0.5" />
          <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
        </div>
      );
    case "cta":
      return (
        <div key={i} className="bg-primary rounded-2xl p-7 mt-10 text-white">
          <p className="text-white/85 leading-relaxed mb-5">{section.text}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/estimates"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Get Free Estimate <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              Visit Our Showroom
            </Link>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.kelownaflooringsuperstore.com${post.img}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      url: "https://www.kelownaflooringsuperstore.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Kelowna Flooring Superstore",
      logo: {
        "@type": "ImageObject",
        url: "https://www.kelownaflooringsuperstore.com/logo.webp",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        <Image
          src={post.img}
          alt={post.title}
          fill
          aria-hidden="true"
          priority
          className="object-cover opacity-30"
          style={{ objectPosition: post.focal }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/75 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-semibold mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span
            className={`inline-block ${categoryColors[post.category] ?? "bg-primary"} text-white text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full mb-5`}
          >
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/45 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} /> {post.readTime}
            </span>
            <span>Kelowna Flooring Superstore</span>
          </div>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
            {/* Main content */}
            <article>
              {post.content.map((section, i) => renderSection(section, i))}
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 space-y-6">
              {/* About the store */}
              <div className="bg-light rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-charcoal text-base mb-3">Kelowna Flooring Superstore</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Your local flooring experts in Kelowna, BC. Huge sample selection, free estimates, and professional installation — orders arrive in 3–5 days.
                </p>
                <Link
                  href="/estimates"
                  className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold px-4 py-3 rounded-xl text-sm transition-all"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:2508607847"
                  className="block w-full text-center bg-white border border-gray-200 hover:border-primary text-charcoal font-semibold px-4 py-3 rounded-xl text-sm transition-all mt-2"
                >
                  (250) 860-7847
                </a>
              </div>

              {/* Flooring categories */}
              <div className="bg-light rounded-2xl p-6 border border-gray-100">
                <h3 className="font-black text-charcoal text-base mb-4">Browse Flooring</h3>
                <div className="space-y-1">
                  {["Hardwood", "Vinyl Plank", "Laminate", "Carpet", "Tile", "Area Rugs"].map((t) => (
                    <Link
                      key={t}
                      href={`/flooring/${t.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-primary/8 text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                    >
                      {t}
                      <ArrowRight size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related posts ─────────────────────────────────────── */}
      <section className="py-20 bg-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-charcoal mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: p.focal }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={`absolute top-3 left-3 ${categoryColors[p.category] ?? "bg-primary"} text-white text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full`}>
                    {p.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {p.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {p.readTime}</span>
                  </div>
                  <h3 className="font-bold text-charcoal text-sm leading-snug mb-3 flex-1">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-primary text-xs font-bold group-hover:gap-3 transition-all mt-auto">
                    Read Article <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

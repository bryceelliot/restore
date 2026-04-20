import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { flooringTypes, getFlooringBySlug, brandDeepLinks } from "@/lib/flooring-data";
import { CheckCircle2, ArrowRight, Phone, ChevronRight } from "lucide-react";
import bp from "@/lib/bp";
import WishlistButton from "@/components/WishlistButton";

interface Props {
  params: Promise<{ type: string }>;
}

/* Map slug → local hero photo — using real showroom shots where available.
 * Tile and linoleum-sheet use stand-ins until we get real photos. */
const typePhotos: Record<string, { src: string; focal: string }> = {
  "hardwood":       { src: "/assets/images/showroom-01.webp",   focal: "center 50%" }, // real hardwood display rack
  "vinyl-plank":    { src: "/assets/images/showroom-06.webp",   focal: "center 50%" }, // real Cascade Luxury Vinyl display
  "laminate":       { src: "/assets/images/showroom-08.webp",   focal: "center 50%" }, // real laminate samples
  "carpet":         { src: "/assets/images/showroom-10.webp",   focal: "center 40%" }, // real carpet display
  "tile":           { src: "/assets/images/showroom-07.webp",   focal: "center 50%" }, // placeholder — need real tile photo
  "area-rugs":      { src: "/assets/images/showroom-04.webp",   focal: "center 45%" }, // real area rugs
  "commercial":     { src: "/assets/images/showroom-02.webp",   focal: "center 50%" }, // Fuzion display — professional look
  "linoleum-sheet": { src: "/assets/images/showroom-05.webp",   focal: "center 50%" }, // placeholder — need real linoleum photo
};

export async function generateStaticParams() {
  return flooringTypes.map((f) => ({ type: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const flooring = getFlooringBySlug(type);
  if (!flooring) return {};
  return {
    title: `${flooring.name} Flooring Kelowna`,
    description: flooring.metaDescription,
    alternates: { canonical: `https://www.kfssflooring.com/flooring/${flooring.slug}` },
    openGraph: {
      title: `${flooring.name} Flooring | Kelowna Flooring Superstore`,
      description: flooring.metaDescription,
      images: typePhotos[flooring.slug]
        ? [{ url: typePhotos[flooring.slug].src, width: 1200, height: 630, alt: `${flooring.name} flooring` }]
        : [],
    },
  };
}

export default async function FlooringTypePage({ params }: Props) {
  const { type } = await params;
  const flooring = getFlooringBySlug(type);
  if (!flooring) notFound();

  const photo = typePhotos[flooring.slug];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-52 lg:pt-44 pb-28 overflow-hidden bg-[#0d1526]">
        {photo && (
          <Image
            src={photo.src}
            alt={`${flooring.name} flooring`}
            fill
            priority
            className="object-cover opacity-28"
            style={{ objectPosition: photo.focal }}
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/72 to-[#0d1526]/35" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/flooring" className="hover:text-white transition-colors">Flooring</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{flooring.name}</span>
          </nav>

          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Samples on Display — Ships in 3–5 Days
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
              {flooring.name}<br />
              <span className="text-accent">Flooring</span>
            </h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">
              {flooring.tagline}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
              <Link href="/estimates" className="btn-primary text-sm">
                Get Free Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:2508607847" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all">
                <Phone size={15} /> (250) 860-7847
              </a>
              <WishlistButton slug={flooring.slug} name={flooring.name} />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Vinyl Plank video */}
      {flooring.slug === "vinyl-plank" && (
        <section className="py-20 bg-[#0d1526]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                See It In Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Waterproof Luxury. Real Results.
              </h2>
            </AnimateOnScroll>
            <div className="rounded-2xl overflow-hidden max-w-3xl mx-auto shadow-2xl shadow-black/50 border border-white/10">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video bg-black"
              >
                <source src={`${bp}/assets/videos/vinylpost.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      )}

      {/* ── Overview ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll direction="right">
              <span className="section-label mb-4">Overview</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4 leading-tight">
                Why Choose {flooring.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed mt-5 text-lg">
                {flooring.longDescription}
              </p>
              <p className="text-gray-500 leading-relaxed mt-4">
                {flooring.installInfo}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                <Link href="/estimates" className="btn-primary text-sm">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="bg-light rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                {photo && (
                  <div className="relative h-48">
                    <Image
                      src={photo.src}
                      alt={`${flooring.name} flooring installed`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: photo.focal }}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-light/80 to-transparent" />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="font-black text-charcoal text-xl mb-5">Key Features</h3>
                  <ul className="space-y-3">
                    {flooring.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 pt-6 border-t border-gray-200">
                    <Link href="/estimates" className="btn-primary text-sm w-full justify-center">
                      Get a Free Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Brands we carry — moved up for prominence ─────────── */}
      {brandDeepLinks[flooring.slug as keyof typeof brandDeepLinks]?.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll className="text-center mb-8">
              <span className="section-label mb-4">Trusted Brands</span>
              <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
                {flooring.name} Brands We Carry
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mt-3 max-w-xl mx-auto">
                Click any brand to browse their {flooring.name.toLowerCase()} collection on the manufacturer&apos;s website.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {brandDeepLinks[flooring.slug as keyof typeof brandDeepLinks]?.map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${b.name}'s ${flooring.name.toLowerCase()} collection`}
                  className="group flex flex-col items-center justify-center bg-light rounded-2xl border border-gray-100 shadow-sm p-6 h-32 hover:border-accent/40 hover:shadow-md transition-all"
                >
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={140}
                    height={44}
                    className="object-contain max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all"
                    unoptimized
                  />
                  <span className="mt-3 text-xs font-bold text-gray-500 group-hover:text-accent transition-colors">
                    {b.name} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Types / Styles ────────────────────────────────────── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-14">
            <span className="section-label mb-4">{flooring.name} Options</span>
            <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
              Styles &amp; Types We Carry
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {flooring.types.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 card-hover h-full border-l-4 border-primary shadow-sm">
                  <h3 className="font-bold text-charcoal text-lg mb-3">{t.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Care & Maintenance ────────────────────────────────── */}
      <section className="py-24 bg-[#0d1526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll direction="right">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                Maintenance Tips
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Caring for Your<br />
                <span className="text-accent">{flooring.name}</span>
              </h2>
              <p className="text-white/55 mt-5 leading-relaxed">
                With the right care, your {flooring.name.toLowerCase()} flooring will
                look beautiful for years. Here&apos;s what our experts recommend:
              </p>
              <ul className="mt-6 space-y-3">
                {flooring.careItems.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-1" />
                    <span className="text-white/65 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.15}>
              <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                  <Phone size={28} className="text-white" />
                </div>
                <h3 className="text-white font-black text-2xl mb-3">Have Questions?</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Our flooring specialists are happy to answer any questions about{" "}
                  {flooring.name.toLowerCase()} flooring — care, installation, pricing, and more.
                </p>
                <a
                  href="tel:2508607847"
                  className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all mb-3"
                >
                  Call (250) 860-7847
                </a>
                <Link
                  href="/estimates"
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all"
                >
                  Get Free Estimate
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>


      {/* ── FAQ ───────────────────────────────────────────────── */}
      {flooring.faqs && flooring.faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: flooring.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <AnimateOnScroll className="text-center mb-12">
                <span className="section-label mb-4">FAQ</span>
                <h2 className="text-2xl sm:text-4xl font-black text-charcoal mt-4">
                  Common Questions About {flooring.name}
                </h2>
              </AnimateOnScroll>
              <div className="space-y-3">
                {flooring.faqs.map((faq, i) => (
                  <AnimateOnScroll key={faq.q} delay={i * 0.07}>
                    <details className="group bg-light rounded-2xl border border-gray-200 overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-bold text-charcoal hover:text-primary transition-colors">
                        <span>{faq.q}</span>
                        <span className="text-gray-400 group-open:rotate-45 transition-transform duration-200 shrink-0 text-2xl leading-none">+</span>
                      </summary>
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                        {faq.a}
                      </div>
                    </details>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Other flooring types ──────────────────────────────── */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl font-black text-charcoal">Explore Other Flooring Types</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {flooringTypes
              .filter((f) => f.slug !== flooring.slug)
              .map((f, i) => (
                <AnimateOnScroll key={f.slug} delay={i * 0.05}>
                  <Link
                    href={`/flooring/${f.slug}`}
                    className="group relative overflow-hidden rounded-xl h-24 block"
                  >
                    {typePhotos[f.slug] && (
                      <Image
                        src={typePhotos[f.slug].src}
                        alt={f.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: typePhotos[f.slug].focal }}
                        sizes="(max-width: 640px) 50vw, 15vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#0d1526]/60 group-hover:bg-primary/70 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <span className="text-white font-bold text-xs text-center leading-tight">{f.name}</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

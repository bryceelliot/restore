import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ArrowRight, Phone, MapPin, ChevronRight, Calendar, Ruler, Clock, Home as HomeIcon, Quote, Star } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.name} — Kelowna Flooring Project`,
    description: p.metaDescription,
    alternates: { canonical: `https://www.kelownaflooringsuperstore.com/projects/${p.slug}` },
    openGraph: {
      title: `${p.name} — Kelowna Flooring Superstore`,
      description: p.metaDescription,
      images: [{ url: p.heroImage, width: 1200, height: 630, alt: p.name }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kelownaflooringsuperstore.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.kelownaflooringsuperstore.com/projects" },
      { "@type": "ListItem", position: 3, name: p.name, item: `https://www.kelownaflooringsuperstore.com/projects/${p.slug}` },
    ],
  };
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: p.description,
    image: p.photos.map((ph) => `https://www.kelownaflooringsuperstore.com${ph.src}`),
    creator: { "@type": "LocalBusiness", name: "Kelowna Flooring Superstore" },
    contentLocation: { "@type": "Place", name: p.neighborhood },
    dateCreated: p.completed,
    ...(p.testimonial && {
      review: {
        "@type": "Review",
        author: { "@type": "Person", name: p.testimonial.author },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: p.testimonial.quote,
        ...(p.testimonial.source && { publisher: { "@type": "Organization", name: p.testimonial.source } }),
      },
    }),
  };

  const others = projects.filter((x) => x.slug !== p.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      <section className="relative pt-52 lg:pt-44 pb-20 overflow-hidden bg-[#0d1526]">
        <Image src={p.heroImage} alt={`${p.name} — Kelowna flooring install`} fill priority className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1526]/96 via-[#0d1526]/72 to-[#0d1526]/40" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-xs sm:text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{p.name}</span>
          </nav>
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <MapPin size={12} /> {p.neighborhood}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">{p.name}</h1>
            <p className="text-white/65 text-lg sm:text-xl mt-5 max-w-2xl leading-relaxed">{p.summary}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: HomeIcon, label: "Home Type",    value: p.homeType },
            { icon: Ruler,    label: "Project Size", value: p.squareFootage },
            { icon: Clock,    label: "Timeline",     value: p.duration },
            { icon: Calendar, label: "Completed",    value: new Date(p.completed).toLocaleDateString("en-CA", { year: "numeric", month: "long" }) },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon size={20} className="mx-auto text-accent mb-2" />
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">{s.label}</p>
              <p className="font-bold text-charcoal text-sm">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description + flooring */}
      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[2fr_1fr] gap-10">
          <AnimateOnScroll direction="right">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal mb-5">About this install</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{p.description}</p>
          </AnimateOnScroll>
          <AnimateOnScroll direction="left" delay={0.1}>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">Flooring Used</p>
              <ul className="space-y-2">
                {p.flooringTypes.map((f) => (
                  <li key={f} className="text-charcoal font-semibold">{f}</li>
                ))}
              </ul>
              <Link href="/estimates" className="mt-6 block text-center bg-accent hover:bg-accent-dark text-white font-bold px-5 py-3 rounded-xl text-sm transition-all">
                Get Yours Quoted <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {p.testimonial && (
        <section className="py-10 sm:py-16 bg-light border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimateOnScroll>
              <article className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Quote className="w-7 h-7 text-accent/40" />
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-charcoal text-base sm:text-lg leading-relaxed">
                  &ldquo;{p.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="font-black text-charcoal text-sm">
                      {p.testimonial.author}
                      {p.testimonial.location && (
                        <span className="text-gray-400 font-normal">
                          {" "}— {p.testimonial.location}
                        </span>
                      )}
                    </div>
                    {p.testimonial.date && (
                      <div className="text-gray-400 text-xs mt-0.5">
                        {p.testimonial.date}
                        {p.testimonial.source && ` · via ${p.testimonial.source}`}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Verified Customer
                  </span>
                </footer>
              </article>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Photo gallery */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-charcoal">Photos from {p.name}</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {p.photos.map((ph, i) => (
              <div key={ph.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group">
                <Image src={ph.src} alt={ph.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw" priority={i < 3} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="py-10 sm:py-16 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-black text-charcoal mb-6">More Recent Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {others.map((o) => (
                <Link key={o.slug} href={`/projects/${o.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover">
                  <div className="relative h-44">
                    <Image src={o.heroImage} alt={o.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-charcoal group-hover:text-primary transition-colors">{o.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{o.neighborhood}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 sm:py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-white">Want a project like this?</h2>
          <p className="text-white/60 text-lg mt-4">Free in-home estimate. We bring samples to you.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/estimates" className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
              Book Free Estimate <ArrowRight size={16} className="inline ml-1" />
            </Link>
            <a href="tel:2508607847" className="flex items-center gap-2 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all">
              <Phone size={17} /> (250) 860-7847
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

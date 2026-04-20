import Link from "next/link";
import { Home, ArrowRight, Phone } from "lucide-react";

const flooringLinks = [
  { name: "Laminate", href: "/flooring/laminate" },
  { name: "Hardwood", href: "/flooring/hardwood" },
  { name: "Carpet", href: "/flooring/carpet" },
  { name: "Vinyl Plank", href: "/flooring/vinyl-plank" },
  { name: "Tile", href: "/flooring/tile" },
  { name: "Area Rugs", href: "/flooring/area-rugs" },
];

export default function NotFound() {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center px-4 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(49,50,144,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center pt-44 lg:pt-32 pb-20">
        <div className="text-8xl sm:text-[10rem] font-black text-primary/20 leading-none select-none mb-4">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-white/50 text-lg mb-10 leading-relaxed">
          Looks like this floor has a hole in it. Let&apos;s get you back on solid ground.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link
            href="/"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Home size={16} /> Back to Home
          </Link>
          <Link
            href="/flooring"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
          >
            Shop Flooring <ArrowRight size={16} />
          </Link>
          <a
            href="tel:2508607847"
            className="flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all hover:bg-white/10"
          >
            <Phone size={16} /> (250) 860-7847
          </a>
        </div>

        <div>
          <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-5">
            Or browse our flooring
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {flooringLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 bg-white/5 hover:bg-primary/20 border border-white/8 hover:border-primary/40 text-white/60 hover:text-white rounded-lg text-sm transition-all"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

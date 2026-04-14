import Image from "next/image";

const brands = [
  { name: "Mohawk",             src: "/assets/images/brands/mohawk.svg",      w: 148, h: 42 },
  { name: "Beaulieu Canada",    src: "/assets/images/brands/beaulieu.jpg",    w: 160, h: 42 },
  { name: "Shaw Floors",        src: "/assets/images/brands/shaw.webp",       w: 130, h: 42 },
  { name: "Grandeur Flooring",  src: "/assets/images/brands/grandeur.svg",    w: 152, h: 42 },
  { name: "Aladdin Commercial", src: "/assets/images/brands/aladdin.svg",     w: 160, h: 42 },
  { name: "Ames Tile",          src: "/assets/images/brands/ames.png",         w: 110, h: 42 },
  { name: "Daltile",            src: "/assets/images/brands/daltile.png",     w: 110, h: 42 },
  { name: "Opus Hardwood",      src: "/assets/images/brands/opus.svg",         w: 188, h: 42 },
  { name: "Godfrey Hirst",      src: "/assets/images/brands/godfrey.png",     w: 200, h: 42 },
  { name: "DreamWeaver",        src: "/assets/images/brands/dreamweaver.svg", w: 196, h: 42 },
  { name: "Fuzion Flooring",    src: "/assets/images/brands/fuzion.jpg",      w: 150, h: 42 },
  { name: "TORLYS",             src: "/assets/images/brands/torlys.svg",      w: 120, h: 42 },
];

const doubled = [...brands, ...brands];

export default function BrandPartners() {
  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <p className="text-gray-400 text-sm font-bold tracking-[0.2em] uppercase">
          Trusted Brands We Carry
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 items-center animate-scroll w-max">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center justify-center px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 shrink-0 h-16"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.w}
                height={brand.h}
                className="object-contain max-h-10 w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Brand {
  name: string;
  logo: string;
  url: string;
}

export interface FlooringType {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  gradient: string;
  accentColor: string;
  features: string[];
  types: { name: string; description: string }[];
  careItems: string[];
  installInfo: string;
  metaDescription: string;
  faqs: FAQ[];
  brands?: Brand[];
}

/* Brand logo paths — used across flooring category pages */
const LOGO = {
  mohawk:      "/assets/images/brands/mohawk.svg",
  shaw:        "/assets/images/brands/shaw.webp",
  beaulieu:    "/assets/images/brands/beaulieu.jpg",
  grandeur:    "/assets/images/brands/grandeur.svg",
  aladdin:     "/assets/images/brands/aladdin.svg",
  ames:        "/assets/images/brands/ames.png",
  daltile:     "/assets/images/brands/daltile.png",
  opus:        "/assets/images/brands/opus.svg",
  godfrey:     "/assets/images/brands/godfrey.png",
  dreamweaver: "/assets/images/brands/dreamweaver.svg",
  fuzion:      "/assets/images/brands/fuzion.jpg",
  torlys:      "/assets/images/brands/torlys.svg",
  cosmos:      "/assets/images/brands/cosmos.svg",
  affiliated:  "/assets/images/brands/affiliated.svg",
};

/* Per-category deep-link URLs — drop visitors straight into the brand's
 * section for that flooring type (rather than the brand home page). */
export const brandDeepLinks = {
  carpet: [
    { name: "Mohawk",          logo: LOGO.mohawk,      url: "https://www.mohawkflooring.com/carpet" },
    { name: "Shaw Floors",     logo: LOGO.shaw,        url: "https://shawfloors.com/flooring/carpet" },
    { name: "Beaulieu Canada", logo: LOGO.beaulieu,    url: "https://beaulieucanada.com/" },
    { name: "DreamWeaver",     logo: LOGO.dreamweaver, url: "https://dreamweavercarpet.com/" },
    { name: "Godfrey Hirst",   logo: LOGO.godfrey,     url: "https://www.godfreyhirst.com/" },
  ],
  hardwood: [
    { name: "Mohawk",          logo: LOGO.mohawk,   url: "https://www.mohawkflooring.com/hardwood" },
    { name: "Shaw Floors",     logo: LOGO.shaw,     url: "https://shawfloors.com/flooring/hardwood" },
    { name: "Grandeur",        logo: LOGO.grandeur, url: "https://grandeurflooring.ca/" },
    { name: "Opus Hardwood",   logo: LOGO.opus,     url: "https://opushardwood.com/" },
    { name: "Fuzion Flooring", logo: LOGO.fuzion,   url: "https://fuzionflooring.com/products/hardwood" },
  ],
  "vinyl-plank": [
    { name: "Mohawk",          logo: LOGO.mohawk,   url: "https://www.mohawkflooring.com/luxury-vinyl-tile" },
    { name: "Shaw Floors",     logo: LOGO.shaw,     url: "https://shawfloors.com/flooring/vinyl" },
    { name: "TORLYS",          logo: LOGO.torlys,   url: "https://www.torlys.com/en-ca/product/residential/luxury-vinyl/" },
    { name: "Beaulieu Canada", logo: LOGO.beaulieu, url: "https://beaulieucanada.com/" },
    { name: "Fuzion Flooring", logo: LOGO.fuzion,   url: "https://fuzionflooring.com/products/vinyl" },
  ],
  laminate: [
    { name: "Mohawk",          logo: LOGO.mohawk, url: "https://www.mohawkflooring.com/laminate" },
    { name: "Shaw Floors",     logo: LOGO.shaw,   url: "https://shawfloors.com/flooring/laminate" },
    { name: "TORLYS",          logo: LOGO.torlys, url: "https://www.torlys.com/en-ca/product/residential/laminate/" },
    { name: "Fuzion Flooring", logo: LOGO.fuzion, url: "https://fuzionflooring.com/products/laminate" },
  ],
  tile: [
    { name: "Daltile",   logo: LOGO.daltile, url: "https://www.daltile.com/" },
    { name: "Ames Tile", logo: LOGO.ames,    url: "https://amestile.com/" },
  ],
  "linoleum-sheet": [
    { name: "Beaulieu Canada", logo: LOGO.beaulieu, url: "https://beaulieucanada.com/" },
    { name: "TORLYS",          logo: LOGO.torlys,   url: "https://www.torlys.com/en-ca/" },
  ],
  "area-rugs": [
    { name: "Cosmos Carpet",        logo: LOGO.cosmos,      url: "https://cosmoscarpets.com/" },
    { name: "Affiliated Weavers",   logo: LOGO.affiliated,  url: "https://www.affiliatedweavers.com/" },
    { name: "Godfrey Hirst",        logo: LOGO.godfrey,     url: "https://www.godfreyhirst.com/" },
    { name: "DreamWeaver",          logo: LOGO.dreamweaver, url: "https://dreamweavercarpet.com/" },
  ],
  commercial: [
    { name: "Aladdin Commercial", logo: LOGO.aladdin, url: "https://www.aladdincommercial.com/" },
    { name: "Shaw Contract",      logo: LOGO.shaw,    url: "https://www.shawcontract.com/" },
    { name: "Mohawk",             logo: LOGO.mohawk,  url: "https://www.mohawkflooring.com/commercial" },
  ],
} as const;

export const flooringTypes: FlooringType[] = [
  {
    slug: "laminate",
    name: "Laminate",
    tagline: "The Look of Hardwood, Built to Last",
    description:
      "A cost-effective flooring that gives you the timeless look of hardwood or tile and stone — with outstanding durability.",
    longDescription:
      "Laminate flooring is one of the most popular choices for Kelowna homeowners who want the beautiful look of hardwood without the higher price tag. Modern laminate technology has advanced dramatically, offering incredibly realistic wood and stone visuals with textures you can feel. It's highly durable, easy to maintain, and perfect for busy households.",
    gradient: "from-amber-900 via-amber-800 to-yellow-900",
    accentColor: "#d97706",
    features: [
      "Highly realistic wood & stone visuals",
      "Scratch and scuff resistant",
      "Easy to clean — just sweep and damp mop",
      "Cost-effective alternative to hardwood",
      "Wide variety of styles, grains & colours",
      "Great for high-traffic areas",
    ],
    types: [
      { name: "Rustic Woods", description: "Mimics distressed wood and barn boards — perfect for a cozy, character-filled space." },
      { name: "Light & Airy Woods", description: "Bright, Scandinavian-inspired tones that open up any room." },
      { name: "Dark Woods", description: "Dramatic finishes that evoke the richness of exotic hardwoods." },
      { name: "Formal Woods", description: "Sleek, smooth designs that emulate the most expensive hardwood species." },
      { name: "Traditional Woods", description: "Classic styles like red oak plank that never go out of style." },
    ],
    careItems: [
      "Sweep or vacuum regularly to remove grit and debris",
      "Wipe up spills immediately with a dry or slightly damp cloth",
      "Use a laminate-specific cleaner — avoid steam mops",
      "Place felt pads under furniture legs",
      "Use area rugs in high-traffic zones",
    ],
    installInfo:
      "Our professional crews handle everything — measurement, old floor removal, and expert installation. Laminate floats over your subfloor for a clean, click-lock installation that's typically completed in a single day.",
    metaDescription:
      "Shop in-stock laminate flooring in Kelowna. Realistic hardwood & stone looks at a fraction of the cost. Expert installation. Call (250) 860-7847.",
    faqs: [
      { q: "How long does laminate flooring last?", a: "Quality laminate typically lasts 15–25 years with proper care. AC3 and AC4 rated laminate is ideal for residential use." },
      { q: "Can laminate flooring be installed over existing flooring?", a: "Yes — laminate can often float over existing hard floors. We'll assess your subfloor during your free estimate." },
      { q: "Is laminate flooring waterproof?", a: "Standard laminate is water-resistant but not waterproof. For wet areas like bathrooms, we recommend Luxury Vinyl Plank instead." },
      { q: "How long does installation take?", a: "Most rooms can be completed in a single day. Larger homes may take 2–3 days depending on scope." },
    ],
  },
  {
    slug: "hardwood",
    name: "Hardwood",
    tagline: "Rich, Natural & Timeless",
    description:
      "Classic flooring that looks even better with age. Hardwood adds warmth, character, and lasting value to any home.",
    longDescription:
      "Nothing compares to the natural beauty and warmth of real hardwood flooring. It's a classic choice that increases your home's resale value while providing decades of beauty. From solid oak planks to exotic species, our Kelowna showroom carries an impressive selection in-stock and available for special order.",
    gradient: "from-stone-800 via-amber-900 to-stone-900",
    accentColor: "#92400e",
    features: [
      "Increases home resale value",
      "Looks better with age — can be refinished",
      "Natural, warm, and inviting aesthetic",
      "Available in dozens of species and stains",
      "Wide plank options for a modern look",
      "Solid and engineered options available",
    ],
    types: [
      { name: "Solid Hardwood", description: "100% natural wood, pre-finished or site-finished. The gold standard in flooring." },
      { name: "Urban & Rustic", description: "Coarser grains (Oak, Ash) with wider planks and natural character marks." },
      { name: "Exotic Hardwood", description: "Dramatic species with deep colour tones and elegant, one-of-a-kind character." },
      { name: "Wood on Walls", description: "Bring the beauty of hardwood to your feature walls for a stunning modern look." },
    ],
    careItems: [
      "Sweep or dust-mop daily in high-traffic areas",
      "Use a hardwood-specific cleaner — never wet-mop",
      "Maintain indoor humidity between 35–55%",
      "Refinish every 7–10 years to restore like-new appearance",
      "Use felt pads under all furniture",
    ],
    installInfo:
      "Our skilled installation crews ensure your hardwood is perfectly acclimated, laid, and finished. We handle subfloor preparation, installation, and any finishing work to leave your floors looking immaculate.",
    metaDescription:
      "Shop hardwood flooring in Kelowna. Solid & engineered hardwood in dozens of species. In-stock & expert installation. (250) 860-7847.",
    faqs: [
      { q: "Can hardwood floors be refinished?", a: "Yes — solid hardwood can be sanded and refinished multiple times, making it a truly lifetime floor. Engineered hardwood can typically be refinished 1–2 times." },
      { q: "Is hardwood suitable for all rooms?", a: "Hardwood is ideal for living areas, bedrooms, and hallways. Avoid installing in bathrooms or below-grade basements where moisture is a concern." },
      { q: "How long does hardwood flooring installation take?", a: "Hardwood needs to acclimate to your home for 3–5 days before installation. The install itself typically takes 1–3 days depending on the room size." },
      { q: "Does hardwood increase home value?", a: "Yes — real hardwood flooring consistently ranks as one of the top home improvements for resale value." },
    ],
  },
  {
    slug: "carpet",
    name: "Carpet",
    tagline: "Soft, Warm & Effortlessly Comfortable",
    description:
      "Stain-resistant, energy-efficient, and endlessly comfortable. Carpet is the number one choice for bedrooms and family rooms across the Okanagan.",
    longDescription:
      "Carpet remains one of the most popular flooring choices for Kelowna homes — and for good reason. It's warm underfoot, quieter than hard floors, and creates a cozy atmosphere in any room. Modern carpet technology offers exceptional stain resistance and durability. We carry major brands including Mohawk, Phenix, and Beaulieu.",
    gradient: "from-violet-900 via-purple-900 to-indigo-950",
    accentColor: "#7c3aed",
    features: [
      "Soft and warm underfoot — perfect for bedrooms",
      "Stain-resistant fibres available",
      "Helps insulate rooms and reduce energy costs",
      "Quieter than hard flooring — great for multi-storey homes",
      "Hypoallergenic options available",
      "Wide range of colours, textures, and pile heights",
    ],
    types: [
      { name: "Textured Carpet", description: "Deep pile with a velvety, plush feel. Ideal for master bedrooms and lower-traffic spaces." },
      { name: "Cut & Loop", description: "Creates depth and tone variation while remaining soft and durable." },
      { name: "Berber", description: "Loop-pile construction — easier to maintain with a crisp, clean look." },
      { name: "Commercial Carpet", description: "Durable options including carpet tiles for custom commercial patterns." },
    ],
    careItems: [
      "Vacuum at least twice per week",
      "Blot spills immediately — never rub",
      "Professional deep cleaning recommended annually",
      "Use entrance mats to reduce dirt and grit tracked in",
      "Rotate furniture occasionally to prevent matting",
    ],
    installInfo:
      "Our installation crews remove your old flooring, prepare the subfloor, and install quality carpet pad and carpet in a clean, professional process. Most rooms are completed in a single day.",
    metaDescription:
      "Shop carpet flooring in Kelowna. Mohawk, Phenix, Beaulieu and more in-stock. Expert carpet installation. Call (250) 860-7847.",
    faqs: [
      { q: "Do you remove old carpet before installing new?", a: "Yes — our installation crews remove and dispose of your existing carpet as part of the installation process." },
      { q: "What's the best carpet for a household with pets?", a: "We recommend stain-resistant nylon or polyester fibres. Patterns and darker tones also help camouflage pet hair between vacuuming." },
      { q: "How long does carpet installation take?", a: "Most rooms are completed in a single day. We'll give you a firm timeline during your free estimate." },
      { q: "What brands of carpet do you carry?", a: "We carry Mohawk, Phenix, Beaulieu, and other leading carpet manufacturers with a wide in-stock selection." },
    ],
  },
  {
    slug: "vinyl-plank",
    name: "Vinyl Plank",
    tagline: "Waterproof Luxury. Zero Compromise.",
    description:
      "Luxury Vinyl Plank (LVP) delivers the look and feel of real wood with 100% waterproof performance — ideal for kitchens, bathrooms, and basements.",
    longDescription:
      "Luxury Vinyl Plank is the fastest-growing flooring category — and it's easy to see why. It's 100% waterproof, scratch-resistant, and available in incredibly realistic wood and stone visuals. Perfect for kitchens, bathrooms, entryways, and basements where moisture is a concern. Great for homes with pets and children.",
    gradient: "from-teal-900 via-cyan-900 to-slate-900",
    accentColor: "#0d9488",
    features: [
      "100% waterproof — ideal for wet areas",
      "Realistic wood and stone textures",
      "Scratch and scuff resistant",
      "Comfortable and quieter underfoot than tile",
      "Pet and child friendly",
      "Ideal for condos and multi-unit buildings",
    ],
    types: [
      { name: "Luxury Vinyl Plank (LVP)", description: "Mimics real wood grain, knots, and distressing. Perfect for any room." },
      { name: "Luxury Vinyl Tile (LVT)", description: "Stone and tile looks in any shape — softer and warmer than real tile." },
    ],
    careItems: [
      "Sweep or vacuum regularly",
      "Mop with a vinyl-safe cleaner — no wax or polish",
      "Avoid prolonged direct sunlight to prevent fading",
      "Use non-staining chair mats under rolling furniture",
      "Place mats at entryways to catch dirt and grit",
    ],
    installInfo:
      "Vinyl plank installs quickly with a floating click-lock system over most existing floors. Our team handles the full installation from prep to final walk-through.",
    metaDescription:
      "Shop waterproof luxury vinyl plank flooring in Kelowna. In-stock LVP & LVT. Expert installation. (250) 860-7847.",
    faqs: [
      { q: "Is luxury vinyl plank truly waterproof?", a: "Yes — 100% waterproof through the core. It's the best choice for kitchens, bathrooms, laundry rooms, and basements." },
      { q: "Can vinyl plank be installed over existing flooring?", a: "In most cases, yes. LVP can float over existing hard surfaces as long as the subfloor is flat and structurally sound." },
      { q: "Is vinyl plank good for homes with dogs?", a: "Absolutely — it's one of the most pet-friendly options. Scratch-resistant, waterproof, and easy to clean." },
      { q: "How thick should my vinyl plank be?", a: "We recommend at least 6mm total thickness for residential use, with a 20 mil wear layer for durability. We'll guide you through the options in-store." },
    ],
  },
  {
    slug: "linoleum-sheet",
    name: "Linoleum Sheet",
    tagline: "Resilient, Eco-Friendly & Built to Last",
    description:
      "Made from natural materials, linoleum sheet flooring is a sustainable, hypoallergenic, and exceptionally durable choice for busy spaces.",
    longDescription:
      "Linoleum is one of the most underrated flooring options on the market. Made primarily from linseed oil, cork, and wood flour, it's naturally anti-bacterial, hypoallergenic, and biodegradable. It's extremely durable, easy to maintain, and available in a huge range of colours and patterns. A fantastic eco-conscious choice.",
    gradient: "from-emerald-900 via-green-900 to-teal-950",
    accentColor: "#059669",
    features: [
      "Made from natural, renewable materials",
      "Naturally anti-bacterial and hypoallergenic",
      "Exceptionally durable and long-lasting",
      "Easy to clean and maintain",
      "Wide range of colours and patterns",
      "Great for kitchens, laundry rooms, and commercial spaces",
    ],
    types: [
      { name: "Sheet Linoleum", description: "Continuous roll installation with minimal seams — ideal for kitchens and laundry rooms." },
      { name: "Linoleum Tile", description: "Modular format for creative pattern installations." },
    ],
    careItems: [
      "Sweep regularly to prevent grit from scratching",
      "Damp mop with a mild cleaner",
      "Apply linoleum polish annually to protect the surface",
      "Avoid harsh chemical cleaners",
      "Wipe spills promptly",
    ],
    installInfo:
      "Sheet linoleum requires expert installation to ensure flat, seam-free results. Our crews are trained in proper adhesive application and seaming techniques.",
    metaDescription:
      "Shop linoleum sheet flooring in Kelowna. Eco-friendly, durable, and hypoallergenic. Expert installation. (250) 860-7847.",
    faqs: [
      { q: "Is linoleum the same as vinyl?", a: "No — linoleum is made from natural materials like linseed oil and cork. Vinyl is petroleum-based. Linoleum is the eco-friendly choice." },
      { q: "How long does linoleum last?", a: "With proper care, linoleum can last 25–40 years — making it one of the longest-lasting flooring options available." },
      { q: "Is linoleum hypoallergenic?", a: "Yes — linoleum is naturally anti-bacterial and resistant to mould and mildew, making it ideal for allergy sufferers." },
      { q: "Can linoleum be repaired if damaged?", a: "Minor scratches can be buffed out with linoleum polish. Larger damage may require a patch — our team can advise." },
    ],
  },
  {
    slug: "tile",
    name: "Tile",
    tagline: "Classic Elegance. A Lifetime of Beauty.",
    description:
      "From ceramic to natural stone, tile flooring offers unmatched durability, easy maintenance, and timeless style for any room.",
    longDescription:
      "Tile is the definition of lasting beauty. Whether you choose affordable ceramic, dense porcelain, or luxurious natural stone, tile flooring will look stunning for decades with minimal upkeep. It's the go-to choice for bathrooms, kitchens, and entryways — and increasingly popular for living areas with radiant heat.",
    gradient: "from-slate-800 via-gray-800 to-zinc-900",
    accentColor: "#64748b",
    features: [
      "Lifetime durability with proper care",
      "Increases home value",
      "100% waterproof — ideal for wet areas",
      "Easy to clean and hypoallergenic",
      "Endless size, shape, and colour options",
      "Compatible with in-floor radiant heating",
    ],
    types: [
      { name: "Ceramic", description: "Most affordable tile — made from natural clay with a glaze finish. Great for walls and floors." },
      { name: "Porcelain", description: "Denser and more water-resistant than ceramic. Suitable for any application." },
      { name: "Marble", description: "Natural stone with timeless luxury. Requires periodic sealing." },
      { name: "Limestone", description: "Warm, earthy tones with a natural sedimentary texture." },
      { name: "Travertine", description: "A limestone variant with distinctive natural pits and veining." },
      { name: "Slate", description: "Natural anti-slip traction with heat-retention properties." },
      { name: "Granite", description: "The hardest, most durable natural stone — perfect for kitchens." },
    ],
    careItems: [
      "Sweep or vacuum to remove grit that scratches grout",
      "Mop weekly with a pH-neutral cleaner",
      "Seal natural stone every 9–12 months",
      "Re-grout as needed to prevent moisture infiltration",
      "Wipe spills promptly, especially on marble",
    ],
    installInfo:
      "Tile installation requires proper subfloor preparation, precise layout planning, and skilled grouting. Our tile experts deliver flawless results every time.",
    metaDescription:
      "Shop tile flooring in Kelowna. Ceramic, porcelain, marble, and natural stone in-stock. Expert installation. (250) 860-7847.",
    faqs: [
      { q: "What's the difference between ceramic and porcelain tile?", a: "Porcelain is denser and less porous than ceramic, making it more water and frost resistant. Porcelain is the better choice for wet areas and outdoor use." },
      { q: "Does tile work with in-floor radiant heating?", a: "Yes — tile is one of the best flooring types for radiant heat. It conducts and holds heat effectively." },
      { q: "How often does natural stone need to be sealed?", a: "Most natural stone (marble, limestone, travertine) should be sealed every 9–12 months to protect against staining and moisture." },
      { q: "How long does tile installation take?", a: "Most tile projects take 2–5 days depending on the size and complexity, including grout cure time." },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    tagline: "Built for Business. Designed for Impact.",
    description:
      "Heavy-duty commercial flooring solutions for offices, retail spaces, restaurants, and institutions across Kelowna and the Central Okanagan.",
    longDescription:
      "Commercial environments demand flooring that can handle heavy foot traffic, wheeled equipment, and the wear and tear of daily business operations — without sacrificing aesthetics. We offer a complete range of commercial flooring solutions, from durable carpet tiles to high-traffic vinyl, polished concrete, and beyond.",
    gradient: "from-gray-900 via-slate-800 to-zinc-900",
    accentColor: "#374151",
    features: [
      "Engineered for high-traffic commercial environments",
      "Slip-resistant options for safety compliance",
      "Acoustic solutions to reduce noise in offices",
      "Commercial carpet tiles for custom patterns",
      "Easy to replace individual tiles if damaged",
      "Professional consultation and project management",
    ],
    types: [
      { name: "Commercial Carpet Tile", description: "Modular tiles for custom patterns — easy to replace damaged sections." },
      { name: "Commercial Vinyl", description: "Heavy-duty sheet and plank vinyl for retail and institutional spaces." },
      { name: "Commercial Laminate", description: "Durable AC4/AC5 rated laminate built for commercial traffic." },
      { name: "Commercial Tile", description: "Porcelain and ceramic options rated for commercial use." },
    ],
    careItems: [
      "Establish a daily cleaning protocol",
      "Use commercial-grade entrance matting systems",
      "Schedule professional deep cleaning quarterly",
      "Address repairs promptly to prevent spread of damage",
    ],
    installInfo:
      "We work directly with business owners, contractors, and property managers to deliver commercial flooring projects on time and on budget. We handle everything from specification to final walkthrough.",
    metaDescription:
      "Commercial flooring in Kelowna. Carpet tile, vinyl, laminate & more for offices, retail & institutions. (250) 860-7847.",
    faqs: [
      { q: "Do you work with contractors and property managers?", a: "Yes — we work directly with builders, contractors, strata councils, and property managers on commercial and multi-unit projects." },
      { q: "Can you handle large commercial flooring projects?", a: "Absolutely. We have experience with offices, retail spaces, restaurants, and institutional buildings of all sizes." },
      { q: "Do you offer commercial pricing?", a: "Yes — we offer volume pricing for commercial projects. Contact us for a custom quote." },
      { q: "How quickly can commercial flooring be installed?", a: "We work around your business hours to minimize disruption. Timeline depends on scope — we'll provide a firm schedule with your quote." },
    ],
  },
  {
    slug: "area-rugs",
    name: "Area Rugs",
    tagline: "Define Your Space. Express Your Style.",
    description:
      "Area rugs add warmth, colour, and personality to any room. Browse our selection to find the perfect complement to your flooring.",
    longDescription:
      "An area rug is one of the most impactful design elements in any room. It defines a seating area, adds warmth over hard floors, reduces noise, and lets you inject colour and pattern into your space. We carry a curated selection of area rugs in a range of sizes, styles, and materials to suit any home.",
    gradient: "from-rose-900 via-pink-900 to-fuchsia-950",
    accentColor: "#be185d",
    features: [
      "Adds warmth and comfort over hard floors",
      "Defines spaces in open-plan living areas",
      "Reduces noise and echo",
      "Available in a wide range of styles and sizes",
      "Protects hard floors from furniture scratches",
      "Easy to swap out for a seasonal refresh",
    ],
    types: [
      { name: "Traditional Rugs", description: "Classic patterns and rich colours for a timeless, formal look." },
      { name: "Contemporary Rugs", description: "Clean lines, abstract patterns, and modern palettes." },
      { name: "Natural Fibre Rugs", description: "Jute, sisal, and wool options for an organic, textured look." },
      { name: "Shag Rugs", description: "Ultra-plush pile for maximum comfort in bedrooms and lounges." },
    ],
    careItems: [
      "Vacuum regularly on both sides",
      "Rotate rugs every 6 months to even wear",
      "Use a quality rug pad to prevent slipping and bunching",
      "Professional cleaning recommended annually",
      "Address spills immediately with a clean cloth",
    ],
    installInfo:
      "Area rugs don't require installation but we recommend a quality rug pad underneath for comfort, grip, and to protect your flooring. We carry rug pads in-store.",
    metaDescription:
      "Shop area rugs in Kelowna. Traditional, contemporary, and natural fibre rugs to complement any flooring. (250) 860-7847.",
    faqs: [
      { q: "What size area rug do I need?", a: "For a living room, all furniture legs should sit on the rug or at least the front legs. For dining rooms, allow 24\" beyond the table on all sides." },
      { q: "Do I need a rug pad?", a: "Yes — a quality rug pad prevents slipping, protects your hard flooring, and adds cushioning underfoot. We carry rug pads in-store." },
      { q: "How do I clean an area rug?", a: "Vacuum regularly, rotate every 6 months, and have it professionally cleaned annually. Blot spills immediately — never rub." },
      { q: "Do you carry custom-size rugs?", a: "We carry a range of standard sizes in-stock. Ask our team about special ordering options for custom dimensions." },
    ],
  },
];

export function getFlooringBySlug(slug: string): FlooringType | undefined {
  return flooringTypes.find((f) => f.slug === slug);
}

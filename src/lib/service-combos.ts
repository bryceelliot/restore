/* Service × city combos. Real curated entries first, plus a programmatic
 * generator that fills in every city × type pairing for full long-tail SEO
 * coverage. Each slug is structured `{service}-{city}` and renders through
 * src/app/[slug]/page.tsx.
 */

export interface ServiceCombo {
  slug: string;
  service: string;
  serviceShort: string;
  city: string;
  citySlug: string;
  flooringTypeSlug?: string;
  heroImage: string;
  metaDescription: string;
  intro: string;
  bullets: string[];
  typicalProject: string;
  priceRange: string;
  timeline: string;
  faqs: { q: string; a: string }[];
}

const TYPES = [
  {
    key: "carpet-installation",
    flooringTypeSlug: "carpet",
    service: "Carpet Installation",
    serviceShort: "carpet install",
    heroImage: "/assets/images/showroom-10.webp",
    bullets: [
      "Plush, twist, berber, commercial loop, and patterned carpet tile in stock",
      "Nylon and polyester face-fibre options — we'll explain the trade-offs on-site",
      "Stair installation specialist — 13–16 step staircases completed in one day",
      "Underpad always included in the line-item quote",
      "Free in-home estimate with no pressure",
    ],
    priceRange: "$4–$8/sqft installed (mid-market). Underpad included.",
    timeline: "1 day per floor on average. Stairs add a full day.",
  },
  {
    key: "hardwood-installation",
    flooringTypeSlug: "hardwood",
    service: "Hardwood Flooring Installation",
    serviceShort: "hardwood install",
    heroImage: "/assets/images/showroom-01.webp",
    bullets: [
      "Engineered hardwood — ideal for the Okanagan's dry winters",
      "Solid hardwood — 3/4\" traditional with proper acclimation",
      "Wide-plank options (7\"+) from Grandeur, Opus, Vidar, Fuzion, Pravada",
      "Full subfloor assessment + moisture testing included",
      "Same crew from measurement through final finish",
    ],
    priceRange: "$8–$18/sqft installed. Engineered lower, solid higher.",
    timeline: "3–5 days for 1,500 sqft main floor. Solid hardwood needs 48–72 hrs acclimation.",
  },
  {
    key: "vinyl-plank-installation",
    flooringTypeSlug: "vinyl-plank",
    service: "Luxury Vinyl Plank Installation",
    serviceShort: "LVP install",
    heroImage: "/assets/images/flooring/vinyl-plank/vinyl-plank-hero.webp",
    bullets: [
      "Rigid-core SPC luxury vinyl plank (100% waterproof)",
      "Click-lock installation over most existing subfloors",
      "Wide-plank, narrow-plank, herringbone patterns available",
      "Quiet underlayment included (IIC-rated for condos)",
      "Works in basements, kitchens, bathrooms, whole-home installs",
    ],
    priceRange: "$5–$9/sqft installed. SPC rigid-core mid-premium.",
    timeline: "1–2 days for 1,200 sqft. Same-day walk-on.",
  },
  {
    key: "laminate-installation",
    flooringTypeSlug: "laminate",
    service: "Laminate Flooring Installation",
    serviceShort: "laminate install",
    heroImage: "/assets/images/showroom-08.webp",
    bullets: [
      "AC3 residential through AC5 commercial ratings",
      "Click-lock floating installation over most subfloors",
      "Realistic wood and stone visuals",
      "Premium attached underpad options available",
      "Typically finished in a single day for a main floor",
    ],
    priceRange: "$4–$7/sqft installed. AC3 lower, AC5 premium higher.",
    timeline: "1 day for most single-floor installs. Same-day walk-on.",
  },
  {
    key: "tile-installation",
    flooringTypeSlug: "tile",
    service: "Tile Installation",
    serviceShort: "tile install",
    heroImage: "/assets/images/flooring/tile/tile-01.webp",
    bullets: [
      "Porcelain, ceramic, natural stone (marble, slate, travertine)",
      "Large-format tile specialists (24\"+)",
      "In-floor heating system integration (electric + hydronic)",
      "Waterproofing membrane for showers and wet zones",
      "Grout sealing included on premium jobs",
    ],
    priceRange: "$9–$16/sqft installed for porcelain; add for waterproofing + heated floors.",
    timeline: "3–5 days per 150 sqft job including grout cure.",
  },
  {
    key: "carpet-tile-installation",
    flooringTypeSlug: "carpet",
    service: "Carpet Tile Installation",
    serviceShort: "carpet tile install",
    heroImage: "/assets/images/projects/commercial-refresh/hallway-after.webp",
    bullets: [
      "Commercial-grade modular carpet tile",
      "Replaceable by the square — perfect for high-traffic areas",
      "Subfloor leveling and prep included",
      "Quick installation with minimal downtime",
      "Patterned and solid options for offices, common areas, basements",
    ],
    priceRange: "$5–$10/sqft installed.",
    timeline: "1–2 days for typical commercial install.",
  },
  {
    key: "stair-flooring-installation",
    flooringTypeSlug: "carpet",
    service: "Stair Flooring Installation",
    serviceShort: "stair flooring install",
    heroImage: "/assets/images/flooring/stairs-after.webp",
    bullets: [
      "Carpeted stairs with proper carpet-wrap technique",
      "Hardwood and luxury vinyl stair treads",
      "Tackless strip + nosing installation",
      "Stair safety + comfort focus",
      "13–16 step staircase typically one full crew day",
    ],
    priceRange: "$50–$100 per step installed (carpet); $80–$150 per step for hardwood/LVP nosings.",
    timeline: "1 full day for a typical 13–16 step staircase.",
  },
];

const CITIES = [
  { name: "Kelowna",       slug: "kelowna" },
  { name: "West Kelowna",  slug: "west-kelowna" },
  { name: "Lake Country",  slug: "lake-country" },
  { name: "Peachland",     slug: "peachland" },
  { name: "Summerland",    slug: "summerland" },
];

/* Curated, hand-written entries — these stay distinct and richer than the
 * generated ones. The generator below skips any (city, type) pair already
 * present here, so we never produce duplicates. */
const curated: ServiceCombo[] = [
  {
    slug: "carpet-installation-kelowna",
    service: "Carpet Installation",
    serviceShort: "carpet install",
    city: "Kelowna",
    citySlug: "kelowna",
    flooringTypeSlug: "carpet",
    heroImage: "/assets/images/showroom-10.webp",
    metaDescription:
      "Kelowna carpet installation — plush, commercial, stairs. In-stock selection, same-crew install. Free estimates across all Kelowna neighbourhoods. Call (250) 860-7847.",
    intro:
      "Kelowna homeowners and property managers choose us for carpet installation because we're the only local shop where the installer that measures is the installer that lays the carpet. Cory — named repeatedly by name in our 5-star Google reviews — leads our carpet crew.",
    bullets: [
      "Plush, twist, berber, commercial loop, and patterned carpet tile in stock",
      "Nylon and polyester face-fibre options — we'll explain the trade-offs on-site",
      "Stair installation specialist — 13–16 step staircases completed in one day",
      "Underpad always included in the line-item quote",
      "Free in-home estimate with no pressure",
    ],
    typicalProject:
      "A 4-bedroom Kelowna home with hardwood on the main floor and new carpet upstairs. We measure Tuesday, material arrives Friday, and Cory's crew completes the install Monday–Tuesday the following week. About $4,500–$7,000 installed for a typical job.",
    priceRange: "$4–$8/sqft installed (mid-market). Underpad included.",
    timeline: "1 day per floor on average. Stairs add a full day.",
    faqs: [
      { q: "How much does carpet installation cost in Kelowna?", a: "Carpet installation in Kelowna runs $4–$8 per square foot installed in 2026, including underpad. Nylon face fibre costs more than polyester; patterned carpet tile for commercial applications runs $6–$10/sqft." },
      { q: "Do you install carpet on stairs in Kelowna?", a: "Yes — staircase carpet installation is a core part of our work. A 13–16 step Kelowna staircase typically takes one full crew day. We use tackless strips and proper carpet-wrap technique so seams don't show on the risers." },
      { q: "What's the best carpet for Kelowna homes?", a: "Twist pile nylon carpet in a neutral tone is the best all-round Kelowna choice — durable, stain-resistant, warm for winters. For high-traffic entries we recommend solution-dyed nylon or commercial-grade carpet tile." },
    ],
  },
  {
    slug: "hardwood-installation-kelowna",
    service: "Hardwood Flooring Installation",
    serviceShort: "hardwood install",
    city: "Kelowna",
    citySlug: "kelowna",
    flooringTypeSlug: "hardwood",
    heroImage: "/assets/images/showroom-01.webp",
    metaDescription:
      "Kelowna hardwood installation — engineered and solid. Wide-plank selection, acclimation, craftsmanship guarantee. Free estimates. Call (250) 860-7847.",
    intro:
      "Hardwood install is our most detail-heavy service — subfloor prep, acclimation, nail spacing, transitions. Our crew (Jessie and Clarke lead) has installed hundreds of Kelowna hardwood floors. Every job is backed by our craftsmanship guarantee plus the manufacturer warranty.",
    bullets: [
      "Engineered hardwood — ideal for Kelowna's dry winters",
      "Solid hardwood — 3/4\" traditional with proper acclimation",
      "Wide-plank options (7\"+) from Grandeur, Opus, Vidar, Fuzion",
      "Full subfloor assessment + moisture testing included",
      "Same crew from measurement through final finish",
    ],
    typicalProject:
      "A 1,500 sqft Kelowna main floor renovation: existing laminate removed, subfloor leveled, wide-plank engineered hardwood installed over 3 days. Typical range $13,500–$21,000 installed.",
    priceRange: "$8–$18/sqft installed. Engineered lower, solid higher.",
    timeline: "3–5 days for 1,500 sqft main floor. Solid hardwood needs 48–72 hrs acclimation.",
    faqs: [
      { q: "How much does hardwood installation cost in Kelowna?", a: "Installed hardwood in Kelowna runs $8–$14/sqft for engineered, $10–$18/sqft for solid in 2026. Wider planks, site-finished solid, and exotic species cost more." },
      { q: "Can I install hardwood in a Kelowna basement?", a: "Engineered hardwood can be installed in a Kelowna basement with a proper moisture barrier. Solid hardwood is not recommended below grade — luxury vinyl plank is a safer choice." },
      { q: "How long does hardwood last in a Kelowna home?", a: "Properly installed hardwood lasts 30+ years in a Kelowna home with humidity control (30–50% RH year-round). Engineered can be sanded and refinished once or twice depending on wear-layer thickness; solid hardwood can be refinished 4–6 times." },
    ],
  },
  {
    slug: "vinyl-plank-installation-kelowna",
    service: "Luxury Vinyl Plank Installation",
    serviceShort: "LVP install",
    city: "Kelowna",
    citySlug: "kelowna",
    flooringTypeSlug: "vinyl-plank",
    heroImage: "/assets/images/flooring/vinyl-plank/vinyl-plank-hero.webp",
    metaDescription:
      "Kelowna luxury vinyl plank installation — waterproof, scratch-resistant, realistic wood looks. In-stock. Same-crew install. Free estimates. (250) 860-7847.",
    intro:
      "LVP is the fastest-growing category in Kelowna for a reason: 100% waterproof, scratch-resistant, wood-look visuals, and installed in a day. We stock rigid-core SPC vinyl plank from Mohawk, TORLYS, Opus Floors, Twelve Oaks, Home's Pros, and Fuzion — all in stock, ready to ship in 3–5 days.",
    bullets: [
      "Rigid-core SPC luxury vinyl plank (100% waterproof)",
      "Click-lock installation over most existing subfloors",
      "Wide-plank, narrow-plank, herringbone patterns available",
      "Quiet underlayment included (IIC-rated for condos)",
      "Works in basements, kitchens, bathrooms, whole-home installs",
    ],
    typicalProject:
      "A 1,200 sqft Kelowna basement refresh — old carpet removed, concrete subfloor leveled, wide-plank LVP installed in 2 days. Typical range $7,200–$10,800 installed.",
    priceRange: "$5–$9/sqft installed. SPC rigid-core mid-premium.",
    timeline: "1–2 days for 1,200 sqft. Same-day walk-on.",
    faqs: [
      { q: "How much does luxury vinyl plank cost to install in Kelowna?", a: "LVP in Kelowna runs $5–$9/sqft installed in 2026 — cheaper than hardwood, more comfortable underfoot than tile, and fully waterproof." },
      { q: "Is LVP a good choice for a Kelowna basement?", a: "Yes — LVP is the single best flooring for a Kelowna basement. It handles the temperature swings of below-grade concrete, is 100% waterproof, and installs over almost any subfloor." },
      { q: "Can luxury vinyl plank be installed over tile?", a: "Yes, in most cases. As long as the tile is in good condition and the floor is level, our crew can float LVP right over it — saving you the demo cost." },
    ],
  },
  {
    slug: "laminate-installation-kelowna",
    service: "Laminate Flooring Installation",
    serviceShort: "laminate install",
    city: "Kelowna",
    citySlug: "kelowna",
    flooringTypeSlug: "laminate",
    heroImage: "/assets/images/showroom-08.webp",
    metaDescription:
      "Kelowna laminate flooring installation — AC4/AC5 premium laminate from Mohawk, TORLYS, Opus, FloorTek, Fuzion. In-stock. Installed in 1–2 days. (250) 860-7847.",
    intro:
      "Modern laminate is dramatically better than the laminate your parents installed. AC4 and AC5 rated premium laminate looks almost identical to hardwood at half the cost — and Kelowna's dry climate loves it. We install over 4 days a week somewhere in the Okanagan.",
    bullets: [
      "AC3 residential through AC5 commercial ratings",
      "Click-lock floating installation over most subfloors",
      "Realistic wood and stone visuals",
      "Premium attached underpad options available",
      "Typically finished in a single day for a main floor",
    ],
    typicalProject:
      "A 1,400 sqft Kelowna rancher — outdated carpet removed, new AC4 wide-plank laminate installed across living/dining/hall in a single day. Typical range $5,600–$9,800 installed.",
    priceRange: "$4–$7/sqft installed. AC3 lower, AC5 premium higher.",
    timeline: "1 day for most single-floor installs. Same-day walk-on.",
    faqs: [
      { q: "How much does laminate flooring cost to install in Kelowna?", a: "Laminate installation in Kelowna runs $4–$7/sqft installed in 2026. AC3 residential-rated is the cheapest; AC4 and AC5 premium laminate costs more but lasts much longer in high-traffic areas." },
      { q: "Is laminate a good choice for a Kelowna home?", a: "Modern AC4 or AC5 laminate is an excellent Kelowna choice — dimensionally stable across the Okanagan's temperature and humidity swings, realistic wood visuals, and a fraction of hardwood's cost." },
      { q: "Can laminate be installed over existing floors?", a: "Yes — laminate floats over most existing hard floors (tile, vinyl, old laminate) as long as the floor is flat and dry. We assess the subfloor during your estimate." },
    ],
  },
  {
    slug: "tile-installation-kelowna",
    service: "Tile Installation",
    serviceShort: "tile install",
    city: "Kelowna",
    citySlug: "kelowna",
    flooringTypeSlug: "tile",
    heroImage: "/assets/images/flooring/tile/tile-01.webp",
    metaDescription:
      "Kelowna tile installation — porcelain, ceramic, natural stone. Daltile + Ames Tile in stock. In-floor heating compatible. Free estimates. (250) 860-7847.",
    intro:
      "Tile is our most craftsmanship-driven category — substrate prep, thinset, layout, grout, sealing. We carry Ceratec, Centura, Tierra Sol, and Ceramstone as our core lines and have installed tile in hundreds of Kelowna kitchens, bathrooms, and entryways. In-floor heat integration is part of the job.",
    bullets: [
      "Porcelain, ceramic, natural stone (marble, slate, travertine)",
      "Large-format tile specialists (24\"+)",
      "In-floor heating system integration (electric + hydronic)",
      "Waterproofing membrane for showers and wet zones",
      "Grout sealing included on premium jobs",
    ],
    typicalProject:
      "A Kelowna primary ensuite: 120 sqft of large-format porcelain, curbless shower with Schluter waterproofing, in-floor heat. 4 days on-site including grout cure and sealing. Typical range $5,400–$11,000 installed.",
    priceRange: "$9–$16/sqft installed for porcelain; add for waterproofing + heated floors.",
    timeline: "3–5 days per 150 sqft job including grout cure.",
    faqs: [
      { q: "How much does tile installation cost in Kelowna?", a: "Tile installation in Kelowna runs $9–$16/sqft installed for porcelain in 2026, $7–$12/sqft for ceramic. Prices include substrate prep, thinset, grout, and basic sealing. Large-format tile and natural stone cost more." },
      { q: "Can you add in-floor heating under new tile in Kelowna?", a: "Yes — electric in-floor heating is a popular add-on for Kelowna bathrooms and kitchens because of our cold winters. Electric mats run $8–$14/sqft installed on top of the tile price." },
      { q: "How long after tile is installed can we walk on it?", a: "24 hours after grouting for light foot traffic, 48 hours for heavy furniture. In-floor heat can be turned on 14 days after grouting per manufacturer recommendations." },
    ],
  },
  {
    slug: "flooring-installation-west-kelowna",
    service: "Flooring Installation",
    serviceShort: "flooring install",
    city: "West Kelowna",
    citySlug: "west-kelowna",
    heroImage: "/assets/images/showroom-06.webp",
    metaDescription:
      "West Kelowna flooring installation — laminate, hardwood, carpet, luxury vinyl plank, tile. Free in-home estimates across Shannon Lake, Glenrosa, Westbank.",
    intro:
      "We cross the bridge to West Kelowna every week — Shannon Lake, Glenrosa, Lakeview Heights, Westbank, Casa Loma. Our Kelowna showroom keeps West Kelowna homeowners out of Vancouver-bound supply runs: everything in stock, installed by the same crew that measured.",
    bullets: [
      "All flooring types — laminate, hardwood, carpet, LVP, tile",
      "Free in-home estimates across every West Kelowna neighbourhood",
      "No travel surcharge — the bridge trip is on us",
      "Builder and renovation schedules matched",
      "WFN lands and Westbank regularly serviced",
    ],
    typicalProject:
      "A Shannon Lake new-build: 1,900 sqft main floor in wide-plank engineered hardwood, carpet upstairs, tile in wet areas. 5 days on-site total.",
    priceRange: "Full-home projects typically $15,000–$35,000 depending on type mix.",
    timeline: "3–5 days for most full-home West Kelowna jobs.",
    faqs: [
      { q: "Do you install in West Kelowna and Westbank?", a: "Yes — West Kelowna, Westbank, and WFN lands are part of our regular service area. Free in-home estimates and no travel surcharge." },
      { q: "What's the best flooring for West Kelowna lakefront homes?", a: "Luxury vinyl plank is the best choice for West Kelowna lakefront homes. It handles higher ambient humidity near the lake, it's 100% waterproof, and comes in wide-plank wood looks that suit modern lake-view architecture." },
    ],
  },
  {
    slug: "flooring-installation-lake-country",
    service: "Flooring Installation",
    serviceShort: "flooring install",
    city: "Lake Country",
    citySlug: "lake-country",
    heroImage: "/assets/images/showroom-08.webp",
    metaDescription:
      "Lake Country flooring installation — Winfield, Oyama, Carr's Landing. In-stock laminate, hardwood, LVP, carpet, tile. Free in-home estimates. (250) 860-7847.",
    intro:
      "Lake Country — Winfield, Oyama, Carr's Landing, The Lakes — is a regular stop for our crews. From orchard rebuilds to Wood Lake waterfront homes, we've installed every flooring type in Lake Country and keep the drive north as part of our routine.",
    bullets: [
      "Every flooring type — we stock them all",
      "Free Lake Country in-home estimates",
      "Waterproof LVP ideal for Wood Lake waterfront homes",
      "Same-week scheduling usually available",
      "No travel surcharge",
    ],
    typicalProject:
      "A Carr's Landing orchard house: 2,200 sqft of waterproof LVP across main floor and basement, carpet in 3 bedrooms. 4 days on-site.",
    priceRange: "Full-home jobs typically $18,000–$38,000.",
    timeline: "3–5 days for most full-home Lake Country projects.",
    faqs: [
      { q: "Do you service all of Lake Country?", a: "Yes — Winfield, Oyama, Carr's Landing, The Lakes, Okanagan Centre. Free in-home estimates and no travel surcharge." },
      { q: "What flooring works best in a Lake Country waterfront home?", a: "Luxury vinyl plank is the top choice for Lake Country waterfront homes — waterproof, humidity-stable, and available in wide-plank wood looks that pair well with modern lake homes." },
    ],
  },
];

/* Programmatic generator for every (city, type) pair NOT in curated. */
function generated(): ServiceCombo[] {
  const have = new Set(curated.map((c) => `${c.citySlug}|${c.slug}`));
  const out: ServiceCombo[] = [];
  for (const t of TYPES) {
    for (const c of CITIES) {
      const slug = `${t.key}-${c.slug}`;
      if (have.has(`${c.slug}|${slug}`) || have.has(`${c.slug}|flooring-installation-${c.slug}`)) continue;
      const priceLine = t.priceRange;
      const tlLine = t.timeline;
      out.push({
        slug,
        service: t.service,
        serviceShort: t.serviceShort,
        city: c.name,
        citySlug: c.slug,
        flooringTypeSlug: t.flooringTypeSlug,
        heroImage: t.heroImage,
        metaDescription: `${t.service} in ${c.name}, BC. In-stock products, same-crew install, free in-home estimate. Call (250) 860-7847.`,
        intro: `${t.service} in ${c.name} — done by the same in-house crew that measures your floor. We've installed thousands of square feet of ${t.serviceShort} across the Okanagan. Free in-home estimate, line-item quote, craftsmanship guarantee.`,
        bullets: t.bullets,
        typicalProject: `A typical ${c.name} ${t.serviceShort} job: free in-home estimate, samples brought to you, in-stock material delivered in 3–5 days, same-crew installation, walkthrough + warranty handover. Most projects finish in ${tlLine.toLowerCase()}.`,
        priceRange: priceLine,
        timeline: tlLine,
        faqs: [
          { q: `Do you offer ${t.serviceShort} in ${c.name}?`, a: `Yes — ${c.name} is part of our regular service area. Free in-home estimates and no travel surcharge.` },
          { q: `How much does ${t.serviceShort} cost in ${c.name}?`, a: `${t.service} pricing in ${c.name} aligns with the broader Kelowna market: ${priceLine}` },
          { q: `How long does ${t.serviceShort} take in a ${c.name} home?`, a: `${tlLine} Subfloor prep and stairs add time.` },
        ],
      });
    }
  }
  return out;
}

export const serviceCombos: ServiceCombo[] = [...curated, ...generated()];

export const getServiceComboBySlug = (slug: string) =>
  serviceCombos.find((c) => c.slug === slug);

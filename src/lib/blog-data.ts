export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  img: string;
  focal: string;
  content: BlogSection[];
  metaDescription: string;
}

export interface BlogSection {
  type: "intro" | "h2" | "h3" | "p" | "ul" | "tip" | "cta";
  text?: string;
  items?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "vinyl-plank-vs-laminate",
    title: "Vinyl Plank vs Laminate: Which is Right for Your Home?",
    excerpt:
      "Two of the most popular flooring choices in Kelowna — but which one is right for your space? We break down the key differences in durability, waterproofing, and cost.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Mar 2026",
    img: "/assets/images/hero-kurang.webp",
    focal: "center 45%",
    metaDescription:
      "Vinyl plank vs laminate flooring — which is right for your Kelowna home? Compare waterproofing, durability, cost, and comfort in this expert guide from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Walk into any flooring showroom in Kelowna and two products dominate the conversation: luxury vinyl plank (LVP) and laminate. Both mimic the look of real hardwood, both are affordable, and both are DIY-friendly. But they are very different products — and choosing the wrong one for your space is a mistake that's expensive to fix.",
      },
      {
        type: "h2",
        text: "The Core Difference: What They're Made Of",
      },
      {
        type: "p",
        text: "Laminate is made from a high-density fiberboard (HDF) core with a photographic wood-look layer and a protective wear layer on top. The HDF core is wood-based, which means it can absorb moisture and swell if it gets wet.",
      },
      {
        type: "p",
        text: "Luxury vinyl plank is made entirely from PVC plastic — top to bottom. There is no wood content whatsoever. The result is a floor that is 100% waterproof through its entire thickness.",
      },
      {
        type: "h2",
        text: "Waterproofing: The Biggest Factor",
      },
      {
        type: "p",
        text: "This is where LVP wins decisively. If you have kids, pets, or a kitchen where spills happen — vinyl plank is the safer bet. Water that sits on laminate for more than a few minutes can seep into the joints and cause the core to swell and buckle. That damage is permanent.",
      },
      {
        type: "p",
        text: "Modern laminate has improved significantly, and many products now have water-resistant coatings. But water-resistant is not waterproof. For bathrooms, laundry rooms, or basements — always choose LVP.",
      },
      {
        type: "tip",
        text: "Pro Tip: Even with LVP, we recommend sealing the perimeter joints in wet areas like bathrooms and laundry rooms for extra protection.",
      },
      {
        type: "h2",
        text: "Durability and Scratch Resistance",
      },
      {
        type: "p",
        text: "Both floors are durable, but in different ways. Laminate typically has a harder surface that resists scratches better — the AC (Abrasion Class) rating system tells you how tough the wear layer is. AC3 is great for residential, AC4 and AC5 handle commercial traffic.",
      },
      {
        type: "p",
        text: "LVP has a wear layer measured in mils (thousandths of an inch). For residential use, look for 12 mil or higher. For pets with nails, go 20 mil or above. A thicker wear layer means more resistance to scratches and dents.",
      },
      {
        type: "h2",
        text: "Feel Underfoot and Sound",
      },
      {
        type: "p",
        text: "Laminate feels firmer and sounds more like real wood when you walk on it. Many customers say it feels more premium. Vinyl plank can feel slightly softer, almost bouncy, especially thinner products. However, vinyl plank with an attached underlayment is much improved.",
      },
      {
        type: "h2",
        text: "Cost Comparison",
      },
      {
        type: "ul",
        items: [
          "Budget laminate: $1.50–$2.50/sq ft",
          "Mid-range laminate: $2.50–$4.00/sq ft",
          "Premium laminate: $4.00–$6.00/sq ft",
          "Budget LVP: $2.00–$3.50/sq ft",
          "Mid-range LVP: $3.50–$5.50/sq ft",
          "Premium LVP: $5.50–$9.00/sq ft",
        ],
      },
      {
        type: "p",
        text: "Installation costs are similar for both — typically $2–$4/sq ft for professional installation in the Kelowna area.",
      },
      {
        type: "h2",
        text: "Our Recommendation for Kelowna Homes",
      },
      {
        type: "p",
        text: "For most Kelowna homeowners, we lean toward LVP as the safer all-around choice. Our climate is dry in summer and our homes deal with tracked-in moisture in winter. The 100% waterproof core removes an entire category of risk.",
      },
      {
        type: "ul",
        items: [
          "Choose LVP for: kitchens, bathrooms, basements, laundry rooms, homes with pets or young children",
          "Choose laminate for: bedrooms, living rooms, dining rooms where moisture is not a concern",
          "Either works for: hallways, home offices, rental properties",
        ],
      },
      {
        type: "cta",
        text: "Not sure which is right for your specific space? Come visit our Kelowna showroom — we have dozens of samples from both categories and our team can help you find the perfect match.",
      },
    ],
  },
  {
    slug: "hardwood-care-okanagan",
    title: "How to Care for Your Hardwood Floors in the Okanagan",
    excerpt:
      "The Okanagan's dry climate creates unique challenges for hardwood flooring. Learn how to maintain proper humidity levels and keep your floors beautiful year-round.",
    category: "Maintenance",
    readTime: "4 min read",
    date: "Feb 2026",
    img: "/assets/images/hero-walnut.webp",
    focal: "center 55%",
    metaDescription:
      "Learn how to care for hardwood floors in Kelowna and the Okanagan's dry climate. Expert tips on humidity control, cleaning, and seasonal maintenance from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Hardwood floors are one of the most beautiful and long-lasting investments you can make in a home. But in the Okanagan, they face a challenge that homeowners in Vancouver or the Lower Mainland rarely deal with: extreme humidity swings. Kelowna's semi-arid climate means your floors work hard year-round — and with the right care, they'll last for generations.",
      },
      {
        type: "h2",
        text: "Why the Okanagan Is Hard on Hardwood",
      },
      {
        type: "p",
        text: "Wood is hygroscopic — it absorbs and releases moisture from the air constantly. In the Okanagan, summer relative humidity can drop below 20%, while winter indoor air can be even drier when you're running forced-air heat. This creates a cycle of expansion and contraction that, over time, can cause gapping between boards, surface checking (tiny cracks), and even cupping.",
      },
      {
        type: "p",
        text: "The target range for indoor relative humidity around hardwood floors is 35–55%. Maintaining this range is the single most important thing you can do for your floors.",
      },
      {
        type: "tip",
        text: "Pro Tip: Pick up a digital hygrometer (under $20 at most hardware stores) and place it near your hardwood. Check it seasonally — you may be surprised how dry your home gets in winter.",
      },
      {
        type: "h2",
        text: "Winter Care: Fighting Dry Air",
      },
      {
        type: "ul",
        items: [
          "Run a whole-home humidifier or room humidifiers — target 35–45% RH",
          "Keep interior doors open to balance humidity across rooms",
          "Avoid cranking the thermostat higher than needed — every degree drier the air gets",
          "Place area rugs in high-traffic areas to protect the surface and reduce static",
          "Do not over-sand or re-coat during winter — the wood may expand in spring",
        ],
      },
      {
        type: "h2",
        text: "Summer Care: Heat and UV",
      },
      {
        type: "ul",
        items: [
          "Use window coverings during peak sun hours — UV rays cause fading and can bleach the finish",
          "Consider UV-filtering window film for south-facing rooms",
          "Run AC or a dehumidifier if humidity rises above 55% (rare in Kelowna, but possible in monsoon periods)",
          "Rearrange furniture and rugs periodically to even out sun exposure",
        ],
      },
      {
        type: "h2",
        text: "Daily and Weekly Cleaning",
      },
      {
        type: "p",
        text: "Dirt and grit are the number one enemy of hardwood finishes — they act like sandpaper underfoot. Here's the right cleaning routine:",
      },
      {
        type: "ul",
        items: [
          "Daily: Sweep or dust-mop with a microfiber mop — traps grit without scratching",
          "Weekly: Vacuum with a hard-floor attachment (no beater bar)",
          "Monthly: Damp mop with a hardwood-specific cleaner (Bona, Pallmann, etc.) — never a wet mop",
          "Never: Steam mops, vinegar, Murphy's Oil Soap, or any product not designed for polyurethane-finished hardwood",
        ],
      },
      {
        type: "h2",
        text: "Dealing with Scratches and Dents",
      },
      {
        type: "p",
        text: "Minor surface scratches can often be addressed with a touch-up marker or wax fill stick matched to your floor's color. Deeper scratches or dents typically require professional screening and recoating — a process where the top layer of finish is lightly abraded and a new finish coat is applied. This is far cheaper than full sanding and refinishing.",
      },
      {
        type: "p",
        text: "Most solid hardwood floors can be fully sanded and refinished 4–6 times over their lifetime. Engineered hardwood can usually be refinished once, depending on the veneer thickness.",
      },
      {
        type: "h2",
        text: "Preventive Measures That Matter",
      },
      {
        type: "ul",
        items: [
          "Felt pads on all furniture legs — replace them when they wear through",
          "Entry mats at every door to capture grit before it reaches the floor",
          "No high heels on hardwood — concentrated point pressure causes dents",
          "Keep pet nails trimmed",
          "Use plywood or Masonite panels when moving heavy appliances across the floor",
        ],
      },
      {
        type: "cta",
        text: "Have questions about caring for your specific hardwood species or finish? Our team at the Kelowna showroom can help — we know these floors and this climate.",
      },
    ],
  },
  {
    slug: "best-basement-flooring-kelowna",
    title: "The Best Flooring for Kelowna Basements",
    excerpt:
      "Basements require special consideration — moisture, temperature fluctuations, and comfort all factor in. Here's what our experts recommend for Kelowna homes.",
    category: "Room Guide",
    readTime: "6 min read",
    date: "Jan 2026",
    img: "/assets/images/showroom-08.webp",
    focal: "center 50%",
    metaDescription:
      "What's the best flooring for a Kelowna basement? Expert recommendations covering moisture, comfort, and budget — from luxury vinyl plank to carpet and engineered hardwood.",
    content: [
      {
        type: "intro",
        text: "Basement flooring is one of the trickiest decisions in any home renovation. Unlike above-grade rooms, basements present unique challenges: ground moisture wicking up through concrete, temperature swings, and the occasional (or not-so-occasional) water intrusion. Get it wrong and you're tearing it all out within a few years. Here's what actually works.",
      },
      {
        type: "h2",
        text: "The Basement Challenge: Moisture",
      },
      {
        type: "p",
        text: "Even finished, dry-looking concrete slabs emit moisture vapor. This is a natural process called moisture vapor transmission (MVT), and it happens in virtually every concrete floor in the Okanagan. Before choosing flooring, do a basic moisture test: tape a piece of plastic sheeting to your concrete slab, seal all four edges, and leave it for 48–72 hours. If you see condensation on the underside, you have meaningful moisture to deal with.",
      },
      {
        type: "tip",
        text: "Pro Tip: For a more precise measurement, ask us about calcium chloride moisture tests — these give you a number (lbs/1000 sq ft/24hrs) that tells you exactly what products are safe to install.",
      },
      {
        type: "h2",
        text: "#1 Pick: Luxury Vinyl Plank (LVP)",
      },
      {
        type: "p",
        text: "LVP is the best all-around basement flooring for Kelowna homes. It's 100% waterproof, installs as a floating floor (no glue to concrete required), handles temperature swings well, and looks fantastic. If water does get in — from a sump pump failure, heavy rain, or a plumbing issue — LVP can often be dried out and reinstalled.",
      },
      {
        type: "ul",
        items: [
          "100% waterproof core — handles moisture vapor and flooding",
          "Floating installation — no bonding to slab required",
          "Softer and warmer underfoot than tile",
          "Wide style selection — wood-look, stone-look, and more",
          "Can be installed over minor floor imperfections",
        ],
      },
      {
        type: "p",
        text: "For basements, choose LVP with a minimum 6 mil wear layer for residential use, or 12 mil if the basement will see heavy use. Look for products rated for below-grade installation — not all LVP is approved for basement use, so always check the manufacturer's specifications.",
      },
      {
        type: "h2",
        text: "#2 Pick: Carpet with Moisture Barrier Underpad",
      },
      {
        type: "p",
        text: "Carpet is the warmest and most comfortable basement flooring option — and it's often the most budget-friendly. The key is using a closed-cell foam underpad (rather than traditional open-cell foam) that acts as a moisture barrier. Closed-cell pads don't absorb water and won't grow mold.",
      },
      {
        type: "p",
        text: "For families using the basement as a rec room, playroom, or home theatre, carpet is hard to beat for comfort. Just ensure your basement has no active moisture issues before installing — carpet is forgiving of vapor transmission with the right pad, but not of flooding.",
      },
      {
        type: "h2",
        text: "#3 Pick: Engineered Hardwood",
      },
      {
        type: "p",
        text: "Engineered hardwood can work in a Kelowna basement, but with caveats. Because it has a real wood veneer on top, it's more dimensionally stable than solid hardwood — but it's not waterproof. It should only be installed in dry, conditioned basements with low moisture vapor readings.",
      },
      {
        type: "p",
        text: "If your basement is consistently dry and you want the warmth and prestige of real wood, engineered hardwood is a viable option. Use a glue-down or floating installation method — never nail-down on a concrete slab.",
      },
      {
        type: "h2",
        text: "What to Avoid in Basements",
      },
      {
        type: "ul",
        items: [
          "Solid hardwood — will cup, gap, and buckle from moisture vapor",
          "Standard laminate — HDF core swells when wet; irreparable damage",
          "Ceramic/porcelain tile — technically fine for moisture, but cold, hard, and unforgiving; also prone to cracking if the slab shifts",
          "Hardwood-look laminates without a moisture barrier underpad",
        ],
      },
      {
        type: "h2",
        text: "Subfloor Considerations",
      },
      {
        type: "p",
        text: "A raised subfloor system (like DRIcore or Barricade) creates an air gap between the concrete and your flooring. This is especially valuable if you have any moisture concerns. These systems add about 1.5\" to your floor height but dramatically reduce the risk of moisture-related flooring failure.",
      },
      {
        type: "cta",
        text: "Not sure what your basement moisture levels are? Come into our showroom at Unit 16, 830 McCurdy Place — we can walk you through the testing process and recommend the right products for your specific situation.",
      },
    ],
  },
  {
    slug: "carpet-buying-guide",
    title: "Carpet Buying Guide: Pile Height, Fibre & More",
    excerpt:
      "Not all carpet is created equal. From pile height to fibre type to density ratings — here's everything you need to know before choosing carpet for your home.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "Dec 2025",
    img: "/assets/images/showroom-10.webp",
    focal: "center 40%",
    metaDescription:
      "Complete carpet buying guide — pile height, fibre types, density ratings, and what to look for. Expert advice from Kelowna Flooring Superstore to help you choose the right carpet.",
    content: [
      {
        type: "intro",
        text: "Carpet is one of those products that looks simple from the outside but has a surprising amount of technical depth once you start shopping. Walk into our showroom and you'll find options ranging from $1.50 to $15+ per square foot — and the difference isn't just thickness. This guide breaks down what actually matters so you can make a smart purchase.",
      },
      {
        type: "h2",
        text: "Fibre Type: The Most Important Decision",
      },
      {
        type: "h3",
        text: "Nylon",
      },
      {
        type: "p",
        text: "Nylon is the gold standard for carpet fibre. It's the most durable, bounces back best after foot traffic (called resilience), and holds dye well for vibrant, lasting color. It costs more than polyester but will outlast it significantly in high-traffic areas. If you have kids, dogs, or a busy household — nylon is almost always worth the extra cost.",
      },
      {
        type: "h3",
        text: "Polyester (PET)",
      },
      {
        type: "p",
        text: "Polyester carpets are extremely soft — often softer than nylon — and are inherently stain-resistant because the fibre is non-porous. They're a great choice for bedrooms or low-traffic areas where softness matters more than durability. The trade-off: polyester mats down under heavy foot traffic faster than nylon and can look worn sooner.",
      },
      {
        type: "h3",
        text: "Triexta (SmartStrand, Sorona)",
      },
      {
        type: "p",
        text: "Triexta is a newer fibre that sits between nylon and polyester — durability close to nylon, softness close to polyester, with outstanding built-in stain resistance. Mohawk's SmartStrand is the most well-known brand. It's a premium option that's become very popular for family homes.",
      },
      {
        type: "h3",
        text: "Wool",
      },
      {
        type: "p",
        text: "Wool is the natural, luxury option. It's soft, durable, flame-resistant, and naturally regulates humidity. It's also significantly more expensive — expect to pay $8–$20/sq ft for quality wool carpet. It requires professional cleaning and is sensitive to certain cleaning chemicals.",
      },
      {
        type: "h2",
        text: "Pile Style: How It Looks and Wears",
      },
      {
        type: "ul",
        items: [
          "Saxony/plush: Dense, smooth, formal look — shows footprints and vacuum marks easily",
          "Frieze (twisted): Tightly twisted fibres with a casual look — very good at hiding footprints",
          "Textured cut pile: Multi-level cut pile that hides traffic patterns well — the most popular residential style",
          "Berber (loop pile): Loops not cut — very durable, great for basements and rec rooms; avoid with pets as claws can snag",
          "Cut-and-loop: Combines cut and looped fibres for patterns — good traffic hiding, stylish",
        ],
      },
      {
        type: "h2",
        text: "Face Weight and Density: What the Numbers Mean",
      },
      {
        type: "p",
        text: "Face weight is the weight of the carpet fibre per square yard (in ounces). More is generally better, but it's only meaningful when combined with density. A carpet with 40 oz face weight and high density will outlast a 60 oz carpet with low density.",
      },
      {
        type: "p",
        text: "Density is calculated by multiplying face weight by 36, then dividing by pile height. A density rating above 2,000 is good for residential; above 3,000 is excellent. Ask to see this number when shopping — good manufacturers publish it.",
      },
      {
        type: "tip",
        text: "Pro Tip: The 'thumb test' — press your thumb hard into the carpet. If you can easily feel the backing, the carpet is too sparse for heavy-traffic areas.",
      },
      {
        type: "h2",
        text: "Underpad: Don't Skip This",
      },
      {
        type: "p",
        text: "The underpad (underlay) dramatically affects how your carpet feels and how long it lasts. A quality underpad adds cushioning, insulation, and absorbs impact so the carpet fibre doesn't wear as quickly. For residential carpet, 8 lb rebond foam at 7/16\" thickness is a solid standard choice. Don't let a contractor install cheap thin pad to save money — it's false economy.",
      },
      {
        type: "h2",
        text: "Matching Carpet to Room",
      },
      {
        type: "ul",
        items: [
          "Master bedroom: Plush or frieze in polyester or nylon — softness is priority",
          "Kids' rooms: Nylon or triexta textured cut pile — durability and stain resistance",
          "Living room: Textured cut pile or frieze in nylon — traffic hiding, durability",
          "Basement: Berber or frieze in nylon with moisture-barrier pad",
          "Stairs: Dense nylon cut pile — high wear area, needs durability",
        ],
      },
      {
        type: "cta",
        text: "Our showroom has over 200 carpet samples across every category. Bring in a photo of your room and our team will help narrow it down to the right pile, fibre, and colour for your home.",
      },
    ],
  },
  {
    slug: "natural-stone-tile-guide",
    title: "Natural Stone Tile: Marble, Travertine, or Granite?",
    excerpt:
      "Natural stone adds unmatched elegance to any space, but each type has unique characteristics. We explain the differences and help you choose the right stone.",
    category: "Tile & Stone",
    readTime: "5 min read",
    date: "Nov 2025",
    img: "/assets/images/showroom-07.webp",
    focal: "center 50%",
    metaDescription:
      "Marble vs travertine vs granite tile — which natural stone is right for your home? Expert guide from Kelowna Flooring Superstore covering durability, maintenance, and best applications.",
    content: [
      {
        type: "intro",
        text: "Natural stone tile brings something manufactured products simply can't replicate: genuine geological character. Every slab is unique, shaped over millions of years, and no two installations look exactly alike. But natural stone also demands more from its owners — it requires sealing, specific cleaning products, and an honest assessment of where it can and can't go. Here's how to navigate the options.",
      },
      {
        type: "h2",
        text: "Marble: The Classic Luxury Choice",
      },
      {
        type: "p",
        text: "Marble is calcite-based limestone that's been recrystallized under heat and pressure. The result is a dense, elegant stone with distinctive veining that ranges from subtle to dramatic. Carrara, Calacatta, and Statuario are the most sought-after varieties.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 3–4 (relatively soft for stone — scratches and etches more easily than granite)",
          "Best for: Master bathrooms, powder rooms, fireplace surrounds, feature walls",
          "Not ideal for: Kitchen floors (acid etching from citrus, coffee, wine), high-traffic hallways",
          "Maintenance: Seal every 6–12 months; clean with pH-neutral stone cleaner only",
          "Cost: Mid to high — $8–$25+/sq ft depending on origin and variety",
        ],
      },
      {
        type: "tip",
        text: "Important: Marble is calcium carbonate — acids etch the surface permanently. Drop a lemon on it and you'll see a dull spot. Use pH-neutral cleaners only and seal religiously.",
      },
      {
        type: "h2",
        text: "Travertine: Warm, Natural, Timeless",
      },
      {
        type: "p",
        text: "Travertine is a form of limestone deposited by mineral springs. Its distinctive look — warm, earthy tones with natural pitting and texture — has been used in architecture since ancient Rome. It has a warmth that polished marble and granite lack.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 3–4 (similar softness to marble)",
          "Best for: Bathrooms, spa-style master suites, Mediterranean-style kitchens, patios",
          "Natural pitting: Unfilled travertine has natural voids that add character; filled travertine has a smoother surface",
          "Maintenance: Seal every 6–12 months; avoid acidic cleaners",
          "Cost: $5–$18/sq ft — often more affordable than marble",
        ],
      },
      {
        type: "h2",
        text: "Granite: The Durable Workhorse",
      },
      {
        type: "p",
        text: "Granite is an igneous rock, formed from cooled magma. It's harder and more resistant than marble or travertine — which is why it's so popular for kitchen countertops. As flooring, it's an exceptional choice for high-traffic areas.",
      },
      {
        type: "ul",
        items: [
          "Hardness: Mohs 6–7 (very hard — resists scratching and etching)",
          "Best for: Kitchen floors, entryways, commercial spaces, high-traffic areas",
          "Finish options: Polished (formal, slippery when wet), honed (matte, better grip), flamed/brushed (textured, most slip-resistant)",
          "Maintenance: Seal once a year; tolerates most cleaning products; very forgiving",
          "Cost: $6–$20/sq ft",
        ],
      },
      {
        type: "h2",
        text: "Slate: The Rustic Contender",
      },
      {
        type: "p",
        text: "Slate is a metamorphic rock with a naturally cleft, textured surface. It's slip-resistant, extremely durable, and has a striking natural aesthetic that suits modern, rustic, and industrial-style homes. Its natural texture means it doesn't require sealing as frequently as other stone types.",
      },
      {
        type: "h2",
        text: "Comparing the Options",
      },
      {
        type: "ul",
        items: [
          "Most elegant: Marble (Calacatta, Statuario)",
          "Most durable: Granite",
          "Most forgiving to maintain: Granite",
          "Most warm and natural: Travertine",
          "Best for wet areas: Slate (most slip-resistant), or honed granite",
          "Most budget-friendly: Travertine, slate",
        ],
      },
      {
        type: "h2",
        text: "Installation Considerations",
      },
      {
        type: "p",
        text: "Natural stone is heavy — ensure your subfloor can handle the load. It requires a flat, solid substrate and professional installation to prevent cracking. Grout selection matters too: epoxy grout is much easier to maintain in wet areas and around stone. Always use a grout that complements your stone's natural coloration.",
      },
      {
        type: "cta",
        text: "We carry a curated selection of natural stone tile at our Kelowna showroom. Come in and feel the difference between finishes and varieties — photos don't do natural stone justice.",
      },
    ],
  },
  {
    slug: "flooring-trends-2026",
    title: "Top Flooring Trends for Kelowna Homes in 2026",
    excerpt:
      "From wide-plank hardwood to patterned tile and ultra-realistic LVP — discover the flooring trends our designers are seeing in Kelowna homes this year.",
    category: "Trends",
    readTime: "4 min read",
    date: "Oct 2025",
    img: "/assets/images/hero-oak.webp",
    focal: "center 40%",
    metaDescription:
      "Top flooring trends for 2026 — wide plank hardwood, warm wood tones, large format tile, realistic LVP, and more. See what Kelowna homeowners are choosing at Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Each year we see distinct shifts in what homeowners are choosing when they come into our Kelowna showroom. 2026 is shaping up to be a year defined by warmth, authenticity, and scale — bigger planks, warmer tones, and flooring that feels genuinely luxurious rather than trying to hide what it is. Here's what's resonating with our customers.",
      },
      {
        type: "h2",
        text: "1. Wide Plank Everything",
      },
      {
        type: "p",
        text: "The plank-width trend has been building for years, but 2026 is seeing it reach new heights. Five-inch planks used to be considered wide; now customers are asking for 7\", 9\", even 12\" widths. This applies to hardwood, engineered hardwood, and LVP equally.",
      },
      {
        type: "p",
        text: "Wide planks make spaces feel larger and more open. They showcase the wood grain beautifully and reduce the number of seams visible in a room. If you're renovating an open-plan main floor, a 7–9\" wide plank in a light to mid-tone wood is one of the most universally stunning choices you can make.",
      },
      {
        type: "h2",
        text: "2. Warm Wood Tones Are Back",
      },
      {
        type: "p",
        text: "The cool grey wood-look trend dominated for nearly a decade, and while it still has its place, 2026 customers are returning to warmth. Walnut, cognac oak, honey, amber, and warm brown tones are what we're selling most. These tones work beautifully with the natural light in Okanagan homes and complement the popular warm-white and greige interior palettes.",
      },
      {
        type: "tip",
        text: "Design Tip: Warm-toned floors pair beautifully with white oak cabinetry, warm white walls, and matte black hardware — one of the most popular Kelowna kitchen combos right now.",
      },
      {
        type: "h2",
        text: "3. Large Format Tile",
      },
      {
        type: "p",
        text: "In tile, bigger is better in 2026. 24×24\" tiles have replaced 12×12\" as the standard, and we're seeing increasing interest in 32×32\" and even 48×48\" large-format porcelain slabs for kitchen floors and feature walls. Large format tiles have fewer grout lines, making spaces feel cleaner and more expansive.",
      },
      {
        type: "p",
        text: "Porcelain tile in concrete, stone, and terrazzo looks is particularly popular — the realistic digital printing technology available today is extraordinary.",
      },
      {
        type: "h2",
        text: "4. Ultra-Realistic Luxury Vinyl Plank",
      },
      {
        type: "p",
        text: "LVP technology has advanced to the point where some products genuinely fool the eye. Embossed-in-register (EIR) technology synchronizes the texture with the printed grain pattern, so the texture of the plank matches what you see. Paired with realistic color variation and longer plank formats, modern LVP is almost indistinguishable from engineered hardwood at a fraction of the price.",
      },
      {
        type: "h2",
        text: "5. Matte and Textured Finishes",
      },
      {
        type: "p",
        text: "High-gloss floors have nearly disappeared from residential design. In 2026, matte, brushed, and wire-brushed finishes dominate hardwood. These finishes hide scratches better, don't show dust and footprints as readily, and feel more authentically natural. Satin finishes (25–35 sheen) are the sweet spot for most homeowners.",
      },
      {
        type: "h2",
        text: "6. Mixing Materials",
      },
      {
        type: "p",
        text: "Open-plan homes are increasingly using material transitions as a design element rather than trying to hide them. Wood-look LVP in the main living area flowing into large-format tile in the kitchen, defined by a clean metal transition strip — this kind of intentional material mixing is sophisticated and practical.",
      },
      {
        type: "h2",
        text: "7. Sustainable and Natural Materials",
      },
      {
        type: "p",
        text: "Environmental consciousness is influencing flooring choices in Kelowna. FSC-certified hardwood, cork, bamboo, and linoleum (which is made from linseed oil, not synthetic materials) are all seeing renewed interest. Customers increasingly want to know where their materials come from and what they're made of.",
      },
      {
        type: "cta",
        text: "Want to see 2026's top trends in person? Our showroom is updated regularly with new arrivals. Come in and we'll show you what's resonating with Kelowna homeowners this season.",
      },
    ],
  },
  {
    slug: "best-flooring-for-pets",
    title: "Best Flooring for Pets: What Actually Holds Up",
    excerpt:
      "Dogs, cats, and claws can destroy the wrong floor fast. We break down the best and worst flooring choices for pet owners — from scratch resistance to easy cleanup.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Apr 2026",
    img: "/assets/images/hero-kurang.webp",
    focal: "center 45%",
    metaDescription:
      "Best flooring for pets in Kelowna — scratch-resistant, waterproof, and easy to clean. Expert advice on LVP, tile, hardwood, and carpet for dog and cat owners.",
    content: [
      {
        type: "intro",
        text: "Pets are hard on floors. Claws scratch. Accidents happen. Water bowls overflow. If you've ever replaced flooring after a dog spent a few years in the house, you know how costly the wrong choice can be. Here's an honest breakdown of how each flooring type holds up to the real demands of pet ownership.",
      },
      {
        type: "h2",
        text: "The Three Things Pet Owners Need to Care About",
      },
      {
        type: "ul",
        items: [
          "Scratch resistance — claws dig in, especially from larger or more active dogs",
          "Waterproofing — accidents, water bowls, and wet paws all introduce moisture",
          "Easy cleaning — fur, dander, and messes need to come up quickly without damaging the surface",
        ],
      },
      {
        type: "h2",
        text: "#1: Luxury Vinyl Plank (LVP) — Best All-Around Choice",
      },
      {
        type: "p",
        text: "LVP is our top recommendation for most pet owners. It's 100% waterproof, so accidents — even ones that sit for a while — won't cause permanent damage. A 20 mil or thicker wear layer resists everyday claw marks well. It's also easy to clean and doesn't trap dander or fur the way carpet does.",
      },
      {
        type: "tip",
        text: "For dogs over 50 lbs or especially active dogs, look for LVP with a 20 mil wear layer minimum. Thinner wear layers (6–12 mil) will show scratches over time.",
      },
      {
        type: "h2",
        text: "#2: Porcelain Tile — Best for Heavy Abuse",
      },
      {
        type: "p",
        text: "Porcelain tile is virtually indestructible — no claw will ever scratch it. It's 100% waterproof, easy to mop, and doesn't retain odors. The downsides: it's cold and hard underfoot, and loud when pets run across it. Grout lines can collect dirt and pet hair, so choose larger format tiles with fewer grout lines.",
      },
      {
        type: "h2",
        text: "#3: Hardwood — Use With Caution",
      },
      {
        type: "p",
        text: "Hardwood floors and dogs are a complicated relationship. The good news: hardwood can be refinished after years of claw marks, restoring it to like-new condition. The bad news: the scratches happen fast with larger dogs, and any urine that reaches the wood can cause deep staining and structural damage.",
      },
      {
        type: "p",
        text: "If you're set on hardwood with pets, choose a harder species (white oak, maple, hickory) with a matte or wire-brushed finish that hides surface marks better. Oil-finished hardwood shows individual scratches less dramatically than polyurethane.",
      },
      {
        type: "h2",
        text: "#4: Laminate — Decent, With Caveats",
      },
      {
        type: "p",
        text: "Modern laminate has a hard surface that resists scratches reasonably well — often better than hardwood. But the HDF core is not waterproof. A pet accident that soaks into the seams can cause swelling that's impossible to repair without replacing the boards. Water-resistant laminate has improved significantly, but it's still a risk in pet households.",
      },
      {
        type: "h2",
        text: "#5: Carpet — Think Carefully",
      },
      {
        type: "p",
        text: "Carpet is warm and comfortable — pets often love it. But it's the hardest floor type to keep truly clean with pets. Odors can work their way into the pad. Urine requires immediate treatment to prevent permanent staining and smell. If you choose carpet in a pet household, nylon fibre with a strong stain warranty and a quality moisture-barrier pad is essential.",
      },
      {
        type: "ul",
        items: [
          "Best for pets: Luxury vinyl plank (20+ mil wear layer), porcelain tile",
          "Good with care: Hardwood (harder species, matte finish), water-resistant laminate",
          "Use caution: Standard laminate, carpet (without moisture-barrier pad)",
        ],
      },
      {
        type: "cta",
        text: "Bring in your pet's breed and habits when you visit our Kelowna showroom — we'll steer you toward products that will hold up to your specific situation.",
      },
    ],
  },
  {
    slug: "engineered-vs-solid-hardwood",
    title: "Engineered Hardwood vs Solid Hardwood: What's the Difference?",
    excerpt:
      "Both are real wood — but they behave very differently. Learn the key differences in construction, stability, installation, and where each one belongs in your home.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "Apr 2026",
    img: "/assets/images/hero-walnut.webp",
    focal: "center 55%",
    metaDescription:
      "Engineered hardwood vs solid hardwood — what's the real difference? Compare stability, moisture tolerance, installation, cost, and refinishing in this expert guide from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Both solid and engineered hardwood are real wood products — but they are built differently and behave differently in your home. The wrong choice for your specific situation can lead to gapping, cupping, or expensive repairs. Here's what you need to know before choosing.",
      },
      {
        type: "h2",
        text: "What Is Solid Hardwood?",
      },
      {
        type: "p",
        text: "Solid hardwood is exactly what the name says: a single, solid piece of wood milled to a consistent thickness (typically 3/4\"). It's the traditional choice — the floors your grandparents had. When they wear down, they can be sanded and refinished multiple times over their lifetime. A solid hardwood floor installed properly can last 100 years.",
      },
      {
        type: "h2",
        text: "What Is Engineered Hardwood?",
      },
      {
        type: "p",
        text: "Engineered hardwood has a real hardwood veneer on top — identical to solid hardwood in terms of what you see and feel — bonded to a plywood core beneath. The cross-ply construction of the core makes it dramatically more dimensionally stable than solid wood.",
      },
      {
        type: "h2",
        text: "The Core Difference: Stability and Moisture",
      },
      {
        type: "p",
        text: "Wood moves — it expands in humid conditions and contracts when dry. Solid hardwood can show significant seasonal movement, especially in dry climates like the Okanagan. Wide planks move more than narrow ones. This is why solid hardwood cannot be installed below grade (basements) and requires careful acclimation.",
      },
      {
        type: "p",
        text: "Engineered hardwood's plywood core resists this movement. It can be installed below grade, over radiant heat, and in spaces where humidity fluctuates. It still needs some acclimation — but it handles challenging conditions much better than solid.",
      },
      {
        type: "tip",
        text: "In Kelowna's dry climate, engineered hardwood is often the smarter choice — the lower humidity levels that cause excessive shrinkage in solid hardwood affect engineered products far less.",
      },
      {
        type: "h2",
        text: "Installation Methods",
      },
      {
        type: "ul",
        items: [
          "Solid hardwood: Nail or staple down over wood subfloor only — cannot be glued to concrete or floated",
          "Engineered hardwood: Can be nailed, stapled, glued down (including to concrete), or floated — far more versatile",
        ],
      },
      {
        type: "h2",
        text: "Refinishing: How Many Times Can You Sand It?",
      },
      {
        type: "p",
        text: "Solid hardwood can typically be sanded and refinished 4–6 times over its life — the 3/4\" thickness gives you plenty of material to work with. Engineered hardwood depends on the veneer thickness: a 2 mm veneer can usually be refinished once; a 4–6 mm veneer can handle 2–3 refinishes.",
      },
      {
        type: "h2",
        text: "Cost Comparison",
      },
      {
        type: "ul",
        items: [
          "Solid hardwood: $6–$18/sq ft depending on species and grade",
          "Engineered hardwood: $5–$16/sq ft — comparable, sometimes less for equivalent appearance",
          "Installation: Similar costs; engineered glue-down can be slightly higher",
        ],
      },
      {
        type: "h2",
        text: "Which One Is Right for You?",
      },
      {
        type: "ul",
        items: [
          "Choose solid hardwood for: Above-grade installations, wood subfloors, classic homes, maximum refinishing potential",
          "Choose engineered hardwood for: Basements, concrete slabs, radiant heat, Okanagan climate, wide planks (7\"+ where solid would move too much)",
          "Either works for: Main floors over wood subfloor in conditioned spaces",
        ],
      },
      {
        type: "cta",
        text: "Our showroom carries both solid and engineered hardwood in a wide range of species and widths. Come in and we'll help you decide which is right for your specific rooms and subfloor situation.",
      },
    ],
  },
  {
    slug: "how-long-does-floor-installation-take",
    title: "How Long Does Floor Installation Take?",
    excerpt:
      "Wondering how long you'll be out of your living room? Here's a realistic timeline for installing every type of flooring — from a single bedroom to a whole-home renovation.",
    category: "Installation",
    readTime: "4 min read",
    date: "Mar 2026",
    img: "/assets/images/showroom-01.webp",
    focal: "center 50%",
    metaDescription:
      "How long does flooring installation take? Realistic timelines for hardwood, vinyl plank, laminate, carpet, and tile — from a single room to a full-home install in Kelowna.",
    content: [
      {
        type: "intro",
        text: "One of the first questions homeowners ask when booking a flooring installation is: how long will I be without my room? The honest answer depends on the type of flooring, the room size, the condition of your subfloor, and how the job is sequenced. Here's a realistic breakdown.",
      },
      {
        type: "h2",
        text: "The Factors That Affect Timeline",
      },
      {
        type: "ul",
        items: [
          "Room size — a 200 sq ft bedroom and a 1,000 sq ft open-plan main floor are very different jobs",
          "Subfloor condition — leveling, patching, or replacing a subfloor can add a full day",
          "Old floor removal — if we're tearing out existing flooring, budget extra time",
          "Acclimation requirements — hardwood and some engineered products need 48–72 hours to acclimate before install",
          "Product type — tile sets slowly; hardwood needs finish dry time; LVP and carpet can be walked on immediately or within hours",
        ],
      },
      {
        type: "h2",
        text: "Luxury Vinyl Plank (LVP)",
      },
      {
        type: "p",
        text: "LVP is the fastest flooring to install. A typical 1,000–1,500 sq ft main floor takes one full day for our crew. Larger homes may take two days. Because LVP is a floating floor and doesn't require adhesive cure time, you can walk on it and move furniture back the same day installation finishes.",
      },
      {
        type: "h2",
        text: "Laminate",
      },
      {
        type: "p",
        text: "Similar to LVP — a standard main floor typically takes one day. Laminate also floats and can be walked on immediately. The main variable is subfloor prep: laminate is less forgiving of uneven subfloors than LVP, so leveling work may add time.",
      },
      {
        type: "h2",
        text: "Engineered and Solid Hardwood",
      },
      {
        type: "p",
        text: "Hardwood installation is more involved. First, the product needs to acclimate in your home for 48–72 hours before installation begins. Installation itself — nail-down over wood subfloor — typically takes 1–2 days for a standard-sized main floor.",
      },
      {
        type: "p",
        text: "If your hardwood is site-finished (sanded and finished after installation rather than pre-finished), add 2–3 days for finish coats and cure time. Pre-finished hardwood can be walked on within hours.",
      },
      {
        type: "h2",
        text: "Carpet",
      },
      {
        type: "p",
        text: "Carpet is typically one of the fastest installations — a crew can carpet 3–4 average bedrooms in a single day. The room is walkable immediately after installation. For a full-home carpet replacement (main floor and upstairs), expect 1–2 days.",
      },
      {
        type: "h2",
        text: "Ceramic and Porcelain Tile",
      },
      {
        type: "p",
        text: "Tile is the most time-intensive installation. Setting the tile takes 1–2 days for a typical kitchen or bathroom. Then the thinset needs to cure — typically 24 hours before grouting. Then grout needs 24–48 hours to cure before the floor is fully usable. Total: plan for 3–5 days from start to walkable.",
      },
      {
        type: "tip",
        text: "Pro Tip: If you're doing multiple rooms, we sequence the work so each area is completed before we move to the next — minimizing the number of rooms you're out of simultaneously.",
      },
      {
        type: "h2",
        text: "Whole-Home Renovation Timeline",
      },
      {
        type: "ul",
        items: [
          "1–2 bedroom apartment or condo: 1–2 days",
          "3-bedroom home (LVP or laminate throughout): 2–3 days",
          "3-bedroom home (hardwood main floor + carpet upstairs): 3–5 days including acclimation",
          "Whole-home tile and hardwood mix: 5–10 days depending on scope",
        ],
      },
      {
        type: "cta",
        text: "Want an accurate timeline for your specific project? Book a free estimate and our team will assess your space, subfloor, and scope — and give you a realistic schedule.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-flooring-installation",
    title: "How to Prepare Your Home for New Flooring",
    excerpt:
      "A little preparation before your flooring crew arrives makes the job faster and protects your belongings. Here's exactly what to do — and what not to do.",
    category: "Installation",
    readTime: "4 min read",
    date: "Feb 2026",
    img: "/assets/images/showroom-05.webp",
    focal: "center 50%",
    metaDescription:
      "How to prepare your home for flooring installation — what to move, what to leave, how to protect your home, and what to expect on installation day. Tips from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "The best flooring installation is a smooth one — and a lot of that smoothness comes from good preparation. Here's what to do before our crew arrives so the job goes efficiently and your home and belongings are protected throughout.",
      },
      {
        type: "h2",
        text: "1. Clear the Rooms",
      },
      {
        type: "p",
        text: "Furniture needs to be out of every room being floored before installation begins. This means sofas, beds, dressers, dining tables — everything. Installers work around furniture when absolutely necessary, but it slows the job, increases the chance of damage, and creates uneven installation conditions.",
      },
      {
        type: "p",
        text: "If you can't move large pieces yourself, ask us in advance — many installers offer furniture moving as an add-on service, but it needs to be arranged ahead of time.",
      },
      {
        type: "h2",
        text: "2. Remove Area Rugs, Curtain Panels, and Fragile Items",
      },
      {
        type: "p",
        text: "Area rugs need to come up so the subfloor can be inspected and the new floor can go underneath. Low-hanging curtain panels can get in the way — consider removing them or tying them up. Remove any fragile décor from rooms adjacent to the work area — vibrations from nailers and saws travel.",
      },
      {
        type: "h2",
        text: "3. Check Doorway Clearances",
      },
      {
        type: "p",
        text: "New flooring adds height. Interior doors may need to be trimmed — typically 1/4\" to 1/2\" — so they clear the new surface. Our installers can trim doors as part of the job; let us know which doors you're concerned about beforehand so we can plan accordingly.",
      },
      {
        type: "tip",
        text: "Pro Tip: New flooring typically raises your floor height by 3/8\" to 3/4\" depending on the product and underlay. If you have appliances with tight height clearances (dishwashers, refrigerators), check before install day.",
      },
      {
        type: "h2",
        text: "4. Acclimate the Product First",
      },
      {
        type: "p",
        text: "For hardwood and some engineered products, the flooring needs to sit inside your home for 48–72 hours before installation. This allows the wood to adjust to your home's temperature and humidity — preventing movement after installation. If we're delivering product in advance, stack it flat in the rooms where it will be installed.",
      },
      {
        type: "h2",
        text: "5. Ensure Access and a Clean Work Path",
      },
      {
        type: "p",
        text: "Our crew will be carrying flooring materials, tools, and equipment in and out throughout the day. Ensure there's a clear path from the entry to the work areas. Move vehicles from the driveway if possible so our van can park close to the entrance.",
      },
      {
        type: "h2",
        text: "6. Plan for Dust and Noise",
      },
      {
        type: "p",
        text: "Flooring installation involves cutting — and cutting creates dust. We use dust-minimizing techniques and clean up after ourselves, but some dust migration is unavoidable. If you're sensitive to dust, plan to be elsewhere during installation. The noise level is significant — nailers and saws are loud — so plan for pets and young children to be out of the home if possible.",
      },
      {
        type: "h2",
        text: "7. Protect Adjacent Rooms",
      },
      {
        type: "p",
        text: "If we're not flooring adjacent rooms, close the doors or hang plastic sheeting to limit dust migration. Let us know if you have new paint or freshly refinished cabinets nearby — we'll take extra precautions.",
      },
      {
        type: "h2",
        text: "On Installation Day",
      },
      {
        type: "ul",
        items: [
          "Be present or available by phone when the crew arrives to walk through the scope",
          "Point out any subfloor concerns you've noticed — squeaks, soft spots, high spots",
          "Let the crew work without hovering — check in at natural break points",
          "Do a walkthrough before the crew leaves to ensure you're satisfied",
        ],
      },
      {
        type: "cta",
        text: "Have questions about what to expect on installation day? Call us at (250) 860-7847 or stop in — we're happy to walk you through the process before your booking.",
      },
    ],
  },
  {
    slug: "choosing-flooring-for-open-plan-homes",
    title: "How to Choose Flooring for an Open-Plan Home",
    excerpt:
      "Open-plan layouts present unique flooring challenges — flow, consistency, and transitions all matter. Here's how to nail it.",
    category: "Design",
    readTime: "5 min read",
    date: "Jan 2026",
    img: "/assets/images/hero-oak.webp",
    focal: "center 40%",
    metaDescription:
      "How to choose flooring for an open-plan home — running the same floor throughout, transition strips, mixing materials, and design tips from Kelowna Flooring Superstore.",
    content: [
      {
        type: "intro",
        text: "Open-plan homes — where the kitchen, dining, and living areas share one continuous space — are one of the most popular layouts in new Kelowna construction and renovations. But they create a flooring challenge: what do you do across a large, connected space? Run one floor throughout? Transition between materials? Here's how to think through it.",
      },
      {
        type: "h2",
        text: "Option 1: One Floor Throughout — The Cleanest Look",
      },
      {
        type: "p",
        text: "The most visually cohesive approach is running a single flooring type through the entire open-plan area. This makes spaces feel larger, eliminates transition strips mid-room, and creates a unified aesthetic. LVP and hardwood both work beautifully this way.",
      },
      {
        type: "ul",
        items: [
          "Best materials for whole-floor continuity: LVP (most practical), engineered hardwood (premium), laminate (budget-friendly)",
          "Run planks lengthwise in the direction of the longest wall or toward the main light source",
          "For LVP and floating floors, you may need expansion breaks in very large areas (typically over 30 ft in either direction)",
        ],
      },
      {
        type: "h2",
        text: "Option 2: Intentional Material Transitions",
      },
      {
        type: "p",
        text: "Using two different materials — wood-look LVP in the living area, large-format tile in the kitchen — can look deliberate and sophisticated when done right. The key is making the transition at a natural boundary: a doorway, an island, or a change in ceiling height.",
      },
      {
        type: "p",
        text: "Avoid transitions in the middle of open spaces with no architectural boundary — it looks arbitrary. And choose materials that complement each other in tone: warm LVP with warm-toned tile, or both in the same cool grey family.",
      },
      {
        type: "tip",
        text: "Design Tip: T-bar transition strips can look cheap. Consider a recessed metal border strip, a flush tile-to-wood transition using a schluter strip, or simply running both materials to a natural threshold.",
      },
      {
        type: "h2",
        text: "Colour and Tone Consistency",
      },
      {
        type: "p",
        text: "In an open-plan space, your flooring is visible from multiple perspectives simultaneously. Warm and cool tones that work in separate rooms can clash when visible together. Bring large samples of both materials and lay them next to each other in your actual space — under your actual lighting conditions.",
      },
      {
        type: "h2",
        text: "Kitchen Considerations",
      },
      {
        type: "p",
        text: "Kitchens have specific demands: spills, dropped items, standing water near the sink and dishwasher. Tile and LVP are the most practical kitchen floor choices. If you run hardwood from the living area into the kitchen, protect it with a mat at the sink and be vigilant about water.",
      },
      {
        type: "h2",
        text: "Plank Direction in Large Spaces",
      },
      {
        type: "p",
        text: "Direction matters in large open-plan spaces. Running planks lengthwise through the space draws the eye down the room and makes it feel longer. Running them toward the main view (a window or outdoor space) leads the eye naturally outward. Diagonal installation is a bold look that works in large spaces but creates more waste.",
      },
      {
        type: "h2",
        text: "Common Mistakes to Avoid",
      },
      {
        type: "ul",
        items: [
          "Too many transitions in one open space — keep it to two materials maximum",
          "Transitions placed arbitrarily in the middle of walkways",
          "Choosing flooring in the store under fluorescent light without testing it at home",
          "Forgetting to account for the height transition between two different floor types",
          "Short planks — in large spaces, use longer planks (48\"+ for LVP; 5\"+ for hardwood) for a more premium look",
        ],
      },
      {
        type: "cta",
        text: "Bring in your floor plan when you visit our showroom — our team can help you visualize how different products and transitions will look in your specific space.",
      },
    ],
  },
  {
    slug: "waterproof-flooring-guide",
    title: "Waterproof Flooring: What It Really Means",
    excerpt:
      "Not all 'waterproof' flooring claims are equal. Learn what's truly waterproof, what's water-resistant, and which products are safe for wet areas in your Kelowna home.",
    category: "Buying Guide",
    readTime: "4 min read",
    date: "Dec 2025",
    img: "/assets/images/showroom-06.webp",
    focal: "center 50%",
    metaDescription:
      "What does waterproof flooring actually mean? The difference between waterproof and water-resistant, which products are safe for bathrooms and basements, and what to avoid.",
    content: [
      {
        type: "intro",
        text: "Walk through any flooring showroom and you'll see 'waterproof' on a lot of labels. But not all waterproof claims mean the same thing — and choosing incorrectly for a bathroom, laundry room, or basement can mean a very expensive mistake. Here's what the terminology actually means.",
      },
      {
        type: "h2",
        text: "Waterproof vs Water-Resistant: The Critical Difference",
      },
      {
        type: "p",
        text: "Water-resistant flooring can handle surface moisture for a limited time — spills that are wiped up quickly, minor splashing, damp mopping. It is not designed to handle standing water, flooding, or moisture vapor coming up through a concrete slab.",
      },
      {
        type: "p",
        text: "Truly waterproof flooring has a core that does not absorb or transmit water — period. If water gets under the floor (flooding, plumbing leak), a waterproof floor can often be dried out and reinstalled without damage. A water-resistant floor cannot.",
      },
      {
        type: "h2",
        text: "What's Truly Waterproof",
      },
      {
        type: "ul",
        items: [
          "100% PVC luxury vinyl plank (LVP) — waterproof through the entire thickness",
          "Porcelain and ceramic tile — the tile itself is waterproof; note that grout is not unless sealed",
          "Sheet vinyl / linoleum — seamless installation means no joints for water to penetrate",
        ],
      },
      {
        type: "h2",
        text: "What's Water-Resistant (Not Waterproof)",
      },
      {
        type: "ul",
        items: [
          "Laminate with water-resistant coating — the core is still HDF; prolonged moisture causes swelling",
          "Engineered hardwood — the veneer can handle surface moisture, but the plywood core will eventually absorb and swell with prolonged exposure",
          "Some 'waterproof' laminate claims — read the fine print; most cover surface moisture only",
        ],
      },
      {
        type: "tip",
        text: "Important: Even truly waterproof LVP has seams. If water gets under the floor, it can migrate under the click-lock joints and sit on the subfloor. In wet areas, seal the perimeter where the floor meets the wall for extra protection.",
      },
      {
        type: "h2",
        text: "Room-by-Room Guide",
      },
      {
        type: "ul",
        items: [
          "Bathroom: LVP or tile only — no laminate, no hardwood",
          "Laundry room: LVP or tile only — washing machine hoses fail, and when they do, water goes everywhere",
          "Basement: LVP strongly preferred; carpet with moisture-barrier pad acceptable in dry basements",
          "Kitchen: LVP or tile ideal; hardwood and laminate acceptable in lower-risk zones away from the sink",
          "Living areas / bedrooms: Any flooring type works — waterproofing is less critical",
        ],
      },
      {
        type: "h2",
        text: "What About Waterproof Underlayment?",
      },
      {
        type: "p",
        text: "Some installers recommend a waterproof underlayment under non-waterproof flooring in moderate-risk areas. This can help with minor moisture vapor transmission from below, but it doesn't make a non-waterproof floor waterproof — if water gets through the joints above, the underlayment only traps it against the core, potentially making damage worse.",
      },
      {
        type: "cta",
        text: "Not sure if your chosen floor is appropriate for your specific area? Bring your floor plan and installation location to our showroom — we'll give you an honest assessment and recommend the right product.",
      },
    ],
  },

  // ── Near-me optimized blog posts ──────────────────────────────────────
  {
    slug: "laminate-flooring-near-me-kelowna",
    title: "Looking for Laminate Flooring Near Me in Kelowna? Start Here.",
    excerpt:
      "Searching 'laminate flooring near me' from your couch in Kelowna? Here's where to find in-stock AC3–AC5 laminate, what it costs installed, and why the showroom on McCurdy Place is your best first stop.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "April 2026",
    img: "/assets/images/showroom-08.webp",
    focal: "center 50%",
    metaDescription:
      "Laminate flooring near me in Kelowna — where to buy in-stock laminate, installed pricing, brand comparison (Mohawk, TORLYS, Opus, Buckwold, FloorTek). By Kelowna Flooring Superstore.",
    content: [
      { type: "intro", text: "If you just typed 'laminate flooring near me' into Google from Kelowna or anywhere in the Central Okanagan, this guide is for you. We'll walk you through where to buy laminate locally, what 2026 pricing looks like, and how to tell AC3 from AC5 so you don't overpay." },
      { type: "h2", text: "Where to find laminate flooring near you in Kelowna" },
      { type: "p", text: "The Kelowna Flooring Superstore showroom at Unit 16, 830 McCurdy Place stocks 8 laminate brands on display: Grandeur, Pontek, Pontek Toucan, Twelve Oaks, Buckwold, Buckwold Next Gen, Home's Pros, and FloorTek. Samples are available to take home overnight. It's a 10-minute drive from Lower Mission, 15 from Glenmore, 5 from Rutland." },
      { type: "h2", text: "What laminate costs installed in Kelowna (2026)" },
      { type: "ul", items: [
        "AC3 residential-rated laminate: $4–5 per sqft installed",
        "AC4 mid-range laminate: $5–6 per sqft installed",
        "AC5 premium / commercial laminate: $6–7 per sqft installed",
        "Underpad, transitions, and removal are priced as separate line items",
      ]},
      { type: "h2", text: "Which laminate fits your home?" },
      { type: "p", text: "For bedrooms and low-traffic rooms, AC3 is plenty. For main floors, hallways, and homes with pets or kids, step up to AC4 or AC5 — the abrasion resistance is dramatically higher and the product lasts 15–20 years in real Kelowna homes." },
      { type: "h2", text: "Can laminate go over existing floors?" },
      { type: "p", text: "In most cases, yes. Laminate is a floating floor and can go over flat tile, vinyl, or old laminate — saving you the demo cost. The subfloor needs to be flat within 3/16\" over 10 feet. We check this during your free in-home estimate." },
      { type: "tip", text: "Searching 'laminate near me' after hours? The showroom is open Mon/Tue/Thu/Fri 9–5, Wednesday 9–2, Saturday 10–2. Book a Saturday visit and bring measurements — we can put together a ballpark quote while you're here." },
      { type: "cta", text: "Ready to see laminate samples in person in Kelowna? Drop by the showroom or call (250) 860-7847 to book a free in-home estimate." },
    ],
  },

  {
    slug: "hardwood-flooring-near-me-kelowna",
    title: "Hardwood Flooring Near Me in Kelowna — What to Know Before You Shop",
    excerpt:
      "Hardwood buyers across Kelowna, West Kelowna, and Lake Country all ask the same questions. Here's what to look for, what to pay, and which brands we stock.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "April 2026",
    img: "/assets/images/showroom-01.webp",
    focal: "center 50%",
    metaDescription:
      "Hardwood flooring near me in Kelowna — engineered vs solid, wide-plank brands (Grandeur, Opus, Vidar, Pravada), Okanagan climate tips, installed pricing 2026.",
    content: [
      { type: "intro", text: "'Hardwood flooring near me' is one of the most searched flooring terms in Kelowna, and for good reason — hardwood is still the gold standard for resale value in Okanagan homes. Here's what to look for when shopping locally." },
      { type: "h2", text: "Engineered vs solid in a Kelowna home" },
      { type: "p", text: "Kelowna's climate swings from dry 35°C summers to -15°C winters with aggressive humidity cycles. That makes engineered hardwood the safer choice for 90% of homes — the cross-layer plywood core won't cup or gap the way solid hardwood can. Solid hardwood is still the right call for heritage homes and high-end rebuilds with active humidity control (30–50% RH year round)." },
      { type: "h2", text: "Hardwood brands in stock at our Kelowna showroom" },
      { type: "ul", items: [
        "Grandeur Wood — Canadian-made wide-plank engineered hardwood",
        "Opus Wood — classical-look engineered hardwood with deep textures",
        "Vidar Wood — engineered hardwood from the West Coast",
        "FloorTek Wood — engineered hardwood priced for real Kelowna budgets",
        "Fuzion Wood — premium engineered hardwood with beautiful stains",
        "Pravada Wood — boutique engineered hardwood, wide plank",
      ]},
      { type: "h2", text: "Installed hardwood pricing in Kelowna (2026)" },
      { type: "ul", items: [
        "Engineered hardwood: $8–$14 per sqft installed",
        "Solid hardwood: $10–$18 per sqft installed",
        "Wide-plank premium lines (7\"+ widths): add $2–$4 per sqft",
        "Staircase installation: $80–$150 per step for hardwood treads with nosings",
      ]},
      { type: "h2", text: "Which Kelowna neighbourhoods suit hardwood?" },
      { type: "p", text: "Hardwood performs beautifully in Lower Mission, Upper Mission, Glenmore, Kettle Valley, and Black Mountain homes with good humidity control. For Lake Country and Peachland waterfront properties, we often recommend engineered hardwood or luxury vinyl plank instead because of ambient moisture." },
      { type: "tip", text: "Wide-plank hardwood (7\" and up) is the 2026 Kelowna trend — it makes rooms feel larger and reads more modern than traditional 3.25\" strip hardwood." },
      { type: "cta", text: "Visit our Kelowna showroom to see real hardwood samples from 6 brands side-by-side. Or book a free in-home estimate — we bring samples to you." },
    ],
  },

  {
    slug: "vinyl-plank-near-me-kelowna",
    title: "Luxury Vinyl Plank Near Me in Kelowna — The 2026 Guide",
    excerpt:
      "Why LVP is the fastest-growing flooring category in Kelowna — what to look for, which brands to shop, and how much it costs installed.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "April 2026",
    img: "/assets/images/flooring/vinyl-plank/vinyl-plank-hero.webp",
    focal: "center 60%",
    metaDescription:
      "Luxury vinyl plank near me in Kelowna — waterproof LVP from TORLYS, Beaulieu, Fuzion, Grandeur, HTBC, Monterey, Magna, Kennedy. Installed pricing + how to choose.",
    content: [
      { type: "intro", text: "Luxury vinyl plank (LVP) has quietly become the #1 flooring sold in Kelowna in 2026. It's waterproof, scratch-resistant, realistic-looking, and ships in 3–5 days from stock. Here's where to find it locally and what to look for." },
      { type: "h2", text: "Why LVP dominates Kelowna in 2026" },
      { type: "p", text: "Three reasons: it's 100% waterproof (critical for Kelowna basements and kitchens), it handles the Okanagan's dry winters without gapping, and modern embossed-in-register surfaces look nearly indistinguishable from real hardwood at half the price." },
      { type: "h2", text: "LVP brands in stock at our Kelowna showroom" },
      { type: "ul", items: [
        "TORLYS Vinyl — Canadian LVP leader with built-in CorkPlus underlayment",
        "Beaulieu Vinyl — deep embossing, strong warranties",
        "Fuzion Vinyl — premium rigid-core LVP",
        "FloorTek Vinyl — budget-friendly waterproof LVP",
        "Grandeur Vinyl — made in Canada, wide-plank options",
        "HTBC Vinyl — commercial-grade wear layer for busy Kelowna homes",
        "Monterey Vinyl + Magna Vinyl — premium specialty lines",
        "Kennedy Vinyl — stone-core LVP, best for Kelowna basements",
      ]},
      { type: "h2", text: "Installed LVP pricing in Kelowna (2026)" },
      { type: "ul", items: [
        "Entry SPC (stone polymer composite): $5–6 per sqft installed",
        "Mid-range 20-mil wear layer: $6–8 per sqft installed",
        "Premium 22-mil+ wear layer: $8–9 per sqft installed",
        "Kelowna basements with concrete moisture testing add ~$1 per sqft",
      ]},
      { type: "h2", text: "Best rooms for LVP in a Kelowna home" },
      { type: "p", text: "Basements (unbeatable choice), kitchens, bathrooms, mudrooms, laundry rooms, and full-home installs. If you have pets, children, or live near the lake, LVP is almost always the right answer." },
      { type: "tip", text: "Kelowna homeowners searching 'vinyl plank near me' at night: we'll hold samples for morning pickup. Text (250) 860-7847 with your email and preferred pickup time." },
      { type: "cta", text: "Come see all 9 LVP brands on display in Kelowna. Showroom open Mon/Tue/Thu/Fri 9–5. Or book a free in-home estimate — we bring samples to you." },
    ],
  },

  {
    slug: "carpet-near-me-kelowna",
    title: "Carpet Near Me in Kelowna — In-Stock Brands, Prices, and Install",
    excerpt:
      "Soft carpet for a Kelowna bedroom, stairs, or rental unit — here's where to find it, what it costs, and which fibre to choose.",
    category: "Buying Guide",
    readTime: "4 min read",
    date: "April 2026",
    img: "/assets/images/showroom-13.webp",
    focal: "center 50%",
    metaDescription:
      "Carpet near me in Kelowna — Beaulieu, DreamWeaver, Godfrey Hirst, Nature's Carpet, Gulistan in stock. Installed pricing + staircase install guide.",
    content: [
      { type: "intro", text: "Despite what the internet says, carpet isn't dead — especially in Kelowna bedrooms where bare feet meet cold winter floors. Here's your local carpet shopping guide." },
      { type: "h2", text: "Carpet brands we carry in Kelowna" },
      { type: "ul", items: [
        "Beaulieu Carpet — broadloom and patterned",
        "DreamWeaver Carpet — stain-resistant polyester lines",
        "Godfrey Hirst Carpet — premium Australian-style wool and nylon",
        "Nature's Carpet — eco-friendly wool",
        "Gulistan (FloorTek) — residential broadloom at budget pricing",
      ]},
      { type: "h2", text: "Installed carpet pricing in Kelowna (2026)" },
      { type: "ul", items: [
        "Entry polyester broadloom: $4–5 per sqft installed (including underpad)",
        "Mid-range nylon broadloom: $5–7 per sqft installed",
        "Premium wool or solution-dyed nylon: $7–10 per sqft installed",
        "Stair installation: $50–$100 per step — a 14-step staircase is a full day",
      ]},
      { type: "h2", text: "Which fibre for a Kelowna home?" },
      { type: "p", text: "Nylon is the most durable choice for high-traffic areas. Polyester is softer and more stain-resistant to water-based spills but matts faster in traffic lanes. Solution-dyed nylon is the best of both worlds for entries and stairs." },
      { type: "tip", text: "Searching 'carpet install near me' for a rental property in Kelowna? Ask about our rental-grade bundles — polyester broadloom + basic underpad, installed, turnkey." },
      { type: "cta", text: "Walk through carpet samples at our Kelowna showroom or call (250) 860-7847 — we'll send a sample bundle to your door in most Kelowna neighbourhoods." },
    ],
  },

  {
    slug: "tile-flooring-near-me-kelowna",
    title: "Tile Near Me in Kelowna — Porcelain, Ceramic, and Natural Stone",
    excerpt:
      "From bathroom renos to full kitchen makeovers, here's where to shop for tile in Kelowna and what to expect for installation in 2026.",
    category: "Tile & Stone",
    readTime: "5 min read",
    date: "April 2026",
    img: "/assets/images/flooring/tile/tile-01.webp",
    focal: "center 50%",
    metaDescription:
      "Tile flooring near me in Kelowna — Ceratec, Centura, Tierra Sol, Ceramstone C&S. Installed pricing + in-floor heating + large-format specialists.",
    content: [
      { type: "intro", text: "Tile is the most craftsmanship-driven category we install — and the most expensive to get wrong. Here's what you need to know before you buy tile in Kelowna." },
      { type: "h2", text: "Tile brands we stock at our Kelowna showroom" },
      { type: "ul", items: [
        "Ceratec — Canadian-made porcelain with stone looks",
        "Centura — broad catalog, 5-star warranty network",
        "Tierra Sol — boutique designer tile",
        "C&S / Ceramstone — wide price range from builder-grade to premium",
      ]},
      { type: "h2", text: "Installed tile pricing in Kelowna (2026)" },
      { type: "ul", items: [
        "Porcelain tile (material + install): $9–16 per sqft",
        "Ceramic tile (material + install): $7–12 per sqft",
        "Natural stone (marble, slate, travertine): $14–25 per sqft",
        "Large-format tile (24\"+): add $2–3 per sqft for install",
        "Waterproofing membrane for wet zones: $3–5 per sqft",
        "Electric in-floor heating: +$8–14 per sqft",
      ]},
      { type: "h2", text: "In-floor heating with tile" },
      { type: "p", text: "With Kelowna winters, heated tile floors in bathrooms and entryways are a luxury that pays for itself in daily comfort. We coordinate the electrician scheduling so the dedicated 240V circuit lands on the right day. The mat is laid + embedded in self-leveling compound the day before tile." },
      { type: "tip", text: "Tile takes longer than any other flooring — a 120 sqft bathroom takes 3–5 days on-site including grout cure and sealing. Plan accordingly." },
      { type: "cta", text: "See our full tile wall in person at the Kelowna showroom. Or book a free in-home estimate for your bathroom, kitchen, or entry — we measure, quote, and coordinate everything." },
    ],
  },
];

export const categoryColors: Record<string, string> = {
  "Buying Guide": "bg-primary",
  "Maintenance": "bg-[#243566]",
  "Room Guide": "bg-charcoal",
  "Tile & Stone": "bg-[#2d4a7a]",
  "Trends": "bg-accent",
  "Installation": "bg-[#1a3a2a]",
  "Design": "bg-[#4a2d7a]",
};

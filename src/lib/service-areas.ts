export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  drivingTime: string;
  heroImage: string;
  tagline: string;
  intro: string;
  neighborhoods: string[];
  whyLocal: string[];
  testimonial: { quote: string; name: string } | null;
  faqs: { q: string; a: string }[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "kelowna",
    name: "Kelowna",
    region: "Central Okanagan",
    drivingTime: "We're based in Kelowna — same-day site visits.",
    heroImage: "/assets/images/service-areas/kelowna.webp",
    tagline: "Kelowna's in-stock flooring showroom on McCurdy Place.",
    intro:
      "We've been Kelowna's hands-on flooring shop for more than 30 years. Our McCurdy Place showroom carries hundreds of in-stock samples — laminate, hardwood, carpet, luxury vinyl plank, tile, area rugs — all tested on real Kelowna homes. Our installers live here, work here, and back every floor with a craftsmanship guarantee.",
    neighborhoods: [
      "Lower Mission",
      "Upper Mission",
      "Glenmore",
      "Rutland",
      "Dilworth",
      "Kettle Valley",
      "Black Mountain",
      "Quail Ridge",
      "Downtown Kelowna",
      "South Pandosy",
    ],
    whyLocal: [
      "Kelowna's climate swings from dry hot summers to freezing winters — we only stock flooring rated for it.",
      "Free in-home estimates anywhere inside Kelowna city limits.",
      "Same-crew installation — the same team that measured your floor installs it.",
      "Local warehouse means no 6-week backorder waits — most floors ship in 3–5 days.",
    ],
    testimonial: {
      quote:
        "Selina and Shaun were incredibly helpful. Installation by Jessie and Clarke went above and beyond. Workmanship was excellent and the finished result looks amazing.",
      name: "Jenni I., Kelowna",
    },
    faqs: [
      {
        q: "Do you service all of Kelowna?",
        a: "Yes — we serve every Kelowna neighbourhood from Lower Mission and Kettle Valley to Glenmore, Rutland, Black Mountain, and everywhere in between. Free in-home estimates city-wide.",
      },
      {
        q: "How long does flooring installation take in a Kelowna home?",
        a: "Most single-room installs wrap in one day. A full-home floor replacement in a typical Kelowna home takes 2–4 days depending on square footage and subfloor prep.",
      },
      {
        q: "What's the best flooring for Kelowna's climate?",
        a: "Luxury vinyl plank and engineered hardwood handle Kelowna's dry summers and cold winters best. Our team will walk you through what fits your specific home.",
      },
    ],
  },
  {
    slug: "west-kelowna",
    name: "West Kelowna",
    region: "Central Okanagan",
    drivingTime: "15 min across the William R. Bennett Bridge.",
    heroImage: "/assets/images/service-areas/west-kelowna.webp",
    tagline: "Flooring installation across West Kelowna & Westbank.",
    intro:
      "We cross the bridge to West Kelowna every week — from Shannon Lake to Westbank First Nation communities, Glenrosa to Lakeview Heights. Our Kelowna showroom keeps West Kelowna homeowners out of Vancouver-bound supply runs: everything you need is in stock and ready to install.",
    neighborhoods: [
      "Shannon Lake",
      "Glenrosa",
      "Lakeview Heights",
      "Rose Valley",
      "Westbank",
      "Smith Creek",
      "Boucherie",
      "Casa Loma",
    ],
    whyLocal: [
      "West Kelowna's new-build and renovation market moves fast — we match builder-grade timelines.",
      "Free in-home estimates across every West Kelowna neighbourhood.",
      "Lakeside humidity matters — we spec hardwood and engineered products that hold up.",
    ],
    testimonial: {
      quote:
        "We replaced all the flooring in our home — hardwood in the main areas and carpet in the bedrooms. The crew was respectful of our home. Very happy customers.",
      name: "David & Carol P., West Kelowna",
    },
    faqs: [
      {
        q: "Do you install in West Kelowna and Westbank?",
        a: "Yes — West Kelowna, Westbank, and WFN lands are all within our regular service area. Free in-home estimates.",
      },
      {
        q: "Is the drive from Kelowna factored into the quote?",
        a: "No. West Kelowna is a short trip across the bridge — there's no travel surcharge on our estimates.",
      },
    ],
  },
  {
    slug: "lake-country",
    name: "Lake Country",
    region: "North Okanagan",
    drivingTime: "25 min north on Highway 97.",
    heroImage: "/assets/images/service-areas/lake-country.webp",
    tagline: "Lake Country flooring — Winfield, Oyama, Carr's Landing.",
    intro:
      "From Wood Lake waterfront homes in Oyama to the orchards of Carr's Landing, Lake Country homeowners choose us for one reason: we show up. We measure, we quote, we install — and we don't disappear between steps. If you're north of Kelowna, we're a short hop up Highway 97.",
    neighborhoods: ["Winfield", "Oyama", "Carr's Landing", "Okanagan Centre", "The Lakes", "Predator Ridge area"],
    whyLocal: [
      "Lake Country waterfront homes need moisture-smart flooring — ask us about waterproof luxury vinyl.",
      "We handle Lake Country new-build and renovation schedules with same-week availability.",
      "Free in-home estimates across all Lake Country neighbourhoods.",
    ],
    testimonial: {
      quote:
        "Absolutely love our new hardwood floors! The installation was flawless and completed in one day. Our home looks completely transformed.",
      name: "Michelle K., Lake Country",
    },
    faqs: [
      {
        q: "Do you drive up to Lake Country for estimates?",
        a: "Yes — all of Lake Country including Winfield, Oyama, and Carr's Landing. Estimates are free and we usually book within the week.",
      },
      {
        q: "What about moisture from the lakes?",
        a: "For waterfront homes, we recommend waterproof luxury vinyl plank for main areas. We'll assess your subfloor humidity during the estimate.",
      },
    ],
  },
  {
    slug: "peachland",
    name: "Peachland",
    region: "Central Okanagan",
    drivingTime: "30 min south along Okanagan Lake.",
    heroImage: "/assets/images/service-areas/peachland.webp",
    tagline: "Flooring installation for Peachland lakefront & hillside homes.",
    intro:
      "Peachland's mix of waterfront condos, hillside rebuilds, and family homes keeps us busy every month. We've flooring for every Peachland build type — from soft plush carpet to wide-plank engineered hardwood — and we handle every step of the job.",
    neighborhoods: ["Peachland Downtown", "Ponderosa", "Somerset", "Beach Avenue", "Trepanier"],
    whyLocal: [
      "Hillside homes often have older subfloors — our crews handle leveling and prep as part of the install.",
      "Free Peachland in-home estimates, usually within 48 hours.",
      "Strata-friendly installation scheduling for condo buildings.",
    ],
    testimonial: null,
    faqs: [
      {
        q: "Do you install in Peachland condos and stratas?",
        a: "Yes — we regularly install in Peachland strata buildings and coordinate with property management on noise-hour windows.",
      },
    ],
  },
  {
    slug: "summerland",
    name: "Summerland",
    region: "South Okanagan",
    drivingTime: "45 min south of Kelowna.",
    heroImage: "/assets/images/service-areas/summerland.webp",
    tagline: "Summerland flooring installation — orchards to lakefront.",
    intro:
      "Summerland is worth the drive. We make regular trips south to install for Summerland homeowners — from Trout Creek rebuilds to orchards off Prairie Valley. In-stock inventory means your Summerland project doesn't wait on big-city suppliers.",
    neighborhoods: ["Trout Creek", "Prairie Valley", "Garnet Valley", "Jones Flat", "Downtown Summerland"],
    whyLocal: [
      "Free Summerland estimates — we cover the drive.",
      "Our installers carry the full tool kit for subfloor repair, transitions, and finishing details on older Summerland homes.",
      "Same-week scheduling is usually available.",
    ],
    testimonial: null,
    faqs: [
      {
        q: "Will you drive to Summerland?",
        a: "Yes — Summerland is part of our regular South Okanagan service area. Estimates are free and we do the drive.",
      },
    ],
  },
];

export const getServiceAreaBySlug = (slug: string) =>
  serviceAreas.find((a) => a.slug === slug);

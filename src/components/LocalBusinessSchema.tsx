export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FlooringStore",
    name: "Kelowna Flooring Superstore",
    image: "https://www.kfssflooring.com/logo.webp",
    logo: "https://www.kfssflooring.com/logo.webp",
    url: "https://www.kfssflooring.com",
    telephone: "+12508607847",
    email: "kfssteam@gmail.com",
    description:
      "Kelowna's premier flooring store. In-stock laminate, hardwood, carpet, vinyl plank, tile & more. Expert installation across the Central Okanagan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 16, 830 McCurdy Place",
      addressLocality: "Kelowna",
      addressRegion: "BC",
      postalCode: "V1X 8C8",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.8885,
      longitude: -119.4395,
    },
    hasMap: "https://gmb.kfssflooring.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday"],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit",
    areaServed: [
      { "@type": "City", name: "Kelowna" },
      { "@type": "City", name: "West Kelowna" },
      { "@type": "City", name: "Lake Country" },
      { "@type": "City", name: "Peachland" },
      { "@type": "City", name: "Summerland" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Rob Hutchings" },
        reviewBody:
          "We recently purchased carpet for three rooms in our house through Kelowna Flooring Superstore. From the minute we entered their showroom, the whole experience was seamless and pleasant.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Jenni I." },
        reviewBody:
          "We had a fantastic experience with Kelowna Flooring Superstore. Shaun and Selina were incredibly helpful when we were choosing our flooring.",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Thomas" },
        reviewBody:
          "From start to finish, the entire carpet installation experience was seamless. The team was incredibly responsive at every step.",
      },
    ],
    sameAs: [
      "https://facebook.kfssflooring.com",
      "https://instagram.kfssflooring.com",
      "https://x.com/KelownaFloorSS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

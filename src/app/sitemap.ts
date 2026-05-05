export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { flooringTypes } from "@/lib/flooring-data";
import { posts } from "@/lib/blog-data";
import { serviceAreas } from "@/lib/service-areas";
import { guides } from "@/lib/guides";
import { serviceCombos } from "@/lib/service-combos";
import { comparePages } from "@/lib/compare-pages";
import { answerPages } from "@/lib/answer-pages";
import { projects } from "@/lib/projects";
import { servicePages as adjacentServices } from "@/lib/service-pages";

const baseUrl = "https://www.kelownaflooringsuperstore.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const flooringPages = flooringTypes.map((f) => ({
    url: `${baseUrl}/flooring/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePages = serviceAreas.map((a) => ({
    url: `${baseUrl}/service-areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guidePages = guides.map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comboPages = serviceCombos.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const compares = comparePages.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const answers = answerPages.map((a) => ({
    url: `${baseUrl}/answers/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectPgs = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePgs = adjacentServices.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    { url: baseUrl,                           lastModified: new Date(), changeFrequency: "weekly",   priority: 1.0 },
    { url: `${baseUrl}/flooring`,             lastModified: new Date(), changeFrequency: "weekly",   priority: 0.9 },
    { url: `${baseUrl}/estimates`,            lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${baseUrl}/contact`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/sales`,                lastModified: new Date(), changeFrequency: "weekly",   priority: 0.8 },
    { url: `${baseUrl}/financing`,            lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/calculator`,           lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/find-my-floor`,        lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/about`,                lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/blog`,                 lastModified: new Date(), changeFrequency: "weekly",   priority: 0.7 },
    { url: `${baseUrl}/faq`,                  lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${baseUrl}/service-areas`,        lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${baseUrl}/team`,                 lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${baseUrl}/warranty`,             lastModified: new Date(), changeFrequency: "monthly",  priority: 0.6 },
    { url: `${baseUrl}/best-flooring-kelowna`,  lastModified: new Date(), changeFrequency: "monthly",  priority: 0.95 },
    { url: `${baseUrl}/flooring-prices-kelowna`, lastModified: new Date(), changeFrequency: "monthly",  priority: 0.95 },
    { url: `${baseUrl}/guides`,               lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/compare`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.85 },
    { url: `${baseUrl}/answers`,              lastModified: new Date(), changeFrequency: "monthly",  priority: 0.85 },
    { url: `${baseUrl}/projects`,             lastModified: new Date(), changeFrequency: "monthly",  priority: 0.85 },
    { url: `${baseUrl}/services`,             lastModified: new Date(), changeFrequency: "monthly",  priority: 0.85 },
    { url: `${baseUrl}/visualize`,            lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/referrals`,            lastModified: new Date(), changeFrequency: "monthly",  priority: 0.7 },
    { url: `${baseUrl}/reviews`,              lastModified: new Date(), changeFrequency: "weekly",   priority: 0.85 },
    { url: `${baseUrl}/privacy`,              lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    ...flooringPages,
    ...servicePages,
    ...guidePages,
    ...comboPages,
    ...compares,
    ...answers,
    ...projectPgs,
    ...servicePgs,
    ...blogPages,
  ];
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nidhiprajapati.dev";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...Object.keys(caseStudies).map((slug) => ({
      url: `${base}/case-studies/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}

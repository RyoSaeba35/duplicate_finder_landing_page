import type { MetadataRoute } from "next";
import { LOCALES } from "./i18n/locales";

// Required by Next.js 15 for metadata route handlers under
// output: "export" -- without this, the build fails since it can't
// otherwise confirm this route is safe to pre-render statically.
export const dynamic = "force-static";

const SITE_URL = "https://www.getduplicatefinder.app";

const SEO_PAGES = [
  "how-to-find-duplicate-files-windows",
  "free-up-disk-space-windows",
  "duplicate-photo-finder-windows",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localePages = LOCALES.map((l) => ({
    url: `${SITE_URL}/${l.code}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: l.code === "en" ? 1 : 0.8,
  }));

  const seoPages = SEO_PAGES.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    ...localePages,
    ...seoPages,
  ];
}

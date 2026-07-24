import type { MetadataRoute } from "next";
import { LOCALES } from "./i18n/locales";

// Required by Next.js 15 for metadata route handlers under
// output: "export" -- without this, the build fails since it can't
// otherwise confirm this route is safe to pre-render statically.
export const dynamic = "force-static";

const SITE_URL = "https://www.getduplicatefinder.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((l) => ({
    url: `${SITE_URL}/${l.code}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    // English gets slight priority as the presumed highest-traffic
    // variant; adjust if French ends up being your actual majority
    // audience given the landing page currently defaults there.
    priority: l.code === "en" ? 1 : 0.8,
  }));
}

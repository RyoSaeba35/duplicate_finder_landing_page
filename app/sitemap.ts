import type { MetadataRoute } from "next";
import { LOCALES } from "./i18n/locales";

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

"use client";

import { useEffect } from "react";
import type { Locale } from "../i18n/locales";

// The root app/layout.tsx (the only place <html> can be rendered at all
// in Next.js App Router) has a fixed lang="en" default, since it can't
// know the locale of a static-exported page ahead of time. This sets the
// correct one client-side, on mount, for every locale route. Search
// engines primarily use the URL path and hreflang/canonical tags (set
// via generateMetadata in this same layout) to determine language, not
// the lang attribute alone, so this client-side correction is a
// reasonable, standard tradeoff for a static export rather than a real
// gap.
export default function LocaleHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}

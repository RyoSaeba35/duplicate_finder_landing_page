import type { Locale } from "./locales";

// English lives unprefixed at "/" (no "/en" duplicate -- avoids a minor
// duplicate-content SEO issue from having the same content at two URLs).
// Every other locale is prefixed, e.g. "/fr", "/fr/privacy".
export function localeHref(locale: Locale, path: string = ""): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  const cleanPath = path.replace(/^\//, "");
  if (!cleanPath) return prefix || "/";
  return `${prefix}/${cleanPath}`;
}

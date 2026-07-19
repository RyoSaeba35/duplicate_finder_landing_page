"use client";

import { useEffect } from "react";
import { LOCALES, isLocale } from "./i18n/locales";

// The true root "/" only exists to send a first-time visitor to the
// right language -- English lives at "/en" like every other locale (see
// the note in i18n/href.ts for why "/" itself can't just BE the English
// page: Next.js only allows one root layout with <html>, so making
// [locale] the sole top-level route -- with English as a real locale
// like any other -- was simpler and more correct than special-casing
// English to render at the bare root).
//
// Plain client-side redirect rather than a server-side one: this is a
// static export with no server at request time, so this is the only
// mechanism guaranteed to work regardless of host.
export default function RootRedirect() {
  useEffect(() => {
    const browserLang = window.navigator.language.slice(0, 2).toLowerCase();
    const target = isLocale(browserLang) ? browserLang : "en";
    window.location.replace(`/${target}${window.location.search}`);
  }, []);

  // Static fallback content in case JS is disabled or hasn't run yet --
  // also what search engines and social-preview scrapers would see if
  // they don't execute the redirect, so it links directly rather than
  // just saying "redirecting...".
  return (
    <>
      <p>
        Duplicate Finder — <a href="/en">continue to the English site</a>.
      </p>
      <ul>
        {LOCALES.filter((l) => l.code !== "en").map((l) => (
          <li key={l.code}>
            <a href={`/${l.code}`}>{l.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

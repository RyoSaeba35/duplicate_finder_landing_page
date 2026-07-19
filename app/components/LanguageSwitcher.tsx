"use client";

import { LOCALES, Locale } from "../i18n/locales";
import { localeHref } from "../i18n/href";

// A small, isolated client-side island within an otherwise fully static
// page -- only this component needs JavaScript (to navigate on change),
// everything else on the page is plain static HTML.
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <select
      value={locale}
      onChange={(e) => {
        window.location.href = localeHref(e.target.value as Locale);
      }}
      aria-label="Language"
      className="langSwitcher"
    >
      {LOCALES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

import type { Metadata } from "next";
import { LOCALES, CONTENT, isLocale, Locale } from "../i18n/locales";
import { notFound } from "next/navigation";
import LocaleHtmlLang from "./LocaleHtmlLang";

// Required for output: "export" -- tells Next.js exactly which locale
// values to pre-render at build time (there's no server to generate
// pages for arbitrary values at request time, unlike a normal deploy).
export function generateStaticParams() {
  return LOCALES.map((l) => ({ locale: l.code }));
}

// Every OG image URL below is resolved against this. Required for Open
// Graph/Twitter card previews to work at all -- without it, relative
// image paths can't become the absolute URLs those platforms require.
const SITE_URL = "https://www.getduplicatefinder.app";

// Maps our short locale codes to full BCP-47 tags for og:locale, which
// wants e.g. "en_US" / "fr_FR" rather than bare "en" / "fr".
const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  es: "es_ES",
  de: "de_DE",
  nl: "nl_NL",
  pt: "pt_PT",
  pl: "pl_PL",
  ja: "ja_JP",
  ko: "ko_KR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const content = CONTENT[locale];
  const pageUrl = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: pageUrl,
      // Points search engines at the same content in every language, so
      // e.g. a French searcher is offered the French version instead of
      // being sent to English -- standard practice for multilingual
      // static sites, and low-effort given we already know every locale
      // at build time via LOCALES.
      languages: Object.fromEntries(LOCALES.map((l) => [l.code, `/${l.code}`])),
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: pageUrl,
      siteName: "Duplicate Finder",
      // og-image.png needs to exist at /public/og-image.png -- a 1200x630
      // social-preview image is a separate design asset, not something
      // generated from this code. See note below.
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Duplicate Finder" }],
      locale: OG_LOCALE[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    notFound();
  }
  return (
    <>
      <LocaleHtmlLang locale={rawLocale} />
      {children}
    </>
  );
}

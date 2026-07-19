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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const content = CONTENT[locale];
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      // Points search engines at the same content in every language, so
      // e.g. a French searcher is offered the French version instead of
      // being sent to English -- standard practice for multilingual
      // static sites, and low-effort given we already know every locale
      // at build time via LOCALES.
      languages: Object.fromEntries(LOCALES.map((l) => [l.code, `/${l.code}`])),
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

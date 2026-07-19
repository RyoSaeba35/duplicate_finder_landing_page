import LegalPage from "../../components/LegalPage";
import { LEGAL_CONTENT } from "../../i18n/legalLocales";
import { isLocale, Locale } from "../../i18n/locales";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  return { title: `${LEGAL_CONTENT[locale].privacy.title} — Duplicate Finder` };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const content = LEGAL_CONTENT[locale];
  return (
    <LegalPage
      doc={content.privacy}
      backHome={content.backHome}
      authoritativeNotice={content.authoritativeNotice}
      locale={locale}
    />
  );
}

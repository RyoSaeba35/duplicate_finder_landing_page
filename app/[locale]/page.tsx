import HomePage from "../components/HomePage";
import { CONTENT, isLocale, Locale } from "../i18n/locales";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  return <HomePage locale={locale} content={CONTENT[locale]} />;
}

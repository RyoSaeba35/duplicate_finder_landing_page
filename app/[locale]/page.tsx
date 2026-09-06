import HomePage from "../components/HomePage";
import { CONTENT, isLocale, Locale } from "../i18n/locales";

const SITE_URL = "https://www.getduplicatefinder.app";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const content = CONTENT[locale];

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Duplicate Finder",
    operatingSystem: "Windows",
    applicationCategory: "UtilitiesApplication",
    description: content.meta.description,
    url: `${SITE_URL}/${locale}`,
    offers: {
      "@type": "Offer",
      price: "15",
      priceCurrency: "EUR",
      url: "https://gumroad.com/l/byzsj",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePage locale={locale} content={content} />
    </>
  );
}

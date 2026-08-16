const DOWNLOAD_URL =
  "https://github.com/RyoSaeba35/duplicate_finder/releases/download/v0.1.0/Duplicate.Finder_0.1.0_x64-setup.exe";
const MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/9N4QQ50QK0R6";

export interface SeoPageProps {
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  steps: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  cta: { heading: string; body: string; button: string };
}

export default function SeoPage({ h1, intro, sections, steps, faq, cta }: SeoPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="seo-page">
        <div className="seo-page__container">
          <a href="/" className="seo-page__back">← Duplicate Finder</a>
          <h1 className="seo-page__h1">{h1}</h1>
          <p className="seo-page__intro">{intro}</p>

          {sections.map((s) => (
            <section key={s.heading} className="seo-page__section">
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          <ol className="seo-page__steps">
            {steps.map((step, i) => (
              <li key={i}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>

          <section className="seo-page__faq">
            <h2>Frequently asked questions</h2>
            {faq.map((item) => (
              <div key={item.q} className="seo-page__faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section className="seo-page__cta">
            <h2>{cta.heading}</h2>
            <p>{cta.body}</p>
            <a href={DOWNLOAD_URL} className="btn btn--primary">{cta.button}</a> or <a href={MICROSOFT_STORE_URL} className="btn btn--store">Get it from Microsoft Store</a>
          </section>
        </div>
      </main>
    </>
  );
}

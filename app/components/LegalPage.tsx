import type { LegalDoc } from "../i18n/legalTypes";
import type { Locale } from "../i18n/locales";
import { localeHref } from "../i18n/href";

export default function LegalPage({
  doc,
  backHome,
  authoritativeNotice,
  locale,
}: {
  doc: LegalDoc;
  backHome: string;
  authoritativeNotice?: string;
  locale: Locale;
}) {
  return (
    <div className="wrap" style={{ maxWidth: 720, padding: "56px 24px 80px" }}>
      <a href={localeHref(locale)} style={{ fontSize: 14, color: "var(--teal)" }}>
        {backHome}
      </a>

      <h1 className="mono" style={{ fontSize: 28, marginTop: 24, marginBottom: 4 }}>
        {doc.title}
      </h1>
      <div style={{ fontSize: 13, color: "var(--ink-faint)", marginBottom: 24 }}>{doc.lastUpdated}</div>

      {authoritativeNotice && (
        <div
          style={{
            background: "var(--panel-raised)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "12px 16px",
            fontSize: 14,
            color: "var(--ink-dim)",
            marginBottom: 28,
          }}
        >
          {authoritativeNotice}
        </div>
      )}

      <p style={{ fontSize: 15, color: "var(--ink-dim)", lineHeight: 1.6, marginBottom: 36 }}>{doc.intro}</p>

      {doc.sections.map((section) => (
        <section key={section.heading} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 17, marginBottom: 10 }}>{section.heading}</h2>
          {section.body.map((paragraph, i) => (
            <p key={i} style={{ fontSize: 14.5, color: "var(--ink-dim)", lineHeight: 1.65, marginBottom: 10 }}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

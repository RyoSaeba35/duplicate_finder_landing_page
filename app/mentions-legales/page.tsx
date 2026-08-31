import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Duplicate Finder",
  description: "Mentions légales de Duplicate Finder, édité par Pierre Libran (Galerne Studio).",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "56px 24px 80px",
        fontFamily: "inherit",
      }}
    >
      <a
        href="/"
        style={{ fontSize: 14, color: "var(--teal)", textDecoration: "none" }}
      >
        ← Retour à l'accueil
      </a>

      <h1
        style={{ fontSize: 28, marginTop: 24, marginBottom: 32 }}
      >
        Mentions légales
      </h1>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Éditeur du site</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          Pierre Libran<br />
          Galerne Studio<br />
          Entrepreneur individuel<br />
          SIRET : 10699681200017<br />
          23 rue Dumenge<br />
          69004 Lyon, France<br />
          Contact : galernestudio.support@proton.me
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Hébergeur</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          Railway Corp.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789, États-Unis<br />
          Site : railway.app
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Directeur de la publication</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          Pierre Libran
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Propriété intellectuelle</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          L'ensemble des éléments constituant ce site (textes, visuels, logiciel)
          est la propriété exclusive de Pierre Libran / Galerne Studio, sauf mention
          contraire. Toute reproduction partielle ou totale est interdite sans
          autorisation préalable écrite.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Données personnelles</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          Pour toute question relative au traitement de vos données personnelles,
          consultez notre{" "}
          <a href="/en/privacy" style={{ color: "var(--teal)" }}>
            politique de confidentialité
          </a>
          . Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification et de suppression de vos données en contactant{" "}
          galernestudio.support@proton.me. En cas de réclamation, vous pouvez
          saisir la CNIL (cnil.fr).
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: 17, marginBottom: 10 }}>Loi applicable</h2>
        <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-dim)", margin: 0 }}>
          Le présent site est soumis au droit français. Tout litige relatif à
          son utilisation relève de la compétence des tribunaux français.
        </p>
      </section>
    </div>
  );
}

import type { LandingContent } from "../types";

const de: LandingContent = {
  meta: {
    title: "Duplicate Finder — doppelte Dateien unter Windows finden und Speicherplatz zurückgewinnen",
    description:
      "Durchsuchen Sie beliebige Ordner oder Laufwerke, vergleichen Sie Duplikate nebeneinander mit Live-Vorschau und verschieben Sie sie sicher in den Papierkorb. 15 € einmalig, 14 Tage kostenlos testen.",
  },
  nav: { howItWorks: "So funktioniert's", pricing: "Preis", faq: "FAQ", download: "Herunterladen" },
  hero: {
    eyebrow: "Für Windows · 15 € einmalig · 14 Tage kostenlos testen",
    headlineLine1: "Finden Sie Ihre",
    headlineEm: "doppelten",
    sub: "Durchsucht beliebige Ordner oder Laufwerke, zeigt Ihnen genau, was identisch ist, nebeneinander, und verschiebt Duplikate in den Papierkorb — niemals dauerhaft gelöscht.",
    ctaPrimary: "Für Windows herunterladen",
    ctaSecondary: "So funktioniert's",
    ctaNote: "Alle Funktionen für 14 Tage. Kein Konto, keine Kreditkarte.",
    demoMeta: "3 identische Dateien · je 158,3 KB",
    demoReclaimable: "158,3 KB wiederherstellbar",
    counterLabel: "wiederherstellbar bei diesem Scan",
    cardKeep: "Behalten",
    cardDuplicate: "Duplikat",
    cardMarkForTrash: "für den Papierkorb markieren",
    cardOpenFile: "Datei öffnen ↗",
    cardKeepInstead: "Stattdessen diese behalten →",
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    title: "Drei Schritte, nichts ist endgültig, bis Sie es entscheiden.",
    steps: [
      {
        num: "01 — Scannen",
        title: "Wählen Sie einen Ordner, ein Laufwerk oder den ganzen PC",
        body: "Duplicate Finder hasht jede Datei, um exakte Übereinstimmungen zu finden — nicht nur ähnliche Namen oder Größen.",
      },
      {
        num: "02 — Vergleichen",
        title: "Beide Kopien nebeneinander ansehen",
        body: "Dateigröße, Änderungsdatum und eine Live-Vorschau für Bilder, PDFs, Word-Dokumente und Excel-Tabellen — bevor Sie etwas entscheiden.",
      },
      {
        num: "03 — Zurückgewinnen",
        title: "Eine behalten, den Rest löschen",
        body: "Duplikate wandern in den Papierkorb, niemals eine dauerhafte Löschung. Sie können es sich jederzeit anders überlegen.",
      },
    ],
  },
  features: {
    eyebrow: "Was es kann",
    title: "Entwickelt, um Duplikate wirklich zu finden, nicht zu raten.",
    items: [
      {
        title: "Byte-genauer Abgleich",
        body: "Jede Datei wird gehasht, sodass umbenannte oder verschobene Kopien trotzdem erkannt werden — nicht nur Dateien mit übereinstimmenden Namen.",
      },
      {
        title: "Live-Vorschauen",
        body: "Bilder, PDFs, Word-Dokumente, Excel-Tabellen und Code-Dateien werden direkt in der Vergleichsansicht angezeigt.",
      },
      {
        title: "Sicher über den Papierkorb",
        body: "Jede Löschung läuft über den Windows-Papierkorb. Die App selbst löscht niemals etwas dauerhaft.",
      },
      {
        title: "Ordner oder ganzes Laufwerk scannen",
        body: "Von einem einzelnen Downloads-Ordner bis zum gesamten Laufwerk C:\\ — in dem Umfang, den Sie wählen.",
      },
    ],
  },
  pricing: {
    amount: "15 €",
    terms: "Einmalkauf · kein Abonnement",
    list: [
      "Alle Funktionen 14 Tage lang kostenlos",
      "Kein Konto oder Kreditkarte für die Testversion nötig",
      "Eine Lizenz, dauerhaft Ihre",
    ],
    ctaPrimary: "Für Windows herunterladen",
    ctaSecondary: "Lizenz kaufen →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Bevor Sie herunterladen",
    items: [
      {
        q: "Werden Dateien gelöscht, die ich tatsächlich brauche?",
        a: "Nur Dateien, die Sie ausdrücklich markieren, und nur nachdem Sie sie nebeneinander verglichen haben. Übereinstimmungen werden durch das Hashen des Dateiinhalts gefunden, sodass nur echte, byte-genaue Duplikate angezeigt werden — und jede Löschung geht in den Papierkorb, keine dauerhafte Entfernung.",
      },
      {
        q: "Funktioniert es auf Mac oder Linux?",
        a: "Noch nicht — Duplicate Finder ist vorerst nur für Windows verfügbar.",
      },
      {
        q: "Was passiert nach der 14-tägigen Testphase?",
        a: "Die App sperrt das Scannen, bis Sie einen Lizenzschlüssel eingeben. Ihre Testdaten und Einstellungen bleiben unberührt — die Aktivierung eines Schlüssels schaltet die App einfach wieder frei.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Änderungsprotokoll",
    buy: "Kaufen",
    privacy: "Datenschutz",
    terms: "AGB",
  },
};

export default de;

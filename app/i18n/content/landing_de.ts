import type { LandingContent } from "../types";

const de: LandingContent = {
  meta: {
    title: "Duplicate Finder — doppelte Dateien auf Windows finden und entfernen",
    description: "Scanne beliebige Ordner oder Laufwerke, vergleiche Duplikate nebeneinander mit Live-Vorschau und verschiebe sie sicher in den Papierkorb. 14-tägige kostenlose Testversion.",
  },
  nav: { howItWorks: "So funktioniert's", pricing: "Preise", faq: "FAQ", download: "Herunterladen" },
  hero: {
    eyebrow: "Für Windows · 14 Tage kostenlos testen · €15 einmalig zum Löschen",
    headlineLine1: "Finde deine",
    headlineEm: "doppelten",
    sub: "Scannt beliebige Ordner oder Laufwerke, zeigt dir genau, was identisch ist, nebeneinander, und verschiebt Duplikate in den Papierkorb — nie eine dauerhafte Löschung. Teste die Löschfunktion 14 Tage lang kostenlos, kein Konto erforderlich.",
    ctaPrimary: "Für Windows herunterladen",
    ctaStore: "Im Microsoft Store erhalten",
    ctaSecondary: "So funktioniert's",
    ctaNote: "14 Tage kostenlos testen · Kein Konto · Keine Kreditkarte · Einmalig €15 zum dauerhaften Freischalten",
    securityNote: "Erster Start: Windows zeigt möglicherweise die Meldung "Windows hat Ihren PC geschützt" — das ist normal für unabhängige Entwickler. Klicke auf Weitere Informationen → Trotzdem ausführen.",
    demoMeta: "3 identische Dateien · je 158,3 KB",
    demoReclaimable: "158,3 KB wiederherstellbar",
    counterLabel: "wiederherstellbar, dieser Scan",
    cardKeep: "Behalten",
    cardDuplicate: "Duplikat",
    cardMarkForTrash: "für Papierkorb markieren",
    cardOpenFile: "Datei öffnen ↗",
    cardKeepInstead: "Stattdessen diese behalten →",
  },
  howItWorks: {
    eyebrow: "So funktioniert's",
    title: "Drei Schritte, nichts dauerhaft, bis du es bestätigst.",
    steps: [
      { num: "01 — Scannen", title: "Wähle einen Ordner, ein Laufwerk oder deinen ganzen PC", body: "Duplicate Finder hasht jede Datei, um exakte Übereinstimmungen zu finden. Paralleles Hashing auf allen CPU-Kernen hält es schnell, auch auf großen Laufwerken." },
      { num: "02 — Vergleichen", title: "Beide Kopien nebeneinander sehen", body: "Dateigröße, Änderungsdatum und Live-Vorschau für Bilder, PDFs, Word und Excel — bevor du irgendetwas entscheidest. Massenauswahl per Regel erledigt alles auf einmal." },
      { num: "03 — Zurückgewinnen", title: "Eine behalten, den Rest löschen", body: "Duplikate wandern in den Papierkorb, nie eine dauerhafte Löschung. Ändere deine Meinung jederzeit." },
    ],
  },
  features: {
    eyebrow: "Was es tut",
    title: "Gebaut, um Duplikate wirklich zu finden, nicht zu raten.",
    items: [
      { title: "Byte-für-Byte-Vergleich", body: "Jede Datei wird gehasht, sodass auch umbenannte oder verschobene Kopien erkannt werden — nicht nur Dateien mit identischen Namen." },
      { title: "Live-Vorschau", body: "Bilder, PDFs, Word-Dokumente, Excel-Tabellen und Code-Dateien werden direkt in der Vergleichsansicht gerendert." },
      { title: "Fotografen-Modus", body: "Eigener Tab für Fotobibliotheken — erkennt RAW+JPEG-Paare, zeigt eingebettete Vorschauen aus NEF, CR2, ARW, DNG und mehr, und schützt von Lightroom verwaltete Dateien vor versehentlichem Löschen." },
      { title: "Papierkorb-sicher", body: "Jede Löschung erfolgt über den Windows-eigenen Papierkorb. Die App entfernt niemals etwas dauerhaft." },
      { title: "Paralleles Hashing — schnellere Scans", body: "SHA-256 läuft gleichzeitig auf allen CPU-Kernen. Große Laufwerke werden deutlich schneller verarbeitet." },
      { title: "Massenauswahl per Regel", body: "Behalte die neueste, älteste oder Kopie mit dem kürzesten Pfad über alle Duplikat-Gruppen mit einem Klick." },
      { title: "Suchen, filtern und sortieren", body: "Gib einen Dateinamen oder Pfad ein, um Hunderte von Duplikat-Gruppen sofort zu filtern. Sortiere nach Größe, Name oder Datum." },
      { title: "CSV-Bericht exportieren", body: "Lade eine vollständige Tabelle aller Duplikat-Gruppen herunter — nützlich zum Prüfen großer Laufwerke." },
      { title: "Einen Ordner oder ein ganzes Laufwerk scannen", body: "Vom einzelnen Downloads-Ordner bis zum gesamten C:\\-Laufwerk, in dem Umfang, den du wählst." },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Einmaliger Kauf · kostenlos scannen für immer",
    list: [
      "Beliebige Ordner oder Laufwerke scannen — kostenlos, für immer",
      "Alle Duplikate sehen, bevor du eine Entscheidung triffst",
      "Einmalig €15 zum Freischalten der Löschfunktion — dauerhaft",
      "Kein Abo, kein Konto erforderlich",
    ],
    ctaPrimary: "Für Windows herunterladen",
    ctaSecondary: "Lizenz kaufen →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vor dem Herunterladen",
    items: [
      { q: "Löscht es Dateien, die ich wirklich brauche?", a: "Nur Dateien, die du explizit markierst, und erst nachdem du sie nebeneinander verglichen hast. Übereinstimmungen werden durch Hashing gefunden, sodass nur echte Duplikate erscheinen — und jede Löschung geht in den Papierkorb." },
      { q: "Funktioniert es auf Mac oder Linux?", a: "Noch nicht — Duplicate Finder ist derzeit nur für Windows." },
      { q: "Was passiert nach dem 14-tägigen Test?", a: "Das Scannen bleibt kostenlos — du kannst beliebige Ordner scannen und alle Duplikate ohne Kosten sehen, für immer. Das Löschen wird nach dem Test gesperrt. Eine einmalige Lizenz für €15 schaltet das Löschen dauerhaft frei." },
      { q: "Warum zeigt Windows beim Installieren eine Warnung?", a: "Weil die App noch nicht mit einem kostenpflichtigen Code-Signing-Zertifikat signiert ist. Klicke auf "Weitere Informationen" und dann auf "Trotzdem ausführen". Der Quellcode ist auf GitHub öffentlich." },
    ],
  },
  footer: { copyright: "Duplicate Finder.", changelog: "Änderungsprotokoll", buy: "Kaufen", privacy: "Datenschutz", terms: "Nutzungsbedingungen" },
};

export default de;
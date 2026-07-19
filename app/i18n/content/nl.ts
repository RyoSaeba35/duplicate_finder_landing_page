import type { LandingContent } from "../types";

const nl: LandingContent = {
  meta: {
    title: "Duplicate Finder — dubbele bestanden vinden en ruimte terugwinnen op Windows",
    description:
      "Scan elke map of schijf, vergelijk duplicaten naast elkaar met live voorbeeld, en verplaats ze veilig naar de prullenbak. €15 eenmalig, 14 dagen gratis proberen.",
  },
  nav: { howItWorks: "Hoe het werkt", pricing: "Prijs", faq: "Veelgestelde vragen", download: "Downloaden" },
  hero: {
    eyebrow: "Voor Windows · €15 eenmalig · 14 dagen gratis proberen",
    headlineLine1: "Vind uw",
    headlineEm: "dubbele",
    sub: "Scant elke map of schijf, toont u precies wat identiek is naast elkaar, en verplaatst duplicaten naar de prullenbak — nooit permanent verwijderd.",
    ctaPrimary: "Downloaden voor Windows",
    ctaSecondary: "Bekijk hoe het werkt",
    ctaNote: "Alle functies 14 dagen lang. Geen account, geen creditcard.",
    demoMeta: "3 identieke bestanden · elk 158,3 KB",
    demoReclaimable: "158,3 KB terug te winnen",
    counterLabel: "terug te winnen bij deze scan",
    cardKeep: "Behouden",
    cardDuplicate: "Duplicaat",
    cardMarkForTrash: "markeren voor prullenbak",
  },
  howItWorks: {
    eyebrow: "Hoe het werkt",
    title: "Drie stappen, niets is definitief totdat u dat beslist.",
    steps: [
      {
        num: "01 — Scannen",
        title: "Kies een map, een schijf, of uw hele pc",
        body: "Duplicate Finder hasht elk bestand om exacte overeenkomsten te vinden — niet alleen vergelijkbare namen of groottes.",
      },
      {
        num: "02 — Vergelijken",
        title: "Bekijk beide kopieën naast elkaar",
        body: "Bestandsgrootte, wijzigingsdatum en een live voorbeeld voor afbeeldingen, pdf's, Word-documenten en Excel-bladen — voordat u iets beslist.",
      },
      {
        num: "03 — Terugwinnen",
        title: "Behoud er één, verwijder de rest",
        body: "Duplicaten gaan naar de prullenbak, nooit permanent verwijderd. U kunt altijd van gedachten veranderen.",
      },
    ],
  },
  features: {
    eyebrow: "Wat het doet",
    title: "Gemaakt om duplicaten echt te vinden, niet te gokken.",
    items: [
      {
        title: "Byte-voor-byte vergelijking",
        body: "Elk bestand wordt gehasht, zodat hernoemde of verplaatste kopieën alsnog worden gevonden — niet alleen bestanden met dezelfde naam.",
      },
      {
        title: "Live voorbeelden",
        body: "Afbeeldingen, pdf's, Word-documenten, Excel-bladen en codebestanden worden direct weergegeven in de vergelijkingsweergave.",
      },
      {
        title: "Veilig via de prullenbak",
        body: "Elke verwijdering verloopt via de Windows-prullenbak. De app zelf verwijdert nooit iets permanent.",
      },
      {
        title: "Scan een map of een hele schijf",
        body: "Van één Downloads-map tot uw hele C:\\-schijf, met de reikwijdte die u kiest.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Eenmalige aankoop · geen abonnement",
    list: [
      "Alle functies 14 dagen lang, gratis",
      "Geen account of creditcard nodig voor de proefperiode",
      "Eén licentie, voorgoed van u",
    ],
    ctaPrimary: "Downloaden voor Windows",
    ctaSecondary: "Licentie kopen →",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Voordat u downloadt",
    items: [
      {
        q: "Worden er bestanden verwijderd die ik echt nodig heb?",
        a: "Alleen bestanden die u expliciet markeert, en pas nadat u ze naast elkaar heeft vergeleken. Overeenkomsten worden gevonden door de inhoud van bestanden te hashen, dus alleen echte, byte-voor-byte duplicaten verschijnen — en elke verwijdering gaat naar de prullenbak, nooit permanent.",
      },
      {
        q: "Werkt het op Mac of Linux?",
        a: "Nog niet — Duplicate Finder is voorlopig alleen beschikbaar voor Windows.",
      },
      {
        q: "Wat gebeurt er na de proefperiode van 14 dagen?",
        a: "De app blokkeert scannen totdat u een licentiesleutel invoert. Uw proefgegevens en instellingen blijven ongewijzigd — het activeren van een sleutel ontgrendelt de app gewoon weer.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Wijzigingslogboek",
    buy: "Kopen",
    privacy: "Privacy",
    terms: "Voorwaarden",
  },
};

export default nl;

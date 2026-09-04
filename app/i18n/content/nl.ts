import type { LandingContent } from "../types";

const nl: LandingContent = {
  meta: {
    title: "Duplicate Finder — vind en verwijder dubbele bestanden op Windows",
    description:
      "Scan elke map of schijf, vergelijk duplicaten naast elkaar met live voorbeelden, en verplaats ze veilig naar de Prullenbak. Gratis scannen. €15 eenmalig om verwijderen te ontgrendelen.",
  },
  nav: { howItWorks: "Hoe het werkt", pricing: "Prijzen", faq: "FAQ", download: "Downloaden" },
  hero: {
    eyebrow: "14 dagen gratis proberen · Voor Windows · €15 eenmalig om te verwijderen",
    headlineLine1: "Vind je",
    headlineEm: "dubbele",
    sub: "Scant elke map of schijf, toont precies wat identiek is naast elkaar, en verplaatst duplicaten naar de Prullenbak — nooit een permanente verwijdering. Probeer verwijderen 14 dagen gratis, geen account nodig.",
    ctaPrimary: "Downloaden voor Windows",
    ctaStore: "Halen uit de Microsoft Store",
    ctaSecondary: "Bekijk hoe het werkt",
    ctaNote: "14 dagen gratis proberen · Geen account · Geen creditcard · €15 eenmalig om permanent te ontgrendelen",
    securityNote:
      "Eerste start: Windows kan een melding \"Windows heeft uw pc beschermd\" tonen — dit is normaal voor onafhankelijke ontwikkelaars. Klik op Meer info → Toch uitvoeren.",
    demoMeta: "3 identieke bestanden · 158,3 KB elk",
    demoReclaimable: "158,3 KB terug te winnen",
    counterLabel: "terug te winnen, deze scan",
    cardKeep: "Bewaren",
    cardDuplicate: "Duplicaat",
    cardMarkForTrash: "markeren voor prullenbak",
    cardOpenFile: "Bestand openen ↗",
    cardKeepInstead: "Dit bestand bewaren →",
  },
  howItWorks: {
    eyebrow: "Hoe het werkt",
    title: "Drie stappen, niets permanent totdat jij het zegt.",
    steps: [
      {
        num: "01 — Scannen",
        title: "Kies een map, een schijf of je hele pc",
        body: "Duplicate Finder hasht elk bestand om exacte overeenkomsten te vinden — niet alleen vergelijkbare namen of groottes. Parallel hashen op alle CPU-kernen houdt het snel, ook op grote schijven.",
      },
      {
        num: "02 — Vergelijken",
        title: "Zie beide kopieën naast elkaar",
        body: "Bestandsgrootte, wijzigingsdatum en een live voorbeeld voor afbeeldingen, pdf's, Word-documenten en Excel-sheets — voordat je iets beslist. Bulkselectie op basis van een regel (nieuwste, oudste of kortste pad bewaren) regelt alles in één klik.",
      },
      {
        num: "03 — Terugwinnen",
        title: "Bewaar één, gooi de rest weg",
        body: "Duplicaten gaan naar de Prullenbak, nooit een permanente verwijdering. Verander van gedachten wanneer je wilt.",
      },
    ],
  },
  features: {
    eyebrow: "Wat het doet",
    title: "Gebouwd om duplicaten echt te vinden, niet te gokken.",
    items: [
      {
        title: "Byte-voor-byte vergelijking",
        body: "Elk bestand wordt gehasht, zodat hernoemde of verplaatste kopieën ook worden gevonden — niet alleen bestanden met identieke namen.",
      },
      {
        title: "Live voorbeelden",
        body: "Afbeeldingen, pdf's, Word-documenten, Excel-sheets en codebestanden worden direct in de vergelijkingsweergave gerenderd.",
      },
      {
        title: "Prullenbak-veilig",
        body: "Elke verwijdering verloopt via de eigen Prullenbak van Windows. De app verwijdert nooit iets permanent.",
      },
      {
        title: "Parallel hashen — snellere scans",
        body: "SHA-256 draait gelijktijdig op alle CPU-kernen. Grote schijven die vroeger minuten kostten, zijn nu beduidend sneller klaar.",
      },
      {
        title: "Bulkselectie op basis van een regel",
        body: "Bewaar de nieuwste, oudste of kortste-pad kopie in alle duplicaatgroepen met één klik — zonder elke groep handmatig te bekijken.",
      },
      {
        title: "Zoeken, filteren en sorteren",
        body: "Typ een bestandsnaam of pad om honderden duplicaatgroepen direct te filteren. Sorteer op grootte, naam of datum. Filter op bestandsextensie.",
      },
      {
        title: "CSV-rapport exporteren",
        body: "Download een volledig overzicht van alle duplicaatgroepen — handig voor het controleren van grote schijven voordat je iets verwijdert.",
      },
      {
        title: "Scan een map of een hele schijf",
        body: "Van één Downloadmap tot je volledige C:\\-schijf, op het bereik dat jij kiest.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Eenmalige aankoop · gratis scannen voor altijd",
    list: [
      "Scan elke map of schijf — gratis, voor altijd",
      "Zie alle duplicaten voordat je iets beslist",
      "€15 eenmalig om verwijderen te ontgrendelen — blijvend van jou",
      "Geen abonnement, geen account vereist",
    ],
    ctaPrimary: "Downloaden voor Windows",
    ctaSecondary: "Licentie kopen →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Voordat je downloadt",
    items: [
      {
        q: "Verwijdert het bestanden die ik echt nodig heb?",
        a: "Alleen bestanden die je expliciet markeert, en pas nadat je ze naast elkaar hebt vergeleken. Overeenkomsten worden gevonden door de bestandsinhoud te hashen, zodat alleen echte byte-voor-byte duplicaten verschijnen — en elke verwijdering gaat naar de Prullenbak, geen permanente verwijdering.",
      },
      {
        q: "Werkt het op Mac of Linux?",
        a: "Nog niet — Duplicate Finder is voorlopig alleen voor Windows.",
      },
      {
        q: "Wat gebeurt er na de proefperiode van 14 dagen?",
        a: "Scannen blijft gratis — je kunt elke map scannen en alle duplicaten kosteloos bekijken, voor altijd. Verwijderen wordt vergrendeld na de proefperiode. Een eenmalige licentie van €15 ontgrendelt verwijderen permanent.",
      },
      {
        q: "Waarom toont Windows een waarschuwing bij de installatie?",
        a: "Omdat de app nog niet is ondertekend met een betaald code-signeringscertificaat — iets dat de meeste onafhankelijke ontwikkelaars overslaan vóór hun eerste verkopen. Windows markeert zo elke onbekende uitgever. Klik op \"Meer info\" en vervolgens op \"Toch uitvoeren\". De broncode is openbaar op GitHub als je wilt controleren wat de app doet voor je installeert.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Versiegeschiedenis",
    buy: "Kopen",
    privacy: "Privacy",
    terms: "Voorwaarden",
  },
};

export default nl;

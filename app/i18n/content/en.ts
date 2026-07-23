import type { LandingContent } from "../types";

const en: LandingContent = {
  meta: {
    title: "Duplicate Finder — find and reclaim duplicate files on Windows",
    description:
      "Scan any folder or drive, compare duplicates side by side with live previews, and safely move them to the Recycle Bin. €15 one-time, 14-day free trial.",
  },
  nav: { howItWorks: "How it works", pricing: "Pricing", faq: "FAQ", download: "Download" },
  hero: {
    eyebrow: "For Windows · €15 one-time · 14-day free trial",
    headlineLine1: "Find your",
    headlineEm: "duplicate",
    sub: "Scans any folder or drive, shows you exactly what's identical side by side, and moves duplicates to the Recycle Bin — never a permanent delete.",
    ctaPrimary: "Download for Windows",
    ctaSecondary: "See how it works",
    ctaNote: "Full features for 14 days. No account, no credit card.",
    securityNote:
      "First launch: Windows may show a \"Windows protected your PC\" prompt — this is normal for independent developers. Click More info → Run anyway.",
    demoMeta: "3 identical files · 158.3 KB each",
    demoReclaimable: "158.3 KB reclaimable",
    counterLabel: "reclaimable, this scan",
    cardKeep: "Keep",
    cardDuplicate: "Duplicate",
    cardMarkForTrash: "mark for trash",
    cardOpenFile: "Open file ↗",
    cardKeepInstead: "Keep this one instead →",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps, nothing permanent until you say so.",
    steps: [
      {
        num: "01 — Scan",
        title: "Pick a folder, a drive, or your whole PC",
        body: "Duplicate Finder hashes every file to find exact matches — not just similar names or sizes.",
      },
      {
        num: "02 — Compare",
        title: "See both copies side by side",
        body: "File size, modified date, and a live preview for images, PDFs, Word docs, and Excel sheets — before you decide anything.",
      },
      {
        num: "03 — Reclaim",
        title: "Keep one, trash the rest",
        body: "Duplicates go to the Recycle Bin, never a permanent delete. Change your mind anytime.",
      },
    ],
  },
  features: {
    eyebrow: "What it does",
    title: "Built for actually finding duplicates, not guessing.",
    items: [
      {
        title: "Byte-for-byte matching",
        body: "Every file is hashed, so renamed or relocated copies still get caught — not just files with matching filenames.",
      },
      {
        title: "Live previews",
        body: "Images, PDFs, Word documents, Excel sheets, and code files render right in the comparison view.",
      },
      {
        title: "Recycle Bin safe",
        body: "Every delete goes through Windows' own Recycle Bin. Nothing is ever permanently removed by the app itself.",
      },
      {
        title: "Scan a folder or a whole drive",
        body: "From one Downloads folder to your entire C:\\ drive, at whatever scope you choose.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "One-time purchase · no subscription",
    list: ["Full features for 14 days, free", "No account or credit card for the trial", "One license, yours to keep"],
    ctaPrimary: "Download for Windows",
    ctaSecondary: "Buy a license →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you download",
    items: [
      {
        q: "Will it delete files I actually need?",
        a: "Only files you explicitly mark, and only after you've compared them side by side. Matches are found by hashing file contents, so only true byte-for-byte duplicates ever show up — and every delete goes to the Recycle Bin, not a permanent removal.",
      },
      {
        q: "Does it work on Mac or Linux?",
        a: "Not yet — Duplicate Finder is Windows-only for now.",
      },
      {
        q: "What happens after the 14-day trial?",
        a: "The app locks scanning until you enter a license key. Your trial data and settings aren't affected — activating a key just unlocks it again.",
      },
      {
        q: "Why does Windows show a warning when I install it?",
        a: "Because the app isn't yet signed with a paid code-signing certificate — something most solo developers skip before their first sales. Windows flags any unrecognized publisher this way, whether the software is safe or not; it's not a judgment on this specific app. Click \"More info\" then \"Run anyway\" to continue. The source code is public on GitHub if you'd like to check what it does before installing.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Changelog",
    buy: "Buy",
    privacy: "Privacy",
    terms: "Terms",
  },
};

export default en;

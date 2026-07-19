export interface LandingContent {
  meta: { title: string; description: string };
  nav: { howItWorks: string; pricing: string; faq: string; download: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineEm: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaNote: string;
    demoMeta: string;
    demoReclaimable: string;
    counterLabel: string;
    cardKeep: string;
    cardDuplicate: string;
    cardMarkForTrash: string;
    cardOpenFile: string;
    cardKeepInstead: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { num: string; title: string; body: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  pricing: {
    amount: string;
    terms: string;
    list: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    copyright: string;
    changelog: string;
    buy: string;
    privacy: string;
    terms: string;
  };
}

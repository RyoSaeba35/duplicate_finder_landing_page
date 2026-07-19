export interface LegalDoc {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export interface LegalContent {
  privacy: LegalDoc;
  terms: LegalDoc;
  backHome: string;
  // Only set (and shown) on non-English pages -- standard practice for
  // translated legal documents: the original-language version governs
  // if a translation is ever ambiguous or inaccurate.
  authoritativeNotice?: string;
}

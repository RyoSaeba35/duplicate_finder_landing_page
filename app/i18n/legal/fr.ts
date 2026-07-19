import type { LegalContent } from "../legalTypes";
import en from "./en";

// Only the surrounding chrome is translated -- the actual legal text
// stays in English (the authoritative version) on every locale. See the
// comment on LegalContent in ../legalTypes.ts for why.
const fr: LegalContent = {
  ...en,
  backHome: "← Retour à l'accueil",
  authoritativeNotice:
    "Ce document est disponible uniquement en anglais. En cas d'ambiguïté ou d'erreur de traduction, la version anglaise fait foi.",
};

export default fr;

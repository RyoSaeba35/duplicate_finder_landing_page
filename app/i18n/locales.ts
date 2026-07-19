import type { LandingContent } from "./types";
import en from "./content/en";
import fr from "./content/fr";
import es from "./content/es";
import de from "./content/de";
import nl from "./content/nl";
import pt from "./content/pt";
import pl from "./content/pl";
import ja from "./content/ja";
import ko from "./content/ko";

export type Locale = "en" | "fr" | "es" | "de" | "nl" | "pt" | "pl" | "ja" | "ko";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
  { code: "pt", label: "Português" },
  { code: "pl", label: "Polski" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

export const CONTENT: Record<Locale, LandingContent> = { en, fr, es, de, nl, pt, pl, ja, ko };

// Root "/" is English with no prefix (simplest static-export setup, no
// redirect logic needed); every locale including "en" is ALSO available
// at "/[locale]" for direct linking and for the language switcher to
// target consistently.
export function isLocale(value: string): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

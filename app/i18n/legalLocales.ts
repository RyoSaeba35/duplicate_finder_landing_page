import type { LegalContent } from "./legalTypes";
import type { Locale } from "./locales";
import en from "./legal/en";
import fr from "./legal/fr";
import es from "./legal/es";
import de from "./legal/de";
import nl from "./legal/nl";
import pt from "./legal/pt";
import pl from "./legal/pl";
import ja from "./legal/ja";
import ko from "./legal/ko";

export const LEGAL_CONTENT: Record<Locale, LegalContent> = { en, fr, es, de, nl, pt, pl, ja, ko };

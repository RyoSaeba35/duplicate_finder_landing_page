import type { LandingContent } from "../types";

const pl: LandingContent = {
  meta: {
    title: "Duplicate Finder — znajdź i usuń zduplikowane pliki w systemie Windows",
    description: "Skanuj dowolny folder lub dysk, porównuj duplikaty obok siebie z podglądem na żywo i przenoś je bezpiecznie do Kosza. 14-dniowy bezpłatny okres próbny.",
  },
  nav: { howItWorks: "Jak to działa", pricing: "Cennik", faq: "FAQ", download: "Pobierz" },
  hero: {
    eyebrow: "Dla Windows · Bezpłatny okres próbny 14 dni · 15 € jednorazowo, aby usuwać",
    headlineLine1: "Znajdź swoje",
    headlineEm: "duplikaty",
    sub: "Skanuje dowolny folder lub dysk, pokazuje dokładnie, co jest identyczne obok siebie, i przenosi duplikaty do Kosza — nigdy trwałe usunięcie. Wypróbuj usuwanie za darmo przez 14 dni, bez konta.",
    ctaPrimary: "Pobierz dla Windows",
    ctaStore: "Pobierz z Microsoft Store",
    ctaSecondary: "Zobacz jak to działa",
    ctaNote: "Bezpłatny okres próbny 14 dni · Bez konta · Bez karty kredytowej · 15 € raz, aby odblokować na zawsze",
    securityNote: "Pierwsze uruchomienie: Windows może wyświetlić komunikat \"Windows chronił twój komputer\" — jest to normalne dla niezależnych deweloperów. Kliknij Więcej informacji → Uruchom i tak.",
    demoMeta: "3 identyczne pliki · po 158,3 KB",
    demoReclaimable: "158,3 KB do odzyskania",
    counterLabel: "do odzyskania, to skanowanie",
    cardKeep: "Zachowaj",
    cardDuplicate: "Duplikat",
    cardMarkForTrash: "zaznacz do kosza",
    cardOpenFile: "Otwórz plik ↗",
    cardKeepInstead: "Zachowaj ten zamiast →",
  },
  howItWorks: {
    eyebrow: "Jak to działa",
    title: "Trzy kroki, nic nieodwracalne dopóki nie zdecydujesz.",
    steps: [
      { num: "01 — Skanuj", title: "Wybierz folder, dysk lub cały komputer", body: "Duplicate Finder haszuje każdy plik, aby znaleźć dokładne dopasowania. Równoległe haszowanie na wszystkich rdzeniach CPU utrzymuje szybkość nawet na dużych dyskach." },
      { num: "02 — Porównaj", title: "Zobacz obie kopie obok siebie", body: "Rozmiar pliku, data modyfikacji i podgląd na żywo obrazów, PDF-ów, Word i Excel — zanim cokolwiek zdecydujesz. Masowy automatyczny wybór według reguły zajmuje się wszystkim za jednym kliknięciem." },
      { num: "03 — Odzyskaj", title: "Zachowaj jeden, usuń resztę", body: "Duplikaty trafiają do Kosza, nigdy trwałe usunięcie. Zmień zdanie w dowolnym momencie." },
    ],
  },
  features: {
    eyebrow: "Co robi",
    title: "Stworzony do prawdziwego znajdowania duplikatów, nie zgadywania.",
    items: [
      { title: "Porównanie bajt po bajcie", body: "Każdy plik jest haszowany, więc przemianowane lub przeniesione kopie są również wykrywane — nie tylko pliki o identycznych nazwach." },
      { title: "Podgląd na żywo", body: "Obrazy, PDF-y, dokumenty Word, arkusze Excel i pliki kodu są renderowane bezpośrednio w widoku porównania." },
      { title: "Tryb fotografa", body: "Dedykowana zakładka dla bibliotek zdjęć — wykrywa pary RAW+JPEG, wyświetla wbudowane podglądy z NEF, CR2, ARW, DNG i innych, oraz chroni pliki śledzone przez Lightroom przed przypadkowym usunięciem." },
      { title: "Bezpieczne usuwanie przez Kosz", body: "Każde usunięcie przechodzi przez własny Kosz systemu Windows. Aplikacja nigdy nie usuwa niczego trwale." },
      { title: "Równoległe haszowanie — szybsze skanowanie", body: "SHA-256 działa jednocześnie na wszystkich rdzeniach CPU. Duże dyski są przetwarzane znacznie szybciej." },
      { title: "Masowy automatyczny wybór według reguły", body: "Zachowaj najnowszą, najstarszą lub kopię o najkrótszej ścieżce we wszystkich grupach duplikatów jednym kliknięciem." },
      { title: "Wyszukiwanie, filtrowanie i sortowanie", body: "Wpisz nazwę pliku lub ścieżkę, aby natychmiast filtrować setki grup duplikatów. Sortuj według rozmiaru, nazwy lub daty." },
      { title: "Eksport raportu CSV", body: "Pobierz pełny arkusz wszystkich grup duplikatów — przydatny do audytu dużych dysków." },
      { title: "Skanowanie folderu lub całego dysku", body: "Od jednego folderu Pobrane do całego dysku C:\\, w dowolnym zakresie." },
    ],
  },
  pricing: {
    amount: "15 €",
    terms: "Jednorazowy zakup · bezpłatne skanowanie na zawsze",
    list: [
      "Skanuj dowolny folder lub dysk — bezpłatnie, na zawsze",
      "Zobacz wszystkie duplikaty przed podjęciem decyzji",
      "15 € raz, aby odblokować usuwanie — na zawsze twoje",
      "Bez subskrypcji, bez wymaganego konta",
    ],
    ctaPrimary: "Pobierz dla Windows",
    ctaSecondary: "Kup licencję →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Przed pobraniem",
    items: [
      { q: "Czy usunie pliki, których naprawdę potrzebuję?", a: "Tylko pliki, które jawnie oznaczysz, i tylko po porównaniu ich obok siebie. Dopasowania są znajdowane przez haszowanie zawartości, więc pojawiają się tylko prawdziwe duplikaty — i każde usunięcie trafia do Kosza." },
      { q: "Czy działa na Mac lub Linux?", a: "Jeszcze nie — Duplicate Finder jest na razie tylko dla Windows." },
      { q: "Co się dzieje po 14-dniowym okresie próbnym?", a: "Skanowanie pozostaje bezpłatne — możesz skanować dowolny folder i przeglądać wszystkie duplikaty bez żadnych kosztów, na zawsze. Usuwanie jest zablokowane po zakończeniu okresu próbnego. Jednorazowa licencja za 15 € odblokowuje usuwanie na stałe." },
      { q: "Dlaczego Windows wyświetla ostrzeżenie podczas instalacji?", a: "Ponieważ aplikacja nie jest jeszcze podpisana płatnym certyfikatem podpisu kodu. Kliknij \"Więcej informacji\", a następnie \"Uruchom i tak\". Kod źródłowy jest publiczny na GitHubie." },
    ],
  },
  footer: { copyright: "Duplicate Finder.", changelog: "Historia zmian", buy: "Kup", privacy: "Prywatność", terms: "Warunki" },
};

export default pl;
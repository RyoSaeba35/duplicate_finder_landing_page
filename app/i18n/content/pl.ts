import type { LandingContent } from "../types";

const pl: LandingContent = {
  meta: {
    title: "Duplicate Finder — znajdź duplikaty plików i odzyskaj miejsce na Windows",
    description:
      "Skanuj dowolny folder lub dysk, porównuj duplikaty obok siebie z podglądem na żywo i bezpiecznie przenoś je do kosza. 15 € jednorazowo, 14-dniowy bezpłatny okres próbny.",
  },
  nav: { howItWorks: "Jak to działa", pricing: "Cena", faq: "FAQ", download: "Pobierz" },
  hero: {
    eyebrow: "Dla Windows · 15 € jednorazowo · 14-dniowy bezpłatny okres próbny",
    headlineLine1: "Znajdź swoje",
    headlineEm: "duplikaty",
    sub: "Skanuje dowolny folder lub dysk, pokazuje dokładnie, co jest identyczne, obok siebie, i przenosi duplikaty do kosza — nigdy trwałe usunięcie.",
    ctaPrimary: "Pobierz dla Windows",
    ctaSecondary: "Zobacz, jak to działa",
    ctaNote: "Wszystkie funkcje przez 14 dni. Bez konta, bez karty kredytowej.",
    demoMeta: "3 identyczne pliki · po 158,3 KB",
    demoReclaimable: "158,3 KB do odzyskania",
    counterLabel: "do odzyskania w tym skanowaniu",
    cardKeep: "Zachowaj",
    cardDuplicate: "Duplikat",
    cardMarkForTrash: "zaznacz do kosza",
    cardOpenFile: "Otwórz plik ↗",
    cardKeepInstead: "Zachowaj ten zamiast tego →",
  },
  howItWorks: {
    eyebrow: "Jak to działa",
    title: "Trzy kroki, nic nie jest trwałe, dopóki tego nie zdecydujesz.",
    steps: [
      {
        num: "01 — Skanuj",
        title: "Wybierz folder, dysk lub cały komputer",
        body: "Duplicate Finder haszuje każdy plik, aby znaleźć dokładne dopasowania — nie tylko podobne nazwy czy rozmiary.",
      },
      {
        num: "02 — Porównaj",
        title: "Zobacz obie kopie obok siebie",
        body: "Rozmiar pliku, data modyfikacji i podgląd na żywo dla obrazów, plików PDF, dokumentów Word i arkuszy Excel — zanim cokolwiek zdecydujesz.",
      },
      {
        num: "03 — Odzyskaj",
        title: "Zachowaj jeden, usuń resztę",
        body: "Duplikaty trafiają do kosza, nigdy trwałe usunięcie. Możesz zmienić zdanie w każdej chwili.",
      },
    ],
  },
  features: {
    eyebrow: "Co potrafi",
    title: "Zbudowany, by naprawdę znajdować duplikaty, a nie zgadywać.",
    items: [
      {
        title: "Dopasowanie bajt po bajcie",
        body: "Każdy plik jest haszowany, więc zmienione nazwy lub przeniesione kopie i tak zostaną wykryte — nie tylko pliki o pasujących nazwach.",
      },
      {
        title: "Podglądy na żywo",
        body: "Obrazy, pliki PDF, dokumenty Word, arkusze Excel i pliki kodu są wyświetlane bezpośrednio w widoku porównania.",
      },
      {
        title: "Bezpieczne dzięki koszowi",
        body: "Każde usunięcie przechodzi przez kosz systemu Windows. Aplikacja sama w sobie nigdy niczego trwale nie usuwa.",
      },
      {
        title: "Skanuj folder lub cały dysk",
        body: "Od jednego folderu Pobrane po cały dysk C:\\, w zakresie, który wybierzesz.",
      },
    ],
  },
  pricing: {
    amount: "15 €",
    terms: "Jednorazowy zakup · bez subskrypcji",
    list: [
      "Wszystkie funkcje przez 14 dni, za darmo",
      "Brak konta lub karty kredytowej na okres próbny",
      "Jedna licencja, na zawsze twoja",
    ],
    ctaPrimary: "Pobierz dla Windows",
    ctaSecondary: "Kup licencję →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Zanim pobierzesz",
    items: [
      {
        q: "Czy usunie pliki, których naprawdę potrzebuję?",
        a: "Tylko pliki, które wyraźnie oznaczysz, i tylko po ich porównaniu obok siebie. Dopasowania znajdowane są przez haszowanie zawartości plików, więc pojawiają się tylko prawdziwe duplikaty bajt po bajcie — a każde usunięcie trafia do kosza, nigdy nie jest trwałe.",
      },
      {
        q: "Czy działa na Mac lub Linux?",
        a: "Jeszcze nie — Duplicate Finder jest na razie dostępny tylko dla Windows.",
      },
      {
        q: "Co się dzieje po 14-dniowym okresie próbnym?",
        a: "Aplikacja blokuje skanowanie, dopóki nie wprowadzisz klucza licencyjnego. Twoje dane i ustawienia z okresu próbnego pozostają nienaruszone — aktywacja klucza po prostu ponownie odblokowuje aplikację.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Historia zmian",
    buy: "Kup",
    privacy: "Prywatność",
    terms: "Regulamin",
  },
};

export default pl;

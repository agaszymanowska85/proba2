/**
 * ============================================================================
 *  SITE CONFIG — JEDYNY PLIK, KTÓRY MUSISZ EDYTOWAĆ
 * ============================================================================
 *  Wszystkie teksty, kolory, fonty, zdjęcia i linki na stronie pochodzą stąd.
 *  Nie musisz znać się na kodzie — wystarczy zmienić tekst między cudzysłowami
 *  (" " lub ' ') i zapisać plik. Nic innego nie trzeba ruszać.
 *
 *  ZASADY, O KTÓRYCH WARTO PAMIĘTAĆ:
 *  1) Nie usuwaj przecinków na końcu linii ani cudzysłowów.
 *  2) Jeśli w tekście chcesz użyć cudzysłowu, poprzedź go znakiem \ (np. \").
 *  3) Zdjęcia wrzucaj do folderu /public/images/ (albo /public/images/gallery/)
 *     i wpisuj tu ścieżkę zaczynającą się od "/images/...".
 *  4) Fonty pochodzą z Google Fonts — wpisz dokładną nazwę fonta z
 *     fonts.google.com (np. "Playfair Display"), a strona sama go wczyta.
 *  5) Wiszące spójniki (i, a, o, u, w, z) są automatycznie doklejane do
 *     następnego słowa na całej stronie — nie musisz nic robić ręcznie.
 * ============================================================================
 */

const siteConfig = {
  // --------------------------------------------------------------------------
  // 1. USTAWIENIA PODSTAWOWE
  // --------------------------------------------------------------------------
  meta: {
    title: "Dzień otwarty w Akademii Leona Koźmińskiego",
    description:
      "Zapisz się na Dzień otwarty Akademii Leona Koźmińskiego w Warszawie. Poznaj kampus, wykładowców i ofertę studiów I, II stopnia oraz jednolitych magisterskich.",
    siteUrl: "https://przyklad-dzien-otwarty-alk.vercel.app",
  },

  // --------------------------------------------------------------------------
  // 2. FONTY — nazwy z Google Fonts.
  // --------------------------------------------------------------------------
  fonts: {
    display: { name: "Open Sans", fallback: "Helvetica, Arial, sans-serif", weights: [400, 600, 800] },
    body: { name: "Open Sans", fallback: "Helvetica, Arial, sans-serif", weights: [400, 500, 600, 700] },
    mono: { name: "JetBrains Mono", fallback: "Courier New, monospace", weights: [400, 500, 600] },
  },
  // Grubość (waga) fonta nagłówków — 800 to "Extra Bold"
  displayWeight: 800,

  // --------------------------------------------------------------------------
  // 3. KOLORY
  // --------------------------------------------------------------------------
  colors: {
    background: "#030928",      // główne tło strony (ciemny granat)
    backgroundSoft: "#0A1442",  // tło naprzemiennych sekcji
    surface: "#0F1B4F",         // tło kart / paneli
    surfaceBorder: "#28316B",   // cienkie linie / obramowania kart
    text: "#F2F5FF",            // główny tekst na ciemnym tle
    textMuted: "#AEB4D6",       // tekst pomocniczy / opisy
    accent: "#FF5F5E",          // kolor akcentu — przyciski, nagłówki, linki
    accentSoft: "#FF8988",      // jaśniejszy odcień akcentu — hover, detale
    accentContrast: "#2A0605",  // tekst na jasnym tle akcentowym (np. przyciski)
    purpleAccent: "#6C5DD3",    // drugi akcent — blobs, gradienty statystyk
  },

  // --------------------------------------------------------------------------
  // 4. LOGO I NAWIGACJA
  // --------------------------------------------------------------------------
  nav: {
    logo: "/logo/logo-ship.png",
    logoAlt: "Akademia Leona Koźmińskiego",
    officialSiteButton: {
      label: "Strona uczelni",
      href: "https://www.kozminski.edu.pl/",
    },
    signUpButton: {
      label: "Zapisz się",
      href: "#zapisz-sie",
    },
  },

  // Social media — użyte w navbarze i w stopce
  social: [
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/kozminski_university/" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/school/kozminski-university/" },
    { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/KozminskiUniversity" },
  ],

  // --------------------------------------------------------------------------
  // 5. HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: "Akademia Leona Koźmińskiego",
    headlineHighlight: "Dzień otwarty",
    headlineRest: "w Akademii Leona Koźmińskiego",
    subheadline:
      "Spotkaj wykładowców, studentów i absolwentów. Zwiedź kampus przy Jagiellońskiej i dowiedz się, jak naprawdę wygląda studiowanie w Akademii Leona Koźmińskiego.",

    // ⚠️ WAŻNE: to jest NAJBLIŻSZY prawdziwy termin sprawdzony na kozminski.edu.pl
    // w momencie tworzenia strony. Uczelnia organizuje kilka Dni otwartych w roku —
    // przed publikacją sprawdź aktualny termin i zaktualizuj poniższe pola.
    day: "04",
    month: "07",
    dayOfWeekLabel: "Sobota",
    yearLabel: "2026",
    timeLabel: "Start 12:00",
    locationLabel: "Budynek D, Warszawa",
    locationDetail: "Akademia Leona Koźmińskiego, ul. Jagiellońska 57/59",

    bannerImage: "/images/hero-banner.jpg",
    bannerImageAlt: "Budynek Akademii Leona Koźmińskiego z widocznym szyldem uczelni",

    ctaPrimary: { label: "Zapisz się na wydarzenie", href: "#zapisz-sie" },
    ctaSecondary: { label: "Zobacz program", href: "#program" },

    ticketFootNote: "Wymagana rejestracja",
    scrollHintLabel: "Przewiń niżej",
  },

  // --------------------------------------------------------------------------
  // 6. STATYSTYKI — sekcja nachodząca na zdjęcie w hero
  // --------------------------------------------------------------------------
  stats: {
    items: [
      { value: 3200, suffix: "+", label: "Osób odwiedziło nasze Dni otwarte w ostatnim roku", gradient: "accent" },
      { value: 18, suffix: "", label: "Kierunków studiów do wyboru — po polsku i angielsku", gradient: "purple" },
      { value: 15, suffix: " min", label: "Minut od centrum Warszawy komunikacją miejską", gradient: "mixed" },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. PROGRAM WYDARZENIA — oś czasu (dane z oficjalnej strony ALK)
  // --------------------------------------------------------------------------
  program: {
    id: "program",
    eyebrow: "Harmonogram",
    title: "Program Dnia otwartego",
    items: [
      {
        time: "12:00",
        title: "Powitanie i spotkanie z władzami uczelni",
        description: "Krótkie wystąpienia dziekanów i prodziekanów, którzy opowiedzą o swoich kierunkach studiów.",
      },
      {
        time: "12:15",
        title: "World-Class Education in the Heart of Europe",
        description: "Prezentacja studiów I i II stopnia w języku angielskim — sala D 123.",
      },
      {
        time: "12:45",
        title: "Część targowa — Atrium D",
        description: "Spotkania z kierownikami poszczególnych kierunków, którzy odpowiedzą na szczegółowe pytania o program studiów.",
      },
      {
        time: "12:45",
        title: "Strefa studencka",
        description: "Rozmowa ze studentami Akademii Leona Koźmińskiego — pytaj o wszystko, o co nie zapytasz wykładowcy.",
      },
      {
        time: "13:00 / 13:30",
        title: "Zwiedzanie kampusu",
        description: "Dwa terminy spaceru po uczelni w towarzystwie studentów-przewodników.",
      },
      {
        time: "Cały czas",
        title: "Kawiarnia i stoisko z lodami",
        description: "Przez cały czas trwania wydarzenia czeka na Was uczelniana kawiarnia z kawą i ciastkami oraz stoisko z lodami.",
      },
    ],
    note: "Udział w wydarzeniu wymaga wcześniejszej rejestracji — liczba miejsc na spotkania jest ograniczona.",
    noteButton: { label: "Zarejestruj się", href: "#zapisz-sie" },
  },

  // --------------------------------------------------------------------------
  // 8. RANKING I AKREDYTACJE
  // --------------------------------------------------------------------------
  ranking: {
    ftBadgeImage: "/images/ft-badge.png",
    ftBadgeAlt: "1 in CEE — Financial Times European Business Schools 2025 Ranking",
    title: "Nr 1 w Europie Środkowo-Wschodniej",
    titleRest: "wśród szkół biznesu",
    description: "Financial Times European Business Schools Ranking — Akademia Leona Koźmińskiego liderem regionu CEE.",
    accreditationImage: "/images/accred-badges.png",
    accreditationAlt: "Akredytacje EQUIS, AACSB, AMBA",
  },

  // --------------------------------------------------------------------------
  // 9. GALERIA — slider z prawdziwymi zdjęciami, przewija się w nieskończoność
  // --------------------------------------------------------------------------
  gallery: {
    id: "galeria",
    eyebrow: "Poprzednie edycje",
    title: "Tak wyglądały nasze Dni otwarte",
    images: [
      { src: "/images/gallery/photo-1.jpg", alt: "Studentki na Dniu otwartym", caption: "Strefa studencka" },
      { src: "/images/gallery/photo-2.jpg", alt: "Nagrywanie relacji z wydarzenia", caption: "Relacja na żywo" },
      { src: "/images/gallery/photo-3.jpg", alt: "Studentki pozujące do zdjęcia", caption: "Atmosfera spotkania" },
      { src: "/images/gallery/photo-4.jpg", alt: "Prelegent podczas panelu", caption: "Spotkania z ekspertami" },
    ],
  },

  // --------------------------------------------------------------------------
  // 10. FINALNE CTA — sekcja zamykająca przed stopką
  // --------------------------------------------------------------------------
  finalCta: {
    title: "Zobacz to na żywo",
    description: "Zarejestruj się już teraz — liczba miejsc na spotkania z kierownikami kierunków i zwiedzanie kampusu jest ograniczona.",
    button: { label: "Zapisz się na wydarzenie", href: "#zapisz-sie" },
  },

  // --------------------------------------------------------------------------
  // 11. SEKCJA INFORMACYJNA — 4 kafelki akcji
  // --------------------------------------------------------------------------
  info: {
    id: "zapisz-sie",
    eyebrow: "Zanim przyjedziesz",
    title: "Wszystko, czego potrzebujesz w jednym miejscu",
    description: "Zapisz się na listę zainteresowanych, dodaj wydarzenie do kalendarza i sprawdź program spotkania.",
    actions: [
      {
        icon: "users",
        title: "Zapisz się",
        description: "Dołącz do listy osób zainteresowanych i otrzymuj przypomnienia o wydarzeniu.",
        buttonLabel: "Zapisz się",
        href: "https://www.kozminski.edu.pl/pl/wydarzenia/dzien-otwarty-w-akademii-leona-kozminskiego",
      },
      {
        icon: "calendar",
        title: "Dodaj do kalendarza",
        description: "Nie zapomnij o terminie — dodaj wydarzenie jednym kliknięciem.",
        buttonLabel: "Dodaj do Google Kalendarza",
        useCalendarLink: true,
      },
      {
        icon: "ticket",
        title: "Program wydarzenia",
        description: "Zobacz szczegółowy harmonogram spotkań, wykładów i zwiedzania kampusu.",
        buttonLabel: "Zobacz program",
        href: "#program",
      },
      {
        icon: "arrow",
        title: "Rejestracja",
        description: "Rejestracja jest obowiązkowa — liczba miejsc na spotkania jest ograniczona.",
        buttonLabel: "Przejdź do rejestracji",
        href: "https://www.kozminski.edu.pl/pl/wydarzenia/dzien-otwarty-w-akademii-leona-kozminskiego",
      },
    ],
    calendar: {
      title: "Dzień otwarty — Akademia Leona Koźmińskiego",
      startDateTime: "2026-07-04T12:00:00",
      endDateTime: "2026-07-04T15:00:00",
      details: "Dzień otwarty Akademii Leona Koźmińskiego — spotkanie z władzami uczelni, zwiedzanie kampusu, strefa studencka i konsultacje dotyczące kierunków studiów.",
      location: "Akademia Leona Koźmińskiego, ul. Jagiellońska 57/59, 03-301 Warszawa",
    },
  },

  // --------------------------------------------------------------------------
  // 12. STOPKA
  // --------------------------------------------------------------------------
  footer: {
    logo: "/logo/logo-ship.png",
    address: "ul. Jagiellońska 57/59, 03-301 Warszawa",
    phone: "+48 22 519 21 00",
    email: "rekrutacja@kozminski.edu.pl",
    website: "www.kozminski.edu.pl",
    links: [
      { label: "Strona uczelni", href: "https://www.kozminski.edu.pl/" },
      { label: "Zapisz się", href: "#zapisz-sie" },
    ],
    copyright: "© {rok} Akademia Leona Koźmińskiego. Strona nieoficjalna — landing page wydarzenia.",
  },
};

export default siteConfig;

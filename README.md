# Dzień otwarty w Akademii Leona Koźmińskiego — landing page

Prosta, w pełni responsywna strona wydarzenia zbudowana w **Next.js + Tailwind CSS**.
Cała zawartość (teksty, kolory, fonty, zdjęcia, linki) edytowana jest w **jednym pliku**:

```
src/siteConfig.js
```

Nie musisz znać się na programowaniu — wystarczy edytować tekst w cudzysłowach.

---

## 1. Co jest w paczce

```
alk-open-day/
├── src/
│   ├── siteConfig.js        ← TU EDYTUJESZ TREŚCI, KOLORY, FONTY, LINKI
│   ├── lib/                 (pliki pomocnicze — nie trzeba ruszać)
│   ├── app/                 (szkielet strony — nie trzeba ruszać)
│   └── components/          (sekcje strony — nie trzeba ruszać)
├── public/
│   ├── logo/                ← logo uczelni (statek + wordmark)
│   └── images/
│       ├── hero-banner.jpg  ← zdjęcie budynku w tle sekcji hero
│       ├── ft-badge.png     ← plakietka rankingowa Financial Times
│       ├── accred-badges.png← logo akredytacji EQUIS / AACSB / AMBA
│       └── gallery/         ← zdjęcia w galerii (prawdziwe zdjęcia z eventów)
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md                ← ten plik
```

---

## 2. Uruchomienie na komputerze (podgląd na żywo)

Potrzebujesz **Node.js** (wersja 18 lub nowsza) — pobierz z [nodejs.org](https://nodejs.org) (wersja LTS).

1. Rozpakuj folder `alk-open-day.zip`.
2. Otwórz terminal w tym folderze.
3. Zainstaluj zależności:
   ```
   npm install
   ```
4. Uruchom podgląd:
   ```
   npm run dev
   ```
5. Otwórz w przeglądarce: **http://localhost:3000**

Strona odświeża się automatycznie po każdej zmianie w `siteConfig.js`.

---

## 3. Co i jak edytować w `src/siteConfig.js`

Plik podzielony jest na ponumerowane sekcje z komentarzami po polsku:

| Sekcja | Co zmienia |
|---|---|
| `meta` | Tytuł karty przeglądarki, opis dla Google |
| `fonts` / `displayWeight` | Nazwy fontów z Google Fonts i grubość nagłówków |
| `colors` | Kolory strony (kody HEX) |
| `nav` / `social` | Logo, przyciski w górnym menu, ikonki social media |
| `hero` | Nagłówek, data/godzina/miejsce (styl „04.07"), zdjęcie w tle, przyciski |
| `stats` | 3 statystyki nachodzące na zdjęcie w hero (animowane liczniki) |
| `program` | Harmonogram wydarzenia (oś czasu) |
| `ranking` | Plakietka rankingowa (Financial Times) i logo akredytacji |
| `info` | 4 kafelki: zapis, kalendarz, program, rejestracja |
| `gallery` | Zdjęcia z poprzednich edycji (przewijany slider) |
| `finalCta` | Sekcja zamykająca przed stopką |
| `footer` | Dane kontaktowe, linki, social media |

**Przykład — zmiana daty wydarzenia:**
```js
day: "04",
month: "07",
dayOfWeekLabel: "Sobota",
yearLabel: "2026",
```
Pamiętaj, żeby zaktualizować też `info.calendar.startDateTime` / `endDateTime`
(w formacie `RRRR-MM-DDTHH:MM:SS`) — to na ich podstawie generuje się przycisk
„Dodaj do kalendarza".

> ⚠️ **Ważne:** w konfiguracji wpisana jest data **najbliższego, prawdziwego
> terminu**, sprawdzonego na kozminski.edu.pl w momencie tworzenia strony
> (4 lipca 2026). Uczelnia organizuje kilka Dni otwartych w roku — przed
> każdą publikacją sprawdź aktualny termin na
> [stronie wydarzenia ALK](https://www.kozminski.edu.pl/pl/wydarzenia/dzien-otwarty-w-akademii-leona-kozminskiego)
> i zaktualizuj sekcje `hero` oraz `info.calendar`.

**Przykład — zmiana koloru akcentu:**
```js
accent: "#FF5F5E",
```
Zmień kod HEX, zapisz plik — wszystkie przyciski i akcenty zmienią kolor.

**Przykład — zmiana fonta nagłówków:**
```js
display: { name: "Playfair Display", fallback: "Georgia, serif", weights: [400, 600, 800] },
```
Wpisz dokładną nazwę fonta z Google Fonts — strona sama go wczyta.

**Wiszące spójniki** (i, a, o, u, w, z) są automatycznie doklejane do
następnego słowa na całej stronie (funkcja `nbsp()` w `src/lib/widows.js`)
— nie musisz nic robić ręcznie w tekstach.

---

## 4. Podmiana zdjęć

1. Wrzuć nowe zdjęcie do `public/images/` (banner) lub `public/images/gallery/` (galeria).
2. W `siteConfig.js` zmień ścieżkę, np.:
   ```js
   bannerImage: "/images/moje-zdjecie.jpg",
   ```
   Ścieżka zawsze zaczyna się od `/images/...` (bez `public` na początku).

Galeria przewija się w nieskończoność (poziomy slider) — zdjęcia najlepiej
wrzucać w formacie poziomym (np. 4:3 lub 16:9), żeby dobrze się kadrowały.

---

## 5. Publikacja: GitHub + Vercel

### Krok 1 — wrzuć projekt na GitHub
1. Załóż nowe, puste repozytorium na [github.com](https://github.com) (bez README, .gitignore itd. — te pliki już masz).
2. W terminalu, w folderze projektu:
   ```
   git init
   git add .
   git commit -m "Dzień otwarty w Akademii Leona Koźmińskiego — landing page"
   git branch -M main
   git remote add origin ADRES_TWOJEGO_REPOZYTORIUM.git
   git push -u origin main
   ```

### Krok 2 — połącz z Vercel
1. Wejdź na [vercel.com](https://vercel.com) i zaloguj się (najłatwiej przez konto GitHub).
2. Kliknij **Add New → Project**.
3. Wybierz repozytorium, które właśnie wypchnęłaś.
4. Vercel sam rozpozna, że to projekt Next.js — nic nie trzeba zmieniać w ustawieniach.
5. Kliknij **Deploy**.

Po chwili strona będzie dostępna pod adresem `nazwa-projektu.vercel.app`.
Każda kolejna zmiana wypchnięta na GitHub (`git push`) automatycznie
zaktualizuje działającą stronę.

---

## 6. Dostępność (WCAG)

- Wszystkie interaktywne elementy mają widoczny fokus dla nawigacji klawiaturą.
- Strona respektuje ustawienie „ogranicz animacje" systemu (`prefers-reduced-motion`).
- Tekst i tła spełniają wymagany kontrast AA na ciemnym tle (biel/lawenda na granacie).
- Wszystkie obrazy mają pole `alt` — pamiętaj o wypełnieniu go sensownym opisem
  przy podmianie zdjęć w galerii.

---

## 7. Rozszerzanie strony

Jeśli w przyszłości zechcesz dodać kolejne funkcje (np. odliczanie do wydarzenia,
prawdziwy plik `.ics` do pobrania, wersję angielską, mapę dojazdu, formularz
zapisu zamiast linku zewnętrznego), zobacz `PROMPTBOOK.md` — zawiera gotowe,
samodzielne polecenia do wklejenia w nowej rozmowie z Claude.

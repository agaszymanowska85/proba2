# PROMPTBOOK — rozszerzenia strony Dnia Otwartego ALK

Ten plik zawiera gotowe polecenia, które możesz wkleić w nowej rozmowie z
Claude (z załączonym projektem), żeby rozwinąć stronę bez konieczności
opisywania całego kontekstu od nowa. Każdy moduł jest niezależny — możesz
zlecić je pojedynczo, w dowolnej kolejności.

Przy każdym module podaj Claude: *„Pracuję na projekcie Next.js + Tailwind
opisanym w README.md, wszystkie treści są w src/siteConfig.js”* i wklej
załączony projekt.

---

## Moduł 1 — Odliczanie do wydarzenia
> Dodaj w sekcji hero licznik (dni / godziny / minuty) odliczający czas do
> daty wydarzenia zapisanej w `siteConfig.hero`. Licznik ma być komponentem
> klienckim (`"use client"`), zaktualizowanym co sekundę, w stylu spójnym z
> resztą strony (mono font, akcentowy kolor). Po upływie terminu licznik ma
> zniknąć i pokazać tekst „Zapraszamy!”.

## Moduł 2 — Prawdziwy plik .ics do pobrania
> Obecny przycisk „Dodaj do kalendarza” prowadzi tylko do Google Calendar.
> Dodaj też generowanie i pobieranie pliku `.ics` (Apple Calendar / Outlook)
> na podstawie danych z `siteConfig.info.calendar`, bez dodatkowych zależności
> (czysty JavaScript, Blob + link do pobrania).

## Moduł 3 — Wersja angielska (przełącznik PL/EN)
> Rozdziel siteConfig.js na `siteConfig.pl.js` i `siteConfig.en.js` (ta sama
> struktura co obecnie) i dodaj prosty przełącznik języka w nawigacji, bez
> wprowadzania routingu — zapamiętywanie wyboru w localStorage.

## Moduł 4 — Mapa dojazdu
> Dodaj w sekcji hero lub jako osobną sekcję osadzoną mapę Google Maps (iframe,
> bez klucza API) wskazującą adres z `siteConfig.hero.locationDetail`.

## Moduł 5 — Formularz zapisu na wydarzenie (zamiast linku zewnętrznego)
> Zastąp link „Zapisz się” prostym formularzem (imię, e-mail, wybrany kierunek
> studiów) z walidacją po stronie klienta. Wyślij dane przez integrację
> wskazaną przeze mnie (np. Formspree, Google Forms, webhook) — zapytaj mnie o
> docelowy adres/endpoint przed wdrożeniem.

## Moduł 6 — Dopracowanie animacji i mikrointerakcji
> Dodaj subtelne animacje pojawiania się sekcji przy scrollowaniu (Intersection
> Observer, bez zewnętrznych bibliotek), zachowując zasadę `prefers-reduced-motion`
> już obecną w `globals.css`. Nie przesadzaj z liczbą efektów — maksymalnie
> jedna spójna animacja wejścia na sekcję.

---

### Uwaga dla Claude, które będzie kontynuować pracę
Design opiera się na tokenach zdefiniowanych w `siteConfig.js` (kolory, fonty)
i motywie „bilet na wydarzenie" z dużą, typograficzną datą (DD.MM) jako
elemencie sygnaturowym sekcji hero. Strona intensywnie korzysta z
glassmorfizmu (szklane, rozmyte panele — `backdrop-blur` + półprzezroczyste
tła) oraz animowanych „sparkle" (4-ramienne iskierki, nie 5-ramienne gwiazdy).
Kolor akcentu to jaskrawy koral `#FF5F5E`, font nagłówków to Open Sans
Extra Bold (800). Nowe elementy powinny trzymać się tej samej dyscypliny:
mono font do dat/etykiet/liczników czasu, szkło zamiast płaskich kart,
niełamliwe spacje po jednoliterowych spójnikach (funkcja `nbsp()` z
`src/lib/widows.js` — używaj jej przy każdym nowym dłuższym tekście z
konfiguracji). Unikaj dodawania nowych kolorów spoza palety w
`siteConfig.colors` bez wyraźnej potrzeby.

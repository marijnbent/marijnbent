# Jury ronde 3

Bronnen: `iterate/scorecard.md`, `iterate/references/{lynn,josh,piper}.jpg`, de screenshots van baseline, `round-2/a` en `round-3/{d,e,f}`. Geen broncode, logs of eerdere juryteksten gelezen.

## Keuze per volgorde

- **Volgorde 1 (F, D, E tegen A en baseline):** D. F verliest op leesbaarheid. E verliest op compactheid. D wint van A en van de baseline.
- **Volgorde 2 (E, D, F tegen A en baseline):** D. Hetzelfde oordeel, dus geen split.

## Behouden of verwerpen

- **D: behouden.** D wint van A op karakter en speciaal. Op geheel en compact zie ik geen regressie, eerder winst.
- **E: verwerpen.** De home 1440 is 5211 px hoog, tegen 4175 bij D en 4323 bij A. Dat komt door een zigzag van groot beeld en enorme titel. De grijze tegels en schuine kaarten laten veel lege ruimte. `e/ollie-1440-full.jpg`: de schuine kaart heeft een grote lege onderkant. Dat is een regressie op compactheid.
- **F: verwerpen.** In `f/ollie-1440-full.jpg` loopt de bodytekst over de volle breedte, ongeveer 1340 px per regel. Dat is een regressie op leesbaarheid. In `f/home-1440-full.jpg` zijn de screenshot-thumbnails van 160 px onleesbaar. De titel "Obsidian Print" botst bijna met zijn pijl.
- Op 390 zijn D, E en F gelijk. Het verschil zit alleen op desktop.

## Scores beste nieuwe kandidaat (D)

| Waarde | Baseline (bevroren) | A | D |
|---|---|---|---|
| Specialer | 5 | 7.5 | **7.5** |
| Meer karakter | 5 | 7.5 | **8** |
| Geheel | 4 | 7.5 | **8** |
| Compact/leesbaar/responsive | 6 | 7.5 | **8** |

## Bewijs per waarde

**Specialer (7.5, beter dan A maar nog geen 8)**
- `d/home-1440-full.jpg`, sectie "Wat ik maak":
  - BookLite en Yellow Shop staan als grote echte schermen in een 2-up.
  - Ollie, Prepped en Obsidian staan als tegels eronder, met de echte otter- en ei-icoon.
  - A had hier alleen een tekstlijst. Het werk is nu meteen te zien.
- `d/ai-1440-full.jpg`: de illustratie "Een export opschonen" (Invoer/Resultaat, Totaal €24,40) toont concreet wat je op de cursusdag doet. Dat is sterker dan A's abstracte illustratie.
- Waarom geen 8:
  - De opbouw blijft een gangbaar portfoliogrid (2-up plus 3-up met grijze tegels).
  - `d/courses-1440-full.jpg` is pixelgelijk aan A.
  - De cursuspagina's hebben buiten de illustratie geen eigen signatuur. Vergeleken met de referenties blijft het netjes, niet eigenzinnig.

**Meer karakter (8)**
- Handgeschreven persoonlijke redenen in blauw:
  - `d/booklite-1440-full.jpg` en `d/booklite-2560-fold.jpg`: "Ik wilde boeken delen met mijn huishouden en verder lezen op mijn Kobo."
  - `d/ollie-768-full.jpg`: "De kleine handelingen die ik de hele dag doe, wilde ik bij elkaar hebben."
  - Hier praat Marijn zelf. In A stond dit als vette sans-kop in een grijze box.
- Busroute in `d/home-768-full.jpg`, sectie "Richting Kirgizië":
  - Labels "Zelf gebouwd" en "Armenië been gebroken".
  - Script-regel "Dat stond niet op de route."
  - Het verhaal klopt met de feiten en is in één oogopslag te lezen.
- De koe met oormerk in de hero en het koe-logo in de nav blijven staan (`d/home-2560-fold.jpg`).

**Geheel (8)**
- De cursuspagina's hebben nu dezelfde contactstrip als de rest van de site:
  - `d/blockchain-1440-full.jpg` onderaan: "Ik kijk met je mee." met foto, telefoon en e-mail.
  - Er staat "Of bel Marijn" naast de primaire knop in de hero van AI en Blockchain.
  - A had hier een losse donkere band.
- Een compacte "Volgend project"-link vervangt A's grote grijze kaart (`d/ollie-768-full.jpg`). Project- en cursuspagina's volgen nu één ritme: meta-bullets, inhoud, contact, grote naam.
- Op 2560 blijft alles in een begrensde kolom (`d/home-2560-fold.jpg`, `d/booklite-2560-fold.jpg`).

**Compact/leesbaar/responsive (8)**
- Pagina's zijn korter zonder dat er inhoud verdwijnt:
  - home 1440: 4323 → 4175 px;
  - AI 1440: 3200 → 2914 px;
  - Blockchain 1440: 3412 → 3126 px.
- Op 390 gebruikt de projectlijst compacte rijen met icoon. De handgeschreven quotes lopen netjes af. Ollie en BookLite mobiel zijn korter dan bij A.
- 768 (`d/home-768-full.jpg`):
  - de 2-up en 3-up blijven leesbaar;
  - de buslabels zijn leesbaar;
  - de cursuskaarten staan netjes.
- Bodytekst blijft binnen een leesbare maat. Bij F is dat niet zo.

## Regressies (D)

- In `d/ai-1440-full.jpg` mist de nieuwe lichte contactstrip "maximaal vijftien mensen". De hero noemt nog wel "1 tot 15 deelnemers", dus het feit is niet weg.
- In `d/ollie-1440-full.jpg` staat de quote links met lege ruimte eronder, naast een langere body rechts. Dat is klein, maar zichtbaar.
- De Obsidian Print-tegel op home is een verkleinde screenshot en onleesbaar (`d/home-768-full.jpg`, derde tegel). Naast twee sterke iconen valt hij weg.

## Feitencheck

- Koeien, de zelfgebouwde bus en het gebroken been in Armenië op weg naar Kirgizië kloppen (busroute op home).
- Cursussen: één dag, 1 tot 15 deelnemers, bij jullie of online, meerdere sessies voor een groter team (`d/blockchain-1440-full.jpg`). Klopt.
- Telefoon +31 6 8105 3848. Klopt.
- Geen whiteboardfoto gezien.
- Op de nieuwe home staat "Yellow Shop". De route `/yellow-store/` kan ik niet uit screenshots controleren.
- De Ollie-otter en het Prepped-ei zijn gebruikt als app-iconen, niet als gegenereerde foto's. Klopt.
- De AI-export staat er als schematisch cursusvoorbeeld, niet als klantresultaat. Klopt.
- De persoonlijke redenen sluiten inhoudelijk aan bij de projecten. Of ze letterlijk uit de oorspronkelijke teksten komen, kan ik niet controleren.
- Keyboard, no-JS, routes, toegankelijkheid in code en onderhoudbaarheid: niet te beoordelen uit screenshots. Hiervoor geef ik geen pass.

## Belangrijkste resterende zwaktes

1. **Specialer blijft onder 8.**
   - De cursusoverzichtspagina is ongewijzigd en generiek.
   - Behalve de illustratie hebben de cursusdetailpagina's niets wat alleen bij Marijn hoort.
   - De home-grid voelt als een standaardportfolio.
2. De derde tegel (Obsidian) mist een eigen icoon of beeld en breekt het ritme van de tegelrij.
3. Grijze tegelachtergronden achter iconen voelen als placeholders.
4. De gigantische naam onderaan herhaalt zich op elke pagina zonder variatie. Die is sterk op home, maar wordt routine op subpagina's.

## Kort

**Keuze: D** in beide volgordes. E en F verworpen.
**Scores D:**
- specialer 7.5
- karakter 8
- geheel 8
- compact/leesbaar/responsive 8

**Target gemist:** specialer (7.5 < 8). De andere drie halen 8.

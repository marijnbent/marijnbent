# Jury ronde 4 — G/H/I tegen D en baseline

Gelezen: `iterate/scorecard.md`, `iterate/references/{lynn,josh,piper}.jpg` en de genoemde screenshots. Geen broncode, logs, state of eerdere juryteksten. Pixelvergelijking G tegen D: `home-*` (op 4 pixels na), `booklite-*` en `ollie-*` zijn identiek. G wijzigt alleen `courses`, `ai` en `blockchain`.

## Wat er veranderd is

- **Cursusoverzicht (G/H/I):** de illustratiekaarten en de vier-feitenbalk van D zijn vervangen door werkende mini-oefeningen. Het ene blok is "Een export opschonen" (rommelige invoer, knop "Schoon op", nette tabel met totaal). Het andere is "Welke tak gaat verder?" (Tak A/B, "Blok op A +", "Blok op B +", "Opnieuw", status en modeltoelichting "elk blok voor evenveel rekenwerk"). De feiten staan nu als drie stippen onder de titel. De onderkant heeft een portret met "Ik kijk met je mee." In de hero zijn "Bel Marijn" en de mailknop vervallen; het nav-CTA blijft.
  - **G:** tekst links, oefening rechts. Rustig en editorial.
  - **H:** oefening boven de titel, twee kolommen. Grote lege band tussen de beschrijving en "Bekijk het programma" (`h/courses-1440-full.jpg`, y≈990–1110 en y≈1090–1220).
  - **I:** als G, maar elk blok staat op een zwart vlak met daarin een grijze kaart (`i/courses-1440-full.jpg`). Op 390 ontstaat dubbele inkadering (`i/courses-390-full.jpg`).
- **AI-detail (G):** de statische exporttabel is interactief geworden (textarea en knop). De dubbele regel "Een export opschonen" bij "Jouw eigen taak" is weg. Verder gelijk aan D.
- **Blockchain-detail (G):** het statische "meer rekenwerk / valt af"-diagram is vervangen door de interactieve vork.
- **Actieve staat:** `g/courses-1440-active.jpg` toont andere invoer (lunch/THEE → € 2,40, "Opgeschoond.") en Tak B die wint ("Tak B heeft meer rekenwerk en gaat verder", knop B uitgeschakeld). De voorbeelden reageren dus zichtbaar. Dit bewijst geen keyboard-, focus- of no-JS-pass; dat claim ik niet.

## Volgorde 1: I, G, H tegen D en baseline

- **I tegen D:** I springt er het meest uit door de zwarte vlakken. Die horen echter nergens anders bij de beeldtaal: home, projecten en detailpagina's hebben geen zwarte vlakken. Het is ook zwaar en boxy: links veel leeg zwart, en op 390 kaart-in-kaart. Een kleine plus op "special", maar een min op "whole" en "compact". **D wint.**
- **G tegen D:** het overzicht is nuttiger en meer "zelf doen" dan D's twee illustraties. Visueel is de exportkaart wel een vrij generiek formulier (textarea, knop, tabel), minder eigen dan D's tekening. **Licht voordeel G** op het overzicht, maar zie de regressie op blockchain hieronder.
- **H tegen D:** de lege banden maken H minder compact dan D. **D wint.**
- Winnaar binnen volgorde 1: **G** (G > I > H).

## Volgorde 2: H, G, I tegen D en baseline

- **H tegen D:** D wint om dezelfde reden.
- **G tegen D:** bij een tweede blik weegt de stijlbreuk op blockchain zwaarder. Op de hele site is de winst op "special" klein, want home, het eerste en sterkste herkenningspunt, is ongewijzigd. **D wint nipt.**
- **I tegen D:** D wint.
- Winnaar binnen volgorde 2: **G** onder de kandidaten. Tegen D wint **D**.

**G tegen D is dus een split verdict, en dat telt als gelijkspel.** Alle kandidaten winnen ruim van de baseline (`baseline/courses-1440-full.jpg`: alleen tekst in grijze kaarten).

## Besluit

**G, H en I worden verworpen. D blijft.** Het doel deze ronde was "more special", met een duidelijke winst. Die winst is er niet: alleen de cursuspagina's veranderen en de exportkaart oogt eerder als een functioneel formulier dan als iets dat alleen bij deze maker hoort. Daarnaast is er een regressie op "whole site".

## Absolute scores van de beste kandidaat (G)

| Waarde | D (vast) | G | Doel ≥8 |
|---|---|---|---|
| More special | 7,5 | 7,5 | niet gehaald |
| More with character | 8 | 8 | gehaald (geen verschil) |
| Whole site | 8 | 7,5 | regressie |
| Compact/readable/responsive | 8 | 8 | gehaald (geen verschil) |

H scoort 7,5 / 8 / 7,5 / 7 (lege banden). I scoort 7,5 / 8 / 7 / 7,5 (zwarte vlakken die buiten de beeldtaal vallen, dubbele inkadering op mobiel).

## Visueel bewijs

- Plus: `g/courses-1440-full.jpg` en `g/courses-1440-active.jpg`. Werkende oefeningen met een heldere vorkdiagram-compositie, plus het portret "Ik kijk met je mee" dat het overzicht persoonlijker maakt.
- Plus: `g/ai-1440-full.jpg`. De interactieve export vervangt de dubbele regel uit D, dus de pagina is iets compacter.
- Plus: `g/courses-768-full.jpg` en `g/courses-2560-fold.jpg`. Netjes begrensd en geen overflow zichtbaar.

## Regressies

1. **`g/blockchain-1440-full.jpg` (y≈1050–1220), `g/blockchain-768-full.jpg`, `g/blockchain-390-full.jpg`:** de status "Tak A heeft meer rekenwerk en gaat verder." en de toelichting "In dit voorbeeld staat elk blok voor evenveel rekenwerk." staan in lead-grootte (ongeveer 30px). Op het overzicht is dezelfde kaart klein en correct (`g/courses-1440-full.jpg`). De kaart ziet er op twee pagina's anders uit en de grijze toelichting overstemt de knoppen.
2. **`g/blockchain-390-full.jpg`, `g/courses-390-full.jpg`:** de labels "Tak A" en "Tak B" in de vork zijn op 390 klein (ongeveer 10–11px). Ze zijn wel essentieel om de oefening te volgen.
3. **`g/courses-1440-full.jpg` (hero):** de primaire "Bel Marijn"-knop en de mailregel uit D's hero zijn verdwenen. Het nav-CTA en het contactblok onderaan blijven, maar de actie boven de vouw is zwakker.
4. **`h/courses-1440-full.jpg`:** lege banden boven "Bekijk het programma".
5. **`i/courses-1440-full.jpg`, `i/courses-390-full.jpg`:** zwarte vlakken die nergens anders op de site voorkomen, met kaart-in-kaart op mobiel.

## Feitencheck (zichtbaar in de screenshots)

- Eén dag, 1 tot 15 deelnemers en "bij jullie of online" staan erin. "Voor een groter team plannen we meerdere sessies" staat in de onderkant. Telefoon +31 6 8105 3848 klopt.
- Er is geen whiteboardfoto.
- De export en de vork zijn duidelijk kleine lokale oefeningen. De vork heeft een expliciete modeltoelichting. Er worden geen klantresultaten getoond en geen echte AI- of cryptotransacties gesuggereerd. De bedragen zijn voorbeeldinvoer, geen prijzen.
- Home, Booklite en Ollie zijn identiek aan D. De koeien, de eigen bus, het Armenië-verhaal, Yellow Shop en de Ollie- en Prepped-iconen zijn dus ongewijzigd ten opzichte van D. De volledige verhaaltekst heb ik in deze ronde niet opnieuw gelezen.

## Resterende zwaktes (D en G)

- "Special" blijft vooral op home hangen (koe, handgeschreven "Over die bus…"). De secundaire pagina's zijn strak maar herkenbaar als template-familie, niet als "deze maker".
- De oefeningen zijn op zich goed, maar zouden een eigen beeldaccent nodig hebben, zoals een getekende koe of bus-hand in de kaart of een eigen kader-signatuur, om "special" te dragen in plaats van alleen "nuttig".
- De gigantische "Marijn Bent" in de footer van elke pagina blijft het dominante wapen. Herhaald op elke pagina wordt het minder bijzonder.

## Kort

Keuze: **D blijft**, G, H en I worden verworpen (G tegen D is een split verdict, dus gelijkspel). Scores van de beste kandidaat G: special 7,5, character 8, whole 7,5, compact 8. D blijft op special 7,5, character 8, whole 8, compact 8. Het doel "special ≥8 met duidelijke winst" is **eerlijk gemist**. Character, whole en compact blijven bij D op 8.

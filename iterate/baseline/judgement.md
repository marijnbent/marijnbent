# Baseline-oordeel (ronde 0)

Rechter: Claude Opus 5.5, onafhankelijk. Bronnen: alleen `iterate/scorecard.md`, de screenshots in `iterate/baseline/` (vaste set `{page}-{1440,390}-{fold,full}.jpg` plus `home-2560-fold.jpg`) en `iterate/references/{lynn,josh,piper}.jpg`. Ik heb geen broncode, ontwerpnotities of SVG's gelezen. De oudere losse opnamen (`home-desktop.jpg`, `home-sections.jpg`, `ai-desktop.jpg` enzovoort) heb ik niet gebruikt. Er is geen 768px-opname; dat breekpunt is niet beoordeeld.

## Verdict

De basis is netjes, rustig en feitelijk sterk, maar nog niet bijzonder. Cover je de naam, dan lijkt het een goed uitgevoerd Zwitsers-grotesk portfoliosjabloon: grote zware koppen, blauwe knoppen, grijze kaarten en een gigantisch woordmerk in de footer. Het persoonlijke materiaal (koe, bus, Armenië) zit alleen op de homepage, in twee kleine accenten. Op de cursus- en projectpagina's ontbreekt het helemaal. De projectpagina's zijn de zwakste familie: Engelstalig, een ander raster, alleen tekst (Ollie) en een lege rechterhelft.

## Scores (0–10)

| Waarde | Score | Doel |
|---|---|---|
| more special | **5** | ≥8 |
| more with character | **5** | ≥8 |
| whole site | **4** | ≥8, geen zwakkere familie |
| Compact, readable and responsive | **6** | ≥8, geen regressie |
| Facts and working behavior (guard) | **Pass, met 1 open punt** | alles pass |
| Accessibility and maintainability (guard) | **Grotendeels niet visueel verifieerbaar**; wat zichtbaar is, is in orde | alles pass |

### more special — 5
Sterk:
- Zelfverzekerde grotesk, consequente kleuren (gebroken wit, zwart, één felblauw) en een duidelijke hiërarchie (`home-1440-fold.jpg`).
- Echte productscreenshots bovenaan in plaats van stockbeeld.

Zwak:
- Het geheel is herkenbaar als genre, niet als persoon. De naam staat drie keer groot op de homepage (nav, hero en het footerwoordmerk van ±250px op elke pagina, `home-1440-full.jpg` onderaan). Dat is een trendmotief, geen signatuur.
- De twee illustraties spreken elk een andere taal. De koe is een gevulde cartoonsticker met lila snuit (`home-1440-fold.jpg`). De bus is een icoonachtige lijntekening met dikke lijn (`home-1440-full.jpg`, y≈2100–2300). Samen voelen ze toegevoegd, niet ontworpen als één systeem.
- Het handschriftlettertype ("Over die bus…", "Dat stond niet op de route.") is het enige andere persoonlijke middel. Het werkt, maar leunt op een generiek scriptfont.
- Vergeleken met de referenties: Lynn Fisher maakt de hele pagina tot een eigen object (`references/lynn.jpg`), Josh Comeau verweeft illustratie met de navigatie en content (`references/josh.jpg`). Hier is illustratie decoratie in een hoek.

### more with character — 5
Sterk:
- De tekst is kort en droog-grappig. "Mijn bus bouwde ik zelf." en "Dat stond niet op de route." zijn goed getimed, en het Armenië-verhaal klopt in drie zinnen.
- De zin "Meestal begint het met iets wat ik zelf mis" geeft de projecten een persoonlijke reden.

Zwak:
- Koeien worden in de intro genoemd, maar komen daarna alleen terug als sticker op de foto. Er is geen tweede moment, geen verband met werk of cursussen.
- "Ook zonder laptop" is een zwakke, wat verwarrende kop voor het reisverhaal. De sectie staat los tussen de projectlijst en Studiozoek, met veel lege ruimte rechtsonder (`home-1440-full.jpg`, y≈2000–2320).
- De route-illustratie is schematisch (bus → golflijn → ✕ Armenië → stippellijn Kirgizië). Op 390px zijn de labels ±11–12px en nauwelijks leesbaar (`home-390-full.jpg`, y≈2550–2650).
- Op cursus- en projectpagina's is geen spoor van karakter. Het enige persoonlijke beeld daar is dezelfde portretfoto in het donkere CTA-blok.

### whole site — 4
- **Home** is de enige pagina met aandacht voor persoonlijkheid.
- **Cursusoverzicht** (`courses-1440-full.jpg`, `courses-390-full.jpg`): alleen grijze vlakken en tekst, zonder beeld, illustratie of verwijzing naar wie de cursus geeft. De feitenstrook (Duur / Groep / Plek / Groter team) is identiek aan die op home, AI en blockchain: vier keer hetzelfde blok.
- **Cursusdetails** (`ai-1440-full.jpg`, `blockchain-1440-full.jpg`) gebruiken exact hetzelfde sjabloon. De oplopende "trap" van dagkaarten is een aardige vondst, en de blockchainpagina heeft een echte simulator-screenshot. De AI-pagina toont geen enkel beeld van een resultaat of van de dag zelf.
- **Projectpagina's** (`booklite-*.jpg`, `ollie-*.jpg`) wijken duidelijk af:
  - nav en tekst zijn Engels ("Work", "Courses", "Call Marijn", "Call or email me"), de rest van de site is Nederlands;
  - de content springt in op ±170px, terwijl nav en footer op ±48px staan;
  - de tekstkolom van ±670px laat ±40% van het scherm leeg;
  - Ollie heeft helemaal geen beeld;
  - er staat geen metadata (type, status, stack) en er is geen duidelijke knop naar GitHub, alleen een inline link.

  Deze pagina's lijken op een standaard blogpost, niet op de redactionele projecthelderheid van Piper Haywood.

### Compact, readable and responsive — 6
Volgens `measurements.json` is er geen horizontale overflow op 1440 of 390.

Zichtbare problemen:
- **Lege band** van ±100px lichtgrijs tussen het donkere CTA-blok en de footer op beide cursusdetails (`ai-1440-full.jpg` y≈3090–3190, `blockchain-1440-full.jpg` y≈3300–3400, ook op 390).
- **Portretcrop**: de uitgeknipte foto in het CTA-blok eindigt rechts in een harde verticale snede door het overhemd (`ai-1440-full.jpg` y≈2670–2975, `ai-390-full.jpg` y≈3430–3620).
- **Studiozoek-screenshot op home** is midden in de tekst afgesneden ("afgesproken opzet." half zichtbaar, `home-1440-full.jpg` y≈2420–2970).
- **Werkthumbnails op 390** staan naast elkaar op ±175px breed en zijn onleesbaar (`home-390-fold.jpg` onderaan, `home-390-full.jpg` y≈780–900).
- **Hero op 390**: de portretfoto vult ±40% van de fold. Op het eerste scherm is daardoor geen werk zichtbaar (`home-390-fold.jpg`).
- **Bitcoin-simulator-screenshot**: ±25% donkere lege onderkant (`blockchain-1440-full.jpg` y≈1960–2380).
- **Projectpagina's op 1440**: lege rechterhelft en een afwijkende linkerlijn (zie hierboven).
- **Home op 2560** (`home-2560-fold.jpg`): netjes begrensd en gecentreerd, zonder problemen.
- **768px**: niet aangeleverd, dus niet beoordeeld.

### Facts and working behavior (guard) — pass, 1 open punt
Zichtbaar in orde:
- "Eén dag", "1 tot 15 deelnemers" en "Bij jullie of online" staan consequent op home, het overzicht en beide details.
- Telefoonnummer +31 6 8105 3848 is overal gelijk.
- Armenië-been tijdens de reis richting Kirgizië klopt.
- Er staat geen prijs bij de cursussen ("Datum, plek en prijs spreken we samen af").
- Er is geen whiteboardafbeelding.

Open punt:
- **Yellow Store / Yellow Shop**: het onderschrift en de projectlijst zeggen "Yellow Store", het logo in de screenshot zegt "Yellow Shop" (`home-1440-fold.jpg`, rechtsboven in de screenshot). Eén van de twee is fout of verouderd. Dit is visueel te zien, maar niet visueel op te lossen.

Niet verifieerbaar:
- of het nummer echt klopt;
- of Ollie, Prepped en Obsidian Print bestaan en open source zijn;
- de €50 in de Studiozoek-screenshot (komt van een externe site).

### Accessibility and maintainability (guard)
Visueel in orde:
- het contrast van tekst op de achtergronden, wit op blauw en wit op zwart;
- grijze labels ("Duur", "Groep") lijken op het randje maar leesbaar;
- de links zijn onderstreept.

Aandachtspunt: het scriptfont van "Over die bus…" is een actielink. Het is leesbaar, maar minder duidelijk als link dan de andere links.

Niet verifieerbaar met screenshots:
- toetsenbord en focus;
- reduced motion;
- toegang zonder JavaScript;
- noindex op de applicatie;
- Astro/TS, commentaar en afhankelijkheden;
- of alle routes behouden blijven.

Deze punten moeten met code en tests gecontroleerd worden, niet door deze rechter.

## Kansen met de meeste impact

1. **Geef het persoonlijke materiaal één samenhangende tekentaal en zet het op elke paginafamilie.** Koe en bus moeten in dezelfde lijn en kleur getekend zijn. De illustratie moet echte informatie dragen (route, groepsgrootte, dagverloop), geen hoekdecoratie. Leen van Josh het principe "illustratie geïntegreerd met nuttige content", niet zijn stijl.
2. **Trek de projectpagina's op naar het niveau van home.**
   - Dezelfde taal als de rest van de site, of een bewuste taalkeuze die overal geldt.
   - Hetzelfde raster als nav en footer.
   - Een metadata-rij (type, status, platform) en een duidelijke primaire actie.
   - Altijd een beeld; voor Ollie een menubalk-screenshot of illustratie.
   - De lege rechterkolom gebruiken voor feiten of beeld.
3. **Maak het reisverhaal een volwaardig moment.** Een betere kop dan "Ook zonder laptop", een grotere route met leesbare labels op 390, de koe ergens met een reden, en een strakkere plek in de volgorde van de homepage.
4. **Maak het cursusoverzicht en de details persoonlijker en minder repetitief.** Toon de feitenstrook één keer goed in plaats van vier keer identiek, geef het overzicht beeld of illustratie (bijvoorbeeld kleine groep, op locatie of online), geef de AI-pagina een tastbaar resultaatbeeld, en haal de lege band boven de footer weg.
5. **Repareer de crops.** De portretsnede in het CTA-blok, de Studiozoek-screenshot die midden in de tekst stopt, de lege onderkant van de simulator-screenshot en de onleesbare werkthumbnails op 390.
6. **Overweeg het footerwoordmerk te vervangen of te verkleinen.** Het domineert elke pagina zonder iets persoonlijks toe te voegen. Een signatuurmoment met koe of bus zou meer zeggen.
7. **Los Yellow Store / Shop op** (bevestigen bij de eigenaar).

## Stabiele rubriek voor volgende rondes

- **more special**: is de site herkenbaar zonder naam? Vormen illustratie, typografie en compositie één systeem zonder generieke decoratie?
- **more with character**: verschijnen koe, bus en Armenië natuurlijk en met een functie, en blijft het werk dominant?
- **whole site**: krijgen alle vijf de families (home, overzicht, 2 cursusdetails, projectpagina's) vergelijkbare aandacht en dezelfde visuele taal? De zwakste familie bepaalt het plafond.
- **Compact**: geen lege banden, slechte crops of onleesbare essentiële labels op 390, 1440 en 2560 (en 768 als dat wordt aangeleverd).
- **Guards**: als hierboven. Niet-verifieerbare punten blijven "niet verifieerbaar" en worden niet als "pass" geteld.

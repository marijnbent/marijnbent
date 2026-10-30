# Ronde 2 — onafhankelijk juryoordeel

Bekeken: `scorecard.md`, `references/{lynn,josh,piper}.jpg`, baseline-screenshots (home, courses, ai, blockchain, booklite, ollie op 1440/390 fold+full, home-2560-fold), kandidaat A (zelfde set) en B/C (`ai`, `booklite`, `ollie` op 1440/390 full). Voor B en C zijn de overige pagina's gelijk aan A gerekend. **De afwijkende blockchainlayout van B en C heb ik niet gezien**; die telt niet mee in dit oordeel.

Lange screenshots heb ik naast elkaar gezet en in stukken bekeken. Op 390px zijn `ai` voor A/B/C identiek (zelfde hoogte en beeld). B en C verschillen daar alleen op de projectpagina's.

## Wat de kandidaten gemeen hebben ten opzichte van de baseline

- Projectpagina's (`booklite`, `ollie`) zijn nu Nederlands, net als de rest. In de baseline waren ze Engels, met "Courses" en "Call Marijn" in de nav en "Call or email me" in de footer. Ze krijgen nu een hero met korte intro en knop "Bekijk de code", een meta-strook (Project / Werkt op), een kop in de ik-vorm en een kaart "Volgend project". De baseline-Ollie had geen beeld; nu staat het appicoon erop.
- Cursuspagina's: de blauwe band "Wat je meeneemt" en de kaarttrap "Zo verloopt de dag" zijn vervangen door een eigen lijnillustratie (spreadsheet → tabel; keten met fork "meer rekenwerk / valt af") en een genummerde dagindeling (01–04). De feitentabel is nu een rij met bolletjes. De donkere band heet nu "Ik kijk met je mee." met een kleine ronde portretfoto.
- Cursusoverzicht: dezelfde illustraties staan boven beide cursuskaarten.
- Home: een koe-icoon in het logo op elke pagina, een grotere koe met blauw oormerk in de hero, een nieuwe gevulde bus met blauwe streep, en "Ook zonder laptop" heet nu "Richting Kirgizië". De feitenrij onder de cursussen op home is weg.

## Volgorde 1: C, B, A tegen de baseline

- **C vs baseline:** wint op whole site (projectpagina's krijgen echte aandacht, taal en opbouw zijn één systeem) en op more special (illustraties in plaats van de blauwe vlakvulling). Character wint licht (koe-logo, betere bus). Compact is gelijk: op 1440 korter, maar de zwarte meta-balk (`c/booklite-1440-full.jpg`, `c/ollie-1440-full.jpg`, y≈290; 390 y≈385) is zwaar en concurreert met de kop. Op 390 komt het beeld pas na de tekst.
- **B vs baseline:** wint op whole site en special, maar compact gaat achteruit. Op `b/ollie-1440-full.jpg` (y≈420–690) staat een klein icoon midden in een brede grijze band, en de pagina groeit van 1441 naar 2214px. De AI-illustratie staat los gecentreerd (`b/ai-1440-full.jpg` y≈390–620), met de tekst eronder, wat een extra lege rij geeft. Pluspunt: op 390 staat het beeld vóór de tekst (`b/booklite-390-full.jpg`).
- **A vs baseline:** wint op whole site en special. Op 1440 staan tekst en beeld rustig naast elkaar, en de pagina's zijn korter (ai 3711→3200, booklite 2414→1909). Character wint licht. Compact gelijk of licht beter.
- **Beste in deze volgorde: A.** C komt dichtbij; B verliest op compactheid.

## Volgorde 2: A, B, C tegen de baseline

Zelfde waarnemingen, nu met A eerst. A's tweekoloms projecthero met meta-strook in lichtgrijs is het rustigst. B's gestapelde beeldband voelt leeg. C's zwarte strook is het meest uitgesproken, maar ook het zwaarst, en de gespiegelde AI-sectie (beeld links, kop rechts) leest minder logisch dan bij A.
**Beste in deze volgorde: A.**

Beide volgordes kiezen A, dus er is geen gelijkspel.

## Per waarde: A vs baseline

| Waarde | Uitslag | Toelichting |
|---|---|---|
| more special | A wint | Eigen lijnillustraties per cursus, gekoppeld aan de inhoud, in de geest van Josh Comeau maar zonder zijn stijl over te nemen. Daarnaast het koe-logo en een strakkere bus. |
| more with character | A wint licht | Het koe-logo zit op elke pagina, de bus is verzorgder, en "Richting Kirgizië" is concreter. Maar het label "Zelfgebouwde bus" is weg, en het kruis bij Armenië is een //-breekteken geworden. Dat is minder direct leesbaar, vooral op 390 (`a/home-390-full.jpg`, buskaart). |
| whole site | A wint duidelijk | Geen zwakkere paginafamilie meer. De projectpagina's waren in de baseline kale Engelse tekstpagina's; nu delen ze taal, ritme, grijze vlakken, nav en contactband met de rest. |
| Compact, readable, responsive | gelijk / licht beter | Op 1440 korter en zonder lege blauwe band. Op 390 wel kleine verschuivingen, zie regressies. Geen overflow of afgeknipte tekst gezien. 2560-fold is gelijk aan de baseline. |
| Feiten (guard) | geen regressie zichtbaar | Telefoon +31 6 8105 3848, één dag, 1 tot 15 deelnemers, bij jullie of online, groter team meerdere sessies (in de donkere band), bus zelf gebouwd, Armenië richting Kirgizië, hond, gebroken been, Yellow Shop, en geen whiteboardfoto. |
| Toegankelijkheid/onderhoud (guard) | niet te beoordelen | Toetsenbord, no-JS, code en routes zijn niet uit screenshots af te leiden. Zichtbaar contrast is in orde. |

## Absolute scores (target ≥ 8)

| Waarde | Baseline | A |
|---|---|---|
| more special | 6.5 | 7.5 |
| more with character | 7 | 7.5 |
| whole site | 5.5 | 7.5 |
| Compact, readable, responsive | 7 | 7.5 |

## Besluit

**A behouden.** Whole site wint duidelijk, en geen andere waarde gaat achteruit. B en C worden verworpen: B vanwege de compactheid, C omdat het niet beter is dan A en een zwaardere meta-balk heeft.

## Concrete visuele regressies in A (klein, niet blokkerend)

1. `a/booklite-390-full.jpg`: de BookLite-screenshot zakt van de fold (baseline y≈360) naar onder de meta-box en de tekst (y≈900+). Het productbeeld is op mobiel pas na een scroll te zien. Hetzelfde geldt voor het Ollie-icoon in `a/ollie-390-full.jpg`.
2. `a/ollie-390-full.jpg` en `a/booklite-390-full.jpg`: de projectpagina's op mobiel worden langer (1417→2236 en 1900→2047). Dat komt door de meta-box en de kaart "Volgend project", die samen veel grijs vlak toevoegen.
3. `a/ai-1440-full.jpg` (y≈2350–2650) en hetzelfde in `a/blockchain-1440-full.jpg`: de portretfoto in de donkere band is gekrompen tot een kleine cirkel (~130px). Links blijft een lege zone over. De naast-de-knop-actie "Of bel +31 6 8105 3848" is uit de cursushero verdwenen.
4. `a/home-1440-full.jpg` (bussectie, y≈1850–2450): het label "Zelfgebouwde bus" is weg, en het breekteken bij Armenië is minder leesbaar dan het blauwe kruis.
5. `a/home-1440-fold.jpg`: de hero-koe kijkt nu half-dichte-ogen/nors. Dat is een toonverschuiving van vrolijk naar sloom. Het is geen fout, maar wel een smaakvraag.

## Drie belangrijkste resterende zwaktes

1. **Character blijft op één plek hangen.** Buiten de home-hero, de bussectie en het kleine logo hebben cursus- en projectpagina's geen eigen persoonlijke laag: geen koe, geen bus, geen handgeschreven noot. Het verhaal "Dat stond niet op de route." komt één keer voor.
2. **Projectpagina's zijn netjes maar sjabloonmatig.** Elk project krijgt dezelfde grijze meta-strook, één beeld, drie alinea's en een volgende-kaart. Er is geen projectspecifieke vorm en er zijn geen echte details (schermen, gebruik, beslissingen) zoals Piper Haywood dat doet. Ollie en BookLite zien er inwisselbaar uit.
3. **Het staartstuk van elke pagina is lang en dubbel.** Op cursuspagina's volgen de donkere band "Ik kijk met je mee", daarna "Bel of mail me" en dan de reuzenwoordmerk "Marijn Bent". Dat zijn drie contactblokken achter elkaar. Op projectpagina's staan de kaart "Volgend project" en dezelfde footer. Het geheel is typografisch sterk, maar met de naam afgedekt is het nog vrij generiek grotesk-op-crème.

## Samenvatting

Gekozen: **A** in beide volgordes. A wordt behouden: whole site wint duidelijk en er is geen achteruitgang. B en C zijn verworpen; de blockchainlayout van B/C heb ik niet gezien. Scores van baseline naar A: special 6.5→7.5, character 7→7.5, whole site 5.5→7.5, compact 7→7.5. **Geen enkele waarde haalt de target van 8.** Wat nog nodig is: character ook op secundaire pagina's laten terugkomen, projectpagina's minder sjabloon maken en de mobiele beeldvolgorde en contact-staart compacter maken.

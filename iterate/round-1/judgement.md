# Ronde 1 – oordeel onafhankelijke jury (Claude Opus 5.5)

Bronnen: alleen `scorecard.md`, `baseline/*.jpg`, `references/*.jpg`, `round-1/{p,q,r}/*.jpg` en `round-1/variants.jpg`. Geen bron, hypothese, log of designerrationale gelezen.

## 1. Voorkeur

| Volgorde | Winnaar | Kort |
|---|---|---|
| P, Q, R vs baseline | Q | Q is de enige koe die op hero-, footer- en faviconformaat leesbaar blijft. |
| R, Q, P vs baseline | Q | R leest als een onaf schetsje. P's profielkop leest als geit of hond. Q blijft over. |

Beide volgordes kiezen Q, dus geen gelijkspel.

**Advies: ga verder met Q, maar accepteer ronde 1 nog niet als winst.** De winst op de doelwaarden is klein (+1). De gedeelde layout brengt ook een zichtbare regressie mee: de kop botst (zie 2). Tot die is opgelost, blijft de baseline de geaccepteerde stand.

Per familie:
- **P**: de route vertelt het verhaal het letterlijkst, met een hond bij Armenië. De route sluit ook aan op de bus. De koe in profiel met neusring leest op 1440 als geit of stier. Op 390 is de hond een blauwe krabbel. De favicon is op 16px een vlek met een blauwe punt. Dat is zwak.
- **Q**: de zwarte bus met blauwe bies en de koe met oormerk en een droge, sceptische blik zijn het meest eigen en het meest consistent. De blauwe route loopt door van bus naar breuk. De favicon is het best leesbaar op 16px (vlek, oormerk, snuit).
- **R**: het "zelf gebouwd"-maatlijnidee past goed bij het verhaal. Toch ziet de arcering op de hero eruit als onaf werk. De route staat los van de bus. Op 390 zijn "zelf gebouwd" en "been gebroken" piepklein, ongeveer 9 tot 10px, en "Armenië" raakt de breukstreepjes. Dat botst met de guard "geen kleine essentiële labels".

## 2. Scores: Q vs baseline

| Waarde | Baseline | Q | Doel | Gehaald |
|---|---|---|---|---|
| Specialer | 5 | 6 | ≥8 | nee |
| Meer karakter | 5 | 6 | ≥8 | nee |
| Hele site | 4 | 4 | ≥8, geen zwakkere paginafamilie | nee |
| Compact en leesbaar | 6 | 6 | ≥8, geen regressie | nee (regressie op de kop, compactere footer) |

Zichtbare regressies en grenzen:
- **Kopbotsing**: in "Richting / Kirgizië" op 1440 raakt de staart van de g in "Richting" het trema van "ë" (`q/home-1440-full.jpg`, rond y≈2060–2220). Dit geldt voor P, Q en R. Op 390 staat de kop op één regel en is er geen probleem.
- **Handschriftlink weg**: "Over die bus…" in handschrift is in alle varianten een gewone onderstreepte link geworden. Dat is consistenter, maar het kost een persoonlijk detail in de hero. Het handschrift staat nog wel bij "Dat stond niet op de route."
- **Footerwoordmerk verkleind**: het woordmerk is van paginabreed naar ongeveer 40% teruggebracht, met een koe van ongeveer 36px rechts (alle zes paginafamilies). Dat is compacter: elke pagina is ongeveer 124px korter. Het kost wel het sterkste typografische moment van de baseline. De footerkoe is op 1440 zo klein dat hij als een icoontje leest, niet als afsluiter.
- **Secundaire pagina's**: cursussen, AI, blockchain, BookLite en Ollie zijn op de footer na pixelgelijk aan de baseline. Hier is niets verbeterd.
- Op de schermafbeeldingen zie ik geen overflow of afgesneden tekst op 390, 1440 en 2560. Feiten: het telefoonnummer, "1 tot 15 deelnemers", "Eén dag", "Bij jullie of online" en het verhaal over de blessure in Armenië onderweg naar Kirgizië zijn gelijk aan de baseline. Ik zie geen whiteboardafbeelding.
- Niet te beoordelen vanaf schermafbeeldingen, dus niet als geslaagd gemeld: toetsenbord en focus, reduced motion, toegang zonder JS, noindex, routes en codekwaliteit. Contrast lijkt in orde, maar is niet gemeten.

## 3. Bewijs en volgende prioriteiten

Bewijs:
- Hero op 1440 (`baseline` vs `q/home-1440-fold.jpg`): de baselinekoe is een generieke lachende cartoon met een lichtblauwe snuit. Q's koe met oormerk en halfdichte ogen is specifieker en droger, en past bij de toon van "hou van koeien". Hij blijft wel een sticker op de hoek van de foto. Het is nog geen illustratie die in de inhoud is verwerkt, zoals bij Lynn Fisher of Josh Comeau.
- Route op 1440 en 390: Q's dichte bus is het enige busontwerp dat ook op 390 als object leest. De baselinebus met kruis is functioneel, maar anoniem.
- Favicon, 16px gesimuleerd uit `variants.jpg`: Q ≈ R > P. R verliest met zijn dunne lijnen contrast in de tab.

Zwakste punten van de hele site, op volgorde:
1. **Secundaire pagina's hebben geen eigen taal** (hele site 4). De projectpagina's zijn Engelstalige tekstkolommen met een lege rechterhelft op 1440 (`q/booklite-1440-full.jpg`). Ze missen de koe, de route en het handschrift. De Engelse navigatie ("Work", "Courses") wijkt af van de Nederlandse homepage. De cursuspagina's zijn netjes, maar onpersoonlijk.
2. **De illustratie is decoratie, geen inhoud**: koe en bus staan naast de tekst. Een volgende ronde moet de illustratie iets laten doen, zoals projecten markeren, secties scheiden of de cursusdag tonen, in plaats van alleen te tekenen.
3. **Kopbotsing in "Richting Kirgizië"** oplossen met meer regelafstand of een andere afbreking.
4. **Footer**: het grote woordmerk terugbrengen, of de vrijgekomen ruimte echt benutten. Een koe van 36px is geen afsluiter.
5. **"Wat ik maak" op 1440**: een lange lijst met lege linkerkolom onder de intro. De projecten hebben geen beeld of eigen typografisch accent. Op 390 is het één lange tekstkolom.

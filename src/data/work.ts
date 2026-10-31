import type { ImageMetadata } from 'astro';
import ollieIcon from '../assets/work/ollie-icon.webp';
import booklite from '../assets/work/booklite.webp';
import preppedIcon from '../assets/work/prepped-icon.webp';
import yellowStore from '../assets/work/yellow-store.webp';
import obsidianPrint from '../assets/work/obsidian-print.webp';
import bitcoinSimulator from '../assets/work/bitcoin-simulator.webp';
import openfront from '../assets/work/openfront.webp';
import studiozoekShot from '../assets/work/studiozoek.webp';

export interface Picture { src: ImageMetadata; alt: string; }

export interface ProjectDetail {
  name: string; description: string; platform: string; kind: string; reason: string; paragraphs: string[];
  action?: { href: string; label: string }; source?: string; image?: Picture;
  summary?: string; visual?: 'icon';
  schemaType: 'SoftwareApplication' | 'WebApplication';
}

export interface WorkItem extends ProjectDetail { slug: string; href: string; }

const details: Record<string, ProjectDetail> = {
  "ollie": {
    "summary": "Mijn dagelijkse Mac-tools, bij elkaar.",
    "visual": "icon",
    "name": "Ollie",
    "description": "Mijn gereedschapskist voor de Mac. Apps openen, dicteren, klembordgeschiedenis en vensters wisselen in één app.",
    "platform": "macOS 26+",
    "kind": "Native app · open source",
    "reason": "De kleine handelingen die ik de hele dag doe, wilde ik bij elkaar hebben.",
    "paragraphs": [
      "Ollie brengt mijn dagelijkse Mac-tools samen. Met het toetsenbord open ik apps, zoek ik iets terug op het klembord of voeg ik een bewaard tekstfragment in. Dicteren uit VibeScribe is nu ook onderdeel van Ollie.",
      "Houd een sneltoets ingedrukt, spreek je tekst in en voeg de transcriptie in waar je aan het werk bent. Daarnaast zijn er onder meer vensterwisseling, camera-imports en meldingen via ntfy. Je zet de onderdelen afzonderlijk aan.",
      "De launcher bouwt voort op Tinycast. Ollie is open source; de code en bouwinstructies staan op GitHub."
    ],
    "action": {
      "href": "https://github.com/marijnbent/ollie",
      "label": "Bekijk de code"
    },
    "image": { "src": ollieIcon, "alt": "Het appicoon van Ollie: een otter met een steen" },
    "source": "https://github.com/marijnbent/ollie",
    "schemaType": "SoftwareApplication"
  },
  "booklite": {
    "summary": "Mijn boeken, op mijn server en mijn Kobo.",
    "name": "BookLite",
    "description": "Een eigen digitale bibliotheek, met Kobo-synchronisatie en een ingebouwde lezer.",
    "platform": "Docker · Kobo · browser",
    "kind": "Open source fork",
    "reason": "Ik wilde boeken delen met mijn huishouden en verder lezen op mijn Kobo.",
    "paragraphs": [
      "BookLite is een fork van BookLore die ik onderhoud en aanpas. Je uploadt EPUBs en PDF-bestanden, ordent ze in collecties en houdt je leesvoortgang bij.",
      "Je Kobo maakt rechtstreeks verbinding met de bibliotheek. Er is ook een ingebouwde lezer voor je browser. Metadata wordt opgehaald via Open Library en Google Books.",
      "De bibliotheek draait op je eigen server, in één Docker-container. Er kunnen meerdere mensen in dezelfde bibliotheek lezen."
    ],
    "action": {
      "href": "https://github.com/marijnbent/booklite",
      "label": "Bekijk de code"
    },
    "image": { "src": booklite, "alt": "De bibliotheek van BookLite met boekomslagen, leesstatus en collecties" },
    "source": "https://github.com/marijnbent/booklite",
    "schemaType": "SoftwareApplication"
  },
  "prepped": {
    "summary": "Recepten op één plek, koken voor het huishouden.",
    "visual": "icon",
    "name": "Prepped",
    "image": { "src": preppedIcon, "alt": "Het appicoon van Prepped: een gebakken ei" },
    "description": "Recepten importeren, porties aanpassen en bijhouden wat je kookt. Voor je huishouden, op je eigen server.",
    "platform": "Browser · Docker",
    "kind": "Webapp · open source",
    "reason": "Onze recepten stonden verspreid over allerlei websites. Ik wilde ze op één plek.",
    "paragraphs": [
      "Plak een link en AI haalt de ingrediënten, stappen en andere receptgegevens op. Je kunt ook tekst of een foto van een recept toevoegen. De porties pas je daarna aan; de hoeveelheden veranderen mee.",
      "Recepten bewaar je in collecties. In het kooklog houd je met foto’s en notities bij hoe het ging. Met de boodschappenlijst voeg je ingrediënten van meerdere recepten samen.",
      "Prepped ondersteunt Nederlands en Engels en draait op je eigen server. De gegevens staan in SQLite. Voor de AI-functies gebruikt de app een externe modelprovider."
    ],
    "action": {
      "href": "https://github.com/marijnbent/prepped",
      "label": "Bekijk de code"
    },
    "source": "https://github.com/marijnbent/prepped",
    "schemaType": "WebApplication"
  },
  "yellow-store": {
    "summary": "Lidl-prijzen vergelijken over de grens.",
    "name": "Yellow Shop",
    "description": "Lidl-prijzen vergelijken tussen Europese landen, met prijsgeschiedenis en meldingen bij prijsdalingen.",
    "platform": "Web",
    "kind": "Eigen product",
    "reason": "Hetzelfde product, een andere prijs aan de andere kant van de grens.",
    "paragraphs": [
      "Yellow Shop vergelijkt Lidl-producten tussen Europese webshops. Het begon als Parkside.fans, voor gereedschap, en groeide uit tot een vergelijker voor meer Lidl-merken.",
      "Zoek op product, merk of IAN-nummer. Je ziet prijzen per land, kunt terugkijken in de prijsgeschiedenis en producten bewaren op een volglijst.",
      "Yellow Shop is onafhankelijk van Lidl. Je koopt bij de winkel zelf en controleert daar de actuele prijs en beschikbaarheid."
    ],
    "action": {
      "href": "https://yellowshop.fans/",
      "label": "Open Yellow Shop"
    },
    "image": { "src": yellowStore, "alt": "Yellow Shop met zoekveld en actuele Lidl-prijsdalingen" },
    "schemaType": "WebApplication"
  },
  "obsidian-print": {
    "summary": "Printen vanuit Obsidian, zonder omweg.",
    "name": "Obsidian Print",
    "description": "Print notities, selecties en hele mappen rechtstreeks vanuit Obsidian.",
    "platform": "Obsidian",
    "kind": "Plugin · open source",
    "reason": "Eerst exporteren naar PDF, dan pas printen. Dat kon korter.",
    "paragraphs": [
      "Obsidian Print voegt een printoptie toe aan Obsidian. Je print een notitie, een selectie of een hele map, zonder eerst een PDF te exporteren.",
      "De plugin houdt rekening met de opmaak van je notities en heeft instellingen voor onder meer de lettergroottes. Je vindt hem bij de communityplugins van Obsidian."
    ],
    "action": {
      "href": "https://github.com/marijnbent/obsidian-print",
      "label": "Bekijk de plugin"
    },
    "image": { "src": obsidianPrint, "alt": "De instellingen van Obsidian Print" },
    "source": "https://github.com/marijnbent/obsidian-print",
    "schemaType": "SoftwareApplication"
  },
  "bitcoin-simulator": {
    "name": "Bitcoin simulator",
    "description": "Een blockchain begrijpen door zelf transacties te versturen, blokken te maken en forks te bekijken.",
    "platform": "Browser",
    "kind": "Lesmateriaal",
    "reason": "Ik wilde blockchain uitleggen zonder dat de techniek van een testnet de les overnam.",
    "paragraphs": [
      "Ik bouwde deze simulator voor mijn blockchaincursussen. Deelnemers werken op een gezamenlijke keten en zien wat er gebeurt als iemand een transactie verstuurt of een nieuw blok maakt.",
      "De simulator ondersteunt meerdere ketens, wallets, mining en forks. Je kunt volgen welke keten wordt voortgezet en wat er met transacties in de andere tak gebeurt.",
      "Je oefent in de browser. Je hoeft geen cryptovaluta te kopen."
    ],
    "action": {
      "href": "https://bitcoinsimulator.cowsandbytes.com/",
      "label": "Open de simulator"
    },
    "image": { "src": bitcoinSimulator, "alt": "De Bitcoin simulator met een startscherm voor een keten" },
    "schemaType": "WebApplication"
  },
  "openfront-extension": {
    "name": "OpenFront Enhanced",
    "description": "Sneltoetsen en handige overlays voor het strategiespel OpenFront.",
    "platform": "Chrome",
    "kind": "Browserextensie · open source",
    "reason": "Ik speelde OpenFront en bleef tegen dezelfde kleine dingen aanlopen.",
    "paragraphs": [
      "Met de extensie voer je veelgebruikte acties uit met sneltoetsen: een gesprek openen, een alliantieverzoek sturen of een kleine aanval versturen. Je past de toetsen zelf aan.",
      "Tijdens de startfase maken landmarkeringen het kiezen van een positie makkelijker. Geluidssignalen en meldingen helpen om het begin van een spel en veranderingen bij je buren op te merken.",
      "De code en installatie-instructies staan op GitHub."
    ],
    "action": {
      "href": "https://github.com/marijnbent/openfront-extension",
      "label": "Bekijk de extensie"
    },
    "image": { "src": openfront, "alt": "OpenFront met landmarkeringen en sneltoetsen" },
    "source": "https://github.com/marijnbent/openfront-extension",
    "schemaType": "SoftwareApplication"
  },
  "hiredd": {
    "name": "Hiredd",
    "description": "Sollicitaties, gesprekken, taken en documenten bij elkaar houden.",
    "platform": "Browser · Docker",
    "kind": "Zelf gehoste webapp",
    "reason": "Bij meerdere sollicitaties tegelijk raakte ik het overzicht kwijt.",
    "paragraphs": [
      "Hiredd houdt sollicitaties bij per werkruimte. Je bewaart het bedrijf, de functie, de fase en een tijdlijn met notities.",
      "Gesprekken en taken staan in een planning. Cv’s en brieven bewaar je bij de sollicitaties. De app draait op je eigen server met SQLite als database."
    ],
    "schemaType": "WebApplication"
  }
};

export const work: WorkItem[] = Object.entries(details).map(([slug, detail]) => ({ ...detail, slug, href: `/${slug}/` }));

export const featuredWork = ["ollie", "booklite", "prepped", "yellow-store", "obsidian-print"].flatMap(slug => work.filter(item => item.slug === slug));

export const studiozoek = { href: "https://studiozoek.nl/", image: { src: studiozoekShot, alt: "De website van Studiozoek met een voorbeeld van een kapsalonwebsite" } };

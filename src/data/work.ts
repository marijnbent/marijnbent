export interface Picture {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WorkItem {
  name: string;
  href: string;
  kind: string;
  description: string;
  source?: string;
  image?: Picture;
}

const screen = (file: string, alt: string): Picture => ({ src: `/images/work/${file}.webp`, alt, width: 1200, height: 840 });

export const work: WorkItem[] = [
  {
    name: "Ollie",
    href: "/ollie/",
    kind: "macOS-app · open source",
    description: "Mijn gereedschapskist voor de Mac. Apps openen, dicteren, klembordgeschiedenis, snippets en vensters wisselen in één menubalk-app.",
    source: "https://github.com/marijnbent/ollie",
  },
  {
    name: "BookLite",
    href: "/booklite/",
    kind: "Fork die ik onderhoud",
    description: "Een eigen digitale bibliotheek met Kobo-synchronisatie en een ingebouwde lezer. Draait op je eigen server.",
    source: "https://github.com/marijnbent/booklite",
    image: screen("booklite", "De bibliotheek van BookLite met boekomslagen, leesstatus en collecties"),
  },
  {
    name: "Yellow Store",
    href: "/yellow-store/",
    kind: "Eigen product",
    description: "Vergelijkt Lidl-prijzen tussen Europese landen. Met prijsgeschiedenis, een volglijst en meldingen bij prijsdalingen.",
    image: screen("yellow-store", "De startpagina van Yellow Store met een zoekveld en actuele Lidl-prijsdalingen"),
  },
  {
    name: "Obsidian Print",
    href: "/obsidian-print/",
    kind: "Obsidian-plugin · open source",
    description: "Print notities, selecties en hele mappen rechtstreeks vanuit Obsidian, op desktop en mobiel.",
    source: "https://github.com/marijnbent/obsidian-print",
    image: screen("obsidian-print", "De instellingen van Obsidian Print in Obsidian, met lettergroottes per kopniveau"),
  },
  {
    name: "Bitcoin simulator",
    href: "/bitcoin-simulator/",
    kind: "Lesmateriaal",
    description: "Verstuur transacties, maak blokken en zie forks ontstaan. Ik gebruik hem in mijn blockchaincursus.",
    image: screen("bitcoin-simulator", "De Bitcoin simulator waarin je een eigen keten start of aan een bestaande keten deelneemt"),
  },
  {
    name: "OpenFront Enhanced",
    href: "/openfront-extension/",
    kind: "Browserextensie · open source",
    description: "Sneltoetsen en overlays voor het strategiespel OpenFront, zoals markeringen voor landen tijdens de startfase.",
    source: "https://github.com/marijnbent/openfront-extension",
    image: screen("openfront", "OpenFront met de extensie: een wereldkaart met landmarkeringen en een paneel met sneltoetsen"),
  },
  {
    name: "Prepped",
    href: "/prepped/",
    kind: "Webapp · open source",
    description: "Recepten importeren, porties aanpassen en bijhouden wat je kookt. Voor je huishouden, op je eigen server.",
    source: "https://github.com/marijnbent/prepped",
  },
];

export const studiozoek = {
  href: "https://studiozoek.nl/",
  image: screen("studiozoek", "De website van Studiozoek met een voorbeeld van een kapsalonwebsite"),
};

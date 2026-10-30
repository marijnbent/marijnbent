import type { Picture } from "./work";

export interface Course {
  slug: string;
  title: string;
  short: string;
  description: string;
  lead: string;
  outcome: string;
  audience: string;
  preparation: string;
  sessions: { title: string; body: string }[];
  examples: { title: string; body: string }[];
  image?: Picture;
}

export const courseFacts = [
  { term: "Duur", value: "Eén dag" },
  { term: "Groep", value: "1 tot 15 deelnemers" },
  { term: "Plek", value: "Bij jullie of online" },
  { term: "Groter team", value: "Meerdere sessies" },
];

export const courses: Course[] = [
  {
    slug: "ai-op-de-werkvloer",
    title: "AI op de werkvloer",
    short: "Bouw met Codex en Claude een automatisering voor je eigen werk.",
    description:
      "Praktische AI-cursus van één dag met Codex van OpenAI en Claude van Anthropic. Je bouwt een automatisering voor je eigen werk. Voor 1 tot 15 deelnemers, bij jullie of online.",
    lead: "Je werkt een dag met Codex van OpenAI en Claude van Anthropic aan een taak uit je eigen werk. Aan het eind draait er een automatisering die je zelf hebt gebouwd.",
    outcome:
      "Je gaat naar huis met een werkende automatisering voor een taak die je vaak doet. Je weet hoe je de uitkomst controleert, wat je wel en niet aan de tools geeft en hoe je hem later aanpast.",
    audience:
      "Voor professionals en teams die AI echt willen gebruiken in hun werk. Je hoeft niet te kunnen programmeren. We kiezen een opdracht die past bij wat je al kunt.",
    preparation:
      "Neem je laptop mee en een taak die je vaak doet. Vooraf regelen we toegang tot Codex en Claude en bespreken we eventuele accountkosten. We werken met gegevens die je mag gebruiken.",
    sessions: [
      {
        title: "Kies een taak die je vaak doet",
        body: "We kijken waar je tijd in gaat zitten. Je kiest een kleine, concrete taak en spreekt af hoe een goed resultaat eruitziet.",
      },
      {
        title: "Geef de tools goede opdrachten",
        body: "Je leert een opdracht op te knippen, voorbeelden en context mee te geven en Codex en Claude stap voor stap te laten werken. We bespreken welke gegevens je wel en niet deelt.",
      },
      {
        title: "Bouw je automatisering",
        body: "Je werkt aan je eigen oplossing: een export omzetten, documenten verwerken of een kleine interne tool. Ik loop rond en help je persoonlijk verder als je vastloopt.",
      },
      {
        title: "Test en leg vast",
        body: "Je probeert het resultaat op echte voorbeelden, zoekt de fouten en schrijft op hoe je het opnieuw gebruikt. Zo kun je na de cursus zelf verder.",
      },
    ],
    examples: [
      { title: "Een export opschonen", body: "Van een rommelig spreadsheet naar een overzicht in het formaat dat je collega’s nodig hebben." },
      { title: "Documenten voorbereiden", body: "Een eerste versie van een offerte, verslag of brief op basis van vaste invoer. Jij controleert de inhoud." },
      { title: "Een kleine interne tool", body: "Een rekenhulp, checklist of formulier voor een taak die je team elke week doet." },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain begrijpen",
    short: "Verstuur transacties, maak blokken en onderzoek een fork in de simulator.",
    description:
      "Praktische blockchaincursus van één dag. Oefen met wallets, transacties, blokken en forks in een simulator. Voor 1 tot 15 deelnemers, bij jullie of online.",
    lead: "Je leert hoe een blockchain werkt door het zelf te doen. In een simulator verstuur je transacties, maak je blokken en zie je wat er bij een fork gebeurt.",
    outcome:
      "Je kunt uitleggen hoe transacties, blokken en consensus samenhangen. En je kunt beter beoordelen wanneer een blockchain iets toevoegt en wanneer niet.",
    audience:
      "Voor professionals en teams die willen begrijpen wat er onder de motorkap gebeurt. We beginnen bij de basis en koppelen de oefeningen aan vragen uit jullie werk.",
    preparation:
      "Neem een laptop mee. We oefenen in de simulator, dus je hoeft geen cryptovaluta te kopen. Vooraf stemmen we het niveau en jullie vragen af.",
    sessions: [
      {
        title: "Van transactie naar blok",
        body: "We beginnen bij het probleem dat een blockchain oplost. Je leert wat een wallet doet en hoe transacties in blokken terechtkomen.",
      },
      {
        title: "Zelf aan de knoppen",
        body: "In de Bitcoin simulator verstuur je transacties en maak je blokken. Je ziet wat er gebeurt als iedereen tegelijk aan dezelfde keten werkt.",
      },
      {
        title: "Consensus en forks",
        body: "We onderzoeken hoe deelnemers het eens worden over één keten. Je veroorzaakt een fork en volgt wat er met de transacties gebeurt.",
      },
      {
        title: "Terug naar jullie werk",
        body: "We bespreken toepassingen en beperkingen aan de hand van jullie vragen. Je weet welke vragen je stelt voordat je voor blockchain kiest.",
      },
    ],
    examples: [],
    image: {
      src: "/images/work/bitcoin-simulator.webp",
      alt: "De Bitcoin simulator waarin je een eigen keten start of aan een bestaande keten deelneemt",
      width: 1200,
      height: 840,
    },
  },
];

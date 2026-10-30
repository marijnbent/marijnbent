export interface Course {
  slug: string;
  title: string;
  description: string;
  lead: string;
  outcome: string;
  audience: string;
  preparation: string;
  sessions: { title: string; body: string }[];
}

export const courses: Course[] = [
  {
    slug: "ai-op-de-werkvloer",
    title: "AI op de werkvloer",
    description:
      "Een praktische eendaagse AI-cursus met Codex van OpenAI en Claude van Anthropic. Bouw je eigen automatisering, op locatie of online, met 1–15 deelnemers.",
    lead: "Bouw in één dag een automatisering die je eigen werk makkelijker maakt. Met Codex van OpenAI en Claude van Anthropic.",
    outcome:
      "Aan het eind van de dag heb je zelf een automatisering gemaakt voor een terugkerende taak. Je weet hoe je de uitkomst controleert en hoe je ermee verder kunt.",
    audience:
      "Voor professionals en teams die AI praktisch willen gebruiken in hun dagelijkse werk. Je hoeft geen programmeur te zijn. We kiezen een opdracht die past bij je ervaring.",
    preparation:
      "Neem je laptop en een terugkerende taak uit je werk mee. Vooraf stemmen we de opdracht, toegang tot Codex en Claude en eventuele accountkosten af. We oefenen met gegevens die je mag gebruiken.",
    sessions: [
      {
        title: "Kies je taak",
        body: "We bekijken waar je tijd aan kwijt bent. Je kiest een kleine, concrete taak en bepaalt wat een goed resultaat is.",
      },
      {
        title: "Werk met Codex en Claude",
        body: "Je leert een opdracht duidelijk te formuleren, context mee te geven en de tools stapsgewijs aan het werk te zetten. We bespreken ook welke gegevens je kunt delen.",
      },
      {
        title: "Bouw je automatisering",
        body: "Je werkt aan je eigen oplossing. Bijvoorbeeld gegevens omzetten, documenten verwerken of een kleine interne tool maken. Ik help je individueel verder.",
      },
      {
        title: "Test en neem mee",
        body: "Je probeert de oplossing op echte voorbeelden, controleert fouten en legt vast hoe je haar opnieuw gebruikt. Zo kun je na de cursus zelfstandig verder.",
      },
    ],
  },
  {
    slug: "blockchain",
    title: "Blockchain begrijpen",
    description:
      "Een praktische eendaagse blockchaincursus. Oefen met wallets, transacties, blokken en forks. Voor 1–15 deelnemers, op locatie of online.",
    lead: "Ontdek hoe een blockchain werkt door zelf transacties te versturen, blokken te maken en een fork te onderzoeken.",
    outcome:
      "Je kunt uitleggen hoe transacties, blokken en consensus samenhangen. Je hebt zelf geoefend en kunt beter beoordelen wanneer een blockchain iets toevoegt.",
    audience:
      "Voor professionals en teams die de techniek achter blockchain willen begrijpen. We beginnen bij de basis en koppelen de oefeningen aan de vragen uit jullie werk.",
    preparation:
      "Neem een laptop mee. We oefenen met een simulator, zodat je geen cryptovaluta hoeft te kopen. Vooraf stemmen we het niveau en jullie vragen af.",
    sessions: [
      {
        title: "Van transactie naar blok",
        body: "We beginnen bij het probleem dat een blockchain probeert op te lossen. Je leert wat een wallet doet en hoe transacties en blokken met elkaar verbonden zijn.",
      },
      {
        title: "Probeer het zelf",
        body: "In de Bitcoin simulator verstuur je transacties en maak je blokken. Je ziet wat er verandert als meerdere deelnemers tegelijk aan de keten werken.",
      },
      {
        title: "Consensus en forks",
        body: "We onderzoeken hoe deelnemers het eens worden over de keten. Je maakt een fork zichtbaar en ziet wat er met transacties gebeurt.",
      },
      {
        title: "Vertaal naar je werk",
        body: "We bespreken toepassingen en beperkingen aan de hand van jullie vragen. Je leert welke vragen je moet stellen voordat je voor blockchain kiest.",
      },
    ],
  },
];

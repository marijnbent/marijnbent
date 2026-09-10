export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  detail: string;
  relevance: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export const projects: Record<string, Project> = {
  wordproof: {
    id: 'wordproof', name: 'WordProof', category: 'Co-founder · Technical lead',
    description: 'From a product idea to an ecosystem of integrations.',
    detail: 'I co-founded WordProof, built its initial platform and led a distributed development team. I worked on Laravel services, queues, billing and an AWS migration. I built reusable SDKs and certificate components, implemented the Yoast SEO integration, and worked with other teams on Shopify and Wix integrations.',
    relevance: 'Building a shared foundation that more than one product can use.',
    stack: ['Laravel', 'WordPress SDK', 'AWS', 'Integrations'],
    href: 'https://wordproof.com', linkLabel: 'Visit WordProof',
  },
  booklite: {
    id: 'booklite', name: 'BookLite', category: 'Maintained fork · Open source',
    description: 'A self-hosted library I maintain and adapt.',
    detail: 'I maintain a fork of BookLite, a self-hosted library with Kobo sync and a built-in reader. My recent work includes settings and runtime-safety improvements.',
    relevance: 'The whole product: interface, API, data, background work and deployment.',
    stack: ['TypeScript', 'React', 'Vite', 'Fastify', 'Drizzle'],
    href: 'https://github.com/marijnbent/booklite', linkLabel: 'Explore the code',
    image: { src: '/images/applications/projects/booklite.webp', alt: 'BookLite’s library interface with books, reading status and Kobo synchronization.', width: 1200, height: 838 },
  },
  platform: {
    id: 'platform', name: 'Web platform engineering', category: 'Architecture · Delivery',
    description: 'APIs, publishing and migration tooling.',
    detail: 'In separate platform work, I developed APIs and a serving runtime, added authentication and release checks, and built checkpointed migration tooling. I worked on previews, publishing and diagnostics so changes could be reviewed before going live.',
    relevance: 'Maintaining web systems while improving how changes reach users.',
    stack: ['APIs', 'PostgreSQL', 'Migrations', 'Release tooling'],
  },
  yoast: {
    id: 'yoast', name: 'Yoast SEO', category: 'Upstream contribution',
    description: 'WordProof integration, upstream review and follow-up fixes.',
    detail: 'Implemented timestamping integration with a reusable PHP SDK, authentication and JavaScript editor support.',
    relevance: 'Working with another engineering team on a shared integration.',
    stack: ['PHP', 'JavaScript'], href: 'https://github.com/Yoast/wordpress-seo/pull/18540',
  },
  schemaorg: {
    id: 'schemaorg', name: 'Schema.org', category: 'Public proposal',
    description: 'Co-proposed content timestamping with Yoast and WordProof colleagues.',
    detail: 'Contributed to a proposal and technical discussion about hash verification and cross-chain identifiers; this was not an adopted standard.',
    relevance: 'Explaining technical assumptions and collaborating in public.',
    stack: ['Structured data'], href: 'https://github.com/schemaorg/schemaorg/issues/2756',
  },
  studiozoek: {
    id: 'studiozoek', name: 'Studiozoek', category: 'My business · Internal tooling',
    description: 'Making the work behind a business easier to run.',
    detail: 'I build and run Studiozoek. Its Hub brings contacts, campaign workflows, review and operations together. A shared repository contains the Hub, business websites and supporting tools.',
    relevance: 'Thinking across projects, with clear boundaries and dependable workflows.',
    stack: ['React', 'React Router', 'TypeScript', 'Bun', 'Drizzle'],
    href: 'https://studiozoek.nl', linkLabel: 'Visit Studiozoek',
  },
  prepped: {
    id: 'prepped', name: 'Prepped', category: 'Personal product · Open source',
    description: 'Self-hosted recipes, cook logs and meal planning.',
    detail: 'A self-hosted recipe app with imports, serving adjustments, collections, cooking logs and household sharing. Built with Astro, React and SQLite, with English and Dutch interfaces.',
    relevance: 'A focused product that solves an everyday problem.',
    stack: ['Astro', 'React', 'SQLite'],
    href: 'https://github.com/marijnbent/prepped', linkLabel: 'Explore the code',
  },
  'obsidian-print': {
    id: 'obsidian-print', name: 'Obsidian Print', category: 'Open-source plugin',
    description: 'Printing notes and folders from Obsidian.',
    detail: 'Printing for Obsidian: individual notes, selections and folders, with platform-specific behavior for desktop, iOS and Android.',
    relevance: 'Attention to the details people notice when they use a product.',
    stack: ['TypeScript', 'Obsidian', 'Desktop & mobile'],
    href: 'https://github.com/marijnbent/obsidian-print', linkLabel: 'Explore the plugin',
  },
};

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
    detail: 'I co-founded WordProof and led a team of four developers. My work included the Laravel application, an AWS migration, a reusable WordPress SDK, and integrations with Yoast, Shopify and Wix.',
    relevance: 'Building a shared foundation that more than one product can use.',
    stack: ['Laravel', 'WordPress SDK', 'AWS', 'Integrations'],
    href: 'https://wordproof.com', linkLabel: 'Visit WordProof',
  },
  booklite: {
    id: 'booklite', name: 'BookLite', category: 'Personal product · Open source',
    description: 'A home for books, built around actually reading them.',
    detail: 'A self-hosted library with a React interface, background imports, metadata from multiple providers, permissions and Kobo synchronization. The frontend and API share TypeScript contracts.',
    relevance: 'The whole product: interface, API, data, background work and deployment.',
    stack: ['TypeScript', 'React', 'Vite', 'Fastify', 'Drizzle'],
    href: 'https://github.com/marijnbent/booklite', linkLabel: 'Explore the code',
    image: { src: '/images/applications/projects/booklite.webp', alt: 'BookLite’s library interface with books, reading status and Kobo synchronization.', width: 1200, height: 838 },
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
    description: 'A recipe collection that earns its place in the kitchen.',
    detail: 'A self-hosted recipe app with imports, serving adjustments, collections, cooking logs and household sharing. Built with Astro, React and SQLite, with English and Dutch interfaces.',
    relevance: 'A focused product that solves an everyday problem.',
    stack: ['Astro', 'React', 'SQLite'],
    href: 'https://github.com/marijnbent/prepped', linkLabel: 'Explore the code',
  },
  'obsidian-print': {
    id: 'obsidian-print', name: 'Obsidian Print', category: 'Open-source plugin',
    description: 'A small missing feature, made useful across platforms.',
    detail: 'Printing for Obsidian: individual notes, selections and folders, with platform-specific behavior for desktop, iOS and Android.',
    relevance: 'Attention to the details people notice when they use a product.',
    stack: ['TypeScript', 'Obsidian', 'Desktop & mobile'],
    href: 'https://github.com/marijnbent/obsidian-print', linkLabel: 'Explore the plugin',
  },
};

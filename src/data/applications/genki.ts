import { projects } from '../projects';
import type { Application } from './types';

export const genki: Application = {
  slug: 'genki', locale: 'en', company: 'Genki', role: 'Lead Web Engineer',
  theme: { accent: '#174e3b', scene: '#e6eddf' },
  description: 'An introduction to Marijn Bent: technical founder, product builder and camper traveler, applying to be Genki’s Lead Web Engineer.',
  hero: {
    greeting: 'Hi Genki. I’m Marijn.',
    heading: 'Hi Genki.', emphasis: 'I’m Marijn.',
    introduction: 'I co-founded WordProof, build the software behind Studiozoek, and make apps I use myself. I’d like to work with you at Genki.',
    proof: ['Co-founder & technical lead', 'Full-stack product builder', 'Camper traveler'],
  },
  chapters: [
    {
      id: 'on-the-road', label: 'My story', eyebrow: '',
      heading: 'I built a van.',
      paragraphs: [
        'I wanted to get better with my hands, so I converted a camper. I spent a lot of time figuring things out as I went.',
        'I’ve travelled a lot. My last major trip was to Kyrgyzstan, where I broke my leg and had to change my plans.',
        'That’s part of why Genki interests me. I know what it’s like to be a long way from home when something goes wrong.',
      ],
      scene: 'camper',
    },
  ],
  work: {
    eyebrow: '', heading: 'Some of my work.',
    introduction: '',
    projects: [projects.wordproof, projects.booklite, projects.studiozoek],
    moreProjects: [projects.prepped, projects['obsidian-print']],
  },
  aiStory: {
    heading: 'I’m AI-pilled.',
    paragraphs: [
      'I use AI a lot. Hermes is my assistant, and I use Openmausbots with six bots to help run Studiozoek. I’ve built plenty of personal apps, usually because I wanted something for myself.',
      'I’m interested in your plan to let more people at Genki build software. I’d enjoy figuring out how to make that useful in practice, with proper review and clear permissions.',
    ],
  },
  fit: {
    eyebrow: '', heading: 'Why Genki?',
    items: [
      { title: '', body: 'I like having responsibility for a product beyond one feature or screen. The role you describe has that: building things, maintaining them and deciding what needs to change.' },
      { title: '', body: 'Bringing your web projects together sounds like work I’d enjoy. At WordProof I worked on a shared SDK and integrations; at Studiozoek I’m building the tools and websites for my own business.' },
      { title: '', body: 'And I’d be working on something for people whose lives I understand. I’d like that.' },
    ],
    closing: '',
  },
  contact: { heading: 'Let’s talk.', body: 'Happy to walk you through the projects or talk about the role.' },
  cv: '/applications/genki/marijn-bent-cv.pdf',
  companion: '/applications/genki/marijn-bent-application.pdf',
};

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
    projects: [projects.wordproof, projects.platform, projects.studiozoek],
    moreProjects: [projects.yoast, projects.schemaorg, projects.booklite, projects.prepped, projects['obsidian-print']],
  },
  aiStory: {
    heading: 'I’m AI-pilled.',
    paragraphs: [
      'I use AI a lot. Hermes is my assistant, and I use Openmausbots with six bots to help run Studiozoek. I’ve built plenty of personal apps, usually because I wanted something for myself.',
      'I’ve also worked on MCP-based authoring, previews and publishing in a separate web platform. That’s why your plan to let more people at Genki build software interests me: I’ve been working on how to make that useful, with review steps and clear permissions.',
    ],
  },
  fit: {
    eyebrow: '', heading: 'Why Genki?',
    items: [
      { title: '', body: 'At WordProof I led a distributed team while still writing the backend and integrations. I like that combination of making technical decisions, helping a team deliver and staying close to the code.' },
      { title: '', body: 'Bringing your web projects together sounds like work I’d enjoy. I’ve built shared SDKs, worked through code reviews with Yoast engineers, and dealt with migrations and release checks. At Studiozoek I also run the tools and websites for my own business.' },
      { title: '', body: 'I’ve taught blockchain courses too. Helping someone understand a tool, try it and ask questions is work I enjoy. I’d bring that to helping more people at Genki build things, alongside my own experience of travelling.' },
    ],
    closing: '',
  },
  contact: { heading: 'Let’s talk.', body: 'Happy to walk you through the projects or talk about the role.' },
  cv: '/applications/genki/marijn-bent-cv.pdf',
  companion: '/applications/genki/marijn-bent-application.pdf',
};

import type { Project } from '../projects';

export type Locale = 'en' | 'nl';
export type Scene = 'hello' | 'camper' | 'builder';
export interface Chapter {
  id: string;
  label: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  scene: Scene;
  aside?: string;
}
export interface Application {
  slug: string;
  locale: Locale;
  company: string;
  role: string;
  theme?: { accent: string; scene: string };
  description: string;
  hero: { greeting: string; heading: string; emphasis: string; introduction: string; proof: string[] };
  chapters: Chapter[];
  work: { eyebrow: string; heading: string; introduction: string; projects: Project[]; moreProjects: Project[] };
  fit: { eyebrow: string; heading: string; items: { title: string; body: string }[]; closing: string };
  aiStory?: { heading: string; paragraphs: string[] };
  contact: { heading: string; body: string };
  cv: string;
  companion: string;
}

export const applicationPath = (app: Pick<Application, 'locale' | 'slug'>) =>
  `/${app.locale === 'nl' ? 'ik-wil-werken-voor' : 'i-want-to-work-for'}/${app.slug}/`;

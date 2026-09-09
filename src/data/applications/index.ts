import { genki } from './genki';
import type { Application, Locale } from './types';

export const applications: Application[] = [genki];
export const applicationsFor = (locale: Locale) => applications.filter(app => app.locale === locale);

# marijnbent.nl

Personal portfolio and Dutch AI and blockchain course pages. Built with Astro and TypeScript.

```sh
npm ci
npm run dev
```

Development runs through Portless at https://marijnbent.localhost, with Astro bound to 127.0.0.1. The HTTPS proxy must be running.

```sh
npm run build
npm run check
npm run check:applications
npm run preview
```

`preview` serves the production build through the same Portless URL. Stop development before starting preview.

Projects: `src/data/work.ts`. Courses: `src/data/courses.ts`. Contact: `src/data/profile.ts`. Public site layout: `src/layouts/SiteLayout.astro`. Application pages retain their separate layout.

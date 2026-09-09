# Personal application pages — implementation brief

Status: agreed direction; website implementation and artwork are still to be built.
First application: Genki, Lead Web Engineer.
Website: https://marijnbent.nl
Repository: marijnbent/marijnbent

## Goal

Create company-specific application pages on Marijn's own website. Each page should introduce Marijn, explain why he wants that particular role, and demonstrate his fit through selected work and a personal story. The page serves as the motivation piece alongside a conventional downloadable CV.

Build Genki first, then reuse the page components and verified profile information for future applications. Personalization must extend to the narrative, project selection, motivation, and visual details.

This file is an implementation brief. It does not indicate that application pages, indexing controls, illustrations, or PDFs have already been implemented.

## Confirmed preferences

- English applications use `/i-want-to-work-for/{company}/`.
- Dutch applications use `/ik-wil-werken-voor/{bedrijf}/`.
- Exclude application pages from the sitemap and normal site navigation.
- Keep them out of search results using indexing directives.
- Use an image-generated character of Marijn, with several consistent versions that change as the visitor scrolls.
- Use Marijn's GitHub profile picture as the character reference.
- Include his camper travels, skills, past work, and specific reasons for fitting the employer.
- Provide a CV PDF. The site is the motivation piece; do not write a conventional cover letter by default.
- If an application requires a letter upload, provide a short PDF that introduces and links to the application page. Answer any mandatory form questions directly.
- Do not foreground Marijn's AI usage in the general profile or reusable application copy.
- Genki is an explicit exception: relevant personal apps, Hermes, and the Openmausbots setup can feature in that application.
- The correct name supplied by Marijn is **Openmausbots**. He uses it to run Studiozoek, with six bots. Do not use the earlier uncertain spellings.

## Existing website

The inspected main branch uses Astro, React, Tailwind CSS, and the Astro sitemap integration.

Relevant existing files:

- `src/pages/index.astro`: homepage and project list.
- `src/layouts/Layout.astro`: shared page shell and metadata.
- `astro.config.mjs`: site URL and integrations.
- `src/styles/global.css`: global styling.
- `src/components/ui/`: existing React UI primitives.

Extend this stack. Introduce a dedicated application layout where needed so the editorial page can have its own composition.

The current homepage foregrounds AI in its visible introduction, description, and Person schema. During implementation, revise that positioning to match Marijn's preference for a general profile centered on building products, technical ownership, and practical problem-solving. Keep genuine project descriptions accurate.

## Story and reader experience

The first screen must make the role, motivation, and strongest evidence clear. A recruiter should understand the fit in 30 seconds and find more depth by continuing to scroll. CV, project, and contact links should be easy to locate.

| Chapter | Purpose | Genki direction | Character scene |
| --- | --- | --- | --- |
| Introduction | Name the company and role; establish the fit | Technical founder and hands-on builder interested in owning Genki's web work | Marijn greeting the reader |
| Travel and making things | Explain personal motivation | Camper conversion, long-term travel, and understanding life on the road | Marijn beside his camper |
| Selected work | Demonstrate relevant experience | WordProof, BookLite, and Studiozoek as initial candidates | Marijn building, with real product screenshots |
| Working style | Show judgment and ownership | Architectural decisions, reliable operations, communication, and relevant automation experience | Marijn at a laptop or collaborating |
| Why this company | Connect experience to this role | Specific interest in Genki and evidence relevant to its web engineering needs | A restrained company-specific scene |
| Contact | Make the next step easy | Contact, GitHub, CV download | Friendly closing pose |

For Dutch applications, write natural Dutch copy, including headings, buttons, metadata, and PDF text. Changing language should not automatically create a second public version of every application.

Camper travel can be central for Genki and shorter for another employer. The character must support the story while the text and work remain easy to inspect.

## Personal story inputs

Marijn supplied these points directly:

- He built his van to become better with his hands.
- He has travelled extensively.
- His last major trip was to Kyrgyzstan, around two years before this conversation, and he broke his leg.
- He has built many personal apps.
- He uses Hermes as a personal assistant.
- He uses Openmausbots to run Studiozoek with six bots.

The van's motivation is a strong narrative anchor: deliberately learning a different kind of building, then using the result to travel.

Confirm the exact travel dates and sequence before publishing a timeline. The injury is available as context for the Genki story, but avoid turning it into a claim about insurance, treatment, a claim outcome, or Genki customer experience that Marijn has not supplied.

The Openmausbots name, use, and bot count are user-confirmed. Individual bot responsibilities, operating boundaries, and measurable results still need examples.

## Project evidence and selection

Initial candidates, based on the repositories and documentation inspected:

| Project | Evidence available | Potential application use |
| --- | --- | --- |
| WordProof | Career notes describe a reusable WordPress SDK, Yoast login integration, Laravel versions, AWS migration, and WordPress/API/Shopify/Wix integrations | Technical ownership, shared infrastructure, integrations, and long-term decisions |
| BookLite | TypeScript/Fastify backend, React/Vite frontend, shared contracts, background imports, metadata providers, permissions, search, and Kobo sync | Current full-stack web work and product thinking |
| Studiozoek | Private monorepo with Hub, websites, scraper tooling, deployment setup, CRM, campaign workflows, review, and operations | Business tooling, cross-project infrastructure, and operational ownership; Genki-specific automation story |
| Prepped | Astro/React recipe application, localization, household workflows, and documented database migration procedures | Useful personal products and implementation detail |
| Obsidian Print | Public plugin with desktop/mobile printing, customization, and user documentation | Publicly inspectable work and attention to platform differences |
| Mailie | Private native macOS app with a Rust engine, local cache, synchronization, undo, and recovery behavior | Supporting example of engineering depth when relevant |
| Hiredd | Private Astro/React job application tracker | Optional supporting example |

For every featured case study, capture:

1. Who had the problem and why it mattered.
2. Marijn's actual contribution and ownership.
3. One important architectural or product decision.
4. A concrete outcome, with a date and evidence for any metric.
5. A lesson or a decision he would now approach differently.
6. A screenshot, public demo, or code reference that the recipient can access.

Repository documentation establishes project capabilities, not customer adoption, business impact, or exclusive authorship. Do not present forks as entirely original work. Avoid unsupported claims such as production scale, user counts, revenue, or hours saved.

Private projects can be described through selected case studies and appropriate screenshots. Do not embed private source code, customer data, or inaccessible repository links as the recruiter's primary evidence.

## Character art

Reference profile: https://github.com/marijnbent
Reference image: https://avatars.githubusercontent.com/u/11903095?v=4

Download and inspect the profile image before image generation. Check whether the available resolution and framing preserve enough facial detail; request another photo only if needed.

Art direction:

- Recognizable, lightly stylized editorial illustration.
- Warm and expressive, suitable for a professional application.
- Consistent face, proportions, clothing, palette, lighting, and perspective.
- Transparent backgrounds where useful for compositing.
- One approved reference character before generating additional scenes.
- Use that reference image for subsequent variants.
- Reuse the core poses across applications; add company-specific props or scenes selectively.
- Use a real camper photo to establish its appearance when available. Do not claim an invented vehicle is an accurate likeness.

Initial asset set: greeting, camper, building, laptop/collaboration, and closing. Keep generated text out of the artwork; render headings and labels as HTML.

Save final optimized assets with stable filenames and retain generation references so later poses stay consistent. Check edges, hands, facial consistency, cropping, and contrast before integrating.

## Scroll behavior

Desktop:

- Use a two-column layout where appropriate, with a sticky character area and readable content.
- Change scenes as chapters enter view.
- Prefer crossfades and gentle transforms between matching poses.
- Separate props from the character when it improves transitions.
- Use normal browser scrolling; do not capture or hijack scroll input.

Mobile:

- Place scenes within the document flow between chapters.
- Keep content order and reading experience intact.
- Avoid a tall sticky scene that pushes the useful content out of view.

Progressive enhancement:

- Render the full text, links, and CV access in the initial HTML.
- Use IntersectionObserver for chapter changes; add continuous scroll effects only where they serve a clear purpose.
- Respect `prefers-reduced-motion` by using static scenes and removing nonessential motion.
- Reserve image dimensions to prevent layout shifts.
- Load the first scene promptly and defer later artwork.
- Use meaningful alt text for informative images and empty alt text for decorative duplicates.
- Do not require animation, hover, or JavaScript to access important information.

## Proposed content structure

Use a small typed content model. A CMS is not required for the first version.

| File or directory | Responsibility |
| --- | --- |
| `src/data/profile.ts` | Verified common profile and contact information |
| `src/data/projects.ts` | Reusable case studies and evidence |
| `src/data/applications/genki.ts` | Genki-specific role, language, narrative, project selection, and scenes |
| `src/layouts/ApplicationLayout.astro` | Application metadata and page shell |
| `src/components/application/` | Chapters, character scenes, project cards, and contact controls |
| `src/pages/i-want-to-work-for/[company].astro` | English application routes |
| `src/pages/ik-wil-werken-voor/[bedrijf].astro` | Dutch application routes |
| `public/images/applications/marijn/` | Optimized reusable character artwork |
| `public/applications/genki/` | Reviewed application downloads |

Application fields should cover company, role, locale, introduction, motivation, selected project IDs, scene mapping, visual accents, contact details, and document links.

Default any AI-related application content to absent. Genki must opt in explicitly. Avoid bundling other applications' narratives into a shared client-side data object. Generate only configured routes, with normal 404 behavior for unknown companies.

Treat sent applications as stable snapshots. Reusing components should not silently change a previously submitted narrative or CV.

## Search indexing and visibility

- Filter both application route prefixes out of the Astro sitemap integration.
- Add `<meta name="robots" content="noindex">` to application pages.
- Do **not** disallow these HTML pages in `robots.txt`: crawlers need to fetch them to see `noindex`.
- Exclude applications from normal navigation, public project lists, and any site search.
- Configure `X-Robots-Tag: noindex` for application PDFs through the actual hosting platform.
- Make the PDF header configuration deployment-specific; do not assume an uninspected hosting provider.
- Check that application titles, canonical URLs, and social previews refer to the correct company and language.

These controls reduce search visibility; they do not make a public URL or this public repository private. Keep any source material that should remain private out of the public repository.

Reference: https://developers.google.com/search/docs/crawling-indexing/block-indexing

## CV and required letter uploads

Create a conventional, selectable-text CV PDF from verified career information. Keep layout readable for people and recruitment software. Tailor project emphasis to the role without changing historical facts.

The finished CV has not yet been located. The GitHub-synced notes contain career material and a job-search checklist; the inspected website and T3 repository did not reveal a finished CV. A CV stored only on Marijn's Mac or in local T3 conversations still needs to be retrieved.

If a letter upload is mandatory, create a short companion PDF with:

- Marijn's name, target role, and company.
- A concise introduction to the application.
- A visible, clickable full application URL.
- An optional QR code as an additional way to open it.
- Contact information.

Do not substitute a QR code or screenshot for selectable text and a clickable link. The application page remains the main motivation piece.

## Remaining inputs

- The existing CV, or verified career dates, titles, education, and contact details sufficient to reconstruct it.
- Exact contributions and current outcomes for the selected projects.
- Marijn's specific motivation for joining Genki.
- One or two concrete examples of Openmausbots roles, review boundaries, and results for the Genki version.
- Exact chronology and desired emphasis for the Kyrgyzstan story.
- A camper reference photo if an accurate camper illustration is wanted.
- Current hosting configuration for PDF headers and deployment.

The GitHub profile picture is already selected as the face reference; do not ask for a portrait again unless it is insufficient.

## Build sequence and completion checks

1. Establish verified profile and project facts; recover or reconstruct the CV.
2. Draft the Genki narrative and select the strongest evidence.
3. Generate the reference character and consistent scene variants.
4. Build the reusable Astro application components and English/Dutch route support.
5. Assemble the Genki page, CV, and required-upload companion PDF.
6. Configure and verify indexing behavior.
7. Review desktop, mobile, keyboard access, reduced motion, and content without JavaScript.
8. Verify company-specific content, links, image performance, PDF text extraction, and the production build.
9. Deliver a reviewable application page and documents before submitting the application.

For each later employer, research the role, select relevant evidence, write a specific motivation, configure language and scenes, and repeat the focused checks. Reuse the implementation while giving each application its own story.

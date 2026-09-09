# Maintaining application pages

## Current implementation

The Genki page lives at `/i-want-to-work-for/genki/`. It is deliberately absent from site navigation and the sitemap. Application HTML includes `noindex`. A second dynamic route supports Dutch applications under `/ik-wil-werken-voor/` and emits no pages until a Dutch application is registered.

Text, links and downloads are available without JavaScript. Scroll distance selects discrete puppet poses and the active chapter marker. Each scene has six intermediate frames in a 3×2 sprite sheet, played forward and backward as the page scrolls. Mobile scenes use the same frames inline; reduced-motion preferences keep the first pose still.

The application uses a dedicated stylesheet and layout. Existing project pages retain their layout. The homepage introduction and personal metadata now focus on products and building instead of AI usage. AI-related narrative is optional application content and currently only exists for Genki.

For the reusable intake, writing and release workflow, see [A new application](application-workflow.md).

## Add an application

1. Add `src/data/applications/<company>.ts` using the `Application` type and Genki as the structural example.
2. Set the locale to `en` or `nl`. Write all supplied narratives, case-study strings and link labels in that language. UI labels come from `copy.ts`.
3. Select relevant case studies; customize their relevance, ordering and descriptions. Project objects can be copied and adapted without changing the shared originals.
4. Register the application in `src/data/applications/index.ts`.
5. Add `<company>-documents.json`, following the Genki document config, with localized labels and an appropriate CV data file in `src/data/cv/`.
6. Generate the documents with `python3 scripts/generate-application-pdfs.py <company>`. Install `scripts/pdf-requirements.txt` if needed. The website build consumes the committed PDFs and does not require Python.
7. Run `npm run build` and `node scripts/check-applications.mjs`.

Do not reuse another company's motivation unchanged. The reusable layer is the implementation and factual source material.

## Documents and factual review

The CV is a selected-experience CV reconstructed from known work, not the recovered original. Employment dates, education and metrics have deliberately not been invented. Before submitting, confirm chronology and education against the original CV if those details should be included.

Marijn confirmed `marijn@marijnbent.nl` and `+31 6 8105 3848` as his contact details. Update `src/data/profile.ts` and the relevant CV JSON together if it changes, then regenerate PDFs.

Genki's motivation is drafted for Marijn's review. The Kyrgyzstan story omits a specific year because the exact chronology is not verified. It makes no claim about treatment, insurance coverage or being a Genki customer. The van illustration is a stylized scene, not a factual rendering of his conversion.

The six-bot Openmausbots setup and use of Hermes were supplied directly by Marijn. No bot responsibilities, autonomy levels, efficiency metrics or customer outcomes are invented.

Public project links are used as evidence; private source code and operational data are not included.

## Indexing and hosting

`astro.config.mjs` filters both application route prefixes and `/applications/` out of the sitemap. `public/robots.txt` allows fetching these URLs so search engines can read `noindex`.

`public/_headers` sets `X-Robots-Tag: noindex` for application HTML and PDFs on hosts that support this file, including Cloudflare Pages and Netlify. The existing site's hosting provider is not defined in this repository. If it uses another host, configure the equivalent response headers there. For nginx, for example, put `add_header X-Robots-Tag "noindex" always;` in the matching application/PDF location blocks while preserving that deployment's existing file-serving configuration.

After deployment, inspect the actual PDF HTTP response to verify the header. HTML's own `noindex` works independently of `_headers`. These controls do not make the public repository or page URL private.

## Sent applications

Before submitting, record the commit and keep a copy of the final PDFs. Avoid changing shared project data or profile facts in a way that changes a previously sent application unexpectedly. For a fully frozen narrative, copy its selected project objects into its company data file. Maintain a separate company/version slug if a new application needs a substantially different story.

## Validation

The focused verification script checks generated application metadata, language, canonical URLs, local assets, document links, absence from the sitemap and homepage, and served-source script syntax. It also confirms the PDFs are present and indexing header rules are included. It does not verify a deployed host's HTTP headers, browser animation behavior or facts that remain unconfirmed.

## Artwork sources

The character scenes were generated with the built-in image-generation tool using Marijn’s GitHub portrait as reference. Original prompts are retained in `docs/character-prompts.json`; the replacement clay puppet sequences are documented in `docs/stop-motion-prompts.json`. Optimized WebP sprite sheets with a pale green background live in `public/images/applications/marijn/`.

The BookLite screenshot is from its public README: https://github.com/marijnbent/booklite/blob/main/README.md (asset: https://github.com/user-attachments/assets/bf36eaee-3880-42d8-a54c-906536dc590d). Its WebP is resized without altering the depicted interface.

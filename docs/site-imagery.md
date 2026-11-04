# Site imagery

## Work

The project screenshots in `src/assets/work/` are 1200 × 840 WebP images, cropped to 10:7. Astro generates the responsive sizes and the JPEG share images:

- `booklite`, `obsidian-print`, `openfront`: GitHub README screenshots.
- `yellow-store`, `bitcoin-simulator`, `studiozoek`: captured from the live sites through Graze on 30 October 2026.

`src/assets/work/ollie-icon.webp` and `prepped-icon.webp` are 512 × 512 conversions of the projects' current app icons. They are icons, not screenshots. Ollie's inherited Tinycast screenshot is not presented as its current interface.

Retake screenshots when a product changes visibly. Keep the full screenshot on project pages rather than cropping away its content.

## Portrait

`src/assets/site/marijn.webp` comes from `public/images/applications/marijn/github-photo.png`.

Both generated whiteboard images were rejected and removed at Marijn's request. Use the existing portrait. No replacement whiteboard photo is requested.

## Illustrations

The cow, favicon, van and course figures share one outlined style: ink strokes, paper fills and dark green tints. No blue. `src/components/site/Cow.astro` holds the inline homepage cow; `public/cow-favicon.svg` is the favicon and small header mark, simplified to read at 32px.

The cow uses a native button with a silent text response, keyboard support and a pressed state. Without JavaScript it stays a labelled image.

`src/components/site/VanRoute.astro` is an illustrated van and journey that plays once when scrolled into view (the van drives in, the dog charges, the X pops). Reduced motion and no-JavaScript show the final state. It is not a rendering of Marijn's actual van or a geographic map. He built his van and broke his leg in Armenia while jumping away from a charging dog, on a trip towards Kyrgyzstan.

The inline course figures in `src/components/site/figures/` use the same palette. Their labels are handwritten in Caveat, like the van notes. The export table is illustrative course material, not a client result.

Marginal notes use Caveat alongside Schibsted Grotesk. See `iterate/summary.md` for the retained design and `iterate/svg-log.md` for the SVG rounds.

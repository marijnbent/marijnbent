# SVG refinement scorecard (2026-11-04)

Baseline: origin/main 47a15f9, the version Marijn saw. Captures in iterate/baseline-svg (local).

| Value | Source | Observable check | Target |
|---|---|---|---|
| refine all svgs (like the cows) | Marijn | Consistent strokes, crafted detail, labels in the site font, crisp at 32px and full size | Judge ≥8, beats baseline |
| van route not "so ugly" | Marijn | Reads as a crafted illustration of the self-built van and the trip | Judge ≥8, beats baseline |
| animated a bit | Marijn | Subtle scroll motion; reduced motion and no-JS show the final state | Judge ≥7 tasteful |
| footer without logo | Marijn | Big footer name removed; footer still balanced | Pass |
| dark green tints over blue | Marijn | No blue left; green accent and tints that fit | Zero blue, judge ≥8 |
| total refinement | Marijn | Whole site coherent and finished | Judge ≥8 |
| mobile fit | added | Labels legible at 390px, no clipping, sits well beside text | Judge ≥7, no clipping |
| guards | added | AA contrast, no overflow, a11y labels, astro check and build pass | No regression |

Judge: fresh Claude Opus 5.5 subagents, blind labels, two presentation orders per round. Reference level: joshwcomeau.com, lynnandtonic.com illustrations.

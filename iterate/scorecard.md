# Fixed scorecard

Baseline: commit 00d7d7debe92537a05d7ce06c540a2ebf92dd5a9, the exact version Marijn saw before asking for whole-site iteration. Do not replace it with an intermediate candidate.

| Value | Source | Observable check | Target |
|---|---|---|---|
| more special | Marijn | Bespoke cow and van SVGs, deliberate typography and composition; recognizable as this maker's site when the name is covered; no generic decoration | Judge >=8/10 and clear win over baseline |
| more with character | Marijn | Cows, self-built van and Armenia story feel intentional and naturally written; playful detail serves the person without drowning out his work | Judge >=8/10 and clear win over baseline |
| whole site | Marijn | Home, course overview, both course details and public project pages share a considered visual language; secondary pages receive real attention | Judge >=8/10 and no weaker page family |
| Compact, readable and responsive | added | No overflow, cut text, excessive empty bands or tiny essential labels at 390,768,1440,2560px; clear actions and image crops | Judge >=8/10, no regression |
| Facts and working behavior | guard | No invented projects, prices, dates or proof; 1–15 people, one day, on location/online; correct phone; Armenia injury while heading towards Kyrgyzstan; no whiteboard image | All checks pass, zero regression |
| Accessibility and maintainability | guard | Keyboard/focus, readable contrast, reduced-motion and no-JS access; Astro/TS, no comments or unnecessary dependencies; retain all existing routes and application noindex | All checks pass, zero regression |

Frozen original baseline scores: more special5, more with character5, whole site4, compact6. These were measured once; later tasks must not replace them with a new baseline score.

Fixed judge: fresh independent Claude Opus 5.5 review tasks, supplied only the fixed scorecard, references and screenshot evidence, not the designer's rationale. Same rubric and model every round. Blind pairwise comparison in both presentation orders where practical. A split verdict is a tie. Root implements; consultant creates SVG assets. Judge does not make candidates.

References: Lynn Fisher (lynnandtonic.com), Josh W. Comeau (joshwcomeau.com), Piper Haywood (piperhaywood.com). Borrow personal voice, illustration integrated with useful content, and editorial project clarity; do not copy their visual signatures or content.

At least three rounds. Record divergent proposals and actual rendered candidates. Keep only wins on the targeted value without regressions. If targets remain unmet after three distinct approaches, report that honestly.

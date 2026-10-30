# Iteration log

| Round | Value targeted | Hypothesis | What changed | Result | Independent judge vs best | Kept? |
|---|---|---|---|---|---|---|
| Baseline | All | Existing character additions are still isolated; secondary pages retain generic layouts | None | Commit 00d7d7d | Opus: special 5, character 5, whole site 4, compact 6 | Baseline frozen |

The original baseline is fixed throughout. See scorecard.md for targets and guardrails.

Baseline guard resolution: the live official homepage at https://yellowshop.fans/ identifies the brand as Yellow Shop (verified 30 October 2026). Use that display name while preserving /yellow-store/ as the existing route. No user confirmation is needed for this directly verifiable naming correction.

Independent preparation after baseline review (no runtime/source change): drafted factual Dutch copy for all ten public project routes in project-copy/nl.json. The current original Ollie release icon was found locally; inherited Tinycast screenshots will not be passed off as current Ollie screens. Hiredd's repository was verified private, so the later project-page revision must not advertise a public source-code destination for it. Existing source and runtime remain at the fixed baseline until the SVG consultation completes.
| 1 | more special / more with character | Isolated generic illustrations and a dominant repeated footer dilute identity | Three actual SVG directions rendered as P/Q/R in an otherwise identical homepage; Q provisionally integrated across all page families, smaller footer and corrected route scale | round-1/{p,q,r} screenshots; Q: 12 pages, 0 overflow, 0 broken images | Q wins both orders; special6, character6, whole4, compact6. Rejected due heading clash and loss of strong footer/hero type. | No |

Round-1 technical note: the first check accidentally included archived Astro source copies; archives were renamed to .astro.txt. The check then passed (0 errors/warnings), build produced15 routes, and application checks passed. Candidate captures were discarded and regenerated after the successful build, so all submitted screenshots show the actual new candidate.

Round1 resolution: restored the fixed baseline runtime before round2. Q remains the strongest SVG family and may be used in a new combined candidate, but the rejected reduced footer and plain hero link do not carry forward.

| 2 | whole site | Secondary pages still look unrelated and leave useful space empty; a shared Dutch editorial grid, real project evidence and useful course drawings should make the whole site coherent | A: balanced split; B: cover-first; C: image-first and vertical programme. All three rendered at 1440 and390 for AI, BookLite and Ollie. A additionally all six page families, plus2560home. Large footer and handwritten hero link restored; Q SVG family integrated | round-2/{a,b,c}; A:12pages,0overflow,0brokenimages; check/build/applications pass | A wins both orders;7.5 on all values | Yes: A |

Round2 verdict: A wins in both orders and is retained. Scores7.5 on all four values. The judge also rescored the original baseline; those new baseline scores are NOT used. Frozen baseline remains5/5/4/6. Small observed weaknesses (mobile image order, repeated contact sections) carry into round3. B/C rejected.

Round3 hypothesis: personal project reasons, real product imagery visible earlier, and a single contextual contact footer should extend character to the secondary pages without repeating decorative cows. Replace the homepage text index with a project gallery and show a real, labelled export exercise on the AI course.

| 3 | more with character / more special | A personal visual layer should work beyond the hero; the project evidence and course example should carry the story | D: two featured project images plus compact tool gallery, handwritten project reasons, distinct icon-led project heroes, concrete AI export example, one contextual course footer. E: alternating picture rows and paper notes. F: compact visual index and reversed project imagery | round-3/{d,e,f}; D includes all six page families390/1440, plus768 and2560 samples;14 public routes checked at four widths; no overflow or broken assets | D wins both orders;special7.5,character8,whole8,compact8 | Yes: D |

Round3 verification: check/build/application checks pass; all15 built routes retain local links/assets and valid JSON-LD. Public routes are Dutch. The checker initially found no overflow but a manual tablet screenshot exposed a split Prepped title, fixed with a wider header below1080px; all14 public routes were rechecked at768. A screenshot pass caught an incomplete lazy image load; the capture helper now explicitly decodes eager images before recording screenshots. No image request failure remained. Design inspector:0FAIL,2WARN (type scales include diagram labels/brand wordmark; no authentic video exists and no filler video is added).

Round3 verdict: D wins both orders and is retained; E/F rejected. Character8,whole site8,compact8 meet target; special7.5 remains unmet.

Round4 hypothesis: visitors only read about hands-on courses; usable, small exercises on the overview and details should give these pages a distinctive purpose and show what the day feels like. Keep the accepted homepage and project layouts. No external AI calls or new dependencies.

| 4 | more special | The course pages describe hands-on work but do not let visitors experience it | G: open workshop rows with a working local export cleaner and fork exercise; H: preview-first two-column workshops; I: dark contained workshops. No external AI calls, three focused parser tests, keyboard/error/recovery/no-JS checks pass | round-4/{g,h,i}; all three captured390/1440; G also768/2560 and exercised state | G ties D across orders and loses on whole site | No: retain D |

Round4 verification: the two exercises work from keyboard and expose invalid input, recovery, branch changes, ties and reset. HTML-like input is rendered as text. Without JavaScript the sample and diagrams stay readable and non-working controls are hidden. Three focused parser tests pass. All3changedroutes at390/768/1440/2560 have0overflow and0brokenimages. The duplicate text description of the already demonstrated export exercise was removed to keep the AI course compact. Portless443 remained healthy after the T3 restart; only the stopped app preview was restarted.

Round4 verdict: G is best among the new candidates but ties D across reversed presentation orders and loses on whole site. G/H/I rejected. Restored the exact retained D runtime from the round3 snapshot; removed the rejected exercise runtime and its tests. Final scores against the frozen original: special5→7.5,character5→8,whole4→8,compact6→8. The special target8 remains unmet. Four rounds explored three SVG identities, three editorial layouts, three project gallery/note layouts, and three course workshop layouts. Stop with the independent best rather than keep an unproven feature.

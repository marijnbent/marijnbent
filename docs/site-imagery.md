# Site imagery

## Work screenshots

`public/images/work/*.webp` (1200 × 840, WebP quality 84) are real screenshots, cropped to 10:7:

- `booklite`, `obsidian-print`, `openfront`: screenshots from the READMEs of the GitHub repositories.
- `yellow-store`, `bitcoin-simulator`, `studiozoek`: captured from yellowshop.fans, bitcoinsimulator.cowsandbytes.com and studiozoek.nl through Graze on 30 October 2026.

Retake them when a product changes visibly.

`public/images/site/marijn.webp` is `public/images/applications/marijn/github-photo.png` converted to WebP.

## Course photo (still to be made)

The first generated whiteboard image was rejected and removed. The next attempt must be made with an image tool that accepts `public/images/applications/marijn/github-photo.png` as identity reference. Save the original as `public/images/site/course-whiteboard.png` and a 1600 × 1067 WebP as `public/images/site/course-whiteboard.webp`, then add it as `image` to the AI course in `src/data/courses.ts`. The course page shows `course.image` automatically.

Reject a result if the face does not clearly match the reference, if he looks into the camera, if the board shows neat readable labels, or if hands or the marker are malformed.

Prompt:

> Documentary photograph taken during a one-day hands-on workshop in a plain Dutch meeting room on an overcast afternoon. The man from the reference photo (keep his face, curly brown hair, short beard, age and build exactly) stands at a used whiteboard, turned three-quarters away from the camera toward people outside the frame. He is mid-sentence, eyebrows slightly raised, not smiling for the camera, one hand holding an uncapped black marker against the board, the cap in his other hand. He wears a plain dark navy crewneck sweater with the sleeves pushed up. The whiteboard is genuinely messy: grey ghosting from earlier erasing, a quick rough sketch of three boxes with one arrow crossed out and redrawn, a few scribbled words that are not legible at this distance, a strip of masking tape with a printed page stuck to the frame. In the soft-focus foreground, the edge of a table with an open laptop seen from behind, a paper coffee cup and a charging cable. Flat grey daylight from a window on the left, fluorescent ceiling light mixed in, slightly cool white balance. Shot on a 35 mm lens at f/2.8 from about three metres, eye level, landscape 3:2, natural depth of field, fine sensor noise, no retouching. No logos, no brand names, no posed gestures, no stock-photo smile, no audience faces.

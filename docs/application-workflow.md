# A new application

Start with the vacancy link and a few sentences about why Marijn wants the job. Reuse the layout and verified facts; write a fresh introduction, project selection and motivation for that company.

## Brief to copy

```text
Company:
Role:
Vacancy URL:
Language: English / Dutch
Why I want this job:
Three things they need:
Projects or experience that show I can do those things:
Something personal that connects me to their product:
Mention AI usage: no, unless I explicitly ask
Application deadline:
Any extra questions or upload requirements:
```

Read the actual vacancy before drafting. Save a dated summary of its requirements and source URL in the company brief because vacancies can disappear. Flag missing facts instead of inventing dates, responsibilities or results.

## What carries over

| Part | Reuse | Tailor for the company |
| --- | --- | --- |
| Page | Astro layout, mobile styles, scroll animation, accessibility | Company name, accent and language |
| Introduction | Verified profile and contact details | Opening and reason for applying |
| Projects | Factual entries in `src/data/projects.ts` | Choose two or three, order by relevance, explain Marijn's contribution |
| Personal story | Camper conversion and travel facts | Include only when they help explain the connection |
| Artwork | Clay puppet frame sheets and real GitHub photo | Generate another scene only when the story needs it |
| AI | Optional `aiStory` component | Omit by default; Genki explicitly opts in |
| Downloads | PDF generator and verified CV facts | Relevant experience, language, role and application URL |
| Indexing | Route filters, HTML noindex and PDF header rules | Verify the deployed URLs |

## Draft and review

Create `src/data/applications/<company>.ts` using the `Application` type. Genki demonstrates the structure, but its wording, insurance connection and AI section must not carry over by accident. Remove `aiStory` entirely for applications without permission to mention AI usage.

Use `/i-want-to-work-for/<company>/` for English and `/ik-wil-werken-voor/<company>/` for Dutch. Translate the narrative, project descriptions and PDF content as well as the interface labels. Supply an appropriate CV JSON in `src/data/cv/`; an English CV is not a Dutch translation.

Keep drafts out of `src/data/applications/index.ts` until the page and documents are ready. Register the finished application, add its `<company>-documents.json` config and generate the PDFs with `python3 scripts/generate-application-pdfs.py <company>`. See [maintenance instructions](application-pages-maintenance.md) for file details.

Review the opening, selected work and motivation together. Every paragraph should contain a fact, an example or a specific reason for wanting that role. Keep the short, direct titles and avoid numbered sections. The photo and contact details finish the page.

The current CV is reconstructed selected experience, not Marijn's recovered original CV. Use the original if it becomes available; do not invent missing employment or education dates.

## Release and send

Run `npm run build` and `npm run check:applications`. Confirm that the page and both PDFs use the correct company, language, email, phone and URL. Release through the existing website host, then check the live page, downloads, noindex metadata and PDF response headers. Search exclusion is not access control.

Use the website as the application narrative. Attach the CV where requested. If a form requires a cover-letter upload, attach the short application PDF pointing to the page. Record the submission date, final URL and released commit in the company brief after actually sending; publishing a page does not submit an application.

After sending, preserve its content. If later edits to shared projects would change an old application, copy those project records into that application's file first. Keep copies of the sent PDFs. Create a new slug for a materially different application to the same company.

## Next time

“Make an application for [vacancy URL] using the existing application workflow. Write it in [language]. I want this role because [reason]. Focus on [projects]. [Do / do not] mention AI.”

That is enough to start a tailored draft; ask only for factual gaps that affect the result.

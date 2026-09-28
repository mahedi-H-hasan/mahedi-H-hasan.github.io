# mahedi-H-hasan.github.io

Personal academic homepage for **Mahedi Hasan**, Lecturer in the Dept. of
Computer Science & Engineering at IUBAT, published via GitHub Pages at
[mahedi-h-hasan.github.io](https://mahedi-h-hasan.github.io).

Static site: plain HTML, CSS, and vanilla JS — no build step, framework, or
dependencies. Fonts (Source Serif 4, Public Sans, IBM Plex Mono) load from
Google Fonts; everything else is self-contained.

## Structure

The site is a true multi-page site — each section is its own HTML file with
shared header/nav/footer markup, not a single scrolling page.

```
index.html              Home — hero + short welcome + links to every section
about.html              Biography, research interests, awards & education
teaching.html           Courses taught, course development, thesis supervision
publications.html       Journal articles, conference papers, book chapters
projects.html           Selected public GitHub repositories
skills.html             Programming, ML, web, and tooling skills
cv.html                 Academic CV; print or save as PDF from the browser
contact.html            Email, phone, and academic profile links
publishing.html         How to preview a topic branch and manually deploy it via Actions
assets/css/styles.css   All styles (design tokens as CSS custom properties at the top)
assets/js/main.js       Mobile nav toggle, current-page highlighting, scroll-reveal, footer year
assets/img/favicon.svg  Site icon
.github/workflows/deploy-pages.yml   GitHub Actions deploy to GitHub Pages
PRODUCT.md              Durable product context (Impeccable design skill)
```

## Editing locally

No build tools needed. Either open `index.html` directly in a browser, or
serve the folder so relative paths behave exactly like production:

```powershell
# any static server works, e.g.
npx serve .
# or
python -m http.server 8000
```

Every page is a standalone file, so you can preview any of them directly
(e.g. `http://localhost:8000/publications.html`).
On `cv.html`, select **Print / Save as PDF** and choose **Save as PDF** in the
browser print dialog to download a portable copy.

## Publishing to GitHub Pages

1. Push this branch/repo to `mahedi-H-hasan/mahedi-H-hasan.github.io` on
   the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (the included workflow handles the rest).
3. Every push to `main` runs `.github/workflows/deploy-pages.yml`, which
   builds nothing (there's nothing to build) and deploys the repo root
   straight to Pages.

### Deploying a different branch manually

Sometimes you want to test a change on a topic branch and deploy it on
demand, without merging to `main` first. The same workflow supports this
via its `workflow_dispatch` trigger — see **`publishing.html`** on the live
site for the full walkthrough (branching, local preview caveats, and the
exact Actions steps). In short:

1. Branch from an up-to-date `main` so the branch has the workflow file.
2. Push it, then in GitHub go to **Actions → Deploy to GitHub Pages → Run
   workflow**, pick the branch under **Use workflow from**, and type that
   same branch name into the confirmation field the workflow asks for.
3. This deploys straight to the live public Pages URL — it is **not** a
   private preview, and it can overwrite whatever `main` last published.
4. To restore production, run the workflow again with **Use workflow
   from** set to `main` (confirmation: `main`).

No change to **Settings → Pages** is needed for any of this.

## Customization points

Placeholder text uses a visibly distinct dashed/italic style
(`.placeholder-copy`, `.tag-placeholder`) so it's easy to spot on the live
page. Search for `CUSTOMIZE` comments in each file for exact spots. By page:

- **`index.html` (Home)** — hero role line, "Base / Focus / Grad" fact list,
  and the welcome paragraph. Keep this page short; it should summarize and
  link out, not repeat every other page.
- **`about.html`** — biography paragraphs, research interest chips, and the
  awards/education record lists. Add new rows to `.record-list` as your CV
  grows.
- **`teaching.html`** — the `Courses Taught` grid, course-development duties,
  and the `Undergraduate Thesis Supervision` list. Each thesis entry has a
  `.status-tag` (`is-published` or `is-progress`) — update the class and
  text together as projects move from in-progress to published.
- **`publications.html`** — grouped as *Journal Articles*, *Peer-Reviewed
  Conference Papers*, and *Book Chapters* using an ordered list with a
  running `[n]` counter across all three groups. When you add or reorder
  entries, the two later groups use `start="N"` plus an inline
  `style="counter-reset: pub N-1;"` on the `<ol>` to continue the shared
  numbering — update both attributes together if the counts change.
- **`projects.html`** — the four cards pull real repo names/links from
  `github.com/mahedi-H-hasan`, but GitHub has no `description` set on any
  of them, so each card has an editable one-line placeholder and, for
  three of the four, a placeholder tech-stack tag. Replace both with real
  text as repos are documented.
- **`skills.html`** — grouped skill tags (Programming & Databases, AI/ML,
  Web Technologies, Tools & Authoring). Add or remove `<li>` tags per
  group as your stack changes.
- **`cv.html`** — the concise, printable academic CV. It is assembled from
  the confirmed information on the site; update it when your role,
  education, publications, awards, or skills change. The button opens the
  browser's print dialog, where you can save a PDF.
- **`contact.html`** — email, phone, GitHub, LinkedIn, ORCID, Scholar,
  website, and location are all sourced from the author's CV/public
  profile. Update `.contact-list` rows directly.
- **`publishing.html`** — walkthrough for branching, local preview, and
  manually deploying a non-`main` branch through the Pages workflow. Update
  it if the workflow's manual-dispatch steps or inputs change.
- **Avatar** — currently references the live GitHub avatar URL
  (`avatars.githubusercontent.com/u/186854641`). Replace with a local file
  in `assets/img/` if you'd rather not depend on that URL.
- **Navigation** — every page repeats the same `<nav class="primary-nav">`
  markup with a `data-page` attribute per link. If you add a new page,
  add a matching link (with `data-page`) to the nav in **all nine**
  existing files, and set `<body data-page="...">` on the new page so
  `assets/js/main.js` highlights it as current.

## Design system

See `PRODUCT.md` for the durable product record. The visual world (warm
paper background, navy/bronze accents, Source Serif 4 headings, faculty
research-page structure) is documented inline via the direction-contract
comment at the top of `index.html`.

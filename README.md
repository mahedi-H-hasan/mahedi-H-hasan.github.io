# mahedi-H-hasan.github.io

Personal portfolio for **Mahedi Hasan**, published via GitHub Pages at
[mahedi-H-hasan.github.io](https://mahedi-H-hasan.github.io).

Static site: plain HTML, CSS, and vanilla JS — no build step, framework, or
dependencies. Fonts (Bricolage Grotesque, IBM Plex Mono) load from Google
Fonts; everything else is self-contained.

## Structure

```
index.html              Single-page site (hero, about, projects, skills, contact)
assets/css/styles.css   All styles (design tokens as CSS custom properties at the top)
assets/js/main.js       Mobile nav toggle, scroll-reveal, footer year
assets/img/favicon.svg  Site icon
.github/workflows/deploy-pages.yml   GitHub Actions deploy to GitHub Pages
PRODUCT.md              Durable product context (Impeccable design skill)
```

## Editing locally

No build tools needed. Either open `index.html` directly in a browser, or
serve it so relative paths behave exactly like production:

```powershell
# any static server works, e.g.
npx serve .
# or
python -m http.server 8000
```

## Publishing to GitHub Pages

1. Push this branch/repo to `mahedi-H-hasan/mahedi-H-hasan.github.io` on
   the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions** (the included workflow handles the rest).
3. Every push to `main` runs `.github/workflows/deploy-pages.yml`, which
   builds nothing (there's nothing to build) and deploys the repo root
   straight to Pages.

## Customization points

Everything you should personalize is marked in `index.html` with an
`<!-- CUSTOMIZE: ... -->` comment right above it, and placeholder text uses
a visibly distinct dashed/italic style (`.placeholder-copy`,
`.chip-placeholder`, `.tag-placeholder`) so it's easy to spot on the live
page too. Search the file for `CUSTOMIZE` to find every spot. Notably:

- **Hero role / positioning** — currently set to "Software Developer &
  Computer Science Educator" as a labeled assumption (the GitHub profile
  bio says "Lecturer at IUBAT... Graduated from CUET in CSE"; the owner
  was unavailable to confirm framing when this was built). Edit the
  `.hero-role` line and the About paragraph to match how you want to be
  positioned.
- **About** — one placeholder paragraph invites your own voice (teaching
  philosophy, interests, what you like building).
- **Projects** — the four cards pull real repo names/links from
  `github.com/mahedi-H-hasan`, but GitHub has no `description` set on any
  of them, so each card has an editable one-line placeholder and, for three
  of the four, a placeholder tech-stack tag. Replace both with real text.
- **Skills** — real confirmed skills (TypeScript, JavaScript, CSS, Next.js)
  are inferred from the `EDUBD` repo's language stats. Dashed
  "Add language / framework / database / tool" chips are placeholders —
  replace or remove them.
- **Contact** — email, GitHub, website, and location are all pulled from
  the public GitHub profile. No LinkedIn/X was found; add a row to
  `.sign-up-sheet` in `index.html` once you have a URL.
- **Avatar** — currently references the live GitHub avatar URL
  (`avatars.githubusercontent.com/u/186854641`). Replace with a local file
  in `assets/img/` if you'd rather not depend on that URL.

## Design system

See `PRODUCT.md` for the durable product record. The visual world ("Living
Lecture" — chalkboard green, graph-paper texture, hand-drawn chalk
underline, index-card project tiles, Bricolage Grotesque + IBM Plex Mono)
is documented inline via the direction-contract comment at the top of
`index.html`.

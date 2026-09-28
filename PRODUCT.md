# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary visitors are recruiters, collaborators, students, and peers who land on `https://mahedi-H-hasan.github.io` after finding the GitHub profile, a shared link, or a search result, and want to quickly answer: "who is this person, what can they build/teach, and how do I reach them?"

## Product Purpose
A single-page personal portfolio for GitHub user `mahedi-H-hasan`, deployed via GitHub Pages, that introduces Mahedi Hasan, showcases selected projects, lists skills/technologies, and provides contact/social links. Success = a visitor can, within seconds, identify who he is, see representative work, and find a way to contact him.

## Positioning
**[ASSUMPTION — user unavailable to confirm, label and revisit]**: Positioned as "Software Developer & Computer Science Educator" — a hybrid framing that stays truthful to the public GitHub bio ("Lecturer at IUBAT... Graduated from CUET in CSE") while remaining a credible technical portfolio. This can be changed by editing the hero tagline/about copy; see customization notes in README.

## Operating Context
- Built and hosted as a static site on GitHub Pages from the `mahedi-H-hasan/mahedi-H-hasan.github.io` repo (user/organization site — must serve from the default branch root).
- No build step, bundler, framework, or backend — plain HTML/CSS/vanilla JS only, per explicit repository constraint.
- Content is edited directly in source files by the owner; no CMS.

## Capabilities and Constraints
- Must not invent biography, work history, education, or contact details beyond what is publicly verifiable on GitHub.
- Confirmed public facts (from `gh api users/mahedi-H-hasan` on the GitHub REST API, fetched during this session):
  - Name: MAHEDI HASAN
  - GitHub: https://github.com/mahedi-H-hasan
  - Bio: "Lecturer at International University of Business Agriculture Business Agriculture and Technology. Graduated from CUET in CSE."
  - Company/affiliation: IUBAT — International University of Business Agriculture and Technology
  - Location: Uttara #10, Dhaka-1230
  - Website/blog: https://cse.iubat.edu/mahedi-hasan/
  - Public email on profile: mahedi.cse@iubat.edu
  - Non-fork public repos (no repo `description` field set on any of them): `HFD-FULL`, `EDUBD` (Next.js/TypeScript), `RMEDU`, `Product-Re-selling-and-Donation-Management-System`.
- Undecided / left as explicit placeholders (owner must edit): project descriptions (GitHub had none), skills/technology list (inferred only where language data exists — TypeScript/JS/CSS for EDUBD; otherwise placeholder), resume/CV link, additional social links (LinkedIn, X/Twitter — none found on profile), profile photo/avatar beyond the public GitHub avatar URL.
- Accessibility and performance are explicit requirements (responsive, accessible, fast); no analytics/tracking scripts added.

## Brand Commitments
No existing visual identity, logo, or design system — this is a greenfield build (new-work applies). Name "Mahedi Hasan" and the `mahedi-H-hasan` GitHub handle are the only confirmed brand facts.

## Evidence on Hand
- GitHub public profile JSON and public repo list/languages (fetched via `gh api` this session) — see Capabilities section above for the exact facts extracted.
- No case studies, testimonials, résumé, press, or additional imagery were found or provided. Future work must not fabricate these.

## Product Principles
1. Truthful-by-default: every biographical/contact claim traces to the public GitHub profile or is an obviously-labeled placeholder.
2. Editable-first: every placeholder is easy to find and replace (clear comments/data points), so the non-technical owner can personalize without touching layout/logic.
3. Zero-dependency shipping: plain HTML/CSS/JS, deployable as-is via GitHub Pages with no build pipeline.
4. Fast and accessible over flashy: semantic HTML, keyboard/screen-reader support, and performance budget take priority over heavy effects.

## Accessibility & Inclusion
Must support keyboard navigation, visible focus states, sufficient color contrast (WCAG AA), reduced-motion preference, and semantic landmarks/headings — explicitly requested by the owner brief.

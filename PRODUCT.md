# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary visitors are recruiters, collaborators, students, and peers who land on `https://mahedi-H-hasan.github.io` after finding the GitHub profile, a shared link, or a search result, and want to quickly answer: "who is this person, what can they build/teach, and how do I reach them?"

## Product Purpose
A multi-page academic homepage for Mahedi Hasan — Lecturer, Dept. of Computer Science & Engineering, IUBAT — deployed via GitHub Pages, structured like a faculty research page (Home, About, Teaching, Publications, Projects, Skills, Contact). Success = a visitor (recruiter, collaborator, student, or peer) can, within seconds, identify who he is and what he researches/teaches, then drill into the specific section they care about (courses, publications, or software projects) and find a way to contact him.

## Positioning
Positioned as "Lecturer & Computer Vision / AI Researcher" — confirmed by the author's own CV (provided directly by the repository owner) and consistent with the public GitHub bio ("Lecturer at IUBAT... Graduated from CUET in CSE"). This is no longer a labeled assumption: the owner supplied CV content covering biography, research interests, teaching role, thesis supervision, and publications, which are treated as ground truth throughout the site.

## Operating Context
- Built and hosted as a static site on GitHub Pages from the `mahedi-H-hasan/mahedi-H-hasan.github.io` repo (user/organization site — must serve from the default branch root).
- No build step, bundler, framework, or backend — plain HTML/CSS/vanilla JS only, per explicit repository constraint.
- Content is edited directly in source files by the owner; no CMS.

## Capabilities and Constraints
- Must not invent biography, work history, education, or contact details beyond what is publicly verifiable on GitHub or supplied directly by the owner's CV.
- Confirmed facts (from `gh api users/mahedi-H-hasan` on the GitHub REST API and the author-provided CV, both fetched/confirmed during earlier sessions):
  - Name: Mahedi Hasan
  - GitHub: https://github.com/mahedi-H-hasan
  - Role: Lecturer, Dept. of Computer Science & Engineering, IUBAT (International University of Business Agriculture and Technology), July 2023–present
  - Education: B.Sc. in Computer Science & Engineering, CUET (Chittagong University of Engineering and Technology), 2018–2023, CGPA 3.85/4.00, ranked 5th of 120
  - Research interests: human-centric computer vision, spatial-temporal video analytics, multi-modal scene understanding, vision-language models, human-in-the-loop machine learning, medical image analysis & biometrics, intelligent transportation systems
  - Publications, teaching, and thesis-supervision record: as itemized in `publications.html` and `teaching.html`, sourced from the author-provided CV (confirmed 2026-09-28)
  - Location: Uttara, Dhaka-1230, Bangladesh
  - Website/blog: https://cse.iubat.edu/mahedi-hasan/
  - Public email: mahedi.cse@iubat.edu
  - Non-fork public repos (no repo `description` field set on any of them): `HFD-FULL`, `EDUBD` (Next.js/TypeScript), `RMEDU`, `Product-Re-selling-and-Donation-Management-System`.
- Undecided / left as explicit placeholders (owner must edit): project descriptions (GitHub had none), tech-stack tags for three of the four project cards, resume/CV download link.
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

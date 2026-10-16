# nidhiprajapati.dev

A developer portfolio built as *The Dispatch* — editorial × terminal, with
interactive sections that demonstrate observable, evaluated AI (the
through-line of the work).

## Stack

- **Next.js 15** (App Router, React 19) · TypeScript · Tailwind CSS
- **motion** for the few animations that have one
- **next/font** → Fraunces (display) + JetBrains Mono (body/mono)
- Static-rendered pages + a dynamic ISR-friendly route for case studies

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build & verify

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
npm run build       # production build
npm start           # serve the build
```

## Editing content (no component changes needed)

Everything lives in `/content`:

| File | What it holds |
|---|---|
| `site.ts` | Name, role, status badge, tagline, links, education, header metrics ticker |
| `projects.ts` | Project cards + the "more work" list |
| `experience.ts` | Leadership, research, certifications, skills |
| `hallucination.ts` | "Spot the hallucination" paragraphs (mark `false: true` on planted sentences, add `truth:` for the reveal) |
| `terminal.ts` | Terminal commands + their output |
| `case-studies.ts` | Full RFC-style case studies: problem, constraints, architecture, decisions, results |

### Add a project

1. Add an entry to the `projects` array in `content/projects.ts`.
2. If you want a case study page: set `caseStudy: true` and add a matching
   entry (by `slug`) to `content/case-studies.ts`.

### Swap in your real resume

Drop `resume.pdf` into `/public/`.

### Add a new paragraph to the hallucination game

Append to `paragraphs` in `content/hallucination.ts`. Each sentence is an
object; add `false: true` and a `truth:` string on the fakes.

## Design tokens

Colors, fonts and spacing live in two places and should move together:

- CSS variables in `app/globals.css` (`--paper`, `--ink`, `--dispatch`, …)
- Tailwind theme in `tailwind.config.ts`

Dark mode is class-based (`.dark` on `<html>`) and remembers choice via
`localStorage`.

## Accessibility & perf

- `prefers-reduced-motion` kills non-essential animations.
- All interactive sections are keyboard-navigable; focus ring is visible.
- The terminal, game, and pipeline all have textual content that works
  with the animations off.
- Fonts loaded through `next/font` → no CLS, no FOIT.
- No analytics, no third-party scripts.

## Deploy to Vercel (nidhiprajapati.dev)

1. Push this repo to GitHub.
2. `vercel.com → Add New → Project → import the repo`. No build config
   needed; Next.js is auto-detected.
3. In the project's **Domains** tab, add `nidhiprajapati.dev` and
   `www.nidhiprajapati.dev`.
4. At your DNS registrar, add the records Vercel shows you:
   - `A` record on apex `@` → `76.76.21.21`
   - `CNAME` on `www` → `cname.vercel-dns.com`
5. Wait for the HTTPS certificate (usually under a minute).
6. In **Settings → Environment** there's nothing to set — the site has no
   secrets.

To preview a change without deploying main: push to a branch, Vercel
builds a preview URL automatically.

## Content voice

Confident, warm, slightly playful. No "I'm passionate about synergising" —
show the number, name the trade-off, keep sentences short. The site itself
is the pitch.

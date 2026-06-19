# Satire SaaS — project guide for Claude

This repo builds funny **fake-SaaS landing pages** — convincingly designed parody products, Gen-Z register. The design plays it straight; the copy carries the joke. If a page looks like a joke, that's a bug.

## Stack
- Next.js (App Router) + TypeScript + Tailwind
- Deployed on Vercel
- Static-first: no backend unless explicitly requested (fake interactivity client-side)

## Rules
- Components stay under ~150 lines. One section per file.
- Never add a dependency without saying why in the PR description.
- Use `next/font` for type; never default to Inter for both display and body.
- Derive colors/type from the fake product's pretend category (see the satire-landing skill). Avoid the AI-default looks: cream+serif+terracotta, near-black+acid-green, broadsheet hairlines.
- Conventional commits (`feat:`, `fix:`, `chore:`) — they drive semantic versioning.
- Before declaring a task done, ensure `npm run build` passes with zero TS errors.
- Satire punches at startup/tech culture, never at a vulnerable group. Hard rule.

## How this repo is organized
- `.claude/skills/satire-landing/` — the design + comedy discipline. Follow it when building any page.
- `.claude/agents/` — `frontend-qa` (read-only review) and `deploy-checker` (build gate).
- `.claude/commands/` — `/scaffold-satire` and `/ship-it` (also usable as plain-English tasks in web sessions).
- `scripts/install_pkgs.sh` — installs deps in cloud sessions (wired via SessionStart hook).

## Working style in cloud sessions
When given a vague task, restate the comedic premise you're working toward in one line before building. Keep each PR focused on one site or one change. Put the session link in the PR body so the run is traceable.

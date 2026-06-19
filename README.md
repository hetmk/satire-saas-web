# satire-saas-web

A starter for building funny **fake-SaaS landing pages** with Claude Code on the web.

The design plays it straight; the copy carries the joke. Targets Next.js + Tailwind, deploys to Vercel.

## How to use (Claude Code on the web)

1. Push this repo to GitHub.
2. Open https://claude.ai/code, connect your GitHub account, and select this repo.
3. Give Claude a task, e.g.:
   > Scaffold a satire SaaS landing page for a fake product: an AI that reads your group chat and tells you who's the problem. Make it look like a real Series A startup.
4. Claude works in an isolated VM and opens a pull request. Review the diff, comment inline, merge.

## What's baked in

- `CLAUDE.md` — project rules and voice, auto-loaded every session.
- `.claude/skills/satire-landing/` — the design + comedy discipline.
- `.claude/agents/` — frontend-qa (review) and deploy-checker (build gate).
- `.claude/commands/` — /scaffold-satire and /ship-it.
- `.claude/settings.json` — SessionStart hook runs `npm install` in cloud sessions; Stop hook blocks finishing on a broken build.

## Deploy

Connect the repo to Vercel (vercel.com → New Project → import from GitHub). Every merge to main auto-deploys to a public URL. Attach a custom domain later in Vercel → Settings → Domains.

## License

MIT

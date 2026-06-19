# satire-saas-web

A starter for building funny **fake-SaaS landing pages** with Claude Code on the web.

The design plays it straight; the copy carries the joke. Targets Next.js + Tailwind, deploys to Vercel.

## Current build — Tithe

**The fake product:** Tithe, a wellness app that charges you $0.50 every time you open Instagram. "Mindful spending for your attention."

- **Real human truth it exaggerates:** screen-time limits never stick, so we try to guilt ourselves out of our habits — and commitment-device / "pay-when-you-fail" culture is genuinely a thing.
- **The villain it pretends to fight:** *free* apps. The pitch is that scrolling costs you nothing, so you don't value it — make it cost money and you'll finally be "mindful."
- **Register:** lowercase, suspiciously calm boutique-wellness earnestness. Punches at startup/wellness-tech culture (commitment apps, surge pricing, "the science*"), never at people.
- **Signature element:** a serene live "mindfulness ledger" that ticks up the dollars the collective is "mindfully investing" in its attention right now.
- **Look:** soft pastel — cool lilac mist, deep-plum ink, sage (calming *and* money-green), lavender, blush. Fraunces (display) + Nunito (body). Deliberately not the cream+serif+terracotta default.

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

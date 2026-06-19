---
description: Scaffold a new Gen-Z satire SaaS landing page (Next.js + Tailwind + Vercel-ready).
---

# /scaffold-satire

Create a complete satire SaaS landing page project.

## What to do

1. **Get the premise.** If the user gave a product idea in their message, use it. If not, ask for ONE thing only: "What's the fake product?" — then propose 3 sharp comedic premises and let them pick.

2. **Activate the `satire-landing` skill** and work through its steps: lock the premise, write the design plan (palette + type + signature element), THEN build.

3. **Scaffold the Next.js app** in the current directory:
   - `npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"` (skip if a Next.js app already exists)
   - Build the section components per the skill.
   - Write the comedic premise into `README.md` so it persists across sessions.

4. **Verify before finishing:** run `npm run build`. The build-gate hook will block completion if it fails — that's intended.

5. **Tell the user the deploy command:** `/ship-it` (or `vercel --prod`).

Keep the design deadpan and real. The copy carries the joke. Do NOT make the design wacky.

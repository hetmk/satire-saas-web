---
description: Deploy the current satire SaaS site to Vercel and return the public URL.
---

# /ship-it

Deploy the current project to Vercel as a public site.

## What to do

1. **Pre-flight:** run `npm run build`. If it fails, stop and fix — never deploy a broken build.

2. **Run the frontend-qa subagent** to verify the page renders and the joke is visible above the fold. Address any PASS/FAIL feedback it returns.

3. **Deploy:**
   - If Vercel CLI is installed and the user is logged in: `vercel --prod`
   - If not, instruct: `npm i -g vercel && vercel login`, then re-run.
   - First deploy will prompt for project linking — let the user answer or pass sensible defaults.

4. **Report the public URL** plainly, e.g. `https://your-project.vercel.app`. Remind them they can attach a custom domain in the Vercel dashboard (Settings → Domains) whenever a concept gets traction.

5. Suggest a conventional commit (`feat: ship <product-name> landing page`) so the marketplace auto-versioning stays clean.

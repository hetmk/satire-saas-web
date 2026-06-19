---
name: satire-landing
description: Use when building, scaffolding, or designing a fake/satire SaaS landing page — especially Gen-Z-targeted parody products. Covers the comedic premise, the brand voice, the visual design discipline, and the Next.js page structure. Trigger on "satire SaaS", "fake product page", "parody landing page", "joke startup site".
---

# Satire SaaS Landing Page

The job: make a landing page so convincingly designed that the joke lands *because* it looks legit. Bad satire looks like a joke. Good satire looks like a $40M Series A and only reveals itself in the copy.

## Step 1 — Lock the comedic premise BEFORE designing

A satire SaaS needs exactly one absurd-but-plausible core idea, stated as if it solves a real pain. Pin these before any code:

- **The fake product**: one sentence, sounds like a real pitch. ("An AI that reads your group chat and tells you who's the problem.")
- **The real human truth it exaggerates**: the joke only works if it's true-adjacent.
- **The villain it pretends to fight**: every SaaS positions against an enemy (spreadsheets, meetings, "the old way").
- **The Gen-Z register**: lowercase confidence, ironic earnestness, "it's giving", "real ones know", "literally life-changing (it's not)". Punch at startup culture, not at people.

Write the premise down at the top of the project's README so future sessions stay on-voice.

## Step 2 — The copy is the comedy (design plays it straight)

The single biggest failure mode is making the *design* wacky. Don't. The design is deadpan; the words carry the joke.

- **Hero headline**: a real-sounding value prop with one word that's slightly too honest. ("Stop overthinking. Start overpaying.")
- **Subhead**: plausible benefit, undercut on the last beat.
- **Social proof**: fake testimonials from fake titles that are too specific. ("'I've never felt more seen by software I don't understand.' — Head of Vibes, a company")
- **Feature trio**: each feature is a real SaaS pattern described with suspicious enthusiasm.
- **Pricing**: three tiers where the names ARE the joke (e.g. "Broke / Pretend / Generational Wealth"), but the layout is a totally standard pricing grid.
- **FAQ**: answer questions no one asked, honestly.
- **CTA**: confident, slightly threatening. ("Join the waitlist. Everyone else already did.")

Keep every label functional and in-voice. A button says what happens, just funnier: "Start the spiral" not "Sign up".

## Step 3 — Visual design (follow frontend-design discipline)

This page must NOT read as AI-generated. Avoid the three default looks (cream+serif+terracotta; near-black+acid-green; broadsheet hairlines). Instead derive the palette and type from the *fake product's pretend category*:

- A fake fintech → cold, competent, blue-grey, tight grotesk.
- A fake wellness app → soft, suspiciously calm, rounded, pastel.
- A fake productivity tool → aggressive, high-contrast, mono accents.

Pick a **signature element** the page is remembered by: an absurd live counter ("3,402 problems identified today"), a fake interactive demo, a testimonial that updates on scroll. Spend boldness there; keep everything else disciplined and real.

Quality floor, non-negotiable: responsive to mobile, visible keyboard focus, `prefers-reduced-motion` respected, real semantic HTML.

## Step 4 — Build it on the project's stack

This plugin targets **Next.js (App Router) + Tailwind, deployed on Vercel**. Structure:

- `app/page.tsx` — the landing page, composed of section components.
- `components/` — Hero, SocialProof, Features, Pricing, FAQ, CTA, Footer. One section per file, each under ~150 lines.
- `app/globals.css` — design tokens as CSS variables (colors, type scale) derived from the plan in Step 3.
- Use `next/font` for the display + body pairing. Never default to Inter for both.
- No backend unless explicitly requested — fake the interactivity client-side.

## Step 5 — Self-critique before declaring done

Run the checklist:
1. Does it look like a real company at first glance? (If it looks like a joke → fix the design, not the copy.)
2. Does the joke land within 5 seconds of reading the hero?
3. Is the punch aimed at startup/tech culture, never at a vulnerable group?
4. Does `next build` pass with zero TS errors?
5. Did you remove one accessory? (Cut the weakest gag.)

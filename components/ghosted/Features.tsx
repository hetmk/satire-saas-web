const features = [
  {
    icon: "🌫️",
    title: "Graceful fade engine",
    body: "We don't block. Blocking is a statement. We stretch your reply times — 2 hours, then 2 days, then 2 weeks — until the conversation dies of natural causes. Nobody can prove anything.",
  },
  {
    icon: "🤖",
    title: "Plausible auto-excuses",
    body: "If they push, Ghosted sends one (1) warm, non-committal reply per quarter: 'omg sorry just saw this — let's def catch up soon!' It buys you another six months. It always works. It's a little scary.",
  },
  {
    icon: "📊",
    title: "Relationship pipeline",
    body: "A full CRM funnel for human connection: Active → Cooling → Fading → Ghosted → Forgotten. Drag a friend between stages. Watch your social obligations shrink into a clean, manageable zero.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-gh-display font-bold uppercase tracking-[0.16em] text-gh-accent">
          how it works
        </p>
        <h2 className="mt-3 font-gh-display text-4xl font-extrabold tracking-tight text-gh-ink sm:text-5xl">
          A sales funnel, but the product is your absence.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-gh-line bg-gh-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-gh-display text-xl font-extrabold text-gh-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gh-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

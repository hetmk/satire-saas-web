const features = [
  {
    tag: "01",
    title: "Pre-cognition engine",
    body: "Feed it your idea. Our model — trained on every TechCrunch obituary ever written — returns your cause of death, burn rate, and the exact month morale collapses. Accuracy is not the point. Inevitability is.",
  },
  {
    tag: "02",
    title: "The Regret Dashboard",
    body: "Real-time charts of decisions you haven't made yet. Watch your runway deplete, your co-founder relationship degrade, and your TAM shrink to its true size: your immediate family.",
  },
  {
    tag: "03",
    title: "Auto-generated wind-down post",
    body: "A heartfelt LinkedIn announcement, drafted before launch. 'It's been an incredible journey.' Includes a humble-brag about 'what we learned' and a soft pivot to advising.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-h-mono text-xs uppercase tracking-[0.18em] text-h-accent">
          the method
        </p>
        <h2 className="mt-3 font-h-display text-4xl font-semibold tracking-tight text-h-ink sm:text-5xl">
          Hindsight, delivered in foresight.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.tag}
            className="rounded-2xl border border-h-line bg-h-surface p-7"
          >
            <span className="font-h-mono text-sm text-h-accent">{f.tag}</span>
            <h3 className="mt-4 font-h-display text-xl font-semibold text-h-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-h-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

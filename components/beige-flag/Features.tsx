const features = [
  {
    icon: "🔬",
    title: "Subtext extraction",
    body: "We analyze tone, punctuation, and the devastating absence of it. A period at the end of 'fine.' is processed as a full forensic event. We know what 'k' means. We've always known.",
  },
  {
    icon: "🏳️",
    title: "The beige verdict",
    body: "Most things aren't red or green — they're beige. Inoffensive. Lukewarm. A 'down for whatever' personality wearing a person. We're the only app brave enough to name it.",
  },
  {
    icon: "📁",
    title: "Case files",
    body: "Save every diagnosis to a timeline. Watch the pattern emerge. Export to your group chat as evidence. Closure, but make it a shared spreadsheet.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bf-beige">
          how it works
        </p>
        <h2 className="mt-3 font-bf-display text-4xl font-bold tracking-tight text-bf-ink sm:text-5xl">
          The clarity they couldn&apos;t give you, automated.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-[2rem] border border-bf-line bg-bf-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-bf-display text-xl font-bold text-bf-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bf-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

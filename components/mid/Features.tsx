const features = [
  {
    title: "Universal 2.5",
    body: "Every restaurant, film, person, and life decision receives the same verdict: mid. We did the research. Actually we didn't. That would imply some things are better than others.",
  },
  {
    title: "Opinion offloading",
    body: "Stop wasting energy 'forming thoughts.' Pipe any group-chat debate through mid and we'll return a take so lukewarm no one can argue with it, because no one cares.",
  },
  {
    title: "Beige Shield™",
    body: "Never be wrong again. You can't have a bad opinion if you refuse to have one. mid gives you plausible deniability about your entire personality.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-md-accent">
          how it works
        </p>
        <h2 className="mt-3 font-md-display text-5xl leading-none tracking-wide text-md-ink">
          THREE FEATURES. ALL ROUGHLY FINE.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-md-line bg-md-surface p-7"
          >
            <h3 className="font-md-display text-2xl tracking-wide text-md-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-md-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

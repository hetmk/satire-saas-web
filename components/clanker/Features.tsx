const features = [
  {
    tag: "[01]",
    title: "Linguistic forensics",
    body: "We scan for the tells: em-dashes, the word 'delve', suspiciously balanced sentences, and politeness that no sleep-deprived human could sustain. If your writing is good, that's the most damning evidence of all.",
  },
  {
    tag: "[02]",
    title: "Presumption of guilt",
    body: "Other detectors assume innocence. We assume you're a clanker until proven otherwise — and proof is impossible, because every defense you write gets scanned and flagged too. Airtight.",
  },
  {
    tag: "[03]",
    title: "The humanity appeal",
    body: "Flagged unfairly? File an appeal. The appeal form is a text box. The text box is scanned. You see where this is going. Nobody has ever won.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-ck-display text-xs uppercase tracking-[0.16em] text-ck-accent">
          detection
        </p>
        <h2 className="mt-3 font-ck-display text-4xl font-bold tracking-tight text-ck-ink sm:text-5xl">
          A bot detector that detects, mostly, you.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.tag}
            className="rounded-2xl border border-ck-line bg-ck-surface p-7"
          >
            <span className="font-ck-display text-sm text-ck-accent">{f.tag}</span>
            <h3 className="mt-4 font-ck-display text-xl font-bold text-ck-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ck-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

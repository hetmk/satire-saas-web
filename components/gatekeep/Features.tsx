const features = [
  {
    title: "The sealed vault",
    body: "Save the restaurant, the playlist, the obscure label. Everything you add is marked SEALED and 'shared with 0.' Your taste, encrypted against the people who'd dilute it by enjoying it too.",
  },
  {
    title: "Leak detection",
    body: "We monitor your friends' feeds. If one of your sealed finds shows up on their story, we send an alert and a moment of silence. The blast radius of a single overshare is, frankly, staggering.",
  },
  {
    title: "Exclusivity score",
    body: "The more you hoard and the less you share, the higher your taste exclusivity climbs. Hit 99% and you become functionally insufferable, which in our research correlates strongly with being perceived as cool.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-gk-display font-bold uppercase tracking-[0.18em] text-gk-accent">
          the method
        </p>
        <h2 className="mt-3 font-gk-display text-4xl font-extrabold tracking-tight text-gk-ink sm:text-5xl">
          Curation is just generosity you talked yourself out of.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-gk-line bg-gk-surface p-7"
          >
            <h3 className="font-gk-display text-xl font-extrabold text-gk-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gk-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

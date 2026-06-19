const features = [
  {
    icon: "🎭",
    title: "Gesture library",
    body: "Hundreds of pre-approved reactions, motion-captured from the most successful NPCs on earth. 'Ice cream so good.' 'Gang gang.' You don't write material. You don't have material. That's the job.",
  },
  {
    icon: "🎁",
    title: "Gift-triggered cues",
    body: "When a viewer sends a gift, your earpiece tells you which gesture to perform. You are not a streamer. You are a vending machine with a face, and business is booming.",
  },
  {
    icon: "💤",
    title: "Truly passive",
    body: "Other side hustles want your 'authentic voice.' We want the opposite. The less you is involved, the better you perform. Some of our top earners are, functionally, asleep.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-np-display text-xs font-bold uppercase tracking-[0.16em] text-np-cyan">
          how it works
        </p>
        <h2 className="mt-3 font-np-display text-4xl font-bold tracking-tight text-np-ink sm:text-5xl">
          A career path for people tired of having a personality.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-np-line bg-np-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-np-display text-xl font-bold text-np-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-np-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

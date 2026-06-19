const features = [
  {
    icon: "📡",
    title: "Passive aura tracking",
    body: "Always on. We monitor your micro-cringe in the background — the double-text, the laugh at your own joke, the 'per my last email.' Each one logged, scored, and quietly held against you.",
  },
  {
    icon: "🏆",
    title: "Public leaderboards",
    body: "See where you rank against your friends, your ex, and that one coworker. Aura is zero-sum here. Their loss is, spiritually and numerically, your gain.",
  },
  {
    icon: "🌑",
    title: "Aura debt & recovery",
    body: "Go negative and enter an aura arc. We design a redemption questline — leave one party early, win one argument by saying nothing. Climb back. Become unbothered again.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-au-accent">
          the system
        </p>
        <h2 className="mt-3 font-au-display text-4xl font-bold tracking-tight text-au-ink sm:text-5xl">
          Your vibe, now with a number and a leaderboard.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-[2rem] border border-au-line bg-au-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-au-display text-xl font-bold text-au-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-au-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

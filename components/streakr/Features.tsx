const features = [
  {
    icon: "🔥",
    title: "Streak everything",
    body: "Water, steps, gratitude, skincare, 'no doomscrolling', breathing. If it can be done daily, it can be a streak. If it can be a streak, it can be lost. We make sure you feel that second part.",
  },
  {
    icon: "🧊",
    title: "Catastrophic resets",
    body: "Miss one day and your 300-day streak doesn't pause — it dies, on screen, with a sad sound we designed in a lab. Loss aversion is the most powerful force in behavioral science. We weaponized it for flossing.",
  },
  {
    icon: "❄️",
    title: "Streak freezes (for sale)",
    body: "Terrified of losing it on vacation? Buy a streak freeze. Then another. Soon you're paying monthly to protect a number that measures nothing. This is the business. It's a good business.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-st-display font-bold uppercase tracking-[0.16em] text-st-flame">
          how it works
        </p>
        <h2 className="mt-3 font-st-display text-4xl font-extrabold tracking-tight text-st-ink sm:text-5xl">
          We don&apos;t reward consistency. We punish stopping.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-2xl border border-st-line bg-st-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-st-display text-xl font-extrabold text-st-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-st-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

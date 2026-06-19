const features = [
  {
    icon: "🗺️",
    title: "Quest-ify anything",
    body: "Laundry becomes The Trial of a Thousand Socks. A dentist appointment becomes a raid. We don't make the task easier — we just lie to your brain in a format it respects.",
  },
  {
    icon: "🎖️",
    title: "XP, loot & fake ranks",
    body: "Every completed chore drops loot and XP. None of it is real. All of it works. Hit Level 10 and we award a title you can put nowhere: 'Person Who Folded Things'.",
  },
  {
    icon: "🛡️",
    title: "Co-op party mode",
    body: "Add your roommates as party members. The dishes are now a shared world boss. Watch who's secretly AFK while everyone else farms the kitchen.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-sq-pixel text-[10px] uppercase text-sq-accent">
          the mechanics
        </p>
        <h2 className="mt-3 font-sq-display text-4xl font-extrabold tracking-tight text-sq-ink sm:text-5xl">
          Same chores. Now with a reward loop.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-3xl border border-sq-line bg-sq-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-sq-display text-xl font-bold text-sq-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-sq-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

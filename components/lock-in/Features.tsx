const features = [
  {
    title: "Screen-share or it didn't happen",
    body: "We mirror your screen to the session room in real time. The moment a distraction tab appears, the chat sees it. There is no private slacking. There is only witnessed slacking.",
  },
  {
    title: "Strangers, not friends",
    body: "Friends are too kind. Our viewers are anonymous, unforgiving, and weirdly invested in your deliverables. They will not let you 'just check one thing.'",
  },
  {
    title: "Shame streak & leaderboard",
    body: "Every distraction is logged and ranked. Top of the leaderboard: people locked in for hours. Bottom: you, the day you 'researched' a vacation for 40 minutes.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="font-li-mono text-xs uppercase tracking-[0.16em] text-li-focus">
          how it works
        </p>
        <h2 className="mt-3 font-li-display text-4xl font-bold tracking-tight text-li-ink sm:text-5xl">
          Productivity through the fear of being perceived.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f, i) => (
          <article
            key={f.title}
            className="rounded-xl border border-li-line bg-li-surface p-7"
          >
            <span className="font-li-mono text-sm text-li-focus">0{i + 1}</span>
            <h3 className="mt-4 font-li-display text-xl font-bold text-li-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-li-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

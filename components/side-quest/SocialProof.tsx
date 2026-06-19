const testimonials = [
  {
    quote:
      "I cleaned my whole apartment for a Cloak of Not Today that does not exist. I am not proud. The apartment is clean.",
    name: "jules, 24",
    title: "Level 17 · Folder of Things",
  },
  {
    quote:
      "added my roommate to my party. he hit AFK on the kitchen for 3 days. the data does not lie. we had a talk.",
    name: "marcus, 22",
    title: "Guild Leader (involuntary)",
  },
  {
    quote:
      "the dishes were giving final boss and honestly? defeating them gave more closure than my last relationship.",
    name: "priya, 26",
    title: "S-rank · Kitchen Arc complete",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-sq-line bg-sq-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-sq-pixel text-[10px] uppercase text-sq-accent">
              the party
            </p>
            <h2 className="mt-3 font-sq-display text-4xl font-extrabold tracking-tight text-sq-ink sm:text-5xl">
              real adventurers. fake loot. clean apartments.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-sq-muted">
            Over 2 million chores defeated. Zero of the rewards were real. That
            was never the bug.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-sq-line bg-sq-bg p-7"
            >
              <blockquote className="text-sq-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-sq-line pt-4 text-sm">
                <span className="font-sq-display font-bold text-sq-ink">
                  {t.name}
                </span>
                <span className="block font-sq-pixel text-[10px] text-sq-muted">
                  {t.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

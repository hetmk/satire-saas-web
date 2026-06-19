const features = [
  {
    title: "Zero content, guaranteed",
    body: "No posts. No takes. No one's vacation, engagement, or political awakening. Our feed is independently audited to confirm it contains, and will always contain, nothing.",
  },
  {
    title: "Outrage-free by design",
    body: "Other feeds monetize your nervous system. We bypass it. There is nothing to be angry about, because there is nothing. Your cortisol has never been so bored.",
  },
  {
    title: "Distance, not dopamine",
    body: "We replace the variable-reward slot machine with a simple, honest metric: meters scrolled. Pure motion. The fidget you've been pretending was 'staying informed.'",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ds-accent">
          the product
        </p>
        <h2 className="mt-3 font-ds-display text-4xl font-semibold tracking-tight text-ds-ink sm:text-5xl">
          We removed everything. Somehow it&apos;s the best feed yet.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f, i) => (
          <article
            key={f.title}
            className="rounded-2xl border border-ds-line bg-ds-surface p-7"
          >
            <span className="font-ds-display text-sm text-ds-accent">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-ds-display text-xl font-semibold text-ds-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ds-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

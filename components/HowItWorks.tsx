const steps = [
  {
    n: "01",
    title: "Link your bank, then your soul",
    body: "Tithe connects to your account with read-and-deduct access. We watch for the exact moment the app icon lights up. That moment is now sacred.",
  },
  {
    n: "02",
    title: "Open Instagram, like always",
    body: "We don't block anything. Blocking is for apps that don't respect your autonomy. You're free to scroll. Freedom just has a small, recurring price now.",
  },
  {
    n: "03",
    title: "Feel the charge land",
    body: "A soft chime. A 50-cent debit. A gentle haptic shaped like regret. Over time, your nervous system learns what your willpower never could.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lilac-deep">
          how it works
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Three steps to a calmer, slightly poorer you.
        </h2>
      </div>

      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-3xl border border-line bg-paper p-7"
          >
            <span className="font-display text-5xl font-semibold text-mist-2">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

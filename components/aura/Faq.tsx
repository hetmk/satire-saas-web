const faqs = [
  {
    q: "How do you measure aura?",
    a: "Proprietary vibes. We will not explain the algorithm because we have not built one. The number feels right, which is, frankly, more than most metrics can say.",
  },
  {
    q: "Can I lose aura for things I do in private?",
    a: "Yes. The app knows. The app always knows. Singing the wrong lyric alone in your car is a 400-point deduction and there is no jury.",
  },
  {
    q: "Is the leaderboard bad for my mental health?",
    a: "Almost certainly. It's also extremely good for our retention numbers, so we've decided to call it 'community.'",
  },
  {
    q: "What's the highest aura possible?",
    a: "Unknown. One user reached 'unbothered deity' and immediately deleted the app, which ironically earned infinite aura. We've been trying to reach them since.",
  },
  {
    q: "Is any of this real?",
    a: "The aura isn't. The anxiety is. That gap is, regrettably, the entire product.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-au-line bg-au-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-au-accent">
            frequently doubted
          </p>
          <h2 className="mt-3 font-au-display text-4xl font-bold tracking-tight text-au-ink sm:text-5xl">
            things you&apos;ll ask before checking your balance.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-au-line rounded-[2rem] border border-au-line bg-au-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-au-display text-lg font-bold text-au-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-au-line text-au-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-au-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

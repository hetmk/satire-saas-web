const faqs = [
  {
    q: "What if I miss a day for a genuinely good reason?",
    a: "There are no good reasons. There is only the streak and the absence of the streak. Your grandmother's funeral is, in our system, a missed log. We're sorry. Actually we're not — the data on guilt-driven retention is incredible.",
  },
  {
    q: "Does keeping a streak mean I built the habit?",
    a: "No. It means you fear the reset. Many users maintain a 500-day streak for a habit they no longer perform — they just log it. The behavior is optional. The fear is the feature.",
  },
  {
    q: "Why do streak freezes cost money?",
    a: "Because you'll pay anything to avoid watching a big number become zero. We discovered this, priced it, and named a conference room after the quarter it saved us.",
  },
  {
    q: "Is this healthy?",
    a: "We added a 'rest day' button to seem balanced. It still resets your streak. The button is there so you feel in control while we keep the loss aversion fully intact. Wellness theater, basically.",
  },
  {
    q: "Can I export my streak history?",
    a: "Yes, as a single number followed by the word 'days' and a small flame. It will mean everything to you and nothing to anyone else. That asymmetry is, once again, the product.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-st-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-st-display font-bold uppercase tracking-[0.16em] text-st-flame">
            before you commit
          </p>
          <h2 className="mt-3 font-st-display text-4xl font-extrabold tracking-tight text-st-ink sm:text-5xl">
            Questions you&apos;ll ask on day 1, ignore by day 90.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-st-line rounded-2xl border border-st-line bg-st-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-st-display text-lg font-extrabold text-st-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-st-line text-st-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-st-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

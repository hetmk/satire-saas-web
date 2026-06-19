const faqs = [
  {
    q: "Wait, there's genuinely nothing in the feed?",
    a: "Correct. We considered adding content and realized it was the only thing wrong with every other feed. So we stopped before we started.",
  },
  {
    q: "Then what am I paying for?",
    a: "The scroll itself, delivered cleanly: no ads, no outrage, no algorithm deciding who you should resent today. Just the motion. Honestly, it's the most honest app on your phone.",
  },
  {
    q: "Isn't this just... closing the app?",
    a: "Closing the app requires a decision. doomscroll+ requires nothing. That is a meaningfully different, premium experience, and we've priced it accordingly.",
  },
  {
    q: "Will I miss out on news and updates?",
    a: "Yes. Gloriously. That is the feature you've been looking for since roughly 2014.",
  },
  {
    q: "Does the scroll ever end?",
    a: "No. It loops seamlessly, forever, like the feeds you're used to — except this one is upfront about the fact that it's going nowhere.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-ds-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ds-accent">
            questions
          </p>
          <h2 className="mt-3 font-ds-display text-4xl font-semibold tracking-tight text-ds-ink sm:text-5xl">
            You have one question. It is &ldquo;why.&rdquo;
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ds-line rounded-2xl border border-ds-line bg-ds-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-ds-display text-lg font-semibold text-ds-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ds-line text-ds-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-ds-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

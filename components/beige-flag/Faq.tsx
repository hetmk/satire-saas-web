const faqs = [
  {
    q: "What exactly is a beige flag?",
    a: "Not a dealbreaker, not a delight — just a small, beige nothing. 'Haha for sure.' A personality that's 'down for whatever.' It won't ruin your life. It'll just quietly bore it.",
  },
  {
    q: "Is the analysis accurate?",
    a: "It's as accurate as the conclusion you'd reach at 2am anyway — we just deliver it faster and without the wine. The algorithm has no feelings, which makes it more reliable than yours right now.",
  },
  {
    q: "Can it tell me they like me?",
    a: "If they liked you, you wouldn't be pasting their texts into an app. But yes, occasionally, against all odds, we return a green flag. Treasure it. They're rare and probably a typo.",
  },
  {
    q: "Will this help me move on?",
    a: "No app can make you move on. But seeing 'beige flag' in a confident sans-serif font does something. It's the difference between knowing and KNOWING.",
  },
  {
    q: "Do you store my texts?",
    a: "This is a parody — nothing you type leaves your browser. Your situationship's 'wyd' is safe with you, which is more than they deserve.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-bf-surface/60 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bf-beige">
            before you spiral
          </p>
          <h2 className="mt-3 font-bf-display text-4xl font-bold tracking-tight text-bf-ink sm:text-5xl">
            Questions, asked at 2am, answered here.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-bf-line rounded-[2rem] border border-bf-line bg-bf-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bf-display text-lg font-bold text-bf-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-bf-line text-bf-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-bf-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

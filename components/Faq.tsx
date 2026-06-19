const faqs = [
  {
    q: "Isn't this just paying money to feel bad?",
    a: "Yes. But mindfully. The bad feeling is now itemized, recurring, and tax-deductible in no jurisdiction. That's growth.",
  },
  {
    q: "What if I just don't link my bank account?",
    a: "Then Tithe cannot heal you, and we will both have to live with that. Also the app still installs. It mostly just watches.",
  },
  {
    q: "Does it work with TikTok, X, or LinkedIn?",
    a: "Instagram only for now. We tried adding LinkedIn but our users were already being punished enough.",
  },
  {
    q: "Where does the money actually go?",
    a: "Into a calm, low-interest account we call The Stillness Fund. It is your money, held gently, slightly out of reach, forever. Withdrawals require a 30-day cooling-off period and a short essay.",
  },
  {
    q: "Is there a free version?",
    a: "There was. We called it 'your phone.' That's the problem we're solving.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lilac-deep">
          questions, honestly answered
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You have concerns. They are valid.
        </h2>
      </div>

      <div className="mt-12 divide-y divide-line rounded-3xl border border-line bg-paper">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-ink marker:content-none">
              {f.q}
              <span
                aria-hidden
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mist text-ink-soft transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="pb-6 text-ink-soft leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

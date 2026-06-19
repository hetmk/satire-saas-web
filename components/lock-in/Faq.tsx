const faqs = [
  {
    q: "Strangers can see my screen? Isn't that a privacy nightmare?",
    a: "Yes. We've reframed 'surveillance' as 'support' and somehow that closed our Series A. Use a clean desktop and don't open anything you wouldn't read aloud.",
  },
  {
    q: "What if I just lie and don't actually work?",
    a: "The chat can see your screen. There is no lying. There is only a room of strangers watching you alt-tab to YouTube in real time, typing.",
  },
  {
    q: "Are the strangers qualified to judge my work?",
    a: "Absolutely not. That's the beauty of it. Unearned confidence plus your deadline is a more powerful motivator than any productivity framework we tested.",
  },
  {
    q: "Is the judgment ever... too much?",
    a: "For some users, yes. We added a 'be gentle' mode. Nobody uses it. The cruelty is load-bearing.",
  },
  {
    q: "Does this actually work?",
    a: "Disturbingly well. It turns out the only thing stronger than your procrastination is your fear of looking lazy in front of usernames you'll never meet.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-li-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="font-li-mono text-xs uppercase tracking-[0.16em] text-li-focus">
            before you go live
          </p>
          <h2 className="mt-3 font-li-display text-4xl font-bold tracking-tight text-li-ink sm:text-5xl">
            Questions the chat will not answer kindly.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-li-line rounded-2xl border border-li-line bg-li-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-li-display text-lg font-bold text-li-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-li-line text-li-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-li-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

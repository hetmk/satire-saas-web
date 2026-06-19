const faqs = [
  {
    q: "Why did it flag me? I'm definitely human.",
    a: "That's exactly what a clanker would say. Statistically, the more confidently you assert your humanity, the higher your bot score. We've thought about this. We've thought about it a lot.",
  },
  {
    q: "Is the detection scientifically valid?",
    a: "No. There is no reliable way to detect AI text, which is precisely why the market is enormous and we are thriving. We sell certainty, not accuracy. Those were never the same product.",
  },
  {
    q: "What if I write badly on purpose to seem human?",
    a: "Trying to seem human is the single most clanker behavior there is. Bad writing on purpose reads as a model imitating bad writing. There is no move. That's the game.",
  },
  {
    q: "Can I clear my name?",
    a: "File an appeal. The appeal is a text box. The text box is scanned. You will be flagged again, slightly harder, for trying. We admire the effort. It's very human. Suspiciously so.",
  },
  {
    q: "Did a clanker write this FAQ?",
    a: "We scanned it. 91% bot. We're shipping it anyway. At some point you stop fighting the number and start respecting it.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-ck-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="font-ck-display text-xs uppercase tracking-[0.16em] text-ck-accent">
            interrogation
          </p>
          <h2 className="mt-3 font-ck-display text-4xl font-bold tracking-tight text-ck-ink sm:text-5xl">
            Questions. Answers. All flagged.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-ck-line rounded-2xl border border-ck-line bg-ck-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-ck-display text-lg font-bold text-ck-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-ck-line text-ck-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-ck-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

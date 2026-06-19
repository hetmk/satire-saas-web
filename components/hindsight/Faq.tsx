const faqs = [
  {
    q: "Is the post-mortem accurate?",
    a: "Define accurate. It is inevitable, which is close enough. 94% of startups fail; we're just better at scheduling.",
  },
  {
    q: "What if my startup actually succeeds?",
    a: "Then you've found a bug. Please report it. We will study you the way doctors study people who survive things they shouldn't.",
  },
  {
    q: "Can I show this to investors?",
    a: "We encourage it. In testing, showing the post-mortem during the pitch had no measurable effect on whether VCs invested. They never read past the TAM slide either.",
  },
  {
    q: "Does it integrate with my existing tools?",
    a: "It integrates with grief. Also Notion. The wind-down post exports straight to LinkedIn with the 'incredible journey' pre-filled.",
  },
  {
    q: "Isn't this demoralizing?",
    a: "Demoralizing is month 14. This is month zero, with a refund still on the table. You're welcome.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-h-line bg-h-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="font-h-mono text-xs uppercase tracking-[0.18em] text-h-accent">
            frequently doubted
          </p>
          <h2 className="mt-3 font-h-display text-4xl font-semibold tracking-tight text-h-ink sm:text-5xl">
            Questions you&apos;ll ask in month 9 anyway.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-h-line rounded-2xl border border-h-line bg-h-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-h-display text-lg font-semibold text-h-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-h-line font-h-mono text-h-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-h-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

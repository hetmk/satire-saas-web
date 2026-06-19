const faqs = [
  {
    q: "What if something is genuinely amazing?",
    a: "It's mid. You're just well-rested. Re-rate it tomorrow when you're tired and you'll agree with us.",
  },
  {
    q: "What if something is genuinely terrible?",
    a: "Also mid. Calling things 'terrible' requires the same energy as calling them 'great,' and we're trying to save you that.",
  },
  {
    q: "Isn't refusing to have opinions kind of sad?",
    a: "We rated that concern. It came back mid. Next question.",
  },
  {
    q: "How is the score calculated?",
    a: "It isn't. It's 2.5. It was always going to be 2.5. The input field is decorative — we just like watching you type.",
  },
  {
    q: "Is mid better than your competitors?",
    a: "No. It's mid. They're mid. We're all mid together. That's the only honest tagline in this entire industry and we're keeping it.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-md-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-md-accent">
            questions
          </p>
          <h2 className="mt-3 font-md-display text-5xl leading-none tracking-wide text-md-ink">
            ASKED. ANSWERED. MID.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-md-line rounded-2xl border border-md-line bg-md-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-md-display text-xl tracking-wide text-md-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-md-line text-md-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-md-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

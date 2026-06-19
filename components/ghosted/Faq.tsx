const faqs = [
  {
    q: "Isn't ghosting people kind of cruel?",
    a: "We prefer 'low-friction offboarding of a human relationship.' We've reframed avoidance as a workflow, added a Kanban board, and now it's a productivity tool. The cruelty is the same; the UX is much nicer.",
  },
  {
    q: "What if someone really needs to reach me?",
    a: "Then they're in the wrong pipeline stage and you should drag them back to 'Active.' If you don't, that's not our fault — it's a configuration choice, and configuration choices are between you and your conscience.",
  },
  {
    q: "Will the auto-excuses sound like me?",
    a: "Better than you, honestly. 'omg sorry just saw this!' is more responsive than you've been in months. Several users report their ghosted contacts now like the bot more than the original. We don't bring it up.",
  },
  {
    q: "Can people tell they've been ghosted by software?",
    a: "No. That's the genius. A human ghosting is messy and detectable. Ours is smooth, gradual, and statistically indistinguishable from you simply having a full life. Which you do not.",
  },
  {
    q: "Is this healthy?",
    a: "We added a 'reconnect' button to seem balanced. It opens a chat window. The chat window is intimidating. You will close it and drag them to 'Forgotten.' We know, because we built the button to lose.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-gh-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-gh-display font-bold uppercase tracking-[0.16em] text-gh-accent">
            before you disappear
          </p>
          <h2 className="mt-3 font-gh-display text-4xl font-extrabold tracking-tight text-gh-ink sm:text-5xl">
            Questions, which we may or may not answer.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gh-line rounded-2xl border border-gh-line bg-gh-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-gh-display text-lg font-extrabold text-gh-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-gh-line text-gh-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-gh-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

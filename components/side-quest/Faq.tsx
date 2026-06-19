const faqs = [
  {
    q: "Is the loot real?",
    a: "No. None of it. The Cloak of Not Today does not exist and cannot protect you. Your dishes still got done. We consider this a win condition.",
  },
  {
    q: "Why does turning chores into a game actually work on me?",
    a: "Your brain refuses 'do the taxes' but sprints toward 'a progress bar moved 2%.' We are not proud of exploiting this. We are, however, profitable.",
  },
  {
    q: "What happens at Level 99?",
    a: "Nothing. There is no ending. It's chores. There were always going to be more dishes. We just gave the void a leaderboard.",
  },
  {
    q: "Can my therapist see my quest log?",
    a: "Only if you share it, and you will, because 'I defeated the laundry boss' is a more fun sentence than the truth.",
  },
  {
    q: "Is this just gamification?",
    a: "Yes, but with better fonts and a worse attitude. We say 'loot' instead of 'reward' and somehow that's the whole product.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-sq-line bg-sq-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="font-sq-pixel text-[10px] uppercase text-sq-accent">
            quest log
          </p>
          <h2 className="mt-3 font-sq-display text-4xl font-extrabold tracking-tight text-sq-ink sm:text-5xl">
            things you&apos;ll ask before accepting.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-sq-line rounded-3xl border border-sq-line bg-sq-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-sq-display text-lg font-bold text-sq-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-sq-line text-sq-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-sq-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

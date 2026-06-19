const faqs = [
  {
    q: "Isn't sharing good things the entire point of having taste?",
    a: "That's adorable. Sharing dilutes. Once your friend has the playlist, you're no longer the person with the playlist — you're a person who knows that person. gatekeep exists to keep you in the main role.",
  },
  {
    q: "What happens if I accidentally recommend something?",
    a: "We call this a leak. You'll get an alert, a small exclusivity penalty, and a 'cooling-off' period before you're allowed to find anything cool again. Repeat offenders are downgraded to Hobbyist.",
  },
  {
    q: "This seems a little petty.",
    a: "It's extremely petty. We've simply built a clean interface and a progress bar around the pettiness you were already practicing for free. The interface is the innovation.",
  },
  {
    q: "Can I share things with other gatekeep members?",
    a: "No. Especially not them. They have taste too, and taste is zero-sum. The only safe place for your finds is the vault, sealed, witnessed by no one, slowly making you more interesting in theory.",
  },
  {
    q: "Does this actually make me cooler?",
    a: "No. But the number goes up, and you'll check the number more than you'd like to admit. That gap — between the number and the coolness — is, as ever, the business.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-gk-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-gk-display font-bold uppercase tracking-[0.18em] text-gk-accent">
            questions
          </p>
          <h2 className="mt-3 font-gk-display text-4xl font-extrabold tracking-tight text-gk-ink sm:text-5xl">
            Asked quietly, so no one else hears.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gk-line rounded-2xl border border-gk-line bg-gk-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-gk-display text-lg font-extrabold text-gk-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-gk-line text-gk-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-gk-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

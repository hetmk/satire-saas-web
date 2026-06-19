const faqs = [
  {
    q: "How much can I actually make?",
    a: "After our 70% cut, processing fees, the 'vibes fee,' and the gesture-licensing surcharge, top performers clear nearly minimum wage in some states. The gifts feel like more. That feeling is the product.",
  },
  {
    q: "Do I need any skills?",
    a: "The opposite. Skills, opinions, and a distinct personality all reduce performance. Our highest earners have achieved a serene, marketable emptiness. We can coach you toward it.",
  },
  {
    q: "Isn't this kind of dystopian?",
    a: "We prefer 'attention-economy-native.' You're not a person being paid to honk on cue for digital roses — you're a creator. Specifically, a creator of the exact same six sounds, on demand, forever.",
  },
  {
    q: "What's the gift-cue earpiece?",
    a: "It tells you which gesture to perform when a gift lands, so you never have to think. Thinking creates pauses. Pauses lose gifts. The earpiece is, for many users, the closest thing they have to an inner voice now.",
  },
  {
    q: "Can I quit whenever I want?",
    a: "Of course. Although once you've said 'ice cream so good' four thousand times to fund your rent, the phrase tends to follow you into the silence. That's not in the contract. It's just true.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-np-surface/40 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="font-np-display text-xs font-bold uppercase tracking-[0.16em] text-np-cyan">
            before you go live
          </p>
          <h2 className="mt-3 font-np-display text-4xl font-bold tracking-tight text-np-ink sm:text-5xl">
            Questions, asked while still a person.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-np-line rounded-2xl border border-np-line bg-np-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-np-display text-lg font-bold text-np-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-np-line text-np-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-np-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

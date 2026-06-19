const testimonials = [
  {
    quote:
      "I've spent $312 this month and I have never felt more in control of my screen time.",
    name: "Priya K.",
    title: "Head of Mindfulness, a Series B logistics company",
  },
  {
    quote:
      "It's like a meditation app, except instead of a gong it's an overdraft notice. Truly grounding.",
    name: "Devon M.",
    title: "Recovering Power User",
  },
  {
    quote:
      "My therapist asked me to delete it. I opened Instagram to tell my followers. Tithe charged me for that too. It's working.",
    name: "Sloane R.",
    title: "Content Creator & Cautionary Tale",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-5 py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lilac-deep">
            the science*
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Clinically untested. Emotionally devastating.
          </h2>
        </div>
        <p className="max-w-xs text-sm text-ink-soft">
          *No part of Tithe has been reviewed by a doctor, an economist, or a
          single reasonable person.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-line bg-paper p-7"
          >
            <span aria-hidden className="font-display text-5xl leading-none text-mist-2">
              &ldquo;
            </span>
            <blockquote className="-mt-4 text-lg leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4 text-sm">
              <span className="font-semibold text-ink">{t.name}</span>
              <span className="block text-ink-soft">{t.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

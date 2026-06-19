const testimonials = [
  {
    quote:
      "I found the perfect little ceramicist and told no one for eight months. My exclusivity hit 97%. Then she went viral on her own. gatekeep sent flowers. I'm still not okay.",
    name: "Margaux D.",
    title: "exclusivity 97% · 0 shares",
  },
  {
    quote:
      "My friend asked where my jacket was from. I said 'a little place.' gatekeep logged it as a successful defense. We have not spoken since. Worth it.",
    name: "Soren A.",
    title: "vault: 140 sealed items",
  },
  {
    quote:
      "The leak alert caught my roommate posting my coffee spot. I felt betrayed in a way I previously reserved for actual relationships. This app understands me.",
    name: "Wren T.",
    title: "Founding member, allegedly",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-gk-line bg-gk-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-gk-display font-bold uppercase tracking-[0.18em] text-gk-accent">
              members
            </p>
            <h2 className="mt-3 font-gk-display text-4xl font-extrabold tracking-tight text-gk-ink sm:text-5xl">
              The tastemakers who make sure you can&apos;t.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-gk-muted">
            Membership is invite-only. We won&apos;t tell you how to get one.
            That&apos;s the whole product, really.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-gk-line bg-gk-bg p-7"
            >
              <blockquote className="text-gk-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-gk-line pt-4 text-sm">
                <span className="font-gk-display font-extrabold text-gk-ink">
                  {t.name}
                </span>
                <span className="block text-gk-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

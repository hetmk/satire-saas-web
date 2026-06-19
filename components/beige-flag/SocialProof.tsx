const testimonials = [
  {
    quote:
      "Paste in three months of 'haha yeah.' The app returned one word — 'beige' — and a grief counselor's phone number. I have never felt so accurately destroyed.",
    name: "ren, 26",
    title: "47 case files",
  },
  {
    quote:
      "I was convinced he was mysterious and deep. beige flag diagnosed 'emotionally a beige wall.' I argued. Then I reread the texts. The app doesn't miss.",
    name: "kayla, 24",
    title: "green flags found: 0",
  },
  {
    quote:
      "Finally got a GREEN flag. Screenshotted it. Set it as my lock screen. The bar was on the floor and this app helped me find it down there.",
    name: "marco, 28",
    title: "rare green flag holder",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-bf-line bg-bf-surface/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bf-beige">
              diagnoses
            </p>
            <h2 className="mt-3 font-bf-display text-4xl font-bold tracking-tight text-bf-ink sm:text-5xl">
              Millions of texts analyzed. Most of them beige.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-bf-muted">
            61% beige. 28% red. 11% green. The 11% are not on dating apps; they
            have partners and hobbies.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[2rem] border border-bf-line bg-bf-bg p-7"
            >
              <blockquote className="text-bf-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-bf-line pt-4 text-sm">
                <span className="font-bf-display font-bold text-bf-ink">
                  {t.name}
                </span>
                <span className="block text-bf-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

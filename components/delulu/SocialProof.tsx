const testimonials = [
  {
    quote:
      "I manifested a promotion I was objectively unqualified for. I did not get it. But I asked, and HR said my confidence was 'genuinely unsettling.' Growth.",
    name: "tay, 23",
    title: "delulu level 9",
  },
  {
    quote:
      "set my goal to 'become unproblematic and rich.' still problematic. still broke. but emotionally? thriving. the app warned me reality was lagging.",
    name: "ren, 25",
    title: "manifesting since tuesday",
  },
  {
    quote:
      "my vision board became a vision wall became a vision room. my landlord calls it a 'lease violation.' i call it commitment.",
    name: "sof, 22",
    title: "delulu level 10 (capped)",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-dl-line bg-dl-surface/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dl-grape">
              believers
            </p>
            <h2 className="mt-3 font-dl-display text-4xl font-semibold tracking-tight text-dl-ink sm:text-5xl">
              Real results, eventually, probably, in another timeline.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-dl-muted">
            0% clinically proven. 100% of users reported feeling like that girl.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[2rem] border border-dl-line bg-dl-bg p-7"
            >
              <blockquote className="text-dl-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-dl-line pt-4 text-sm">
                <span className="font-dl-display font-semibold text-dl-ink">
                  {t.name}
                </span>
                <span className="block text-dl-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

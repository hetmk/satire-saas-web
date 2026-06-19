const faqs = [
  {
    q: "Is being delulu actually good for me?",
    a: "We're legally not allowed to say yes and emotionally not willing to say no. Studies are pending. They will remain pending. That's part of the practice.",
  },
  {
    q: "What if my affirmations don't come true?",
    a: "They came true. Reality is simply buffering. Premium users get reality dampening so the buffering is less noticeable.",
  },
  {
    q: "My friends say I've changed.",
    a: "Correct. That's the product working. Tap 'hide one concerned friend' in settings. You have a finite number; spend them wisely.",
  },
  {
    q: "Isn't this just toxic positivity with a subscription?",
    a: "We prefer 'aspirational denial, monetized.' Toxic positivity is free. We add a beautiful UI and a streak counter, and somehow that's the entire business.",
  },
  {
    q: "Can I go back to being realistic?",
    a: "Yes. Tap 'be so real.' Most users tap it once, feel the weight of the world, and immediately manifest harder. We don't judge. We can't, actually — we dampened it.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-t border-dl-line bg-dl-surface/50 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dl-grape">
            doubts (temporary)
          </p>
          <h2 className="mt-3 font-dl-display text-4xl font-semibold tracking-tight text-dl-ink sm:text-5xl">
            Questions your old, realistic self would ask.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-dl-line rounded-[2rem] border border-dl-line bg-dl-bg">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-dl-display text-lg font-semibold text-dl-ink marker:content-none">
                {f.q}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-dl-line text-dl-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 leading-relaxed text-dl-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

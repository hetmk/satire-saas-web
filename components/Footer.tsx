import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Link
            href="#top"
            className="flex items-center gap-2 font-display text-xl font-semibold text-ink"
          >
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full bg-sage text-paper"
            >
              ◴
            </span>
            tithe
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Mindful spending for your attention. A wellness company that is, by
            any reasonable measure, a small fine you opted into.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-lilac-deep hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <FooterCol
            title="Product"
            items={["How it works", "Pricing", "The Stillness Fund", "Status: serene"]}
          />
          <FooterCol
            title="Company"
            items={["Manifesto", "Careers (unpaid, mindful)", "Press kit", "Our therapist"]}
          />
          <FooterCol
            title="Legal-ish"
            items={["Terms you won't read", "Privacy, sort of", "Refund policy: no", "Contact a monk"]}
          />
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} Tithe Wellness, Inc. Not affiliated with
          Instagram, Meta, your bank, or your wellbeing. This is a parody. No real
          money was tithed in the making of this page.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2 text-ink-soft">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#top"
              className="rounded transition-colors hover:text-ink"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

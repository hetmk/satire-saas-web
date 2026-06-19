import Link from "next/link";
import Vault from "./Vault";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gk-line bg-gk-surface px-4 py-1.5 text-xs font-gk-display font-bold uppercase tracking-[0.16em] text-gk-muted">
            the anti-recommendation engine
          </span>

          <h1 className="mt-6 font-gk-display text-5xl font-extrabold leading-[1.02] tracking-tight text-gk-ink sm:text-6xl">
            if everyone knows about it,{" "}
            <span className="text-gk-accent">it&apos;s already over.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-gk-muted">
            gatekeep is a vault for the good things you find — the bar, the
            artist, the brand — engineered to keep them away from your friends.
            Every recommendation you don&apos;t make is a deposit into your
            personal brand.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-gk-ink px-7 py-3.5 text-center font-gk-display font-bold text-gk-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
            >
              Protect your taste
            </Link>
            <Link
              href="#how"
              className="rounded-lg border border-gk-line bg-gk-surface px-7 py-3.5 text-center font-gk-display font-bold text-gk-ink transition-colors hover:border-gk-accent focus-visible:rounded-lg"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-gk-muted">
            try it → seal something in the vault. tell no one.
          </p>
        </div>

        <Vault />
      </div>
    </section>
  );
}

import Link from "next/link";
import GhostList from "./GhostList";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gh-accent/15 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gh-line bg-gh-surface px-4 py-1.5 text-xs font-gh-display font-bold uppercase tracking-[0.14em] text-gh-muted">
            relationship CRM
          </span>

          <h1 className="mt-6 font-gh-display text-5xl font-extrabold leading-[1.02] tracking-tight text-gh-ink sm:text-6xl">
            you were going to reply eventually.{" "}
            <span className="text-gh-accent">we both know you weren&apos;t.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-gh-muted">
            Ghosted is a CRM for the people you&apos;re quietly avoiding. Import
            your contacts, flag the ones draining you, and we&apos;ll stop
            replying on your behalf — gracefully, gradually, with the plausible
            deniability of a busy life.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-gh-accent px-7 py-3.5 text-center font-gh-display font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
            >
              Start fading out
            </Link>
            <Link
              href="#how"
              className="rounded-lg border border-gh-line bg-gh-surface px-7 py-3.5 text-center font-gh-display font-bold text-gh-ink transition-colors hover:border-gh-accent focus-visible:rounded-lg"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-xs text-gh-muted">
            try it → ghost someone. they&apos;ll figure it out. eventually.
          </p>
        </div>

        <GhostList />
      </div>
    </section>
  );
}

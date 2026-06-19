import Link from "next/link";
import InfiniteFeed from "./InfiniteFeed";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ds-line bg-ds-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ds-muted">
            the feed, perfected
          </span>

          <h1 className="mt-6 font-ds-display text-5xl font-semibold leading-[1.02] tracking-tight text-ds-ink sm:text-6xl">
            all the scroll. <span className="text-ds-accent">none of the content.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ds-muted">
            You never wanted the posts. You wanted the motion — the thumb, the
            pull, the infinite down. doomscroll+ removes the content, the
            outrage, and the ads, and leaves the one thing you actually came for.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-ds-ink px-7 py-3.5 text-center font-semibold text-ds-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Begin the descent
            </Link>
            <Link
              href="#how"
              className="rounded-full border border-ds-line bg-ds-surface px-7 py-3.5 text-center font-semibold text-ds-ink transition-colors hover:border-ds-accent focus-visible:rounded-full"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-ds-muted">
            try it → scroll the feed. there is nothing in it.
          </p>
        </div>

        <InfiniteFeed />
      </div>
    </section>
  );
}

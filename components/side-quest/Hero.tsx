import Link from "next/link";
import QuestForge from "./QuestForge";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sq-accent/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-sq-xp/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-sq-line bg-sq-surface px-4 py-1.5 font-sq-pixel text-[10px] uppercase text-sq-muted">
            now with loot
          </span>

          <h1 className="mt-6 font-sq-display text-5xl font-extrabold leading-[1.02] tracking-tight text-sq-ink sm:text-6xl">
            your to-do list, but it&apos;s a{" "}
            <span className="text-sq-xp">video game</span> your brain agrees to
            play.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-sq-muted">
            side quest turns &ldquo;take out the trash&rdquo; into a ranked
            quest with XP and loot. same chores. same you. but now there&apos;s a
            progress bar, and your nervous system is weak to progress bars.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-xl bg-sq-xp px-7 py-3.5 text-center font-sq-display font-bold text-sq-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
            >
              Accept your first quest
            </Link>
            <Link
              href="#how"
              className="rounded-xl border border-sq-line bg-sq-surface px-7 py-3.5 text-center font-sq-display font-bold text-sq-ink transition-colors hover:border-sq-accent focus-visible:rounded-xl"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 font-sq-pixel text-[10px] text-sq-muted">
            real ones know. the dishes are the final boss.
          </p>
        </div>

        <QuestForge />
      </div>
    </section>
  );
}

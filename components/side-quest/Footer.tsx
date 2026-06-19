import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sq-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-sq-display text-xl font-extrabold text-sq-ink">
            <span aria-hidden className="font-sq-pixel text-sm text-sq-xp">
              ⚔
            </span>
            side quest
          </span>
          <p className="mt-4 text-sm leading-relaxed text-sq-muted">
            every chore is a quest now. a game studio that ships clean
            apartments instead of games.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-sq-pixel text-[10px] text-sq-accent hover:underline"
          >
            ↳ our other startups (Tithe)
          </Link>
        </div>

        <div className="text-sm text-sq-muted">
          <p className="font-sq-pixel text-[10px] text-sq-quest">SERVER STATUS: online</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} side quest interactive. a parody. no
            real XP, loot, or character growth was awarded. the dishes, however,
            are real, and they are waiting.
          </p>
        </div>
      </div>
    </footer>
  );
}

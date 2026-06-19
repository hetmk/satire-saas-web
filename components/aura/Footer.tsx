import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-au-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-au-display text-xl font-bold text-au-ink">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full bg-au-accent/25 text-au-accent"
              style={{ boxShadow: "0 0 16px var(--au-accent)" }}
            >
              ◉
            </span>
            aura
          </span>
          <p className="mt-4 text-sm leading-relaxed text-au-muted">
            the points system for your whole personality. a data company that
            mostly sells you a number you can lose in public.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-au-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-au-muted">
          <p className="font-semibold text-au-ink">Aura status: fluctuating</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} aura systems. a parody. aura points are
            not real, not redeemable, and not a recognized unit of anything. the
            cringe, however, compounds daily.
          </p>
        </div>
      </div>
    </footer>
  );
}

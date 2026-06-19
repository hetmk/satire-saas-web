import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-bf-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-bf-display text-xl font-bold text-bf-ink">
            <span aria-hidden>🏳️</span>
            beige flag
          </span>
          <p className="mt-4 text-sm leading-relaxed text-bf-muted">
            your situationship, finally diagnosed. a wellness company that mostly
            sells you the conclusion you were avoiding.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-bf-beige hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-bf-muted">
          <p className="font-semibold text-bf-ink">Today&apos;s forecast: beige</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} beige flag. a parody. not a licensed
            therapist, relationship coach, or friend who actually likes you.
            diagnoses are for entertainment and mild devastation only.
          </p>
        </div>
      </div>
    </footer>
  );
}

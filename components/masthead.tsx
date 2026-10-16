"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme";

export function Masthead() {
  const path = usePathname();
  const isPm = path?.startsWith("/pm");

  return (
    <header className="border-b hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4 text-[11px] uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold">The Dispatch</Link>
          <span className="hidden sm:inline text-[color:var(--fg)]/60">
            Vol {site.volume} · Issue {site.issue} · {site.year}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          <div
            className="flex items-center border hairline rounded-sm overflow-hidden"
            role="group"
            aria-label="Portfolio edition"
          >
            <Link
              href="/"
              aria-current={!isPm ? "page" : undefined}
              className={`px-2 py-1 transition ${
                !isPm
                  ? "bg-[color:var(--fg)] text-[color:var(--bg)]"
                  : "hover:bg-[color:var(--rulesoft)]/50"
              }`}
            >
              Engineer
            </Link>
            <Link
              href="/pm"
              aria-current={isPm ? "page" : undefined}
              className={`px-2 py-1 transition border-l hairline ${
                isPm
                  ? "bg-[color:var(--fg)] text-[color:var(--bg)]"
                  : "hover:bg-[color:var(--rulesoft)]/50"
              }`}
            >
              Product
            </Link>
          </div>
          {!isPm ? (
            <>
              <Link href="/#work" className="underline-hover">Work</Link>
              <Link href="/#pipeline" className="underline-hover">Pipeline</Link>
              <Link href="/#ci-run" className="underline-hover">CV</Link>
              <Link href="/#community" className="underline-hover">Community</Link>
              <Link href="/#terminal" className="underline-hover">Terminal</Link>
            </>
          ) : (
            <>
              <Link href="/pm#leadership" className="underline-hover">Leadership</Link>
              <Link href="/pm#bets" className="underline-hover">Bets</Link>
              <Link href="/pm#community" className="underline-hover">Community</Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-pass mr-1.5 align-middle"
              aria-hidden
            />
            open · 2027
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Masthead } from "@/components/masthead";
import { Footer } from "@/components/footer";

export default function NotFound() {
  const now = new Date().toISOString();
  return (
    <main>
      <Masthead />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-[11px] uppercase tracking-widest opacity-70">
          HTTP · request trace
        </p>
        <h1 className="display text-6xl sm:text-8xl mt-2">
          <span style={{ color: "var(--dispatch)" }}>404</span> — route not found.
        </h1>

        <div className="mt-8 border hairline p-5 font-mono text-[12.5px] leading-[1.75] bg-[color:var(--rulesoft)]/15 max-w-3xl">
          <div>→ GET <span className="font-semibold">{"{requested path}"}</span></div>
          <div className="text-pass">✓ 08 ms  · auth    · public route</div>
          <div className="text-pass">✓ 12 ms  · route   · match against app router</div>
          <div className="text-[color:var(--dispatch)]">✗ 03 ms  · route   · no handler for this path</div>
          <div className="opacity-70">… trace closed at {now}</div>
        </div>

        <p className="mt-6 max-w-prose2 text-[15px] leading-relaxed">
          Looks like this page didn't match any of my routes. The{" "}
          <Link href="/" className="underline-hover">home page</Link> has
          everything — or jump straight to{" "}
          <Link href="/#work" className="underline-hover">work</Link>,{" "}
          <Link href="/#community" className="underline-hover">community</Link>,
          or <Link href="/#terminal" className="underline-hover">the terminal</Link>.
        </p>
      </section>
      <Footer />
    </main>
  );
}

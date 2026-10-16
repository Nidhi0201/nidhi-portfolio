import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { Masthead } from "@/components/masthead";
import { Footer } from "@/components/footer";
import { Architecture } from "@/components/architecture";

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  return { title: cs.title, description: cs.subtitle };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies[slug];
  if (!cs) notFound();

  return (
    <main>
      <Masthead />
      <article className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/#work"
          className="text-[11px] uppercase tracking-widest underline-hover"
        >
          ← back to work
        </Link>
        <header className="mt-6 border-b hairline pb-10">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            Case study · RFC
          </p>
          <h1 className="display text-5xl sm:text-7xl lg:text-8xl mt-2">
            {cs.title}
          </h1>
          <p className="mt-4 text-[1.1rem] max-w-prose2 leading-relaxed">
            {cs.subtitle}
          </p>
        </header>

        <section className="grid md:grid-cols-12 gap-8 border-b hairline py-10">
          <h2 className="md:col-span-3 text-[11px] uppercase tracking-widest opacity-70">
            § 01 · problem
          </h2>
          <p className="md:col-span-9 text-[16px] leading-relaxed max-w-prose2">
            {cs.problem}
          </p>
        </section>

        <section className="grid md:grid-cols-12 gap-8 border-b hairline py-10">
          <h2 className="md:col-span-3 text-[11px] uppercase tracking-widest opacity-70">
            § 02 · constraints
          </h2>
          <ul className="md:col-span-9 space-y-2 text-[15px] leading-relaxed max-w-prose2">
            {cs.constraints.map((c) => (
              <li key={c} className="pl-5 relative">
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.7em] w-3 h-px bg-[color:var(--dispatch)]"
                />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b hairline py-10">
          <h2 className="text-[11px] uppercase tracking-widest opacity-70">
            § 03 · architecture
          </h2>
          <h3 className="display text-3xl sm:text-4xl mt-2">
            The system, from the outside in.
          </h3>
          <p className="opacity-70 text-[13px] mt-2">
            Click a component for the trade-off and a snippet.
          </p>
          <div className="mt-6">
            <Architecture steps={cs.architecture} />
          </div>
        </section>

        <section className="grid md:grid-cols-12 gap-8 border-b hairline py-10">
          <h2 className="md:col-span-3 text-[11px] uppercase tracking-widest opacity-70">
            § 04 · decisions
          </h2>
          <ol className="md:col-span-9 space-y-6 text-[15px] leading-relaxed max-w-prose2">
            {cs.decisions.map((d) => (
              <li key={d.q}>
                <p className="font-semibold">{d.q}</p>
                <p className="opacity-85 mt-1">{d.a}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid md:grid-cols-12 gap-8 border-b hairline py-10">
          <h2 className="md:col-span-3 text-[11px] uppercase tracking-widest opacity-70">
            § 05 · results
          </h2>
          <ul className="md:col-span-9 space-y-2 text-[15px] leading-relaxed max-w-prose2">
            {cs.results.map((r) => (
              <li key={r} className="pl-5 relative">
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.7em] w-3 h-px bg-pass"
                />
                {r}
              </li>
            ))}
          </ul>
        </section>

        {cs.nextSteps && (
          <section className="grid md:grid-cols-12 gap-8 py-10">
            <h2 className="md:col-span-3 text-[11px] uppercase tracking-widest opacity-70">
              § 06 · next
            </h2>
            <ul className="md:col-span-9 space-y-2 text-[15px] leading-relaxed max-w-prose2 opacity-80">
              {cs.nextSteps.map((n) => (
                <li key={n} className="pl-5 relative">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.7em] w-3 h-px bg-warn"
                  />
                  {n}
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <Footer />
    </main>
  );
}

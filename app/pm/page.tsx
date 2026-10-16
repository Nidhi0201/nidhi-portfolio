import Link from "next/link";
import { Masthead } from "@/components/masthead";
import { Footer } from "@/components/footer";
import { Community } from "@/components/community";
import { site } from "@/content/site";
import { pmHero, pmHighlights, pmProjects, pmLessons } from "@/content/pm";

export const metadata = {
  title: "Product desk",
  description:
    "Nidhi Prajapati's work, told with product emphasis — leadership, bets, metrics, trade-offs.",
};

export default function PmPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <Masthead />

      <section className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-24">
          <div className="flex items-end justify-between text-[11px] uppercase tracking-widest mb-10 sm:mb-14">
            <span>{today} · {pmHero.kicker}</span>
            <span className="hidden sm:inline">
              engineer's view ·{" "}
              <Link href="/" className="underline-hover">
                read the engineering edition →
              </Link>
            </span>
          </div>
          <h1 className="display text-[14vw] sm:text-[11vw] lg:text-[9rem] xl:text-[11rem] max-w-[16ch]">
            Ship it{" "}
            <span className="italic" style={{ color: "var(--dispatch)" }}>
              on purpose
            </span>.
          </h1>
          <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
            <div className="md:col-span-7 lg:col-span-6 border-t hairline pt-4">
              <p className="text-[11px] uppercase tracking-widest mb-3 opacity-70">
                The lede
              </p>
              <p className="text-[1.1rem] sm:text-[1.2rem] leading-relaxed max-w-prose2">
                {pmHero.lede}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-[13px]">
                <Link href="#bets" className="fill-slide border hairline px-4 py-2">
                  → the bets
                </Link>
                <Link
                  href="#leadership"
                  className="fill-slide border hairline px-4 py-2"
                >
                  → the leadership
                </Link>
                <a
                  href={site.links.resumePm}
                  download
                  className="fill-slide border hairline px-4 py-2"
                >
                  ↓ resume-pm.pdf
                </a>
              </div>
            </div>
            <aside className="md:col-span-5 lg:col-span-5 lg:col-start-8 border-t hairline pt-4">
              <p className="text-[11px] uppercase tracking-widest mb-3 opacity-70">
                Byline
              </p>
              <div className="space-y-2 text-[13px]">
                <p>
                  <span className="opacity-60">by</span>{" "}
                  <span className="font-semibold">{site.name}</span> ·{" "}
                  <span className="opacity-80">
                    engineer learning the product side on purpose
                  </span>
                </p>
                <p className="opacity-80">
                  {site.education.degree} · {site.education.school}, graduating{" "}
                  {site.education.graduation}
                </p>
                <p className="opacity-80">
                  Open to new-grad full-time Software, AI, or Product
                  Engineering / APM roles · 2027
                </p>
                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <a href={site.links.github} className="underline-hover">
                    github/Nidhi0201
                  </a>
                  <a href={site.links.linkedin} className="underline-hover">
                    linkedin/np124
                  </a>
                  <a href={`mailto:${site.links.email}`} className="underline-hover">
                    {site.links.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="leadership" className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <header className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                Section 01 · the leadership track record
              </p>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
                I've already shipped <span className="italic">with</span> people.
              </h2>
            </div>
            <p className="md:col-span-5 self-end text-[15px] leading-relaxed max-w-prose2">
              Before anyone pays me to be a PM, I ran the version with no title:
              scoped a 200-person event, hit a sponsor target, led a volunteer
              team, and taught the output to users on stage. These are the
              reps.
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border hairline">
            {pmHighlights.map((h, i) => (
              <div
                key={h.label}
                className={`fill-slide p-6 cursor-default ${
                  i < pmHighlights.length - 1
                    ? "border-b hairline-soft lg:border-b-0 md:[&:nth-child(2n)]:border-r-0 border-r hairline-soft lg:border-r"
                    : "lg:border-r-0"
                } ${
                  i === 2 ? "md:border-b-0" : ""
                } ${i === 3 ? "md:border-b-0 md:border-r-0" : ""}`}
              >
                <div className="display num num-red text-4xl sm:text-5xl leading-none whitespace-nowrap">
                  {h.value}
                </div>
                <div className="mt-3 text-[10.5px] uppercase tracking-widest opacity-70 leading-tight">
                  {h.label}
                </div>
                <p className="mt-3 text-[13px] opacity-85 leading-relaxed">
                  {h.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bets" className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <header className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                Section 02 · the bets
              </p>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
                Three bets, three metrics, one philosophy.
              </h2>
              <p className="mt-5 max-w-prose2 text-[15px] leading-relaxed">
                Each project framed the way a PM would brief it — user, problem,
                bet, metric, trade-off, outcome. Same work as the engineering
                page, told the way a product review would want to hear it.
              </p>
            </div>
          </header>

          <div className="mt-12 border-t hairline">
            {pmProjects.map((p, i) => (
              <article
                key={p.slug}
                className="grid md:grid-cols-12 gap-6 border-b hairline py-10"
              >
                <div className="md:col-span-1 text-[11px] uppercase tracking-widest opacity-50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-11">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h3 className="display text-3xl sm:text-4xl">{p.name}</h3>
                    <Link
                      href={`/case-studies/${p.slug}`}
                      className="text-[11px] uppercase tracking-widest underline-hover opacity-70"
                    >
                      → read the engineering case study
                    </Link>
                  </div>
                  <div className="mt-5 grid md:grid-cols-2 gap-x-10 gap-y-5 max-w-5xl">
                    <Row k="user" v={p.user} />
                    <Row k="problem" v={p.problem} />
                    <Row k="bet" v={p.bet} />
                    <Row k="metric" v={p.metric} highlight />
                    <Row k="trade-off" v={p.tradeoff} />
                    <Row k="outcome" v={p.outcome} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <header className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                Section 03 · how I think about product
              </p>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
                Four things I believe.
              </h2>
            </div>
          </header>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {pmLessons.map((l) => (
              <article key={l.title} className="fill-slide border hairline p-6 cursor-default">
                <h3 className="display text-2xl sm:text-3xl">{l.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed opacity-85 max-w-prose2">
                  {l.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Community />

      <section className="border-b hairline">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              Also · the engineering edition
            </p>
            <h2 className="display text-5xl sm:text-6xl mt-2">
              If you want the depth.
            </h2>
          </div>
          <div className="md:col-span-7 text-[15px] leading-relaxed max-w-prose2 border-l hairline pl-6 md:pl-10">
            <p>
              Same person, same work, told as an engineering portfolio: SignalOps
              rebuilt on Redis Streams, Sentinel's gateway architecture, the
              hallucination-monitoring research with Dr. Grewe. Code snippets,
              architecture diagrams, the lot.
            </p>
            <Link
              href="/"
              className="fill-slide inline-block mt-5 border hairline px-4 py-2 text-[13px]"
            >
              → read the engineering edition
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Row({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-widest opacity-60 mb-1">
        {k}
      </div>
      <p
        className={`text-[14.5px] leading-relaxed ${
          highlight ? "num-red font-semibold" : ""
        }`}
      >
        {v}
      </p>
    </div>
  );
}

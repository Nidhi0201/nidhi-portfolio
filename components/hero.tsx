import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <section className="relative border-b hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-14 sm:pt-16 sm:pb-24">
        <div className="flex items-end justify-between text-[11px] uppercase tracking-widest mb-10 sm:mb-14">
          <span>{today} · Fremont, CA</span>
          <span className="hidden sm:inline">No. 001 · the cover</span>
        </div>
        <h1 className="display text-[14vw] sm:text-[11vw] lg:text-[9rem] xl:text-[11rem] max-w-[18ch]">
          Software you can{" "}
          <span className="italic" style={{ color: "var(--dispatch)" }}>
            actually
          </span>{" "}
          trust.
        </h1>
        <div className="mt-8 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
          <div className="md:col-span-7 lg:col-span-6 border-t hairline pt-4">
            <p className="text-[11px] uppercase tracking-widest mb-3 opacity-70">
              The lede
            </p>
            <p className="text-[1.1rem] sm:text-[1.2rem] leading-relaxed max-w-prose2">
              {site.short} Right now I'm building <b>Sentinel</b>, a self-hosted
              LLM gateway with built-in evals. On the side I research
              hallucination monitoring in AI radiology reports.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-[13px]">
              <Link
                href="#game"
                className="fill-slide border hairline px-4 py-2"
              >
                → spot the hallucination
              </Link>
              <Link
                href="#work"
                className="fill-slide border hairline px-4 py-2"
              >
                → case studies
              </Link>
              <a
                href={site.links.resume}
                download
                className="fill-slide border hairline px-4 py-2"
              >
                ↓ resume.pdf
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
                <span className="font-semibold">{site.name}</span>
              </p>
              <p className="opacity-80">
                {site.education.degree} · {site.education.school}, graduating{" "}
                {site.education.graduation}
              </p>
              <p className="opacity-80">
                Open to new-grad full-time Software / AI Engineering roles · 2027
              </p>
              <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1">
                <a href={site.links.github} className="underline-hover">
                  github/Nidhi0201
                </a>
                <a href={site.links.linkedin} className="underline-hover">
                  linkedin/np124
                </a>
                <a
                  href={`mailto:${site.links.email}`}
                  className="underline-hover"
                >
                  {site.links.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

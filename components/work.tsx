import Link from "next/link";
import { projects, olderProjects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <header className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              Section 04 · work
            </p>
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
              Four projects, four problems with trust.
            </h2>
          </div>
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            observe · evaluate · fail loud
          </p>
        </header>

        <div className="mt-12 border-t hairline">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className="grid md:grid-cols-12 gap-6 border-b hairline py-8 group"
            >
              <div className="md:col-span-1 text-[11px] uppercase tracking-widest opacity-50 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="display text-3xl sm:text-4xl">{p.name}</h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="mt-3 max-w-prose2 text-[15px] leading-relaxed">
                  {p.oneLiner}
                </p>
                <ul className="mt-4 space-y-1.5 text-[13.5px] leading-relaxed">
                  {p.highlights.map((h) => (
                    <li key={h} className="pl-4 relative">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.6em] w-2 h-px bg-[color:var(--dispatch)]"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] uppercase tracking-widest opacity-70">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-[13px]">
                  {p.caseStudy && (
                    <Link
                      href={`/case-studies/${p.slug}`}
                      className="underline-hover"
                    >
                      → read the case study
                    </Link>
                  )}
                  {p.links?.github && (
                    <a href={p.links.github} className="underline-hover">
                      → github
                    </a>
                  )}
                  {p.links?.demo && (
                    <a href={p.links.demo} className="underline-hover">
                      → live demo
                    </a>
                  )}
                </div>
              </div>
              <aside className="md:col-span-4">
                {p.metrics && (
                  <div className="grid grid-cols-2 gap-2">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="fill-slide border hairline p-3 cursor-default">
                        <div className="text-[10px] uppercase tracking-widest opacity-60">
                          {m.label}
                        </div>
                        <div className="num num-red font-semibold tabular-nums text-[16px]">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </aside>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-[11px] uppercase tracking-widest opacity-70 mb-3">
            more work
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-[13.5px]">
            {olderProjects.map((o) => (
              <li key={o.name} className="fill-slide border hairline p-3 cursor-default">
                <span className="font-semibold">{o.name}</span> —{" "}
                <span className="opacity-80">{o.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: "shipped" | "building" | "demo" }) {
  const map = {
    shipped: { color: "var(--pass)", label: "shipped" },
    building: { color: "var(--warn)", label: "building" },
    demo: { color: "var(--dispatch)", label: "live demo" },
  } as const;
  const m = map[status];
  return (
    <span
      className="text-[10px] uppercase tracking-widest border px-1.5 py-0.5"
      style={{ borderColor: m.color, color: m.color }}
    >
      ● {m.label}
    </span>
  );
}

import { research } from "@/content/experience";

export function ResearchSection() {
  return (
    <section id="research" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-12 gap-8">
        <header className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            Section 06 · research
          </p>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
            Teaching a model to write Findings.
          </h2>
        </header>
        <article className="md:col-span-7 border-l hairline pl-6 md:pl-10">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            {research.status} · advisor {research.advisor}
          </p>
          <h3 className="display text-3xl sm:text-4xl mt-2 max-w-prose2">
            {research.title}
          </h3>
          <p className="mt-5 text-[15px] leading-relaxed max-w-prose2">
            {research.summary}
          </p>

          {/* done */}
          <div className="mt-8 border hairline p-5 max-w-prose2">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                {research.done.heading}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-pass">
                ● completed
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed">
              {research.done.bullets.map((b) => (
                <li key={b} className="pl-4 relative">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.6em] w-2 h-px bg-pass"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {research.done.metrics.map((m) => (
                <div
                  key={m.label}
                  className="fill-slide border hairline p-3 cursor-default"
                >
                  <div className="text-[10px] uppercase tracking-widest opacity-60">
                    {m.label}
                  </div>
                  <div className="num num-red font-semibold tabular-nums text-[18px]">
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11.5px] opacity-70">
              vs. the un-tuned baseline, on a 19-report test set. Preliminary.
            </p>
          </div>

          {/* planned */}
          <div className="mt-5 border hairline p-5 max-w-prose2 bg-[color:var(--rulesoft)]/15">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                {research.next.heading}
              </p>
              <span className="text-[10px] uppercase tracking-widest text-warn">
                ▸ planned
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed">
              {research.next.bullets.map((b) => (
                <li key={b} className="pl-4 relative">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.6em] w-2 h-px bg-warn"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* synthetic example */}
          <div className="mt-6 border hairline p-5 text-[13px] leading-relaxed max-w-prose2">
            <p className="text-[11px] uppercase tracking-widest opacity-70 mb-3">
              synthetic walk-through · not a real patient
            </p>
            <p>
              <span className="opacity-70">① radiologist impression (input):</span>{" "}
              "Atelectasis in the right lower lobe. No pneumothorax."
            </p>
            <p className="mt-2">
              <span className="opacity-70">② model-generated findings:</span>{" "}
              "Low lung volumes. Patchy opacity in the right lower lobe,
              most consistent with atelectasis. No evidence of pneumothorax
              or pleural effusion."
            </p>
            <p className="mt-3 opacity-85">
              → The current text-only model drafts Findings from the Impression
              alone. The{" "}
              <span className="bg-[color:var(--dispatch)]/15 outline outline-1 outline-[color:var(--dispatch)] px-[2px]">
                planned dual-modality version
              </span>{" "}
              will also receive the chest X-ray and can disagree with the
              Impression when the image doesn't support it.
            </p>
          </div>

          <p className="mt-4 text-[12px] opacity-70">{research.note}</p>
        </article>
      </div>
    </section>
  );
}

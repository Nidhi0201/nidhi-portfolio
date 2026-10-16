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
            Catching hallucinations in radiology.
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
          <div className="mt-6 border hairline p-5 text-[13px] leading-relaxed max-w-prose2 bg-[color:var(--rulesoft)]/20">
            <p className="text-[11px] uppercase tracking-widest opacity-70 mb-2">
              synthetic example · not a real patient
            </p>
            <p>
              <span className="opacity-70">findings:</span>{" "}
              "Lung volumes are low. Patchy opacity in the right lower lobe,
              most consistent with atelectasis. No pneumothorax."
            </p>
            <p className="mt-2">
              <span className="opacity-70">generated impression:</span>{" "}
              <span className="bg-[color:var(--dispatch)]/15 outline outline-1 outline-[color:var(--dispatch)] px-[2px]">
                "Right-sided pneumothorax
              </span>{" "}
              with associated atelectasis in the lower lobe."
            </p>
            <p className="mt-2 opacity-80">
              → the monitor flags "pneumothorax" as unsupported and "right-sided"
              as a laterality contradiction. AUROC on injected errors is what we
              report.
            </p>
          </div>
          <p className="mt-4 text-[12px] opacity-70">{research.note}</p>
        </article>
      </div>
    </section>
  );
}

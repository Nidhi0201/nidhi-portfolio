"use client";
import { useMemo, useState } from "react";
import { paragraphs, type Paragraph } from "@/content/hallucination";

export function HallucinationGame() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [revealed, setRevealed] = useState(false);
  const p: Paragraph = paragraphs[idx];

  const planted = useMemo(
    () => new Set(p.sentences.map((s, i) => (s.false ? i : -1)).filter((i) => i >= 0)),
    [p],
  );

  const tp = [...picked].filter((i) => planted.has(i)).length;
  const fp = [...picked].filter((i) => !planted.has(i)).length;
  const precision = picked.size ? tp / picked.size : 0;
  const recall = planted.size ? tp / planted.size : 0;

  function toggle(i: number) {
    if (revealed) return;
    setPicked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function next() {
    setIdx((i) => (i + 1) % paragraphs.length);
    setPicked(new Set());
    setRevealed(false);
  }

  function cls(i: number, s: { false?: boolean }) {
    if (!revealed) {
      return picked.has(i)
        ? "bg-[color:var(--dispatch)]/15 outline outline-1 outline-[color:var(--dispatch)]"
        : "hover:bg-[color:var(--rulesoft)]/40";
    }
    if (s.false && picked.has(i))
      return "bg-pass/15 outline outline-1 outline-pass";
    if (s.false && !picked.has(i))
      return "bg-[color:var(--dispatch)]/15 outline outline-1 outline-[color:var(--dispatch)]";
    if (!s.false && picked.has(i))
      return "bg-warn/15 outline outline-1 outline-warn line-through decoration-warn/60";
    return "";
  }

  return (
    <section
      id="game"
      className="border-b hairline"
      aria-labelledby="game-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-12 gap-8">
        <header className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            Section 01 · interactive
          </p>
          <h2
            id="game-title"
            className="display text-5xl sm:text-6xl lg:text-7xl mt-2"
          >
            Spot the hallucination.
          </h2>
          <p className="mt-5 max-w-prose2 leading-relaxed text-[15px]">
            This is a short AI-written paragraph about me. A few sentences are
            quietly false. Click the ones you think an AI made up — then reveal
            the answer. The site will score you on precision and recall, which
            is exactly what my research and evals do, automatically.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[12px]">
            <button
              onClick={() => setRevealed(true)}
              disabled={revealed}
              className="fill-slide border hairline px-3 py-2 disabled:opacity-50"
            >
              reveal answers
            </button>
            <button onClick={next} className="fill-slide border hairline px-3 py-2">
              next paragraph →
            </button>
          </div>
          {revealed && (
            <div className="mt-8 border-t hairline pt-5 text-[13px] space-y-2">
              <p className="text-[11px] uppercase tracking-widest opacity-70">
                your score
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Stat label="precision" value={fmtPct(precision)} />
                <Stat label="recall" value={fmtPct(recall)} />
                <Stat label="true positives" value={`${tp} / ${planted.size}`} />
                <Stat label="false alarms" value={`${fp}`} />
              </div>
              <p className="opacity-70 pt-3 leading-relaxed">
                This is the same loop my{" "}
                <a href="#work" className="underline-hover">
                  Resume Reviewer
                </a>{" "}
                evals run on every change — 30 cases, 15 planted hallucinations,
                scored for recall and false alarms. Sentinel will run it live on
                every model response.
              </p>
            </div>
          )}
        </header>
        <article className="md:col-span-8">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            {p.title}
          </p>
          <div className="mt-3 border hairline p-5 sm:p-7 text-[17px] sm:text-[18px] leading-[1.8] max-w-prose2">
            {p.sentences.map((s, i) => (
              <button
                key={`${p.id}-${i}`}
                onClick={() => toggle(i)}
                aria-pressed={picked.has(i)}
                className={`cursor-pointer transition rounded-sm px-[2px] text-left ${cls(
                  i,
                  s,
                )}`}
                disabled={revealed}
              >
                {s.text}{" "}
              </button>
            ))}
          </div>
          {revealed && (
            <ul className="mt-5 space-y-3 text-[13px]">
              {p.sentences
                .map((s, i) => ({ s, i }))
                .filter(({ s }) => s.false)
                .map(({ s, i }) => (
                  <li
                    key={i}
                    className="border-l-2 border-[color:var(--dispatch)] pl-3"
                  >
                    <span className="opacity-70">hallucination:</span>{" "}
                    <span className="italic">"{s.text}"</span>
                    <br />
                    <span className="opacity-80">→ {s.truth}</span>
                  </li>
                ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="fill-slide border hairline p-3 cursor-default">
      <div className="text-[10px] uppercase tracking-widest opacity-60">
        {label}
      </div>
      <div className="num num-red font-semibold tabular-nums text-[18px]">{value}</div>
    </div>
  );
}

function fmtPct(x: number) {
  return `${Math.round(x * 100)}%`;
}

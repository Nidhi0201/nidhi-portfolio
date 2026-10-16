"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type Question = { id: string; q: string; answer: string; score: number };

const Qs: Question[] = [
  {
    id: "building",
    q: "What are you building?",
    answer:
      "Sentinel — a self-hosted LLM gateway with built-in evals. It sits between an app and OpenAI/Anthropic, logs every request, and fails a PR when eval scores drop against a baseline.",
    score: 0.94,
  },
  {
    id: "why-hire",
    q: "Why should I hire you?",
    answer:
      "I ship: SignalOps hit 9,750 logs/sec with 0 false positives in 1,200 ticks. I measure what I ship: 30-case eval sets, injected hallucinations, recall tracked. And I teach ~225 students a year.",
    score: 0.96,
  },
  {
    id: "trust",
    q: "What does \"trustworthy AI\" mean to you?",
    answer:
      "Three things: observable (every request logged with cost and latency), evaluated (groundedness and hallucination checks on every response), and honest about uncertainty (fail loud, not lie quiet).",
    score: 0.91,
  },
];

const stages = [
  { id: "auth", label: "auth", t: 8 },
  { id: "route", label: "route", t: 12 },
  { id: "model", label: "model", t: 86 },
  { id: "eval", label: "eval", t: 36 },
] as const;

export function Pipeline() {
  const [picked, setPicked] = useState<Question | null>(null);
  const [stage, setStage] = useState(-1);
  const [typed, setTyped] = useState("");
  const [metrics, setMetrics] = useState({ latency: 0, tokens: 0, cost: 0, score: 0 });
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const run = useCallback((q: Question) => {
    setPicked(q);
    setStage(-1);
    setTyped("");
    setMetrics({ latency: 0, tokens: 0, cost: 0, score: 0 });

    stages.forEach((s, i) => {
      setTimeout(() => {
        setStage(i);
        setMetrics((m) => ({ ...m, latency: m.latency + s.t }));
      }, i * 450 + 300);
    });

    const total = stages.length * 450 + 500;
    setTimeout(() => {
      setMetrics({
        latency: stages.reduce((a, s) => a + s.t, 0),
        tokens: 180 + Math.floor(Math.random() * 60),
        cost: 0.0021,
        score: q.score,
      });
      let i = 0;
      typingRef.current && clearInterval(typingRef.current);
      typingRef.current = setInterval(() => {
        i += 2;
        setTyped(q.answer.slice(0, i));
        if (i >= q.answer.length && typingRef.current)
          clearInterval(typingRef.current);
      }, 18);
    }, total);
  }, []);

  useEffect(() => () => {
    if (typingRef.current) clearInterval(typingRef.current);
  }, []);

  return (
    <section
      id="pipeline"
      className="border-b hairline"
      aria-labelledby="pipe-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid md:grid-cols-12 gap-8">
          <header className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              Section 02 · live demo
            </p>
            <h2 id="pipe-title" className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
              Watch a request go through the gateway.
            </h2>
            <p className="mt-5 max-w-prose2 text-[15px] leading-relaxed">
              Pick a question. It travels through a scripted mini-Sentinel —
              auth, routing, model, eval check — and lands as an answer with
              latency, token count, cost, and an eval score. No jargon.
            </p>
            <div className="mt-6 space-y-2">
              {Qs.map((q) => (
                <button
                  key={q.id}
                  onClick={() => run(q)}
                  className="fill-slide block w-full text-left border hairline px-3 py-2 text-[13px]"
                >
                  → {q.q}
                </button>
              ))}
            </div>
          </header>

          <div className="md:col-span-8">
            <div className="border hairline bg-[color:var(--rulesoft)]/15 p-4 sm:p-6 relative">
              <p className="text-[11px] uppercase tracking-widest opacity-70 mb-6">
                Sentinel · gateway trace
              </p>

              <div className="grid grid-cols-4 gap-2 sm:gap-4 relative">
                {stages.map((s, i) => (
                  <div
                    key={s.id}
                    className={`border hairline p-3 transition-colors ${
                      stage >= i
                        ? "bg-[color:var(--dispatch)]/10 border-[color:var(--dispatch)]"
                        : ""
                    }`}
                    aria-current={stage === i ? "step" : undefined}
                  >
                    <div className="text-[10px] uppercase tracking-widest opacity-70">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-semibold text-[14px] mt-1">
                      {s.label}
                    </div>
                    <div className="text-[11px] opacity-70 tabular-nums mt-1">
                      {stage >= i ? `${s.t} ms` : "—"}
                    </div>
                  </div>
                ))}
                {/* traveling packet */}
                <div
                  aria-hidden
                  className="absolute top-1/2 h-2 w-2 rounded-full bg-[color:var(--dispatch)] transition-all duration-500"
                  style={{
                    left: `calc(${(Math.max(stage, 0) + 0.5) * 25}% - 4px)`,
                    opacity: stage >= 0 && stage < stages.length ? 1 : 0,
                    transform: "translateY(-50%)",
                    boxShadow: "0 0 0 4px color-mix(in oklab, var(--dispatch) 30%, transparent)",
                  }}
                />
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[13px]">
                <Metric label="latency" value={`${metrics.latency || "—"} ms`} />
                <Metric label="tokens" value={`${metrics.tokens || "—"}`} />
                <Metric
                  label="cost"
                  value={metrics.cost ? `$${metrics.cost.toFixed(4)}` : "—"}
                />
                <Metric
                  label="eval"
                  value={metrics.score ? metrics.score.toFixed(2) : "—"}
                  tone={metrics.score >= 0.9 ? "pass" : "warn"}
                />
              </div>

              <div className="mt-6 border-t hairline-soft pt-4">
                <p className="text-[11px] uppercase tracking-widest opacity-70 mb-2">
                  response
                </p>
                <p className="min-h-[6rem] text-[15px] leading-relaxed max-w-prose2">
                  {picked ? typed : "Pick a question to start a trace."}
                  <span className="inline-block w-[6px] h-[1em] -mb-[2px] bg-current animate-pulse ml-[2px]" aria-hidden />
                </p>
              </div>
            </div>
            <p className="text-[11px] opacity-60 mt-3">
              Scripted answers. Sentinel is in active development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "pass" | "warn";
}) {
  const color =
    tone === "pass"
      ? "text-pass"
      : tone === "warn"
      ? "text-warn"
      : "num-red";
  return (
    <div className="border hairline-soft p-2">
      <div className="text-[10px] uppercase tracking-widest opacity-60">
        {label}
      </div>
      <div className={`num font-semibold tabular-nums text-[15px] ${color}`}>
        {value}
      </div>
    </div>
  );
}

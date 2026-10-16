"use client";
import { useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  label: string;
  note: string;
  snippet?: string;
  lang?: string;
};

export function Architecture({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState<string | null>(steps[0]?.id ?? null);
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const refs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            if (e.isIntersecting) next.add((e.target as HTMLElement).dataset.id!);
          });
          return next;
        });
      },
      { threshold: 0.25 },
    );
    steps.forEach((s) => {
      const el = refs.current[s.id];
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [steps]);

  const activeStep = steps.find((s) => s.id === active) ?? steps[0];

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      <ol className="lg:col-span-7 space-y-3">
        {steps.map((s, i) => {
          const seen = visible.has(s.id);
          const isActive = active === s.id;
          return (
            <li
              key={s.id}
              data-id={s.id}
              ref={(el) => {
                refs.current[s.id] = el;
              }}
            >
              <button
                onClick={() => setActive(s.id)}
                aria-pressed={isActive}
                className={`w-full text-left border hairline p-4 transition-all duration-500 ${
                  seen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                } ${isActive ? "bg-[color:var(--dispatch)]/5 border-[color:var(--dispatch)]" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-60">
                      {String(i + 1).padStart(2, "0")} · component
                    </div>
                    <div className="font-semibold text-[16px] mt-1">
                      {s.label}
                    </div>
                    <p className="text-[13px] opacity-80 mt-2 max-w-prose2 leading-relaxed">
                      {s.note}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest opacity-50">
                    {isActive ? "▾" : "▸"}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
      <aside className="lg:col-span-5">
        <div className="sticky top-6 border hairline p-4 bg-[color:var(--rulesoft)]/15">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            trade-off · {activeStep.label}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed">{activeStep.note}</p>
          {activeStep.snippet && (
            <pre className="mt-4 bg-[color:var(--ink)] text-[color:var(--paper)] p-3 overflow-auto text-[12px] leading-[1.6]">
              <code>{activeStep.snippet}</code>
            </pre>
          )}
        </div>
      </aside>
    </div>
  );
}

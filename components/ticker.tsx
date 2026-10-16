"use client";
import { metrics } from "@/content/site";

export function Ticker() {
  const items = [...metrics, ...metrics];
  return (
    <div
      className="border-b hairline overflow-hidden ticker select-none"
      aria-label="Live metrics ticker"
    >
      <div className="flex items-center gap-10 py-3 tick-track whitespace-nowrap text-[12px]">
        {items.map((m, i) => (
          <span key={i} className="flex items-baseline gap-2">
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: "var(--dispatch)" }}
              aria-hidden
            />
            <span className="font-semibold tabular-nums">{m.value}</span>
            <span className="opacity-60 uppercase tracking-widest text-[10px]">
              {m.label}
            </span>
            <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

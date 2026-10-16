"use client";
import { useEffect, useRef, useState } from "react";

const counters = [
  { value: 200, label: "hackers at HackHayward" },
  { value: 20000, label: "sponsor dollars raised", prefix: "$" },
  { value: 225, label: "students taught at GMIS × CAHSI", prefix: "~" },
  { value: 12, label: "GDG events hosted" },
  { value: 15, label: "team led" },
  { value: 4, label: "semesters tutoring" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Count({ to, prefix }: { to: number; prefix?: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v.toLocaleString()}
    </span>
  );
}

export function Community() {
  return (
    <section
      id="community"
      className="border-b hairline"
      aria-labelledby="comm-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <header className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              Section 05 · people
            </p>
            <h2
              id="comm-title"
              className="display text-5xl sm:text-6xl lg:text-7xl mt-2"
            >
              Building <span className="italic">people</span>, not just code.
            </h2>
          </div>
          <p className="md:col-span-5 self-end text-[15px] leading-relaxed max-w-prose2">
            I tutored four semesters, co-led a workshop that reached ~225
            students in Albuquerque, ran a 200-person hackathon with 11 judges,
            and raised $20K from 12 sponsors for it. Teaching is how I learn.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border hairline">
          {counters.map((c, i) => (
            <div
              key={c.label}
              className="fill-slide p-5 border-b hairline-soft lg:border-b-0 border-r hairline-soft [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(6n)]:border-r-0 lg:[&:nth-last-child(-n+6)]:border-b-0 md:[&:nth-last-child(-n+3)]:border-b-0 overflow-hidden cursor-default"
            >
              <div className="display num num-red text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl leading-none whitespace-nowrap">
                <Count to={c.value} prefix={c.prefix} />
              </div>
              <div className="mt-3 text-[10.5px] uppercase tracking-widest opacity-70 leading-tight">
                {c.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 text-[14px]">
          <div className="border hairline p-5">
            <h3 className="font-semibold">HackHayward (nonprofit)</h3>
            <p className="opacity-80 mt-2 leading-relaxed">
              President · 2024 — present. I lead a 15-person team running a
              200-person hackathon. In 2025 I raised $20,000 from 12 sponsors
              and taught a Google ADK workshop on agent memory and MCP.
            </p>
          </div>
          <div className="border hairline p-5">
            <h3 className="font-semibold">
              Google Developer Groups · CSU East Bay
            </h3>
            <p className="opacity-80 mt-2 leading-relaxed">
              VP, Technical Events · Aug 2024 — present. Ran 12 events this
              year and co-led a workshop at the GMIS × CAHSI summit in
              Albuquerque teaching ~225 students to build an AI code-review
              assistant with Google ADK and Gemini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

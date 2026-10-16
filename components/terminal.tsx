"use client";
import { useEffect, useRef, useState } from "react";
import { commands } from "@/content/terminal";

type Line = { kind: "in" | "out"; text: string };

export function Terminal() {
  const [history, setHistory] = useState<Line[]>([
    { kind: "out", text: "nidhi@dispatch:~$ type `help` to list commands" },
  ]);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...history, { kind: "in", text: raw }];
    if (!cmd) {
      setHistory(next);
      return;
    }
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const out = commands[cmd];
    if (out) {
      setHistory([...next, ...out.map<Line>((text) => ({ kind: "out", text }))]);
    } else {
      setHistory([
        ...next,
        {
          kind: "out",
          text: `command not found: ${cmd} · try \`help\``,
        },
      ]);
    }
  }

  return (
    <section id="terminal" className="border-b hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 grid md:grid-cols-12 gap-8">
        <header className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest opacity-70">
            Section 07 · optional
          </p>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
            Prefer a shell?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed max-w-prose2">
            Type <code>help</code> to list commands. Try <code>whoami</code>,
            <code> ls projects</code>, <code>cat signalops.md</code>, or
            <code> sudo hire</code>.
          </p>
        </header>
        <div className="md:col-span-8">
          <div
            onClick={() => inputRef.current?.focus()}
            className="border hairline bg-[color:var(--ink)] text-[color:var(--paper)] dark:bg-[color:var(--rulesoft)]/10 dark:text-[color:var(--paper)] p-4 h-80 overflow-auto relative scanline cursor-text"
            role="group"
            aria-label="Interactive terminal"
          >
            <div ref={scrollRef} className="h-full overflow-auto">
              {history.map((l, i) => (
                <div key={i} className="whitespace-pre-wrap">
                  {l.kind === "in" ? (
                    <span>
                      <span className="text-pass">nidhi@dispatch</span>
                      <span className="opacity-60">:</span>
                      <span className="text-warn">~</span>
                      <span className="opacity-60">$ </span>
                      {l.text}
                    </span>
                  ) : (
                    <span className="opacity-90">{l.text}</span>
                  )}
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  run(value);
                  setValue("");
                }}
                className="flex items-center gap-2 mt-1"
              >
                <span>
                  <span className="text-pass">nidhi@dispatch</span>
                  <span className="opacity-60">:</span>
                  <span className="text-warn">~</span>
                  <span className="opacity-60">$</span>
                </span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                  aria-label="Terminal input"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { experience, skills, certifications, research } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

type Job = {
  id: string;
  name: string;
  duration: string;
  logs: string[];
};

const buildJobs = (): Job[] => [
  {
    id: "education",
    name: "education",
    duration: "4.0y",
    logs: [
      `✓ ${site.education.degree} · ${site.education.school}`,
      `✓ GPA kept, 4 semesters as a learning assistant tutoring 20–50 students/term`,
      `✓ graduating ${site.education.graduation}`,
    ],
  },
  {
    id: "projects",
    name: "projects",
    duration: "3m 42s",
    logs: [
      `✓ signalops · 2,000 → 9,750 logs/sec (4.8×)`,
      `✓ signalops · 19,810 docs/sec ingest at 1M-doc load test`,
      `✓ signalops · <15 ms p95 search · 0 false pos in 1,200 ticks`,
      `✓ signalops · 92 integration tests on live containers in CI`,
      `✓ resume-reviewer · 15/15 planted hallucinations caught, 2 fp`,
      `▶ sentinel · in progress · groundedness + PR-fail-on-regression`,
      `✓ banking · 20-thread tcp · 27 junit tests passing`,
    ],
  },
  {
    id: "leadership",
    name: "leadership",
    duration: "2y 1m",
    logs: [
      `✓ hackhayward · president · raised $20,000 from 12 sponsors`,
      `✓ hackhayward · 200 hackers · 11 judges · 2 keynotes · 15-person team`,
      `✓ gdg csueb · vp technical events · 12 events`,
      `✓ gmis × cahsi · co-led workshop · ~225 students taught`,
    ],
  },
  {
    id: "research",
    name: "research",
    duration: "ongoing",
    logs: [
      `▶ ${research.title} · advisor ${research.advisor}`,
      `✓ MIMIC-CXR v2.0.0 split 80/10/10 (credentialed access)`,
      `✓ monitors: text-only vs text + xray · AUROC / AUPRC / RadGraph`,
      `… injected errors: negation flips, laterality / severity, unsupported dx`,
    ],
  },
  {
    id: "skills",
    name: "skills",
    duration: "0.9s",
    logs: Object.entries(skills).map(
      ([k, v]) => `✓ ${k.padEnd(14)} ${v.join(", ")}`,
    ),
  },
  {
    id: "certs",
    name: "certifications",
    duration: "0.1s",
    logs: certifications.map((c) => `✓ ${c.name} · ${c.date}`),
  },
];

export function CiRun() {
  const [token, setToken] = useState(0);
  const [open, setOpen] = useState<Record<string, boolean>>({
    projects: true,
    leadership: true,
  });
  const jobs = buildJobs();
  const rerun = () => setToken((t) => t + 1);

  return (
    <section
      id="ci-run"
      className="border-b hairline bg-[color:var(--rulesoft)]/20"
      aria-labelledby="ci-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-[11px] uppercase tracking-widest opacity-70">
              Section 03 · experience · as a CI run
            </p>
            <h2 id="ci-title" className="display text-5xl sm:text-6xl lg:text-7xl mt-2">
              The résumé, re-run.
            </h2>
            <p className="mt-5 max-w-prose2 text-[15px] leading-relaxed">
              The same facts a recruiter needs, rendered like a GitHub Actions
              run. Click a job to expand its logs. Hit re-run to replay from
              the top.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest opacity-70">
              workflow: career.yml · run #{3 + token}
            </span>
            <button
              onClick={rerun}
              className="fill-slide border hairline px-3 py-2 text-[12px]"
            >
              ⟳ re-run
            </button>
          </div>
        </div>

        <div className="mt-10 border hairline bg-[color:var(--bg)]" key={token}>
          {jobs.map((j, i) => (
            <JobRow
              key={j.id}
              job={j}
              index={i}
              open={!!open[j.id]}
              onToggle={() => setOpen((o) => ({ ...o, [j.id]: !o[j.id] }))}
            />
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {experience.map((e) => (
            <article key={e.role + e.org} className="border hairline p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-[15px]">{e.role}</h3>
                <span className="text-[11px] uppercase tracking-widest opacity-60">
                  {e.dates}
                </span>
              </div>
              <p className="text-[13px] opacity-80">{e.org}</p>
              <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed">
                {e.bullets.map((b) => (
                  <li key={b} className="pl-4 relative">
                    <span className="absolute left-0 top-[0.6em] w-2 h-px bg-[color:var(--fg)] opacity-50" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobRow({
  job,
  index,
  open,
  onToggle,
}: {
  job: Job;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const [typed, setTyped] = useState<string[]>([]);
  const running = index === 0 ? true : true;

  useEffect(() => {
    if (!open) {
      setTyped([]);
      return;
    }
    let i = 0;
    setTyped([]);
    const t = setInterval(() => {
      i++;
      setTyped(job.logs.slice(0, i));
      if (i >= job.logs.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, [open, job.logs]);

  return (
    <div className="border-b hairline-soft last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-[color:var(--rulesoft)]/30"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3 text-[14px]">
          <span
            aria-hidden
            className="inline-flex w-4 h-4 items-center justify-center rounded-full text-[10px]"
            style={{
              background: running ? "var(--pass)" : "transparent",
              color: "var(--paper)",
            }}
          >
            ✓
          </span>
          <span className="font-semibold">{job.name}</span>
          <span className="opacity-50 text-[11px] uppercase tracking-widest">
            {open ? "▼" : "▶"}
          </span>
        </span>
        <span className="text-[11px] uppercase tracking-widest opacity-60 tabular-nums">
          {job.duration}
        </span>
      </button>
      {open && (
        <pre className="px-4 pb-4 text-[12.5px] leading-[1.65] whitespace-pre-wrap bg-transparent">
          {typed.map((l, i) => (
            <div key={i}>
              <span className="opacity-40 mr-3 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={l.startsWith("✓") ? "text-pass" : l.startsWith("▶") ? "text-warn" : ""}>
                {l}
              </span>
            </div>
          ))}
        </pre>
      )}
    </div>
  );
}

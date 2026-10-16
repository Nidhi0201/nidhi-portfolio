export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  status: "shipped" | "building" | "demo";
  stack: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  links?: { github?: string; demo?: string };
  caseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "signalops",
    name: "SignalOps",
    oneLiner:
      "Log observability and alerting platform — rebuilt ingestion on Redis Streams and load-tested to a million documents.",
    status: "shipped",
    stack: [
      "Python",
      "FastAPI",
      "OpenSearch",
      "Redis Streams",
      "PostgreSQL",
      "Docker",
      "AWS Lambda (SAM)",
      "GitHub Actions",
    ],
    highlights: [
      "Rebuilt ingestion on Redis Streams with consumer groups, stalled-message recovery, and a dead-letter queue — throughput 2,000 → 9,750 logs/sec (4.8×).",
      "Three alert rule types that suppress flapping alerts, backed by a Postgres incident store: 0 false positives across 1,200 evaluation ticks.",
      "Load-tested 1M documents: 19,810 docs/sec ingest, sub-15 ms p95 search, cursor paging past OpenSearch's 10,000-hit cap.",
      "92 integration tests against live containers in CI on every push.",
    ],
    metrics: [
      { label: "throughput", value: "9,750 logs/sec" },
      { label: "ingest peak", value: "19,810 docs/sec" },
      { label: "p95 search", value: "<15 ms" },
      { label: "false positives", value: "0 / 1,200" },
    ],
    links: { github: "https://github.com/Nidhi0201" },
    caseStudy: true,
  },
  {
    slug: "resume-reviewer",
    name: "Autonomous Resume Reviewer Agent",
    oneLiner:
      "A LangGraph agent that tailors resume bullets to a job description in four steps and explains every edit.",
    status: "shipped",
    stack: ["Python", "FastAPI", "LangGraph", "pgvector", "Next.js", "TypeScript"],
    highlights: [
      "Four-step agent: parse → rewrite → critique → explain. Every change ships with a reason the user can inspect.",
      "30-case eval set with 15 injected hallucinations. A revised critique prompt caught all 15 (up from 13), with 2 false alarms.",
      "pgvector embedding cache skips repeat API calls across runs.",
    ],
    metrics: [
      { label: "recall@hallucination", value: "15 / 15" },
      { label: "false alarms", value: "2 / 30" },
    ],
    links: { github: "https://github.com/Nidhi0201" },
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    oneLiner:
      "Self-hosted LLM gateway with built-in evals. Sits between an app and OpenAI/Anthropic, logs every request, and fails a PR when scores drop.",
    status: "building",
    stack: ["Go", "Python eval workers", "ClickHouse", "PostgreSQL", "Redis"],
    highlights: [
      "Logs every model request with cost, latency, and prompt/response pairs.",
      "Runs eval checks on live answers (groundedness, hallucination, policy) and surfaces regressions.",
      "GitHub Actions check that fails a PR when eval scores drop against a baseline.",
    ],
    links: { github: "https://github.com/Nidhi0201" },
    caseStudy: true,
  },
  {
    slug: "banking",
    name: "Multi-Client Banking System",
    oneLiner:
      "A 20-thread TCP server with race-condition fixes, 16 REST endpoints, and 27 JUnit tests. Three-person team.",
    status: "demo",
    stack: ["Java", "TCP/IP", "Multithreading", "REST", "JUnit", "Docker"],
    highlights: [
      "20-thread TCP server; race conditions resolved with synchronized access and atomic updates.",
      "16 REST endpoints with role-based access.",
      "27 JUnit tests covering the concurrency and auth paths.",
    ],
    links: { github: "https://github.com/Nidhi0201", demo: "#" },
  },
];

export const olderProjects = [
  { name: "AI CRM Insight Dashboard", note: "Internal CRM analytics with LLM-written summaries." },
  { name: "Ethical Dilemma Simulator", note: "A classroom tool for teaching AI ethics through branching scenarios." },
];

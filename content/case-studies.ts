export type Section = {
  title: string;
  body: string;
  decisions?: { q: string; a: string; snippet?: string; lang?: string }[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  constraints: string[];
  architecture: { id: string; label: string; note: string; snippet?: string; lang?: string }[];
  decisions: { q: string; a: string }[];
  results: string[];
  nextSteps?: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  signalops: {
    slug: "signalops",
    title: "SignalOps",
    subtitle: "Rebuilding log ingestion so alerts actually mean something.",
    problem:
      "The first version of SignalOps dropped messages under load and page-fatigued its users with flapping alerts. 2,000 logs/sec was a soft ceiling and the alert pipeline fired on every noisy minute.",
    constraints: [
      "A single small container has to swallow a burst of a million logs without losing any.",
      "Alerts must stop crying wolf: zero false positives on a replay set of 1,200 ticks.",
      "p95 search over 1M documents has to stay under 20 ms, even past the OpenSearch 10,000-hit cap.",
      "Everything runs in CI on real containers — no mocking Redis or OpenSearch.",
    ],
    architecture: [
      {
        id: "collect",
        label: "collectors",
        note: "FastAPI endpoints and SAM Lambdas push log batches to a Redis Stream per source.",
      },
      {
        id: "stream",
        label: "redis streams",
        note: "Consumer groups + XPENDING sweep for stalled messages. Three retries then DLQ. Backpressure comes free.",
        snippet: `# consume with ack + stale recovery
res = r.xreadgroup(group, consumer, {STREAM: ">"}, count=200, block=500)
for stream, entries in res or []:
    for id_, fields in entries:
        process(fields)
        r.xack(STREAM, group, id_)

# every N seconds, reclaim stalled
pending = r.xpending_range(STREAM, group, min="-", max="+", count=100)
for p in pending:
    if p["time_since_delivered"] > STALE_MS:
        r.xclaim(STREAM, group, consumer, STALE_MS, p["message_id"])`,
        lang: "python",
      },
      {
        id: "search",
        label: "opensearch",
        note: "Bulk-indexed in parallel workers. Cursor paging with search_after beats the 10k ceiling.",
      },
      {
        id: "alerts",
        label: "rules + incidents",
        note: "Three rule types (threshold / rate / absence) suppress flapping with a cooldown window. Postgres is the incident store.",
      },
    ],
    decisions: [
      {
        q: "Why Redis Streams and not Kafka?",
        a: "This runs on one small box. Kafka is a cluster and an operational tax; Streams give me consumer groups, XCLAIM for stalled messages, and durable logs in one Redis process. If I outgrow it, the ingest contract is the same.",
      },
      {
        q: "Why cursor paging past OpenSearch's 10,000 limit?",
        a: "`from + size` dies past 10k. `search_after` with a stable sort (timestamp, _id) is O(1) per page and plays nicely with the UI's infinite scroll.",
      },
      {
        q: "Why integration tests over mocks?",
        a: "Mocking Redis Streams hides exactly the bug I'd care about (stalled-message recovery). 92 tests run against live containers in CI. Slow is fine; wrong is not.",
      },
    ],
    results: [
      "2,000 → 9,750 logs/sec sustained throughput (4.8×).",
      "19,810 docs/sec ingest at the 1M-doc load-test peak.",
      "p95 search under 15 ms past the 10k OpenSearch cap.",
      "0 false positives across 1,200 evaluation ticks.",
    ],
    nextSteps: [
      "Multi-tenant quotas backed by a sliding-window counter.",
      "A `/healthy?` SLO endpoint summarising DLQ depth, consumer lag, and alert fire rate.",
    ],
  },
  sentinel: {
    slug: "sentinel",
    title: "Sentinel",
    subtitle:
      "An LLM gateway that fails a PR when your model gets worse.",
    problem:
      "Prompt and model changes get merged on vibes. There's no CI signal when a tweak quietly makes answers less grounded or more hallucinated — until someone complains in Slack.",
    constraints: [
      "Zero-config drop-in: an app points at Sentinel and keeps its OpenAI/Anthropic SDK call.",
      "Logs every request with cost, latency, and both sides of the conversation.",
      "Runs eval checks on the live response, not just a canned set.",
      "A GitHub Actions job can call `sentinel verify` on a branch and get a pass/fail.",
    ],
    architecture: [
      {
        id: "gw",
        label: "gateway (Go)",
        note: "Thin proxy that speaks OpenAI/Anthropic's wire format. Buffers prompts/responses and emits a trace event.",
      },
      {
        id: "store",
        label: "clickhouse + pg",
        note: "ClickHouse for traces (cheap, append-only, fast groupby). Postgres for eval baselines and PR gates.",
      },
      {
        id: "evals",
        label: "python workers",
        note: "Groundedness, retrieval precision, custom asserts. Run on sampled live traffic and on golden sets.",
      },
      {
        id: "ci",
        label: "github action",
        note: "`sentinel verify --baseline main` fails the PR when a tracked metric drops past the threshold.",
      },
    ],
    decisions: [
      {
        q: "Why not a Python gateway?",
        a: "Hot path is p99 latency. Go's runtime makes the proxy cost predictable; evals stay in Python where I already have LangGraph tooling.",
      },
      {
        q: "Why fail a PR, not a dashboard?",
        a: "A dashboard you look at sometimes. A failing check you can't ignore. The point is to put the eval signal where code review already lives.",
      },
    ],
    results: [
      "Design complete; proxy and trace schema working end-to-end on OpenAI.",
      "Eval worker runs groundedness + a hallucination check from my resume-reviewer research on sampled traffic.",
      "GitHub Action POC fails on a seeded regression.",
    ],
    nextSteps: [
      "Harden for streaming responses.",
      "Add Anthropic + OpenRouter adapters.",
      "Public v0 release and a docs page about the eval taxonomy.",
    ],
  },
};

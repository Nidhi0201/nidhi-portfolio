// PM-angled reframings of the same work. The engineering portfolio lives on `/`;
// this is the same person, told with product emphasis.

export const pmHero = {
  kicker: "Issue 10 · the product desk",
  headline: "Ship it on purpose.",
  lede:
    "I'm an engineer who ran a 200-person hackathon, raised $20,000 from 12 sponsors, and co-led a workshop teaching ~225 students at a national summit. I come to product the way I come to code: pick the sharpest problem, name the metric, cut the rest.",
};

export const pmHighlights = [
  {
    value: "200",
    label: "hackers at HackHayward",
    note: "ran the whole event as president — scope, sponsors, judges.",
  },
  {
    value: "$20,000",
    label: "sponsor budget",
    note: "closed 12 sponsors; wrote every pitch; owned the funnel.",
  },
  {
    value: "~225",
    label: "students reached in one workshop",
    note: "GMIS × CAHSI summit, Albuquerque. Co-led the session with GDG.",
  },
  {
    value: "15",
    label: "person team",
    note: "led volunteers across logistics, sponsor ops, and tech.",
  },
];

export const pmProjects = [
  {
    slug: "signalops",
    name: "SignalOps",
    user: "An on-call engineer who's been paged 3× this week.",
    problem:
      "The old alerting system cried wolf. Logs dropped under load, and real incidents hid in a sea of flapping alerts.",
    bet:
      "Rebuild ingestion for durability first, then make alerts earn their page. Zero false positives on a replay set — or the rule doesn't ship.",
    metric: "0 false positives in 1,200 evaluation ticks · 4.8× throughput.",
    tradeoff:
      "Chose Redis Streams over Kafka: one small box runs the whole thing, operational cost stays near zero at the cost of future cluster-scale ceiling. The ingest contract stays portable if we outgrow it.",
    outcome:
      "A tool my team actually trusts. The pager stopped being a joke.",
  },
  {
    slug: "resume-reviewer",
    name: "Resume Reviewer Agent",
    user: "A new grad reworking their resume for a specific role.",
    problem:
      "LLM resume tools quietly invent experience. You trust the edit, send it out, and it's a lie about your own career.",
    bet:
      "Every edit must be inspectable, and the agent must flag what it doesn't know. Build a 30-case eval set with 15 planted hallucinations and treat recall as the launch gate.",
    metric: "15 / 15 planted hallucinations caught · 2 false alarms.",
    tradeoff:
      "A sharper critique prompt caught every planted lie but added two false alarms. Shipped it anyway — false alarms are a user annoyance; a missed hallucination is a credibility bomb.",
    outcome:
      "The eval set is the product spec. Every prompt change runs it before merge.",
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    user: "A team shipping an LLM-backed feature with no CI signal when prompts regress.",
    problem:
      "Prompt and model changes get merged on vibes. The dashboard tells someone, three days later, that answers got worse.",
    bet:
      "Put the eval signal where code review already lives: a PR check that fails when a tracked metric drops past threshold.",
    metric: "Design + proxy working on OpenAI; eval worker fails a seeded regression in CI.",
    tradeoff:
      "A Go proxy on the hot path means a two-language codebase — but it keeps p99 predictable and leaves Python for eval work where my LangGraph tooling already lives.",
    outcome:
      "In active build. The point: trust in AI products should be a check, not a Slack thread.",
  },
];

export const pmLessons = [
  {
    title: "Teaching is user research.",
    body:
      "Four semesters tutoring 20–50 students a term and co-leading a 225-student workshop. I watch where people get stuck, which is also how I know what to cut from a product.",
  },
  {
    title: "Sponsors are stakeholders.",
    body:
      "Closing 12 HackHayward sponsors meant 12 different value propositions and 12 different follow-through plans. Managing those relationships is the same muscle as managing an exec review.",
  },
  {
    title: "Evals are PRDs.",
    body:
      "For LLM features, the eval set is the clearest spec you'll ever write. If you can't name the input, output, and failure mode, you don't have a product yet.",
  },
  {
    title: "Observable beats clever.",
    body:
      "Every project here is instrumented first. A feature you can't measure is a feature you can't improve, and a feature you can't improve becomes technical debt by Friday.",
  },
];

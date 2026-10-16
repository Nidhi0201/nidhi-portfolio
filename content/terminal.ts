export const commands: Record<string, string[]> = {
  help: [
    "available commands:",
    "  whoami         about me",
    "  ls projects    list projects",
    "  cat <file>     read a project file (e.g. cat signalops.md)",
    "  skills         show skills",
    "  contact        how to reach me",
    "  sudo hire      try it",
    "  clear          clear the screen",
  ],
  whoami: [
    "nidhi · software/ai engineer · fremont, ca",
    "building ai systems that measure themselves",
    "open to new-grad roles starting 2027",
  ],
  "ls projects": [
    "signalops.md       log observability @ 9,750 logs/sec",
    "resume-reviewer.md agent that catches hallucinations",
    "sentinel.md        llm gateway with built-in evals (building)",
    "banking.md         20-thread tcp server, 27 junit tests",
  ],
  "cat signalops.md": [
    "# SignalOps",
    "Rebuilt ingestion on Redis Streams · 2,000 → 9,750 logs/sec.",
    "1M-doc load test · 19,810 docs/sec · <15 ms p95.",
    "92 integration tests on live containers in CI.",
  ],
  "cat sentinel.md": [
    "# Sentinel (building)",
    "Self-hosted LLM gateway with built-in evals.",
    "Logs every request, scores groundedness, fails PRs on drop.",
  ],
  skills: [
    "python · java · typescript · sql",
    "fastapi · opensearch · redis · pgvector · next.js",
    "langgraph · google adk · mcp · evals · hallucination monitoring",
    "docker · github actions · aws · gcp",
  ],
  contact: [
    "email    nidhipr.2612@gmail.com",
    "github   github.com/Nidhi0201",
    "linkedin linkedin.com/in/np124",
  ],
  "sudo hire": [
    "[sudo] password for recruiter: ********",
    "✓ scheduling intro call",
    "✓ sending resume",
    "nice. use the contact command to reach out.",
  ],
};

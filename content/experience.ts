export const experience = [
  {
    role: "President",
    org: "HackHayward",
    dates: "2024 — present",
    bullets: [
      "Raised $20,000 from 12 sponsors.",
      "Led a 15-person team running a 200-person hackathon with 11 judges and 2 keynote speakers.",
      "Taught a Google ADK workshop on agent memory and MCP.",
    ],
  },
  {
    role: "VP, Technical Events",
    org: "Google Developer Groups — CSU East Bay",
    dates: "Aug 2024 — present",
    bullets: [
      "Ran 12 technical events across the chapter year.",
      "Co-led a workshop at the GMIS × CAHSI summit in Albuquerque teaching ~225 students to build an AI code review assistant with Google ADK and Gemini.",
    ],
  },
  {
    role: "Learning Assistant",
    org: "CSUEB STEM Lab",
    dates: "Jan 2023 — Apr 2024",
    bullets: ["Tutored 20–50 students per term across four semesters."],
  },
];

export const research = {
  title: "Hallucination Monitoring in AI-Generated Radiology Reports",
  status: "in progress",
  advisor: "Dr. Lynne Grewe",
  summary:
    "Generating radiology Impressions from Findings with Gemini on GCP using MIMIC-CXR v2.0.0 (credentialed access, 80/10/10 split). Comparing text-only vs text + X-ray monitors that flag hallucinated Impressions, scored by AUROC, AUPRC, and RadGraph on injected errors (negation flips, laterality/severity swaps, unsupported diagnoses).",
  note: "No real patient data appears on this site. Any examples below are clearly synthetic.",
};

export const certifications = [
  { name: "Building AI Agents Across Google Cloud's GenAI Stack (ADK, GCP)", date: "May 2026" },
];

export const skills = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  "Backend & Data": [
    "FastAPI",
    "REST",
    "PostgreSQL",
    "pgvector",
    "Redis Streams",
    "OpenSearch",
    "Next.js",
    "React",
  ],
  AI: [
    "LangGraph",
    "Google ADK",
    "MCP",
    "Embeddings",
    "LLM evaluation",
    "Hallucination detection",
  ],
  Infra: ["pytest", "JUnit", "Load testing", "Docker", "GitHub Actions", "Linux", "AWS", "GCP"],
};

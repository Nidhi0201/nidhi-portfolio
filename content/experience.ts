export const experience = [
  {
    role: "President",
    org: "HackHayward",
    dates: "2024 — present",
    bullets: [
      "Raised $20,000 from 12 sponsors.",
      "Led a 15-person team running a 200-person hackathon with 11 judges and 2 keynote speakers.",
      "Helped organize a Google ADK technical workshop and an AI venture-capital fireside chat.",
      "Contributed to the development of the HackHayward website.",
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
  title: "Hallucination detection in AI-generated radiology reports",
  status: "research in progress · 19 paired examples evaluated so far",
  advisor: "Dr. Lynne Grewe",
  summary:
    "Investigating an output-to-input reverse-engineering approach to hallucination detection. An AI model generates radiology Findings from an original Impression. A reconstruction model then attempts to recover the Impression from those generated Findings, so the recovered Impression can be compared against the original — surfacing where the generated Findings invented, dropped, or distorted clinical information.",
  modality:
    "The study compares single-modality (text-only) reconstruction with dual-modality (X-ray-assisted) reconstruction to investigate whether visual evidence improves hallucination detection. Comparison is ongoing; the current evaluation covers 19 paired examples.",
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

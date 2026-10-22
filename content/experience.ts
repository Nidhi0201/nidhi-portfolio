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
  title: "Generating radiology Findings from Impressions on MIMIC-CXR",
  status: "research in progress · preliminary results",
  advisor: "Dr. Lynne Grewe",
  summary:
    "Fine-tuning a model to generate the detailed radiology Findings for a chest X-ray given the radiologist's original Impression. The goal is a system that can draft clinically faithful Findings — the harder-to-write half of a report — from the shorter conclusion a radiologist already produced.",
  done: {
    heading: "What's done",
    bullets: [
      "Processed 127,650 eligible report pairs from MIMIC-CXR.",
      "Fine-tuned Gemini 3.5 Flash on the Impression → Findings task.",
      "Evaluated on a 19-report test set vs. the un-tuned baseline.",
    ],
    metrics: [
      { label: "BLEU", delta: "+134%" },
      { label: "ROUGE-L", delta: "+40%" },
      { label: "METEOR", delta: "+46%" },
    ],
  },
  next: {
    heading: "What's planned",
    bullets: [
      "Give the model the original Impression and its chest X-ray image to generate Findings — dual-modality.",
      "Compare dual-modality against the current text-only system to see whether the image improves clinical accuracy and reduces hallucinations.",
      "Expand evaluation beyond the current 19-report test set.",
    ],
  },
  note: "No real patient data appears on this site. Any example below is clearly synthetic. Metrics above are preliminary and from a small (19-report) test set.",
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

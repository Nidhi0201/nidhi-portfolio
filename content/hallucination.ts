// Each paragraph is split into sentences. Sentences flagged `false` are the planted hallucinations.
export type Sentence = { text: string; false?: boolean; truth?: string };
export type Paragraph = { id: string; title: string; sentences: Sentence[] };

export const paragraphs: Paragraph[] = [
  {
    id: "p1",
    title: "AI-generated bio · variant A",
    sentences: [
      { text: "Nidhi Prajapati is a software engineer based in Fremont, California." },
      {
        text: "She is finishing a B.S. in Computer Science at Stanford University.",
        false: true,
        truth:
          "California State University, East Bay — graduating December 2026, not Stanford.",
      },
      {
        text: "Her SignalOps project pushed log ingestion from 2,000 to 9,750 logs per second.",
      },
      {
        text: "She led a 500-person hackathon as president of HackHayward.",
        false: true,
        truth:
          "HackHayward ran a 200-person event, not 500. The $20,000 and 15-person team are real.",
      },
      {
        text: "She teaches an undergrad course on LLM evaluation at CSU East Bay.",
        false: true,
        truth:
          "I tutored for four semesters at the STEM Lab and co-led a GMIS × CAHSI workshop. I haven't taught a course of record.",
      },
    ],
  },
  {
    id: "p2",
    title: "AI-generated bio · variant B",
    sentences: [
      { text: "Nidhi's research with Dr. Lynne Grewe investigates hallucination detection in AI-generated radiology reports." },
      {
        text: "The method trains a dedicated vision model from scratch on patient X-rays.",
        false: true,
        truth:
          "The research is reverse-engineering: an AI model generates an Impression from the Findings, a reconstruction model recovers the Findings from that Impression, and the two are compared. Nothing is trained from scratch on patient X-rays.",
      },
      {
        text: "Her resume-reviewer agent catches planted hallucinations with full recall on a 30-case set.",
      },
      {
        text: "She holds a Google Cloud Professional Machine Learning Engineer certification.",
        false: true,
        truth:
          "My 2026 certification is \"Building AI Agents Across Google Cloud's GenAI Stack (ADK, GCP),\" not Professional ML Engineer.",
      },
      {
        text: "Sentinel, her current build, fails a GitHub pull request when eval scores drop against a baseline.",
      },
    ],
  },
  {
    id: "p3",
    title: "AI-generated bio · variant C",
    sentences: [
      {
        text: "SignalOps load-tested cleanly past one million documents with sub-15 ms p95 search.",
      },
      {
        text: "The alerting layer runs on Apache Kafka with three rule types.",
        false: true,
        truth: "Alerting runs on Redis Streams and Postgres, not Kafka.",
      },
      {
        text: "At the GMIS × CAHSI summit in Albuquerque she co-led a workshop for roughly 225 students.",
      },
      { text: "She is open to new-grad roles starting in 2027." },
      {
        text: "Her undergraduate thesis is on reinforcement learning in robotics.",
        false: true,
        truth:
          "My current research is hallucination monitoring in radiology report generation — not RL in robotics.",
      },
    ],
  },
];

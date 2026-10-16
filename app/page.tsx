import { Masthead } from "@/components/masthead";
import { Hero } from "@/components/hero";
import { HallucinationGame } from "@/components/hallucination-game";
import { Pipeline } from "@/components/pipeline";
import { Work } from "@/components/work";
import { CiRun } from "@/components/ci-run";
import { Community } from "@/components/community";
import { ResearchSection } from "@/components/research";
import { Terminal } from "@/components/terminal";
import { Footer } from "@/components/footer";
import { RevealOnScroll } from "@/components/reveal";

export default function Home() {
  return (
    <main>
      <RevealOnScroll />
      <Masthead />
      <Hero />
      <HallucinationGame />
      <Pipeline />
      <Work />
      <CiRun />
      <Community />
      <ResearchSection />
      <Terminal />
      <Footer />
    </main>
  );
}

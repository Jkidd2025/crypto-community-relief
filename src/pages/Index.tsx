import { Hero } from "@/components/landing/Hero";
import { Objectives } from "@/components/landing/Objectives";
import { Tokenomics } from "@/components/landing/Tokenomics";
import { Roadmap } from "@/components/landing/Roadmap";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Objectives />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
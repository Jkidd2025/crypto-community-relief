import { Hero } from "@/components/landing/Hero";
import { Objectives } from "@/components/landing/Objectives";
import { Tokenomics } from "@/components/landing/Tokenomics";
import { Roadmap } from "@/components/landing/Roadmap";
import { TransactionTax } from "@/components/landing/TransactionTax";
import { AntiWhale } from "@/components/landing/AntiWhale";
import { RiskManagement } from "@/components/landing/RiskManagement";
import { Impact } from "@/components/landing/Impact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Objectives />
      <Tokenomics />
      <TransactionTax />
      <AntiWhale />
      <Roadmap />
      <RiskManagement />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
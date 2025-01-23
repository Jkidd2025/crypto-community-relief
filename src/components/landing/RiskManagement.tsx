import { Shield, FileCheck, BarChart3, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const risks = [
  {
    icon: Shield,
    title: "Smart Contract Audits",
    description: "Engaging reputable audit firms to ensure security and compliance.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Consulting legal experts to navigate SEC regulations, especially concerning token sales and grants.",
  },
  {
    icon: BarChart3,
    title: "Volatility Strategy",
    description: "Maintaining a portion of funds in stable assets to mitigate crypto market fluctuations.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Publishing periodic reports detailing treasury holdings and grant distributions.",
  },
];

export const RiskManagement = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Risk Management & Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk) => (
            <Card key={risk.title} className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <risk.icon className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{risk.title}</h3>
                    <p className="text-muted-foreground">{risk.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
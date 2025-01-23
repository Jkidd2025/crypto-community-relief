import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  {
    title: "Debt Reduction",
    description: "Offer grants to Americans suffering from financial hardship.",
  },
  {
    title: "Community Engagement",
    description: "Develop a meme-token-based membership system that incentivizes active participation.",
  },
  {
    title: "Sustainability & Growth",
    description: "Implement a transparent transaction tax structure to fund a Bitcoin treasury.",
  },
  {
    title: "Financial Education",
    description: "Promote financial literacy within the community to break debt cycles.",
  },
];

export const Objectives = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Foundation Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((objective) => (
            <Card key={objective.title} className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                    <p className="text-muted-foreground">{objective.description}</p>
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
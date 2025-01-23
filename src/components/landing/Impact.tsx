import { Award, Users, Vote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impacts = [
  {
    icon: Award,
    title: "Debt Relief",
    description: "Offers tangible financial support to Americans under significant debt pressure.",
  },
  {
    icon: Users,
    title: "Economic Participation",
    description: "Encourages broad-based crypto participation with a low barrier to entry.",
  },
  {
    icon: Vote,
    title: "Empowered Community",
    description: "Members who hold the token have a vested interest in the Foundation's success.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Fund Growth",
    description: "Transaction taxes create a self-funding ecosystem that scales with popularity.",
  },
];

export const Impact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projected Impact & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact) => (
            <Card key={impact.title} className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <impact.icon className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground">{impact.description}</p>
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
import { Card, CardContent } from "@/components/ui/card";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation Setup & Legal Compliance",
    items: [
      "Finalize legal structure",
      "Register and comply with U.S. regulations",
      "Establish governance guidelines",
    ],
  },
  {
    phase: "Phase 2",
    title: "Smart Contract Development & Token Launch",
    items: [
      "Develop and audit smart contract",
      "Launch meme token via IDO",
      "Set up liquidity pools",
    ],
  },
  {
    phase: "Phase 3",
    title: "Community Building & Marketing",
    items: [
      "Launch marketing campaigns",
      "Begin community rewards",
      "Establish partnerships",
    ],
  },
];

export const Roadmap = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Implementation Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <Card key={phase.phase} className="border-primary/20">
              <CardContent className="p-6">
                <div className="text-primary font-bold mb-2">{phase.phase}</div>
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-start gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
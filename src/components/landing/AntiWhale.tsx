import { Card, CardContent } from "@/components/ui/card";

const measures = [
  {
    title: "Max Wallet Holding",
    value: "20,000,000 tokens",
    description: "2% of total supply",
  },
  {
    title: "Max Transaction",
    value: "5,000,000 tokens",
    description: "0.5% of total supply",
  },
];

export const AntiWhale = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Anti-Whale Measures</h2>
        <p className="text-center text-muted-foreground mb-12">Protecting token integrity and preventing market manipulation</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {measures.map((measure) => (
            <Card key={measure.title} className="border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{measure.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{measure.value}</div>
                <p className="text-muted-foreground">{measure.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
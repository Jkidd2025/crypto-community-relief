import { Card, CardContent } from "@/components/ui/card";

const taxDistribution = [
  {
    title: "Liquidity Pool",
    percentage: "40%",
    description: "Increases liquidity on decentralized exchanges, stabilizing the token price.",
  },
  {
    title: "Bitcoin Strategic Reserve",
    percentage: "30%",
    description: "Automatically converted to Bitcoin, providing a robust treasury asset.",
  },
  {
    title: "Marketing Wallet",
    percentage: "30%",
    description: "Funds promotional activities and community growth campaigns.",
  },
];

export const TransactionTax = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Service Fee Structure</h2>
        <p className="text-center text-muted-foreground mb-12">A 3% service fee applied to every transaction</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {taxDistribution.map((item) => (
            <Card key={item.title} className="border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.percentage}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
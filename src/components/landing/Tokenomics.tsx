import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const tokenomics = [
  { label: "Public Sale", value: "40%", color: "from-primary to-accent" },
  { label: "Liquidity Pool", value: "30%", color: "from-blue-500 to-cyan-500" },
  { label: "Community Rewards", value: "15%", color: "from-green-500 to-emerald-500" },
  { label: "Team & Development", value: "10%", color: "from-yellow-500 to-orange-500" },
  { label: "Marketing", value: "5%", color: "from-red-500 to-pink-500" },
];

export const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tokenomics</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {tokenomics.map((item, index) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">{item.label}</span>
                    <span className="text-lg font-bold">{item.value}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      style={{ width: item.value }}
                    />
                  </div>
                  {index < tokenomics.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
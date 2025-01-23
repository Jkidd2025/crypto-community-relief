import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Coins } from "lucide-react";

const tokenomics = [
  { 
    label: "Public Sale/Launch", 
    value: "40%", 
    amount: "400M",
    color: "from-primary to-accent",
    description: "Allocated to the public for initial fundraising and community participation."
  },
  { 
    label: "Liquidity Pool", 
    value: "30%", 
    amount: "300M",
    color: "from-blue-500 to-cyan-500",
    description: "Locked in decentralized exchanges for smooth trading and minimized slippage."
  },
  { 
    label: "Community Rewards", 
    value: "15%", 
    amount: "150M",
    color: "from-green-500 to-emerald-500",
    description: "Used for staking rewards, referral bonuses, or community events that drive engagement and long-term holding."
  },
  { 
    label: "Team & Development", 
    value: "10%", 
    amount: "100M",
    color: "from-yellow-500 to-orange-500",
    description: "Funds ongoing development, smart contract upgrades, and operational overhead. Vested over time to ensure alignment with project success."
  },
  { 
    label: "Marketing", 
    value: "5%", 
    amount: "50M",
    color: "from-red-500 to-pink-500",
    description: "Supports campaigns to expand awareness, partnerships, and educational initiatives."
  },
];

export const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Coins className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Tokenomics</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Total Supply: 1,000,000,000 (1 Billion) tokens
        </p>
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-8">
              {tokenomics.map((item, index) => (
                <div key={item.label} className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold">{item.label}</span>
                        <span className="text-xl font-bold text-primary">
                          ({item.value} | {item.amount})
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} transition-all duration-500 ease-in-out hover:opacity-80`}
                      style={{ width: item.value }}
                    />
                  </div>
                  {index < tokenomics.length - 1 && (
                    <Separator className="my-4 opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
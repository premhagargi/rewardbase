import { Users, Gift, Rocket, type LucideIcon } from "lucide-react";

const previewRewards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Turn users into growth drivers",
    description:
      "Tap into your user base to unlock a powerful new engine for growth.",
    icon: Users,
  },
  {
    title: "Reward actions that drive growth",
    description:
      "Incentivize users to take meaningful actions that contribute to your growth",
    icon: Gift,
  },
  {
    title: "Build a repeatable growth system",
    description:
      "Build a system that consistently drives growth and scales with your business.",
    icon: Rocket,
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#004C7D]"></span>
            Why RewardBase
          </span>
        </div>

        <div className="grid lg:grid-cols-[60%_35%] lg:gap-[5%] gap-12 items-start mb-16">
          {/* Left */}
          <div>
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-foreground leading-tight mb-5"
              style={{ fontWeight: 650 }}
            >
              Your users are the most powerful growth lever - yet the most underutilized
            </h2>
            <div className="space-y-4 text-base text-muted leading-relaxed">
              <p>
                Growth is getting harder - every channel is crowded, expensive, and ineffective. Meanwhile, your existing users already influence your growth through word-of-mouth, social proof, advocacy and more. 
              </p>
              <p>
But you don't have a system to activate and scale that behavior. RewardBase turns this untapped potential into a structured, repetable growth engine.              </p>
            </div>
          </div>

          {/* Right — stacked preview cards */}
          <div className="space-y-4">
            {previewRewards.map((item, i) => {
              const Icon = item.icon;
              return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border p-4 bg-card-surface hover:shadow-sm transition-shadow"
              >
                <div className="shrink-0 p-1.5">
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    style={{ color: "#004C7D" }}
                    fill="#004C7D"
                    fillOpacity={0.1}
                  />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-foreground mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[15px] font-normal text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>

  
      </div>
    </section>
  );
}

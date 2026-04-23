import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckListIcon,
  GiftIcon,
  ChartUpIcon,
} from "@hugeicons/core-free-icons";

const previewRewards = [
  {
    title: "Turn users into growth drivers",
    description:
      "Tap into your user base to unlock a powerful new engine for growth.",
    icon: CheckListIcon,
  },
  {
    title: "Reward actions that drive growth",
    description:
      "Incentivize users to take meaningful actions that directly contribute to your growth",
    icon: GiftIcon,
  },
  {
    title: "Build a repeatable growth system",
    description:
      "Build a system that continuously drives growth and scales with your business.",
    icon: ChartUpIcon,
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-medium text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#0088ff]"></span>
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
                Growth is getting harder - every channel is crowded, expensive, and ineffective.
              </p>
              <p>
                Meanwhile, your existing users already influence discovery, trust, and adoption - through referrals, reviews and sharing. But you don&apos;t have a system to activate and scale that behavior.
              </p>
              <p>
                RewardBase turns this untapped potential into a structured, repeatable growth engine.
              </p>
            </div>
          </div>

          {/* Right — stacked preview cards */}
          <div className="space-y-4">
            {previewRewards.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border p-4 bg-background hover:shadow-sm transition-shadow"
              >
                <div className="h-12 w-12 shrink-0 rounded-lg bg-card border border-border flex items-center justify-center">
                  <HugeiconsIcon icon={item.icon} size={22} className="text-muted" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

  
      </div>
    </section>
  );
}

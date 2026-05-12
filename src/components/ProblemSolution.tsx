import Image from "next/image";

const previewRewards: {
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Turn users into growth drivers",
    description:
      "Tap into your user base to unlock a powerful new engine for growth.",
    icon: "UserGroup03Icon",
  },
  {
    title: "Reward actions that drive growth",
    description:
      "Incentivize users to take meaningful actions that contribute to your growth",
    icon: "GiftCardIcon",
  },
  {
    title: "Build a repeatable growth system",
    description:
      "Build a system that drives growth and easily scales with your business.",
    icon: "ChartUpIcon",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            Why RewardBase
          </span>
        </div>

        <div className="grid lg:grid-cols-[60%_35%] lg:gap-[5%] gap-12 items-start mb-16">
          {/* Left */}
          <div>
            <h2
              className="component-title tracking-tight text-foreground leading-tight mb-5"
            >
              Your users are the most powerful growth lever - yet the most underutilized
            </h2>
            <div className="space-y-4 component-subtext text-muted leading-relaxed">
              <p>
                Growth is getting harder - every channel is crowded, expensive, and ineffective. Meanwhile, your existing users already influence your growth through word-of-mouth, social proof, advocacy and more. 
              </p>
              <p>
But you don't have a system to activate and scale that behavior. RewardBase turns this untapped potential into a structured, repetable growth engine.              </p>
            </div>
          </div>

          {/* Right — stacked preview cards */}
          <div className="space-y-4">
            {previewRewards.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border p-4 bg-card-surface hover:shadow-sm transition-shadow"
              >
                <div className="flex h-14 w-14 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0093D2]/10">
                  <Image
                    src={`/svg icons/${item.icon}.svg`}
                    alt=""
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <h4 className="card-title mb-0.5">
                    {item.title}
                  </h4>
                  <p className="card-subtext leading-relaxed">
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

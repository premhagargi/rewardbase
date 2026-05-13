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
    icon: "UserGroup03IconDual",
  },
  {
    title: "Reward actions that drive growth",
    description:
      "Incentivize users to take meaningful actions that contribute to your growth.",
    icon: "GiftCardIconDual",
  },
  {
    title: "Build a repeatable growth system",
    description:
      "Build a system that drives growth and easily scales with your business.",
    icon: "ChartUpIconDual",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
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
                <Image
                  src={`/svg icons/${item.icon}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  className="shrink-0"
                />
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

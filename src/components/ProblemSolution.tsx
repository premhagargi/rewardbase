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
      "Build a system that consistently drives growth and scales with your business.",
    icon: "ChartUpIconDual",
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
              Your users are the most powerful growth drivers - yet the most overlooked
            </h2>
            <div className="space-y-4 component-subtext text-muted leading-relaxed">
              <p>
                People who love your product naturally talk about you, recommend you,<br />
                and support you in ways no other channel can.
              </p>
              <p>
                But most teams leave this to chance, with no system to nurture and scale<br />
                these behaviors – leaving valuable growth potential untapped.
              </p>
              <p>
                RewardBase changes that. It helps you create structured programs that<br />
                activate and nurture these behaviors, turning them into a repeatable<br />
                growth engine.
              </p>
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

import Image from "next/image";

const rewards: {
  title: string;
  description: string;
  live: boolean;
  comingSoon?: boolean;
  icon: string;
}[] = [
  {
    title: "Credits",
    description:
      "Give users AI / usage credits they can spend directly inside your product.",
    live: true,
    icon: "Coins02IconDual",
  },

  {
    title: "Discount Codes",
    description:
      "Offer percentage or fixed discounts, one-time or recurring, on any purchase.",
    live: true,
    icon: "PercentSquareIconDual",
  },
  {
    title: "Wallet",
    description:
      "Let users accumulate RewardBase points and redeem rewards they choose.",
    live: true,
    icon: "Wallet03IconDual",
  },
   {
    title: "Access Unlocks",
    description:
      "Give users access to premium features, gated content or exclusive perks.",
    live: false,
    icon: "SquareUnlock02IconDual",
  },
  {
    title: "Giftcards",
    description:
      "Let users redeem rewards as gift cards from popular global brands easily.",
    live: false,
    icon: "GiftCard02IconDual",
  },
  {
    title: "Payout",
    description:
      "Send real cash rewards directly to users' bank account though managed payouts.",
    live: false,
    icon: "Money02IconDual",
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            Rewards
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-10 mb-6 sm:mb-12">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Drive action with rewards your users care about
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 component-subtext text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase gives you a flexible reward layer that adapts to any program. Configure rewards and automatically deliver them when users complete actions.
          </p>
        </div>

        {/* Reward cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.title}
              className="relative rounded-2xl border border-border px-5 py-3.5 bg-card-surface"
            >
              {reward.live && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[12px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                  <span className="h-1 w-1 rounded-full bg-blue-500" />
                  Live
                </span>
              )}
              {reward.comingSoon && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[12px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                  <span className="h-1 w-1 rounded-full bg-amber-500" />
                  Coming Soon
                </span>
              )}
              <Image
                src={`/svg icons/${reward.icon}.svg`}
                alt=""
                width={36}
                height={36}
                className="mb-3"
              />

              <h4 className="card-title mb-1.5">
                {reward.title}
              </h4>
              <p className="card-subtext leading-relaxed">
                {reward.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

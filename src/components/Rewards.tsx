import {
  Coins,
  Unlock,
  Ticket,
  Wallet,
  Gift,
  Banknote,
  type LucideIcon,
} from "lucide-react";

const rewards: {
  title: string;
  description: string;
  live: boolean;
  icon: LucideIcon;
}[] = [
  {
    title: "Credits",
    description:
      "Give users AI / usage credits they can spend directly inside your product.",
    live: true,
    icon: Coins,
  },
  {
    title: "Access Unlocks",
    description:
      "Give users access to premium features, gated content or exclusive perks.",
    live: true,
    icon: Unlock,
  },
  {
    title: "Discount Codes",
    description:
      "Offer percentage or fixed discounts, one-time or recurring, on any purchase.",
    live: false,
    icon: Ticket,
  },
  {
    title: "Wallet",
    description:
      "Let users accumulate RewardBase points and redeem rewards they choose.",
    live: false,
    icon: Wallet,
  },
  {
    title: "Giftcards",
    description:
      "Let users redeem rewards as gift cards from popular global brands easily.",
    live: false,
    icon: Gift,
  },
  {
    title: "Payout",
    description:
      "Send real cash rewards directly to users' bank account though managed payouts.",
    live: false,
    icon: Banknote,
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#004C7D]"></span>
            Rewards
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-10 mb-6 sm:mb-12">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Drive action with tailored rewards your users care about
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 component-subtext text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase gives you a flexible reward layer that adapts to any program. Configure rewards and automatically deliver them when users complete actions.
          </p>
        </div>

        {/* Reward cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => {
            const Icon = reward.icon;
            return (
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
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-3"
                  style={{ color: "#004C7D" }}
                  fill="#004C7D"
                  fillOpacity={0.1}
                />

                <h4 className="card-title mb-1.5">
                  {reward.title}
                </h4>
                <p className="card-subtext leading-relaxed">
                  {reward.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

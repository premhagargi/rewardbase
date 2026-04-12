import { Gift } from "lucide-react";

const previewRewards = [
  {
    title: "Reward an amount",
    description:
      "Reward an amount of usable credits, which are essentially virtual currency inside your product.",
  },
  {
    title: "Reward an amount",
    description:
      "Reward users with feature access, premium tiers, or gated content they wouldn't otherwise have.",
  },
  {
    title: "Reward an amount",
    description:
      "Send discount codes, coupons, or promo credits redeemable at checkout or inside the app.",
  },
];

const bottomCards = [
  {
    title: "Reward an amount / credits",
    description:
      "Reward an amount of usable credits, which are essentially virtual currency. Users can spend these on premium features, upgrades, or in-app purchases.",
  },
  {
    title: "Reward an amount / credits",
    description:
      "Reward an amount of usable credits, which are essentially virtual currency. Users can spend these on premium features, upgrades, or in-app purchases.",
  },
  {
    title: "Reward an amount / credits",
    description:
      "Reward an amount of usable credits, which are essentially virtual currency. Users can spend these on premium features, upgrades, or in-app purchases.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Programs
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5">
              Your users are already sharing, inviting, and engaging with your
              product
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-lg">
              A reward represents a level of access, feature, offering, or
              content that a user is &ldquo;rewarded&rdquo; with. RewardBase
              offers six reward types to fit any growth strategy.
            </p>
          </div>

          {/* Right — stacked preview cards */}
          <div className="space-y-4">
            {previewRewards.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-border p-4 bg-white hover:shadow-sm transition-shadow"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Gift size={22} className="text-muted" />
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

        {/* Bottom 3 cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {bottomCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
                <Gift size={20} className="text-muted" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

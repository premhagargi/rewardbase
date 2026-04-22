"use client";

import { useState } from "react";
import { Gift, Plus, X } from "lucide-react";

const rewards = [
  {
    title: "Credits",
    description:
      "Give users AI / usage credits they can spend directly inside your product.",
    live: true,
  },
  {
    title: "Access Unlocks",
    description:
      "Give users access to premium features, gated content or exclusive perks.",
    live: true,
  },
  {
    title: "Discount Codes",
    description:
      "Offer percentage or fixed, one-time or recurring discounts on purchases or upgrades.",
    live: false,
  },
  {
    title: "Wallet",
    description:
      "Let users accumulate RewardBase points and redeem rewards they choose.",
    live: false,
  },
  {
    title: "Giftcards",
    description:
      "Let users redeem rewards as gift cards from popular global brands easily.",
    live: false,
  },
  {
    title: "Payout",
    description:
      "Send real cash rewards directly to users' bank account though managed payouts.",
    live: false,
  },
];

const fulfillmentMethods = [
  {
    name: "Webhook",
    status: "Live",
    description:
      "Trigger reward delivery through your existing automation stack the moment a condition is met.",
  },
  {
    name: "SDK",
    status: "Live in May",
    description:
      "Deliver rewards programmatically from inside your product using in-app events and user state.",
  },
  {
    name: "Payment Gateway",
    status: "Live in June",
    description:
      "Connect your payment provider to issue credits, discounts, or cashback directly at checkout.",
  },
  {
    name: "Manual",
    status: "Live",
    description:
      "Review user submissions and approve rewards manually for actions that need human verification.",
  },
];

export default function Rewards() {
  const [addedStates, setAddedStates] = useState<boolean[]>(
    fulfillmentMethods.map((_, i) => i !== 0),
  );

  const toggle = (i: number) =>
    setAddedStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 font-medium text-blue-600 uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
            Rewards
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Drive action with tailored rewards your users care about
          </h2>
          <p className="lg:w-2/5 text-base text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase helps you build a flexible reward system that adapts to any program. Configure reward types and rules for each program, and automatically fulfill rewards when users complete actions.
          </p>
        </div>

        {/* Content — two columns */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — How it works */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-1.5">
              How it works
            </h3>
            <p className="text-sm text-muted mb-5">
              Pick how each reward reaches the user — automated, instant, or on approval.
            </p>
            <div className="space-y-3">
              {fulfillmentMethods.map((method, i) => {
                const added = addedStates[i];
                return (
                  <div
                    key={method.name}
                    className="rounded-xl border border-border p-4 bg-white"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-sm font-semibold text-foreground min-w-0 truncate">
                        {method.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                          <span className="h-1 w-1 rounded-full bg-blue-500" />
                          {method.status}
                        </span>
                        <button
                          onClick={() => toggle(i)}
                          className="h-6 w-6 rounded-full flex items-center justify-center text-muted hover:bg-card transition-colors"
                          aria-label={added ? "Remove" : "Add"}
                        >
                          {added ? <X size={14} /> : <Plus size={14} />}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Reward cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {rewards.map((reward) => (
              <div
                key={reward.title}
                className={`relative rounded-2xl border p-5 bg-white transition-shadow hover:shadow-md ${
                  reward.live ? "border-blue-500" : "border-border"
                }`}
              >
                {reward.live && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-medium text-blue-600 border border-blue-200 rounded-full px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    Live
                  </span>
                )}
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
                  <Gift size={20} className="text-muted" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1.5">
                  {reward.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

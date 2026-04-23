"use client";

import { useState } from "react";
import { Gift, Plus, Minus } from "lucide-react";

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
      "Offer percentage or fixed discounts, one-time or recurring, on any purchase.",
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
    status: "Live",
    description:
      "Deliver rewards programmatically from inside your product using in-app events and user state.",
  },
  {
    name: "Payment Gateway",
    status: "Live",
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
  const [openStates, setOpenStates] = useState<boolean[]>(
    fulfillmentMethods.map((_, i) => i === 0),
  );

  const toggle = (i: number) =>
    setOpenStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-medium text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-400"></span>
            Rewards
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Drive action with tailored rewards your users care about
          </h2>
          <p className="lg:w-2/5 lg:ml-auto text-base text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase helps you build a flexible reward system that adapts to any program. Configure reward types and rules for each program, and automatically fulfill rewards when users complete actions.
          </p>
        </div>

        {/* Content — two columns */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — How it works */}
          <div className="lg:col-span-1">
            <h3 className="text-base font-bold text-foreground mb-1.5">
              How it works
            </h3>
            <p className="text-sm text-muted mb-5">
              Pick how each reward reaches the user — automated, instant, or on approval.
            </p>
            <div className="space-y-3">
              {fulfillmentMethods.map((method, i) => {
                const open = openStates[i];
                return (
                  <div
                    key={method.name}
                    className="rounded-xl border border-border p-4 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={open}
                      className={`flex w-full items-center justify-between gap-3 ${open ? "mb-2" : ""}`}
                    >
                      <span className="text-[15px] font-semibold text-foreground min-w-0 truncate text-left">
                        {method.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                          <span className="h-1 w-1 rounded-full bg-blue-500" />
                          {method.status}
                        </span>
                        <span
                          className="h-6 w-6 rounded-full flex items-center justify-center text-muted"
                          aria-hidden="true"
                        >
                          {open ? (
                            <Minus size={18} className="text-foreground" />
                          ) : (
                            <Plus size={18} className="text-muted" />
                          )}
                        </span>
                      </div>
                    </button>
                    {open && (
                      <p className="text-[15px] text-muted leading-relaxed">
                        {method.description}
                      </p>
                    )}
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
                className="relative rounded-3xl border border-border px-5 py-3.5 bg-[#f5f3f1] transition-shadow hover:shadow-md"
              >
                {reward.live && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[12px] font-medium text-blue-600 border border-border rounded-full px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    Live
                  </span>
                )}
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center mb-3">
                  <Gift size={20} className="text-muted" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-1.5">
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

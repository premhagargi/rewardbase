"use client";

import { useState } from "react";
import { Gift, Plus, Minus, X } from "lucide-react";

const rewardTypes = [
  {
    title: "AI Credits",
    description:
      "Reward users with AI-powered credits they can spend on premium features.",
  },
  {
    title: "Access Unlock",
    description:
      "Grant temporary or permanent access to gated features as a reward.",
  },
  {
    title: "Discounts & Coupons",
    description:
      "Offer percentage or fixed-amount discount codes redeemable at checkout.",
  },
  {
    title: "Wallet",
    description:
      "Add spendable balance directly to the user's in-app wallet.",
  },
  {
    title: "Payout",
    description:
      "Send real cash rewards via PayPal, Stripe, or bank transfer.",
  },
  {
    title: "Giftcards",
    description:
      "Deliver digital gift cards from popular brands like Amazon and more.",
  },
];

const fulfillmentMethods = [
  {
    title: "Webhook & Zapier",
    description:
      "Connect to thousands of apps and automate reward delivery with webhooks or Zapier integrations.",
    available: true,
  },
  {
    title: "SDK / API",
    description:
      "Use our developer-friendly SDK and REST API for full control over reward fulfillment logic.",
    coming: true,
  },
  {
    title: "Payment Gateway",
    description:
      "Process payouts through integrated payment gateways like Stripe and PayPal.",
    coming: true,
    expanded: true,
  },
];

function FulfillmentItem({
  method,
  isOpen,
  onToggle,
}: {
  method: (typeof fulfillmentMethods)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-brand/30 bg-brand/5"
          : "border-border hover:bg-card"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            {method.title}
          </span>
          {method.coming && (
            <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 rounded-full px-2 py-0.5">
              Coming Soon
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          {isOpen ? (
            <div className="h-7 w-7 rounded-full bg-brand/20 flex items-center justify-center">
              <X size={14} className="text-brand" />
            </div>
          ) : (
            <>
              <div className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-card">
                <Plus size={14} className="text-muted" />
              </div>
            </>
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm text-muted leading-relaxed">
            {method.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Rewards() {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label — left aligned */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Rewards
          </span>
        </div>

        {/* Heading row — two columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Incentivize users to take action with rewards
          </h2>
          <p className="text-base text-muted leading-relaxed lg:pt-2">
            A reward represents a level of access, feature, offering, or content
            that a user is &ldquo;rewarded&rdquo; with. RewardBase offers six
            reward types for every use case.
          </p>
        </div>

        {/* Content — two columns */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Left — Fulfillment methods */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Reward Fulfillment Methods
            </h3>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Rewards can be fulfilled through various methods tailored to your
              product and audience.
            </p>
            <div className="space-y-2.5">
              {fulfillmentMethods.map((method, i) => (
                <FulfillmentItem
                  key={method.title}
                  method={method}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
            <p className="text-xs text-muted mt-auto pt-4">* Features in development</p>
          </div>

          {/* Right — Reward type cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {rewardTypes.map((reward) => (
              <div
                key={reward.title}
                className="rounded-2xl border border-border p-5 hover:shadow-md transition-shadow bg-white"
              >
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
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

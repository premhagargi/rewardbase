"use client";

import { useState } from "react";
import { Gift, Plus, Minus } from "lucide-react";

const rewardTypes = [
  {
    title: "AI Credits",
    description:
      "Reward users with AI-powered credits they can spend on premium features inside your product.",
  },
  {
    title: "Access Unlock",
    description:
      "Grant temporary or permanent access to gated features, tiers, or content as a reward.",
  },
  {
    title: "Discounts & Coupons",
    description:
      "Offer percentage or fixed-amount discount codes redeemable at checkout.",
  },
  {
    title: "Wallet Credits",
    description:
      "Add spendable balance directly to the user's in-app wallet for future purchases.",
  },
  {
    title: "Payout",
    description:
      "Send real cash rewards via PayPal, Stripe, or bank transfer to qualifying users.",
  },
  {
    title: "Gift Cards",
    description:
      "Deliver digital gift cards from popular brands like Amazon, Starbucks, and more.",
  },
];

const programTypes = [
  {
    name: "Referral",
    description:
      "Let your existing users invite friends and colleagues. Both the referrer and the referred user can earn rewards — driving viral, compounding growth.",
  },
  {
    name: "Social Share",
    description:
      "Reward users for sharing your product on social media. Each share amplifies your reach to a warm, trusted audience at zero ad spend.",
  },
  {
    name: "Review & Rating",
    description:
      "Incentivize authentic reviews on platforms like G2, Capterra, and Trustpilot. Build social proof that converts visitors into customers.",
  },
  {
    name: "Community Join",
    description:
      "Encourage users to join your Discord, Slack, or forum community. Grow an engaged user base that supports each other and reduces churn.",
  },
];

function ProgramItem({
  program,
  isOpen,
  onToggle,
}: {
  program: (typeof programTypes)[number];
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
        <span className="text-sm font-medium text-foreground">
          {program.name}
        </span>
        <div
          className={`h-7 w-7 rounded-full flex items-center justify-center transition-colors ${
            isOpen
              ? "bg-brand/20"
              : "border border-border hover:bg-card"
          }`}
        >
          {isOpen ? (
            <Minus size={14} className="text-brand" />
          ) : (
            <Plus size={14} className="text-muted" />
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
            {program.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label — left aligned */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-muted">
            Programs
          </span>
        </div>

        {/* Heading row — two columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Incentivize users to take action with rewards
          </h2>
          <p className="text-base text-muted leading-relaxed lg:pt-2">
            A reward represents a level of access, feature, offering, or
            content that a user is &ldquo;rewarded&rdquo; with. RewardBase
            offers six reward types to fit any growth strategy.
          </p>
        </div>

        {/* Content — two columns */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Program types */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Program types
            </h3>
            <p className="text-sm text-muted mb-4">
              Rewards can be fulfilled through various methods tailored to
              your product and audience.
            </p>
            <div className="space-y-2.5">
              {programTypes.map((program, i) => (
                <ProgramItem
                  key={program.name}
                  program={program}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? -1 : i)
                  }
                />
              ))}
            </div>
          </div>

          {/* Right — Reward type cards */}
          <div className="grid sm:grid-cols-2 gap-4">
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

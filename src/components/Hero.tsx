"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["B2B", "B2C", "Creators", "Local Business"] as const;

const stages = ["Acquire", "Activate", "Engage", "Advocate"] as const;

const stageDescriptions: Record<string, string> = {
  Acquire:
    "Drive new sign-ups with irresistible referral rewards that turn every user into a growth channel.",
  Activate:
    "Motivate first actions with milestone-based incentives that guide users to their aha moment.",
  Engage:
    "Keep users coming back with reward programs that celebrate consistency and contribution.",
  Advocate:
    "Transform loyal users into brand champions with social sharing and review rewards.",
};

const rewards = [
  { platform: "G2", action: "Post a review on G2", reward: "$25" },
  { platform: "Capterra", action: "Write a Capterra review", reward: "$25" },
  { platform: "Trustpilot", action: "Leave a Trustpilot review", reward: "$20" },
  { platform: "ProductHunt", action: "Upvote on Product Hunt", reward: "$15" },
];

function RewardRow({
  reward,
}: {
  reward: { platform: string; action: string; reward: string };
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-3 hover:shadow-sm transition-shadow">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E8503A" strokeWidth="2" />
          <path
            d="M8 12 C8 8, 16 8, 16 12 C16 16, 8 16, 8 12Z"
            fill="#E8503A"
          />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">
          Get {reward.reward}
        </p>
        <p className="text-xs text-muted truncate">{reward.action}</p>
      </div>
    </div>
  );
}

function StageCard({ stage }: { stage: string }) {
  return (
    <div className="min-w-[280px] max-w-[320px] shrink-0 rounded-2xl border border-border bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-1">{stage}</h3>
      <p className="text-sm text-muted mb-4 leading-relaxed">
        {stageDescriptions[stage]}
      </p>
      <div className="space-y-2.5">
        {rewards.map((r, i) => (
          <RewardRow key={i} reward={r} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-5">
            Turn your users into your growth engine
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            Start free. Unlimited support for $29/m. Offload to AI for $59/m.
            Live in 3 minutes.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium px-7 py-3 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border text-foreground text-sm font-medium px-7 py-3 hover:bg-card transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === i
                  ? "bg-foreground text-white"
                  : "bg-card text-muted hover:bg-card-hover border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stage Cards Carousel */}
        <div className="relative">
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={() => setScrollPos(Math.max(0, scrollPos - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setScrollPos(Math.min(stages.length - 1, scrollPos + 1))
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out pb-4"
              style={{
                transform: `translateX(-${scrollPos * 300}px)`,
              }}
            >
              {stages.map((stage) => (
                <StageCard key={stage} stage={stage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

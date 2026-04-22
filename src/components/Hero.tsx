"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["B2B", "B2C", "Creators", "Local Business"] as const;

const stages = ["Acquire", "Activate", "Engage", "Advocate"] as const;

const stageDescriptions: Record<string, string> = {
  Acquire:
    "Get more qualified customers by incentivizing referrals, shoutouts and user-generated content.",
  Activate:
    "Improve time-to-value and adoption by incentivizing key onboarding steps and value-driving actions.",
  Engage:
    "Drive deeper engagement by incentivizing feedback and participation beyond core usage.",
  Advocate:
    "Build trust and social proof by incentivizing testimonials, reviews, and endorsements.",
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
    <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-3 py-2 hover:shadow-sm transition-shadow">
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
      <div className="space-y-1.5">
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
    <section className="pt-14 pb-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Headline */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6">
          <p className="font-semibold text-blue-600 uppercase tracking-wider mb-3">
            User-led Growth Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-3 text-balance">
            Turn your users into your growth engine
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-5 max-w-2xl text-balance">
            Unlock user-driven growth with reward programs for referrals, testimonials, feedback
            and more - built into your product and managed in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-foreground text-white text-sm font-medium px-5 py-2.5 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-2xl border border-border text-foreground text-sm font-medium px-5 py-2.5 hover:bg-card transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>

        {/* Category Tabs + Carousel Arrows */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                  activeCategory === i
                    ? "bg-white text-foreground border-foreground"
                    : "bg-card text-muted hover:bg-card-hover border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScrollPos(Math.max(0, scrollPos - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() =>
                setScrollPos(Math.min(1, scrollPos + 1))
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stage Cards Carousel */}
        <div className="relative">

          <div className="overflow-hidden -mx-6 px-6">
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

          {scrollPos > 0 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          )}
          {scrollPos < 1 && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "B2B", dot: "bg-orange-500" },
  { name: "B2C", dot: "bg-emerald-500" },
  { name: "Creators", dot: "bg-violet-500" },
] as const;

const stages = ["Acquire", "Activate", "Engage", "Advocate"] as const;

const stageDescriptions: Record<string, string> = {
  Acquire:
    "Get more qualified customers by incentivizing referrals, shoutouts and user-generated content.",
  Activate:
    "Improve time-to-value by rewarding key onboarding steps and actions.",
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
    <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 hover:shadow-sm transition-shadow">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E8503A" strokeWidth="2" />
          <path
            d="M8 12 C8 8, 16 8, 16 12 C16 16, 8 16, 8 12Z"
            fill="#E8503A"
          />
        </svg>
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-foreground leading-tight">
          Get {reward.reward}
        </p>
        <p className="text-[12px] text-muted leading-tight mt-0.5">{reward.action}</p>
      </div>
    </div>
  );
}

function StageCard({ stage }: { stage: string }) {
  return (
    <div className="snap-start w-[220px] sm:w-[305px] shrink-0 rounded-2xl border border-border bg-background p-3.5 sm:p-[18px]">
      <h3 className="text-[18px] font-bold text-foreground mb-1">{stage}</h3>
      <p className="text-[15px] text-muted mb-3.5 leading-relaxed">
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
    <section className="pt-14 pb-12 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-6">
          <p className="text-[18px] font-semibold text-gradient-blue mb-3">
            User-led Growth Platform
          </p>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground leading-[1.1] mb-3 lg:whitespace-nowrap"
            style={{ fontWeight: 650 }}
          >
            Turn your users into your growth engine
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-5 max-w-3xl mx-auto">
            Unlock user-driven growth with reward programs for referrals, testimonials, feedback
            and more - built into your product and managed in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-foreground text-white text-[15px] font-medium px-4 py-2 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-border text-foreground text-[15px] font-medium px-4 py-2 hover:bg-card transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>

        {/* Category Tabs + Carousel Arrows */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center rounded-full">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(i)}
                className={`rounded-full px-3.5 py-1.5 text-[15px] font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none border ${
                  activeCategory === i
                    ? "bg-transparent text-foreground border-black"
                    : "text-muted hover:text-foreground border-transparent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-2">
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
        <div className="relative overflow-x-auto sm:overflow-hidden snap-x snap-mandatory sm:snap-none touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out pb-4"
            style={{
              transform: `translateX(-${scrollPos * 321}px)`,
            }}
          >
            {stages.map((stage) => (
              <StageCard key={stage} stage={stage} />
            ))}
          </div>

          {scrollPos > 0 && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          )}
          {scrollPos < 1 && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
          )}
        </div>
      </div>
    </section>
  );
}

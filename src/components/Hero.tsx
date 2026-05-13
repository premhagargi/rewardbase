"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const categories = [
  { name: "B2B", dot: "bg-orange-500" },
  { name: "B2C", dot: "bg-emerald-500" },
  { name: "Creators", dot: "bg-violet-500" },
] as const;

type Category = (typeof categories)[number]["name"];

const stages = ["Acquire", "Activate", "Engage", "Advocate"] as const;
type Stage = (typeof stages)[number];

const stageDescriptions: Record<Stage, string> = {
  Acquire:
    "Build awareness and get more users by incentivizing referrals, shoutouts and user-generated content.",
  Activate:
    "Cut drop-offs and accelerate time-to-value by incentivizing onboarding steps and value-driving actions.",
  Engage:
    "Drive deeper engagement by incentivizing feedback and participation beyond core usage.",
  Advocate:
    "Build trust and social proof by incentivizing testimonials, reviews,\nand endorsements.",
};

type Reward = {
  icon?: string;
  brand?: "g2" | "ph";
  action: string;
  reward: string;
};

const data: Record<Category, Record<Stage, Reward[]>> = {
  B2B: {
    Acquire: [
      { icon: "UserMultiple02Icon", action: "Refer a Business", reward: "$100 Credits for each" },
      { icon: "Linkedin01Icon", action: "Share Results on LinkedIn", reward: "500 AI Credits" },
      { icon: "ZoomIcon", action: "Co-host a Webinar", reward: "3 Months Free Pro Plan" },
      { icon: "Share07Icon", action: "Join Partner Program", reward: "30% Recurring Commission" },
    ],
    Activate: [
      { icon: "CheckListIcon", action: "Complete Onboarding", reward: "100 AI Credits" },
      { icon: "ConnectIcon", action: "Connect Your CRM", reward: "Unlock Automation Suite" },
      { icon: "FlowConnectionIcon", action: "Set-up Your First Workflow", reward: "100 AI Credits" },
      { icon: "AddTeamIcon", action: "Invite 3 Team Members", reward: "20% off on Next Renewal" },
    ],
    Engage: [
      { icon: "Comment01Icon", action: "Submit a Feature Request", reward: "100 AI Credits" },
      { icon: "ComputerVideoCallIcon", action: "Join a 15-min UX Interview", reward: "$50 Amazon Giftcard" },
      { icon: "SlackIcon", action: "Join Customer Slack", reward: "300 Reward Points" },
      { icon: "ZoomIcon", action: "Attend Product Webinar", reward: "Unlock Insider Access" },
    ],
    Advocate: [
      { brand: "g2", action: "Review us on G2", reward: "$25 Starbucks Giftcard" },
      { icon: "RedditIcon", action: "Recommend on Reddit", reward: "250 Reward Points" },
      { brand: "ph", action: "Upvote on Product Hunt", reward: "50 AI Credits" },
      { icon: "StarSquareIcon", action: "Write a Testimonial", reward: "$100 off Invoice" },
    ],
  },
  B2C: {
    Acquire: [
      { icon: "UserMultiple02Icon", action: "Invite 3 Friends", reward: "$10 Credits for each" },
      { icon: "TiktokIcon", action: "Share Your Win on TikTok", reward: "500 AI Credits" },
      { icon: "WhatsappIcon", action: "Gift Trial in WhatsApp Group", reward: "3 Months Free Pro Plan" },
      { icon: "InstagramIcon", action: "Repost as Instagram Story", reward: "100 Reward Points" },
    ],
    Activate: [
      { icon: "UserListIcon", action: "Complete User Profile", reward: "50 Welcome Credits" },
      { icon: "CheckmarkCircle02Icon", action: "Complete First Task", reward: "7-Day Premium Unlock" },
      { icon: "CalendarFoldIcon", action: "Reach 7-Day Streak", reward: "Get a Paid Add-on" },
      { icon: "NotificationSquareIcon", action: "Enable Notifications", reward: "100 AI Credits" },
    ],
    Engage: [
      { icon: "Diamond02Icon", action: "Try Premium Trial", reward: "50% Off Upgrade for 3 Months" },
      { icon: "Task01Icon", action: "Complete Feedback Survey", reward: "100 Reward Points" },
      { icon: "UserGroup03Icon", action: "Join Community Challenge", reward: "Unlock Exclusive Perks" },
      { icon: "DashboardSpeed01Icon", action: "Achieve Usage Milestone", reward: "Earn \"Champion\" Badge" },
    ],
    Advocate: [
      { icon: "AppStoreIcon", action: "Review on App Store", reward: "100 AI Credits" },
      { icon: "RedditIcon", action: "Recommend on Reddit", reward: "250 Reward Points" },
      { icon: "Video02Icon", action: "Record Video Testimonial", reward: "$50 Amazon Gift Card" },
      { icon: "SpotlightIcon", action: "Get Featured in Spotlight", reward: "25% Discount — Forever" },
    ],
  },
  Creators: {
    Acquire: [
      { icon: "UserMultiple02Icon", action: "Refer 3 Colleagues", reward: "Each Gets 1 Month Free" },
      { icon: "Share07Icon", action: "Share Resource with Team", reward: "50% Off Next Workshop" },
      { icon: "Linkedin01Icon", action: "Post a Snippet on LinkedIn", reward: "100 Wallet Points" },
      { icon: "NewTwitterIcon", action: "Repost with Caption", reward: "Unlock Swipe File Library" },
    ],
    Activate: [
      { icon: "UserListIcon", action: "Complete Your Profile", reward: "Unlock Starter Resource Pack" },
      { icon: "Upload03Icon", action: "Follow Our Socials", reward: "Access to Partner Perks" },
      { icon: "RepeatIcon", action: "Maintain 3-Day Streak", reward: "30% Off Annual Upgrade" },
      { icon: "SlackIcon", action: "Introduce Yourself in Community", reward: "Unlock Member Directory" },
    ],
    Engage: [
      { icon: "AiIdeaIcon", action: "Submit a Topic Idea", reward: "Co-create Content With Us" },
      { icon: "Task01Icon", action: "Complete a Survey", reward: "$10 Amazon Gift Card" },
      { icon: "SlackIcon", action: "Become Top Supporter", reward: "Free Seat at Live Cohort" },
      { icon: "ZoomIcon", action: "Attend Live AMA", reward: "50% Off Mentor Session" },
    ],
    Advocate: [
      { icon: "StarSquareIcon", action: "Write Public Testimonial", reward: "$50 Amazon Gift Card" },
      { icon: "RedditIcon", action: "Recommend on Reddit", reward: "200 Wallet Points" },
      { icon: "NewTwitterIcon", action: "Share Your Stack on X", reward: "Unlock Pro Content Vault" },
      { icon: "SpotlightIcon", action: "Get Featured in Spotlight", reward: "Free Merchandise" },
    ],
  },
};

function RewardIcon({ reward }: { reward: Reward }) {
  if (reward.brand === "g2") {
    return (
      <span className="text-[10px] font-bold tracking-tight text-[#0093D2]">G2</span>
    );
  }
  if (reward.brand === "ph") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#0093D2" strokeWidth="2" />
        <path
          d="M10 7h4a3 3 0 0 1 0 6h-2v4h-2V7Zm2 2v2h2a1 1 0 0 0 0-2h-2Z"
          fill="#0093D2"
        />
      </svg>
    );
  }
  if (reward.icon) {
    return (
      <Image
        src={`/svg icons/${reward.icon}.svg`}
        alt=""
        width={25}
        height={25}
      />
    );
  }
  return null;
}

function RewardRow({ reward }: { reward: Reward }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-border bg-background px-3 py-2 h-[68.75px] hover:shadow-sm transition-shadow">
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#0093D2]/10">
        <RewardIcon reward={reward} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="reward-row-action font-medium text-foreground">
          {reward.action}
        </p>
        <p className="reward-row-text text-muted mt-0.5">{reward.reward}</p>
      </div>
    </div>
  );
}

function StageCard({ stage, rewards }: { stage: Stage; rewards: Reward[] }) {
  return (
    <div className="snap-start w-[305px] shrink-0 rounded-2xl border border-border bg-card-surface p-[18px]">
      <h3 className="h3 font-semibold text-foreground mb-1">{stage}</h3>
      <p className="component-subtext mb-3.5 leading-relaxed whitespace-pre-line">
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const activeName = categories[activeCategory].name;
  const stageRewards = data[activeName];

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "dark", hideEventTypeDetails: true, layout: "column_view" });
    })();
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setShowLeftFade(el.scrollLeft > 4);
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = scrollerRef.current;
    if (!el) return;
    const isMobile = () => window.innerWidth < 640;
    if (!isMobile()) return;

    let interval: ReturnType<typeof setInterval> | null = null;
    let isVisible = false;
    let isTouching = false;

    const start = () => {
      if (interval) return;
      if (!isVisible || isTouching) return;
      interval = setInterval(() => {
        if (!isMobile()) return;
        const step = el.clientWidth + 20;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        if (atEnd) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: step, behavior: "smooth" });
        }
      }, 1800);
    };
    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const onTouchStart = () => {
      isTouching = true;
      stop();
    };
    const onTouchEnd = () => {
      isTouching = false;
      start();
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.95) {
            isVisible = true;
            start();
          } else {
            isVisible = false;
            stop();
          }
        }
      },
      { threshold: [0, 0.95, 1] }
    );
    observer.observe(el);

    return () => {
      stop();
      observer.disconnect();
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [activeCategory]);

  return (
    <section className="pt-10 sm:pt-14 pb-12 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
        {/* Headline */}
        <div className="text-center mb-6">
          <p className="label font-semibold text-gradient-blue tracking-wider mb-3">
            USER-LED GROWTH PLATFORM
          </p>
          <h1 className="h1 tracking-tight text-foreground mb-3 lg:whitespace-nowrap">
            Turn your users into your growth engine
          </h1>
          <p className="h3 font-normal text-muted leading-relaxed mb-5 max-w-3xl mx-auto">
            Incentivize every user action that helps you grow – referrals, reviews, feedback, and <br className="hidden lg:inline" />more – with reward programs built into your product and managed from one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://app.rewardbase.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-foreground text-white text-[15px] font-medium px-4 py-2 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <button
              type="button"
              data-cal-namespace="30min"
              data-cal-link="cebe-fyi/30min"
              data-cal-config='{"layout":"column_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
              className="inline-flex items-center justify-center rounded-xl border border-border text-foreground text-[15px] font-medium px-4 py-2 hover:bg-card transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* Category Tabs + Carousel Arrows */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center rounded-full">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(i);
                  setScrollPos(0);
                }}
                className={`rounded-full px-3.5 py-1.5 component-subtext font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none border ${
                  activeCategory === i
                    ? "text-foreground border-neutral-400"
                    : "text-muted hover:text-foreground border-transparent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  scrollerRef.current?.scrollBy({ left: -(scrollerRef.current.clientWidth + 20), behavior: "smooth" });
                } else {
                  setScrollPos(Math.max(0, scrollPos - 1));
                }
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  scrollerRef.current?.scrollBy({ left: scrollerRef.current.clientWidth + 20, behavior: "smooth" });
                } else {
                  setScrollPos(Math.min(1, scrollPos + 1));
                }
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stage Cards Carousel */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="overflow-x-auto sm:overflow-hidden snap-x snap-mandatory sm:snap-none touch-pan-y [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="flex gap-5 transition-transform duration-500 ease-out pb-4"
              style={{
                transform: `translateX(-${scrollPos * 325}px)`,
              }}
            >
              {stages.map((stage) => (
                <StageCard key={stage} stage={stage} rewards={stageRewards[stage]} />
              ))}
            </div>
          </div>

          {(scrollPos > 0 || showLeftFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          )}
          {(scrollPos < 1 && showRightFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
          )}
        </div>
      </div>
    </section>
  );
}

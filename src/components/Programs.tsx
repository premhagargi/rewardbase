"use client";

import { useState } from "react";
import { Gift, Plus, Minus } from "lucide-react";

const programs = [
  {
    title: "Referrals",
    description:
      "Reward users for bringing in new signups or paying customers.",
    live: false,
  },
  {
    title: "Onboarding & Activation",
    description:
      "Incentivize onboarding steps to cut drop-offs and reach the 'wow' moment faster.",
    live: false,
  },
  {
    title: "Engagement & Retention",
    description:
      "Reward consistency, milestones, and key actions to build habit and loyalty.",
    live: false,
  },
  {
    title: "Reviews & Testimonials",
    description:
      "Encourage users to share honest reviews across platforms to boost credibility.",
    live: true,
  },
  {
    title: "UGC & Social Sharing",
    description:
      "Incentivize content creation and mentions across channels to drive awareness.",
    live: true,
  },
  {
    title: "Feedback & Survey",
    description:
      "Reward users for feedback, surveys, and contributions that shape your product.",
    live: true,
  },
];

const programMethods = [
  {
    name: "Referral Codes",
    status: "Live",
    description:
      "Generate unique referral codes for each user. Track conversions automatically with no manual effort.",
  },
  {
    name: "SDK",
    status: "Live",
    description:
      "Install the RewardBase SDK and fire reward triggers directly from in-app events and user actions.",
  },
  {
    name: "Manual Submission",
    status: "Live",
    description:
      "Users submit proof of action via a form or link. You review, approve, and trigger the reward.",
  },
  {
    name: "Custom",
    status: "Live",
    description:
      "Define your own trigger logic, eligibility rules, and reward conditions for any program type you need.",
  },
];

export default function Programs() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    programMethods.map(() => false),
  );

  const toggle = (i: number) =>
    setOpenStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-medium text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#0088ff]"></span>
            Programs
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2
            className="lg:w-3/5 text-3xl sm:text-4xl tracking-tight text-foreground leading-tight"
            style={{ fontWeight: 650 }}
          >
            Turn key user actions into reward programs that drive growth
          </h2>
          <p className="lg:w-1/3 lg:ml-auto text-[15px] text-muted leading-relaxed lg:leading-[25px]">
            RewardBase helps you create reward programs for every stage of the user lifecycle. Incentivize actions that matter and turn user behavior into a consistent, scalable growth engine.
          </p>
        </div>

        {/* Content — three equal columns (methods + 2-col cards spanning 2) */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Left — Program Methods */}
          <div>
            <h3 className="text-base font-bold text-foreground mb-1.5">
              Program Methods
            </h3>
            <p className="text-sm text-muted mb-5">
              Pick a method, connect it to an action, and start rewarding.
            </p>
            <div className="space-y-3">
              {programMethods.map((method, i) => {
                const open = openStates[i];
                return (
                  <div
                    key={method.name}
                    className="rounded-lg border border-border p-4 bg-background"
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
                            <Minus size={18} className="text-muted" />
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

          {/* Right — Program cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:col-span-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="relative rounded-2xl border border-border px-5 py-3.5 bg-[#fdfcfb]"
              >
                {program.live && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[12px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    Live
                  </span>
                )}
                <div className="h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center mb-3">
                  <Gift size={20} className="text-muted" />
                </div>
                <h4 className="text-base font-bold text-foreground mb-1.5">
                  {program.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

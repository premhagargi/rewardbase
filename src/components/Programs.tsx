"use client";

import { useState } from "react";
import { Gift, Plus, X } from "lucide-react";

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
      "Incentivize key onboarding steps to reduce drop-offs and reach 'wow' moment faster.",
    live: false,
  },
  {
    title: "Engagement & Retention",
    description:
      "Reward consistency, milestones, and meaningful actions to build habit and loyalty.",
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
      "Reward users for feedback, surveys, and contribution towards product improvement.",
    live: true,
  },
];

const programMethods = [
  {
    name: "Referral Codes",
    status: "Live in June",
    description:
      "Generate unique referral codes for each user. Track conversions automatically with no manual effort.",
  },
  {
    name: "SDK",
    status: "Live in May",
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
  const [addedStates, setAddedStates] = useState<boolean[]>(
    programMethods.map((_, i) => i !== 0),
  );

  const toggle = (i: number) =>
    setAddedStates((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 font-medium text-blue-600 uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
            Programs
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Turn key user actions into reward programs that drive growth
          </h2>
          <p className="lg:w-2/5 text-base text-muted leading-relaxed lg:leading-[25px]">
            RewardBase helps you create reward programs for every stage of the user lifecycle. Incentivize actions that matter and turn user behavior into a consistent, scalable growth engine.
          </p>
        </div>

        {/* Content — two columns */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — Program Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-1.5">
              Program Methods
            </h3>
            <p className="text-sm text-muted mb-5">
              Pick a method, connect it to an action, and start rewarding.
            </p>
            <div className="space-y-3">
              {programMethods.map((method, i) => {
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

          {/* Right — Program cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`relative rounded-2xl border p-5 bg-white transition-shadow hover:shadow-md ${
                  program.live ? "border-blue-500" : "border-border"
                }`}
              >
                {program.live && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-medium text-blue-600 border border-blue-200 rounded-full px-2 py-0.5">
                    <span className="h-1 w-1 rounded-full bg-blue-500" />
                    Live
                  </span>
                )}
                <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center mb-4">
                  <Gift size={20} className="text-muted" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1.5">
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

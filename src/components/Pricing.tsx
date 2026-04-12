"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Best for getting a taste without any commitment. Free forever.",
    price: "$0",
    period: "/month",
    cta: "Get Started",
    highlighted: false,
    features: [
      "20 Participants per month",
      "10 Active Programs",
      "1 Team Member",
    ],
  },
  {
    name: "Pro",
    description: "Best for growing teams that need more capacity and support.",
    price: "$9",
    period: "/month",
    cta: "Get Started",
    highlighted: true,
    hasSlider: true,
    features: [
      "500 Participants per month",
      "Unlimited Programs",
      "Installation support",
      "Strategy call",
    ],
  },
  {
    name: "Life Time Deal",
    description: "Best for teams that want unlimited access, forever.",
    price: "$199",
    period: "Pay Once",
    cta: "Get Started",
    highlighted: false,
    badge: "Only 19 left",
    features: [
      "Unlimited Participants",
      "Unlimited Programs",
      "Installation support",
      "Strategy call",
    ],
  },
];

export default function Pricing() {
  const [participants, setParticipants] = useState(500);

  return (
    <section id="pricing" className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label — left aligned */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Pricing
          </span>
        </div>

        {/* Heading — left aligned */}
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            RewardBase pays for itself
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Start for free. Pay when you see the value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 transition-shadow flex flex-col ${
                plan.highlighted
                  ? "border-blue-500 shadow-lg shadow-blue-500/10 bg-white"
                  : "border-border bg-white hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                {plan.badge && (
                  <span className="text-[11px] font-bold bg-foreground text-white rounded-full px-2.5 py-1">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted mb-5 leading-relaxed">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted font-medium">
                  {plan.period}
                </span>
              </div>

              {/* Slider for Pro */}
              {plan.hasSlider && (
                <div className="mb-5">
                  <div className="flex items-center justify-between text-xs text-muted mb-2">
                    <span>Participants per month</span>
                    <span className="font-semibold text-foreground">
                      {participants}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    step={100}
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
              )}

              <button
                className={`w-full rounded-full text-base font-medium py-3 px-6 transition-colors mb-6 ${
                  plan.highlighted
                    ? "bg-foreground text-white hover:bg-foreground/90"
                    : "bg-card border border-border text-foreground hover:bg-card-hover"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3 mt-auto">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Check size={16} className="text-blue-500 shrink-0" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

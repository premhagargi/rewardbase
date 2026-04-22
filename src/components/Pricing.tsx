"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const SLIDER_MIN = 0;
const SLIDER_MAX = 10000;

const formatParticipants = (v: number) =>
  v >= 1000 ? `${v % 1000 === 0 ? v / 1000 : (v / 1000).toFixed(1)}k` : `${v}`;

const proFeatures = [
  "Unlimited Programs",
  "Unlimited Submissions",
  "Team Members",
  "Onboarding support",
];

const lifetimeFeatures = [
  "Unlimited Participants",
  "Unlimited Programs",
  "Unlimited submissions",
  "Team Member",
  "Onboarding support",
  "Access to all future updates",
];

export default function Pricing() {
  const [participants, setParticipants] = useState(500);
  const [isDragging, setIsDragging] = useState(false);

  const percent =
    ((participants - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;
  const t = 0.3 + 0.7 * (percent / 100);
  const r = Math.round(255 + (59 - 255) * t);
  const g = Math.round(255 + (130 - 255) * t);
  const b = Math.round(255 + (246 - 255) * t);
  const fillEnd = `rgb(${r}, ${g}, ${b})`;
  const trackBackground = `linear-gradient(to right, #dbeafe 0%, ${fillEnd} ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 font-medium text-blue-600 uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
            Pricing
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Start for free.
            <br />
            Pay when you grow.
          </h2>
          <p className="lg:w-2/5 text-base text-muted leading-relaxed lg:leading-[25px]">
            Start with a 15-day free trial. Then pay monthly based on active participants-per-month with first 25 participants free every month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Left — free trial info (no card) */}
          <div className="flex flex-col p-2">
            <h3 className="text-lg font-bold text-foreground mb-1">
              15-day Free Trial
            </h3>
            <p className="text-sm text-muted mb-5">
              No Credit Card required.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Set up and launch your reward programs - see your users drive measurable growth through their actions
            </p>
            <button className="rounded-xl bg-foreground text-white text-sm font-medium py-2.5 px-5 hover:bg-foreground/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Middle — Pro card */}
          <div className="rounded-2xl border-2 border-blue-500 bg-white p-6 flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-1.5">Pro</h3>
            <p className="text-sm text-muted mb-5 leading-relaxed">
              For teams ready to drive consistent growth through user-driven actions.
            </p>

            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-4xl font-bold text-foreground">$9</span>
              <span className="text-sm text-muted font-medium">/ month</span>
            </div>

            <div className="mb-5 w-full">
              <div className="flex items-center justify-between text-xs text-muted mb-2">
                <span>Participants per month</span>
                <span className="font-semibold text-foreground">
                  {formatParticipants(participants)}
                </span>
              </div>
              <div className="relative w-full">
                {isDragging && (
                  <div
                    className="absolute bottom-full mb-2 -translate-x-1/2 bg-foreground text-white text-xs font-semibold rounded-md px-2 py-1 pointer-events-none whitespace-nowrap shadow-md z-10"
                    style={{ left: `calc(${percent}% + (${8 - percent * 0.16}px))` }}
                  >
                    {formatParticipants(participants)}
                    <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 h-2 w-2 rotate-45 bg-foreground" />
                  </div>
                )}
                <input
                  type="range"
                  min={SLIDER_MIN}
                  max={SLIDER_MAX}
                  step={100}
                  value={participants}
                  onChange={(e) => setParticipants(Number(e.target.value))}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  className="rb-slider block w-full"
                  style={{ background: trackBackground }}
                />
              </div>
            </div>

            <button className="w-full rounded-xl bg-foreground text-white text-sm font-medium py-2.5 px-5 hover:bg-foreground/90 transition-colors mb-6">
              Get Started
            </button>

            <ul className="space-y-3 mt-auto">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <span className="shrink-0 h-5 w-5 rounded-full bg-card border border-border flex items-center justify-center">
                    <Check size={12} className="text-foreground" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Lifetime Deal card */}
          <div className="rounded-2xl border border-border bg-white p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="text-lg font-bold text-foreground">
                Life Time Deal
              </h3>
              <span className="text-xs font-bold bg-foreground text-white rounded-full px-2.5 py-1">
                Only 10 left
              </span>
            </div>
            <p className="text-sm text-muted mb-5 leading-relaxed">
              Pay once. Get full access with all future updates - forever.
            </p>

            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-4xl font-bold text-foreground">$199</span>
              <span className="text-sm text-muted font-medium">Pay Once</span>
            </div>

            <button className="w-full rounded-xl bg-foreground text-white text-sm font-medium py-2.5 px-5 hover:bg-foreground/90 transition-colors mb-6">
              Claim Deal
            </button>

            <ul className="space-y-3 mt-auto">
              {lifetimeFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <span className="shrink-0 h-5 w-5 rounded-full bg-card border border-border flex items-center justify-center">
                    <Check size={12} className="text-foreground" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CTA() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "dark", hideEventTypeDetails: true, layout: "column_view" });
    })();
  }, []);

  return (
    <section className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
        <div className="relative overflow-hidden rounded-2xl border border-border py-8 px-6 text-center bg-card-surface">
          <div className="relative">
          {/* Icon */}
          <img
            src="/assets/RewardBase%20Icon.svg"
            alt="RewardBase"
            className="mx-auto mb-3 h-16 w-16"
          />

          <h2
            className="component-title tracking-tight text-foreground leading-tight mb-2"
          >
            Turn your users into your growth engine
          </h2>
          <p className="component-subtext text-muted leading-relaxed max-w-md mx-auto mb-5">
            Launch yourÂ reward program in minutes.
          </p>

          <div className="flex items-center justify-center gap-3">
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
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background text-foreground text-[15px] font-medium px-4 py-2 hover:bg-card transition-colors"
            >
              Book a Demo
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        <div
          className="relative overflow-hidden rounded-2xl py-10 px-8 sm:py-12 sm:px-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #003162 0%, #0093D2 100%)",
          }}
        >
          {/* Noise / grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />

          <div className="relative max-w-2xl">
            <h2 className="component-title tracking-tight text-white leading-tight mb-3 whitespace-nowrap">
              Give your users a way to support you
            </h2>
            <p className="component-subtext !text-white leading-relaxed mb-6" style={{ color: "#ffffff" }}>
              Don&apos;t leave user-led growth to chance. Give users a reason
              
              to <br />support you through Reward Programs &ndash; and turn them
              <br />
              into your growth engine.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://app.rewardbase.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#003162] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition-colors"
              >
                Launch your reward program
              </a>
              <button
                type="button"
                data-cal-namespace="30min"
                data-cal-link="cebe-fyi/30min"
                data-cal-config='{"layout":"column_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-transparent text-white text-[15px] font-semibold px-5 py-3 hover:bg-white/10 transition-colors"
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

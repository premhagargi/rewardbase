export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-blue-50 py-16 px-6 text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 h-14 w-14 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              className="shrink-0"
            >
              <circle cx="16" cy="16" r="15" stroke="#1a7a8a" strokeWidth="2" />
              <circle cx="16" cy="16" r="6" fill="#1a7a8a" />
              <path d="M16 4 L16 10" stroke="#1a7a8a" strokeWidth="2" />
              <path d="M16 22 L16 28" stroke="#1a7a8a" strokeWidth="2" />
              <path d="M4 16 L10 16" stroke="#1a7a8a" strokeWidth="2" />
              <path d="M22 16 L28 16" stroke="#1a7a8a" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight mb-3">
            Turn your users into your growth engine
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-md mx-auto mb-8">
            Start free. Unlimited support for $29/m. Offload to AI for $59/m.
            Live in 3 minutes.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium px-7 py-3 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white text-foreground text-sm font-medium px-7 py-3 hover:bg-card transition-colors"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-xl py-8 px-6 text-center bg-[#f3f4f6]">
          <div className="relative">
          {/* Icon */}
          <img
            src="/assets/RewardBase%20Icon.svg"
            alt="RewardBase"
            className="mx-auto mb-3 h-16 w-16"
          />

          <h2
            className="text-2xl sm:text-3xl tracking-tight text-foreground leading-tight mb-2"
            style={{ fontWeight: 650 }}
          >
            Turn your users into your growth engine
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-md mx-auto mb-5">
            Launch your reward program in minutes.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-foreground text-white text-[15px] font-medium px-4 py-2 hover:bg-foreground/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background text-foreground text-[15px] font-medium px-4 py-2 hover:bg-card transition-colors"
            >
              Book Demo
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

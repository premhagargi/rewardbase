export default function CTA() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative overflow-hidden rounded-2xl py-10 px-6 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/BG%20Gradient%20-%20full%20logo%20(1).png')",
          }}
        >
          <div className="relative">
          <img
            src="/assets/RewardBase%20Icon%20(White).svg"
            alt="RewardBase"
            className="mx-auto h-10 w-10 mb-3"
          />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-2">
            You have the users. Now you have RewardBase.
            <br />
            Growth has no excuse now.
          </h2>
          <p className="text-base text-white/80 leading-relaxed mx-auto mb-5">
            Launch your reward program in minutes. Start turning user actions into growth.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-white text-foreground text-sm font-medium px-5 py-2.5 hover:bg-white/90 transition-colors"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-2xl border border-white/40 text-white text-sm font-medium px-5 py-2.5 hover:bg-white/10 transition-colors"
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

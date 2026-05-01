const steps = [
  {
    number: 1,
    title: "Create programs",
    description:
      "Use pre-built templates to create programs aligned with your business goals and user actions.",
  },
  {
    number: 2,
    title: "Set up reward",
    description:
      "Configure reward fulfillment via available methods (webhook or manual).",
  },
  {
    number: 3,
    title: "Add widget",
    description:
      "Add script to your site or app, set up actions, and identify users (optional).",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#004C7D]"></span>
            How it works
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2
            className="lg:w-1/2 text-3xl sm:text-4xl tracking-tight text-foreground leading-tight"
            style={{ fontWeight: 650 }}
          >
            Launch your reward program <br />in 3 simple steps
          </h2>
          <p className="lg:w-2/5 lg:ml-auto text-base text-muted leading-relaxed lg:leading-[25px]">
            Get started with a simple setup and go live in minutes, then optimize and scale your reward programs into a reliable growth engine.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border px-5 py-4 bg-card-surface flex flex-col"
            >
              <div className="h-[42px] w-[42px] rounded-xl bg-blue-500 flex items-center justify-center text-white text-base font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-[15px] font-medium text-muted leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="h-48 mt-auto rounded-lg bg-card border border-border overflow-hidden flex items-center justify-center">
                <svg
                  viewBox="0 0 200 120"
                  preserveAspectRatio="none"
                  className="w-full h-full text-muted/40"
                  fill="currentColor"
                >
                  <path d="M0 80 Q 40 50 80 70 T 160 60 L 200 40 L 200 120 L 0 120 Z" />
                  <circle cx="60" cy="60" r="5" fill="currentColor" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

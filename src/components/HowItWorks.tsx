const steps = [
  {
    number: 1,
    title: "Create programs",
    description:
      "Use pre-built templates to create programs aligned with your business goals and user actions.",
    image: "/How_it_works-1.webp",
  },
  {
    number: 2,
    title: "Set up reward",
    description:
      "Configure reward fulfillment via available methods (webhook or manual).",
    image: "/How_it_works-2.webp",
  },
  {
    number: 3,
    title: "Add widget",
    description:
      "Add script to your site or app, set up actions, and identify users (optional).",
    image: "/How_it_works-3.webp",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            How it works
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-10 mb-6 sm:mb-12">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Launch your reward program <br />in 3 simple steps
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 component-subtext text-muted leading-relaxed lg:leading-[25px]">
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
              <div className="h-[42px] w-[42px] rounded-xl bg-brand-blue/70 flex items-center justify-center text-white text-base font-bold mb-4">
                {step.number}
              </div>
              <h3 className="h3 font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="component-subtext leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="aspect-[3/2] w-full mt-auto rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

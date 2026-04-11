import { Layers, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: <Layers size={28} className="text-white" />,
    title: "Create your program",
    description:
      "Choose a reward type and define the action you want users to take — referrals, reviews, social shares, and more.",
  },
  {
    number: 2,
    icon: <Zap size={28} className="text-white" />,
    title: "Embed the widget",
    description:
      "Drop our lightweight widget into your app or website with a single line of code. It auto-matches your brand.",
  },
  {
    number: 3,
    icon: <BarChart3 size={28} className="text-white" />,
    title: "Track & reward",
    description:
      "Monitor participation in real-time and let RewardBase automatically verify and fulfill rewards.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label — left aligned */}
        <div className="mb-4">
          <span className="inline-block rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-muted">
            How it works
          </span>
        </div>

        {/* Heading row — two columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Takes less than 3 minutes to setup
          </h2>
          <p className="text-base text-muted leading-relaxed lg:pt-2">
            Simple by design, from day one to every day.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-blue-500 flex items-center justify-center mb-5 text-white text-sm font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
              {/* Placeholder image area */}
              <div className="mt-5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 h-40 flex items-center justify-center">
                {step.icon}
                <span className="sr-only">{step.title} illustration</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const programs: {
  title: string;
  description: string;
  live: boolean;
  icon: string;
}[] = [
  {
    title: "Submissions",
    description:
      "Let users submit URLs, images, or text for actions like reviews, testimonials, feedback, and more – that you can review and approve before a reward is issued.",
    live: true,
    icon: "Upload03IconDual",
  },
  {
    title: "In-App Events",
    description:
      "Track in-app user actions via API or SDK – onboarding steps, feature adoption, milestones, and more – and automatically reward users as they happen.",
    live: false,
    icon: "Activity01IconDual",
  },
  {
    title: "Referrals",
    description:
      "Reward users for bringing in new leads, signups, or paying customers – tracked through a unique link or code with double-sided incentives.",
    live: false,
    icon: "AddTeamIconDual",
  },
  {
    title: "External Programs",
    description:
      "Bring your externally managed programs like affiliate program, startup program, and more and give users one unified interface for all your rewards programs.",
    live: true,
    icon: "Share04IconDual",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            Programs
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-10 mb-6 sm:mb-12">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Turn your goals into programs that guide user actions
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 component-subtext text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase gives you the building blocks to run reward programs for every stage of growth and user lifecycle — and turn user actions into a repeatable growth engine.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="relative rounded-2xl border border-border px-5 py-3.5 bg-card-surface"
            >
              {program.live && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[12px] font-medium text-muted border border-border rounded-full px-2 py-0.5">
                  <span className="h-1 w-1 rounded-full bg-blue-500" />
                  Live
                </span>
              )}
              <Image
                src={`/svg icons/${program.icon}.svg`}
                alt=""
                width={36}
                height={36}
                className="mb-3"
              />

              <h4 className="card-title mb-1.5">
                {program.title}
              </h4>
              <p className="card-subtext leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

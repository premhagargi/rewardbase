import {
  Inbox,
  Zap,
  UserPlus,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";

const programs: {
  title: string;
  description: string;
  live: boolean;
  icon: LucideIcon;
}[] = [
  {
    title: "Submissions",
    description:
      "Let users submit URLs, images, or text for actions like reviews, testimonials, feedback, and more — that you can review and approve before a reward is issued.",
    live: true,
    icon: Inbox,
  },
  {
    title: "In-App Events",
    description:
      "Track in-app user actions via API or SDK — onboarding steps, feature adoption, milestones, and more — and automatically reward users as they happen.",
    live: false,
    icon: Zap,
  },
  {
    title: "Referrals",
    description:
      "Reward users for bringing in new leads, signups, or paying customers — tracked through a unique link or code with double-sided incentives.",
    live: false,
    icon: UserPlus,
  },
  {
    title: "External Programs",
    description:
      "Bring your externally managed programs like affiliate program, startup program, and more and give users one unified interface for all your rewards programs.",
    live: true,
    icon: ExternalLink,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#004C7D]"></span>
            Programs
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2
            className="lg:w-1/2 text-3xl sm:text-4xl tracking-tight text-foreground leading-tight"
            style={{ fontWeight: 650 }}
          >
            Turn meaningful user actions into reward programs
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 text-[15px] text-muted leading-relaxed lg:leading-[25px]">
            Rewardbase gives you the building blocks to run reward programs for every stage of the user lifecycle — and turn user behavior into a scalable growth engine.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
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
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-3"
                  style={{ color: "#004C7D" }}
                  fill="#004C7D"
                  fillOpacity={0.1}
                />

                <h4 className="text-base font-semibold text-foreground mb-1.5">
                  {program.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

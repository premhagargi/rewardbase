const cases = [
  {
    brand: "Surfer",
    title: "Surfer Credits Giveaway",
    tagline: "Always craving more credits? Now you can get some for free! You in?",
    cta: "How it works",
  },
  {
    brand: "Notion",
    title: "Notion Template Rewards",
    tagline:
      "Share your favorite templates and earn premium workspace credits.",
    cta: "How it works",
  },
  {
    brand: "Loom",
    title: "Loom Pro Unlock",
    tagline:
      "Record a video review and unlock Loom Pro features — no strings attached.",
    cta: "How it works",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading — left aligned */}
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Proven growth strategies that work
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Simple by design, from day one to every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800 to-gray-950 text-white min-h-[480px] flex flex-col justify-between p-8"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 leading-snug text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed text-center">
                  {item.tagline}
                </p>
              </div>

              <div className="relative z-10 mt-6">
                <button className="w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium py-3 px-6 transition-colors">
                  {item.cta} &darr;
                </button>
              </div>

              <div className="relative z-10 mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-white/60 leading-relaxed">
                  Rewards can be fulfilled through various methods. See how{" "}
                  {item.brand} leveraged RewardBase to grow.
                </p>
                <p className="text-base font-bold mt-2 tracking-tight">
                  {item.brand.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

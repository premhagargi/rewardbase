const cases = [
  {
    brand: "SURFER",
    brandColor: "#E53935",
    title: "Surfer Credits\nGiveaway",
    tagline: "Always craving more credits?\nNow you can get some for free! You in?",
    cta: "How it works",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
  {
    brand: "NOTION",
    brandColor: "#000000",
    title: "Notion Template\nRewards",
    tagline:
      "Share your favorite templates\nand earn premium workspace credits.",
    cta: "How it works",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
  {
    brand: "LOOM",
    brandColor: "#625DF5",
    title: "Loom Pro\nUnlock",
    tagline:
      "Record a video review and unlock\nLoom Pro features — no strings.",
    cta: "How it works",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
];

const brandLogos: Record<string, string> = {
  SURFER: "/surferseo-20240715151729-removebg-preview.png",
  NOTION: "/notion-removebg-preview.png",
  LOOM: "/loom-removebg-preview.png",
};

function BrandLogo({ brand }: { brand: string; color: string }) {
  const src = brandLogos[brand];
  if (!src) return null;

  return (
    <div className="flex items-center gap-2.5">
      <img src={src} alt={brand} className="h-7 w-auto bg-white rounded-md p-0.5" />
      <span className="text-base font-bold tracking-tight text-white">{brand}</span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Case Studies
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl lg:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Proven playbook used by the best growth teams
          </h2>
          <p className="lg:w-2/5 text-base text-muted leading-relaxed lg:leading-[25px]">
            Top growth teams already incentivize users for referrals, reviews, onboarding and sharing. Now you can grow using the same playbook effortlessly with RewardBase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="group relative rounded-2xl overflow-hidden text-white min-h-[480px] flex flex-col"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(80,80,255,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(100,60,255,0.25),transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgba(0,0,0,0.85)_65%,#000_80%)]" />

              {/* Top section — title & tagline */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4 text-center">
                <h3 className="text-3xl font-bold leading-tight whitespace-pre-line mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                  {item.tagline}
                </p>

                {/* CTA button */}
                <button className="mt-6 w-full rounded-lg bg-violet-600/80 hover:bg-violet-500/80 text-white text-base font-medium py-3 px-6 transition-colors">
                  {item.cta} &nbsp;&darr;
                </button>
              </div>

              {/* Bottom section — description + brand */}
              <div className="relative z-10 bg-black px-6 pb-6 pt-5">
                <p className="text-sm text-white leading-relaxed font-semibold mb-3">
                  {item.bottomText}
                </p>
                <BrandLogo brand={item.brand} color={item.brandColor} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

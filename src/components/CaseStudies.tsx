const cases = [
  {
    brand: "SURFER",
    brandColor: "#E53935",
    title: "Surfer Credits\nGiveaway",
    tagline: "Always craving more credits?\nNow you can get some for free! You in?",
    cta: "How it works",
    bottomText:
      "SurferSEO rewards users for reviewing on G2 and for sharing results on socials",
  },
  {
    brand: "NOTION",
    brandColor: "#000000",
    title: "Notion Template\nRewards",
    tagline:
      "Share your favorite templates\nand earn premium workspace credits.",
    cta: "How it works",
    bottomText:
      "Notion rewards users for submitting templates and referring teammates to paid plans",
  },
  {
    brand: "LOOM",
    brandColor: "#625DF5",
    title: "Loom Pro\nUnlock",
    tagline:
      "Record a video review and unlock\nLoom Pro features — no strings.",
    cta: "How it works",
    bottomText:
      "Loom rewards users for recording video testimonials and inviting their team onto Loom",
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
    <div className="flex items-center gap-2.5 opacity-90">
      <img
        src={src}
        alt={brand}
        className="h-7 w-auto bg-white/90 rounded-md p-0.5"
      />
      <span className="text-base font-semibold tracking-tight text-white">
        {brand}
      </span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 font-medium text-blue-600 uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
            Case Studies
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
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
              className="group relative rounded-2xl overflow-hidden text-white min-h-[480px] flex flex-col border border-white/10 backdrop-blur-xl"
            >
              {/* Background layers */}
              <div className="absolute inset-0">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b2f] via-[#141428] to-[#0c0c16]" />

                {/* Soft glow (top-left) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(120,100,255,0.35),transparent_55%)]" />

                {/* Secondary glow (bottom-left) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_85%,rgba(80,60,255,0.25),transparent_60%)]" />

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
              </div>

              {/* Top section */}
{/* Top section */}
<div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-6 text-center">
  <h3 className="text-3xl font-bold leading-tight whitespace-pre-line mb-3">
    {item.title}
  </h3>

  <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
    {item.tagline}
  </p>

  {/* CTA */}
  <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-medium py-2.5 px-5 transition-all duration-200 shadow-lg shadow-purple-900/30">
    {item.cta} &nbsp;&darr;
  </button>

{/* Subtle B/W overlay that preserves purple glow */}
<div className="absolute inset-0 pointer-events-none">
  {/* partial desaturation (not full grayscale) */}
  <div className="absolute inset-0 backdrop-saturate-[0.6] backdrop-brightness-[0.85]" />

  {/* soft white haze */}
  <div className="absolute inset-0 bg-white/5" />

  {/* gentle dark fade */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/15 via-white/5 to-black/40" />
</div>
</div>

              {/* Bottom section */}
              <div className="relative z-10 px-6 pb-6">
                <p className="text-sm text-white font-semibold leading-relaxed mb-4">
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
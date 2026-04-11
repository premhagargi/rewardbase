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

function BrandLogo({ brand, color }: { brand: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-6 w-6 rounded-md flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="text-white text-[10px] font-black leading-none">
          {brand.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-bold tracking-tight text-white">
        {brand}
      </span>
    </div>
  );
}

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
              className="group relative rounded-2xl overflow-hidden text-white min-h-[480px] flex flex-col"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,100,255,0.15),transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

              {/* Top section — title & tagline */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4 text-center">
                <h3 className="text-2xl font-bold leading-tight whitespace-pre-line mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                  {item.tagline}
                </p>

                {/* CTA button */}
                <button className="mt-6 w-full max-w-[220px] rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium py-3 px-6 transition-colors">
                  {item.cta} &darr;
                </button>
              </div>

              {/* Bottom section — description + brand */}
              <div className="relative z-10 px-6 pb-6 pt-4">
                <p className="text-sm text-white/50 leading-relaxed font-semibold mb-3">
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

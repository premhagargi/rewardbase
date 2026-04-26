const cases = [
  {
    brand: "SURFER",
    brandColor: "#E53935",
    image: "/surfer.png",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
  {
    brand: "NOTION",
    brandColor: "#000000",
    image: "/notion.png",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
  {
    brand: "BASE44",
    brandColor: "#625DF5",
    image: "/base44.png",
    bottomText:
      "Rewards can be fulfilled through various methods Rewards can be fulfilled",
  },
];

const brandLogos: Record<string, { src: string; className: string }> = {
  SURFER: { src: "/surferlogo.svg", className: "h-[22px] w-auto" },
  NOTION: { src: "/notionlogo.svg", className: "h-[32px] w-auto" },
  BASE44: { src: "/base44logo.svg", className: "h-7 w-auto" },
};

function BrandLogo({ brand }: { brand: string; color: string }) {
  const logo = brandLogos[brand];
  if (!logo) return null;

  return <img src={logo.src} alt={brand} className={logo.className} />;
}

export default function CaseStudies() {
  return (
    <section className="py-20 bg-card/50">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-medium text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#0276A8]"></span>
            Case Studies
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <h2
            className="lg:w-1/2 text-3xl sm:text-4xl tracking-tight text-foreground leading-tight"
            style={{ fontWeight: 650 }}
          >
            Proven playbook used by the best growth teams
          </h2>
          <p className="lg:w-2/5 lg:ml-auto text-base text-muted leading-relaxed lg:leading-[25px]">
            Top growth teams already incentivize users for referrals, reviews, onboarding and sharing. Now you can grow using the same playbook effortlessly with RewardBase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="group relative rounded-xl overflow-hidden text-white min-h-[460px] flex flex-col"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1a]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(80,80,255,0.3),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(100,60,255,0.25),transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_38%,rgba(0,0,0,0.85)_60%,#000_78%)]" />

              {/* Top section — image with gradient overlay */}
              <div className="relative z-10 flex-1 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.brand} case study`}
                  className="absolute inset-0 h-full w-full object-cover brightness-95"
                />
                {/* Gradient rising from bottom, dulling the image up to the top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Bottom section — description + brand */}
              <div className="relative z-10 bg-black px-6 pb-4 pt-5">
                <h3 className="text-lg text-white leading-relaxed font-semibold mb-5">
                  {item.bottomText}
                </h3>
                <div className="h-8 flex items-center">
                  <BrandLogo brand={item.brand} color={item.brandColor} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

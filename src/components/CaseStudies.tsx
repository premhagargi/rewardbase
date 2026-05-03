const cases = [
  {
    brand: "SURFER",
    brandColor: "#E53935",
    image: "/Surfer (1).png",
    bottomText:
      "SurferSEO rewards users for reviewing on G2 and for sharing results on socials",
  },
  {
    brand: "BASE44",
    brandColor: "#000000",
    image: "/Base44 (1).png",
    bottomText:
      "Base44 offers free credits for referrals and sharing projects on LinkedIn or X.",
  },
  {
    brand: "NOTION",
    brandColor: "#625DF5",
    image: "/Notion (1).png",
    bottomText:
      "Notion offered credits for  migrating from competitor and downloading app",
  },
];

const brandLogos: Record<string, { src: string; className: string }> = {
  SURFER: { src: "/surferlogo.svg", className: "h-[22px] w-auto" },
  NOTION: { src: "/Notion Logo.png", className: "h-[32px] w-auto" },
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
      <div className="mx-auto max-w-6xl px-10 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-[#004C7D]"></span>
            Case Studies
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-14">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Proven playbook used by the best growth teams
          </h2>
          <p className="lg:w-2/5 lg:ml-auto component-subtext text-muted leading-relaxed lg:leading-[25px]">
            RewardBase brings proven user-driven growth playbooks top teams rely on — and turns them into systems you can use to drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.brand}
              className="group relative rounded-2xl overflow-hidden text-white min-h-[460px] flex flex-col"
            >
              {/* Full-card background image */}
              <img
                src={item.image}
                alt={`${item.brand} case study`}
                className="absolute inset-0 h-full w-full object-cover object-[center_5%] brightness-95"
              />

              {/* Dark base + gradient overlays for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/30 via-[#16213e]/20 to-[#0f0f1a]/40" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,rgba(0,0,0,0.7)_60%,rgba(0,0,0,0.95)_85%)]" />

              {/* Bottom section — description + brand */}
              <div className="relative z-10 mt-auto px-6 pb-4 pt-5">
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

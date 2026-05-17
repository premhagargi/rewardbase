import Image from "next/image";

export default function ProductDemo() {
  return (
    <section id="widget" className="py-10 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-14">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            RewardBase Widget
          </span>
        </div>

        {/* Top: heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-10 mb-6 sm:mb-12">
          <h2
            className="lg:w-1/2 component-title tracking-tight text-foreground leading-tight"
          >
            Run reward programs where your users already are
          </h2>
          <p className="lg:w-2/5 lg:ml-auto lg:mt-2 component-description text-muted leading-relaxed lg:leading-[25px]">
Add RewardBase to your app or website – customize to your brand, auto-identify users. No redirects, no logins – just a seamless in-product experience.</p>
        </div>

        {/* Mockup container */}
        <div className="relative rounded-2xl border border-border bg-card-surface p-6 sm:p-10 lg:p-12">
          {/* Desktop / tablet: webapp + floating widget overlay */}
          <div className="relative max-w-4xl mx-auto hidden sm:block">
            {/* Webapp mockup — nudged left so widget can overlap on the right */}
            <div className="rounded-2xl overflow-hidden shadow-lg lg:w-[92%]">
              <Image
                src="/Screenshot.webp"
                alt="RewardBase web app mockup"
                width={4302}
                height={2436}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Widget — overlaps right side of the webapp, vertically centered/upper */}
            <div className="absolute right-4 lg:right-4 bottom-0 translate-y-8 z-20">
              <Image
                src="/Widget (2).webp"
                alt="RewardBase widget on mobile"
                width={2846}
                height={4568}
                className="w-[220px] lg:w-[290px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.32)]"
              />
            </div>
          </div>

          {/* Mobile: phone widget only */}
          <div className="sm:hidden flex justify-center">
            <Image
              src="/Widget (2).webp"
              alt="RewardBase widget on mobile"
              width={2846}
              height={4568}
              className="w-[260px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.32)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <div className="relative max-w-4xl mx-auto">
            {/* Webapp mockup */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Webapp.webp"
                alt="RewardBase web app mockup"
                width={4302}
                height={2436}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Widget phone — overlaps bottom-right corner of the webapp */}
            <div className="absolute -right-6 -bottom-4 z-20 hidden lg:block">
              <Image
                src="/Widget.webp"
                alt="RewardBase widget on mobile"
                width={2846}
                height={4568}
                className="w-[240px] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          {/* Mobile widget — below the webapp */}
          <div className="lg:hidden mt-6 flex justify-center">
            <Image
              src="/Widget.webp"
              alt="RewardBase widget on mobile"
              width={2846}
              height={4568}
              className="w-[220px] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

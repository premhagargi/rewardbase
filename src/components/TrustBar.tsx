const logos = [
  "Yale",
  "Waterloo",
  "Caltech",
  "Stanford",
  "Carnegie Mellon",
  "Princeton",
  "UCLA",
  "Harvard",
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-muted mb-8 font-medium">
          Trusted by businesses around the world
        </p>

        {/* Marquee wrapper — constrained to max-width */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee w-max">
            {/* Render the list twice for seamless loop */}
            {[...logos, ...logos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="mx-10 text-lg font-bold text-foreground/25 tracking-tight select-none whitespace-nowrap"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

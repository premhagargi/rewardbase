export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#1a7a8a"
                  strokeWidth="2"
                />
                <circle cx="16" cy="16" r="6" fill="#1a7a8a" />
                <path d="M16 4 L16 10" stroke="#1a7a8a" strokeWidth="2" />
                <path d="M16 22 L16 28" stroke="#1a7a8a" strokeWidth="2" />
                <path d="M4 16 L10 16" stroke="#1a7a8a" strokeWidth="2" />
                <path d="M22 16 L28 16" stroke="#1a7a8a" strokeWidth="2" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-foreground">
                RewardBase
              </span>
            </a>
            <p className="text-sm text-muted leading-relaxed mb-5 max-w-xs">
              Turn your users into your growth engine. Start free. Pay as you
              scale.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="X / Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                  Feature Request
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/terms" className="text-sm text-muted hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-muted hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Rewardbase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

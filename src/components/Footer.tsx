export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12 py-14">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <a href="#" className="flex items-center mb-4">
              <img
                src="/assets/RewardBase%20Logo%20(Gradient%20-%20Blacktext).svg"
                alt="RewardBase"
                className="h-9 w-auto"
              />
            </a>
            <p className="text-sm text-muted leading-relaxed mb-5 max-w-xs">
              Turn your users into your growth engine. Start free. Pay as you
              scale.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/Rewardbase_app"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="X / Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/reward-base"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns — grouped right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
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
                  <a href="mailto:team@rewardbase.app" className="text-sm text-muted hover:text-foreground transition-colors">
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12 py-5">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} Rewardbase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
                className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-colors"
                aria-label="X / Twitter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/reward-base"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Widget", href: "#widget" },
  { label: "Programs", href: "#programs" },
  { label: "Rewards", href: "#rewards" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-14 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/RewardBase_Logo.svg"
            alt="RewardBase"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Right side: nav links + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 footer-link text-muted">
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <a
            href="https://app.rewardbase.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-foreground text-white text-sm font-medium px-3 py-1.5 hover:bg-foreground/90 transition-colors"
          >
            Start for Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — overlays below header without pushing content */}
      {mobileOpen && (
        <div className="md:hidden absolute top-14 inset-x-0 border-t border-border bg-background px-6 py-4 space-y-3 shadow-lg">
          <a
            href="#pricing"
            className="block text-center text-sm font-medium text-muted hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="https://app.rewardbase.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-xl bg-foreground text-white text-sm font-medium px-4 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Start for Free
          </a>
        </div>
      )}
    </header>
  );
}

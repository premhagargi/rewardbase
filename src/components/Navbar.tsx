"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/40 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-5 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/assets/RewardBase%20Logo%20(Gradient%20-%20Blacktext).svg"
            alt="RewardBase"
            className="h-10 w-auto"
          />
        </a>

        {/* Right side: nav links + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm text-muted font-medium">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <a
            href="#pricing"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <a
            href="#how-it-works"
            className="block text-sm font-medium text-muted hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Docs
          </a>
          <a
            href="#pricing"
            className="block text-sm font-medium text-muted hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#pricing"
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

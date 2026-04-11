"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="shrink-0"
          >
            <circle cx="16" cy="16" r="15" stroke="#1a7a8a" strokeWidth="2" />
            <circle cx="16" cy="16" r="6" fill="#1a7a8a" />
            <path d="M16 4 L16 10" stroke="#1a7a8a" strokeWidth="2" />
            <path d="M16 22 L16 28" stroke="#1a7a8a" strokeWidth="2" />
            <path d="M4 16 L10 16" stroke="#1a7a8a" strokeWidth="2" />
            <path d="M22 16 L28 16" stroke="#1a7a8a" strokeWidth="2" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-foreground">
            RewardBase
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted font-medium">
          <a href="#programs" className="hover:text-foreground transition-colors">
            Roadmap
          </a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            Docs
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-foreground text-white text-sm font-medium px-5 py-2.5 hover:bg-foreground/90 transition-colors"
        >
          Start for Free
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          <a
            href="#programs"
            className="block text-sm font-medium text-muted hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Roadmap
          </a>
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
            className="block text-center rounded-full bg-foreground text-white text-sm font-medium px-5 py-2.5"
            onClick={() => setMobileOpen(false)}
          >
            Start for Free
          </a>
        </div>
      )}
    </header>
  );
}

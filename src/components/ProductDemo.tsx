import {
  Star,
  MessageCircle,
  Check,
  X,
  Clock,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function RewardWidget() {
  const tasks = [
    {
      icon: <InstagramIcon className="text-pink-500" />,
      title: "Create an Instagram reel about us",
      reward: "Get Pro for 15 days",
      status: "approved",
    },
    {
      icon: <Star size={18} className="text-red-500" />,
      title: "Write a G2 review",
      reward: "Get Pro for 7 days",
      status: "reviewing",
    },
    {
      icon: <LinkedinIcon className="text-blue-600" />,
      title: "Write a LinkedIn Post about us",
      reward: "Get Pro for 3 days",
      status: "rejected",
    },
    {
      icon: <DiscordIcon className="text-indigo-500" />,
      title: "Join our Discord community",
      reward: "Unlock Beta Access",
      status: "approved",
    },
  ];

  return (
    <div className="w-[260px] rounded-2xl bg-white shadow-2xl border border-border/60 overflow-hidden">
      <div className="bg-violet-600 px-4 pt-4 pb-3.5 text-white relative">
        <button className="absolute top-2.5 right-2.5">
          <X size={14} className="text-white/60" />
        </button>
        <div className="flex items-center gap-1.5 mb-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="white" strokeWidth="2" />
            <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" />
          </svg>
          <span className="text-[10px] font-medium text-white/70">Web to Figma</span>
        </div>
        <p className="text-sm font-bold leading-snug">
          Get free access to RewardBase by helping us spread the word!
        </p>
        <div className="mt-2.5 flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-1 w-fit">
          <Check size={12} />
          <span className="text-xs font-medium">
            Yay! Your submission got approved.
          </span>
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 rounded-lg border border-border p-2.5"
          >
            <div className="shrink-0">{task.icon}</div>
            <div className="flex-1 min-w-0">
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-semibold leading-none ${
                  task.status === "approved"
                    ? "text-green-600"
                    : task.status === "rejected"
                    ? "text-red-500"
                    : "text-amber-500"
                }`}
              >
                {task.status === "approved" && <Check size={9} />}
                {task.status === "rejected" && <X size={9} />}
                {task.status === "reviewing" && <Clock size={9} />}
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
              <p className="text-xs font-medium text-foreground truncate mt-0.5">
                {task.title}
              </p>
              <p className="text-[10px] text-brand font-medium">
                {task.reward}
              </p>
            </div>
            <div className="shrink-0 text-muted/40">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductDemo() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Section label */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-[15px] font-medium text-gradient-blue uppercase tracking-wider">
            <span className="w-[3px] h-5 rounded-full bg-blue-400"></span>
            RewardBase Widget
          </span>
        </div>

        {/* Top: heading row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <h2 className="lg:w-1/2 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Run reward programs right inside your product
          </h2>
          <p className="lg:w-2/5 lg:ml-auto text-base text-muted leading-relaxed lg:leading-[30px]">
            Add RewardBase directly inside your app or website, customize to match your brand, and auto-identify users. No logins, no redirects, no friction.
          </p>
        </div>

        {/* Mockup container */}
        <div className="relative rounded-2xl bg-[#f5f3f1] p-6 sm:p-10 lg:p-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Chat window */}
            <div className="rounded-2xl bg-white border border-border shadow-lg overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="h-6 w-6 rounded-md bg-blue-500 flex items-center justify-center">
                      <MessageCircle size={12} className="text-white" />
                    </div>
                    <span className="text-[10px] text-muted">/</span>
                    <div className="h-6 w-6 rounded-md bg-blue-400 flex items-center justify-center">
                      <MessageCircle size={12} className="text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    Helploom
                  </span>
                </div>
                <div className="flex items-center gap-5 text-xs text-muted font-medium">
                  <span>Inbox</span>
                  <span>Settings</span>
                  <div className="h-7 w-7 rounded-full bg-card border border-border" />
                </div>
              </div>

              {/* Chat body */}
              <div className="flex min-h-[400px]">
                {/* Sidebar */}
                <div className="hidden sm:block w-[200px] border-r border-border">
                  <div className="px-4 pt-4 pb-3">
                    <div className="flex gap-4 text-xs font-medium text-muted">
                      <span className="text-foreground font-semibold">Unresolved (2)</span>
                      <span>All (11)</span>
                    </div>
                  </div>
                  <div className="px-2 space-y-0.5">
                    <div className="rounded-lg bg-card px-3 py-2.5 border-l-2 border-blue-500">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-foreground">Andrew Miller</p>
                        <span className="text-[10px] text-muted">Yesterday</span>
                      </div>
                      <p className="text-xs text-muted truncate mt-0.5">
                        Yes, as you&apos;re already...
                      </p>
                    </div>
                    <div className="rounded-lg px-3 py-2.5 hover:bg-card/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-foreground">Felippe Nardi</p>
                        <span className="text-[10px] text-muted">Yesterday</span>
                      </div>
                      <p className="text-xs text-muted truncate mt-0.5">
                        Hi, Felippe! You can us...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages area */}
                <div className="flex-1 flex flex-col">
                  {/* Conversation header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <p className="text-sm font-semibold text-foreground">Andrew Miller</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-orange-500 bg-orange-50 rounded-full px-3 py-1">
                        Unresolved
                      </span>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-5 space-y-4 overflow-y-auto">
                    <p className="text-center text-xs text-muted font-medium">Yesterday</p>

                    {/* User messages */}
                    <div className="flex flex-col items-start">
                      <div className="rounded-2xl rounded-bl-sm bg-card border border-border px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-foreground">I signed up for free. How do I upgrade?</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 ml-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                        Andrew &middot; 12:00 PM
                      </span>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="rounded-2xl rounded-bl-sm bg-card border border-border px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-foreground">I&apos;d like to subscribe to the paid plan.</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 ml-1 flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                        Andrew &middot; 12:01 PM
                      </span>
                    </div>

                    {/* Agent messages */}
                    <div className="flex flex-col items-end">
                      <div className="rounded-2xl rounded-br-sm bg-foreground px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-white">Hi, Andrew!</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 mr-1">12:02 PM &middot; You</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="rounded-2xl rounded-br-sm bg-foreground px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-white">You can subscribe to a paid plan from Settings &gt; Billing.</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 mr-1">12:03 PM &middot; You</span>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="border-t border-border px-5 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted/40">Type here...</span>
                      <div className="flex items-center gap-2 text-muted/40">
                        <span className="text-xs font-medium">B</span>
                        <span className="text-xs font-medium italic">I</span>
                        <span className="text-xs">&#9776;</span>
                        <span className="text-xs">&lt;/&gt;</span>
                        <span className="text-xs">&mdash;</span>
                        <span className="ml-2 text-xs text-muted bg-card rounded px-2 py-0.5 border border-border font-medium">
                          AI Assist
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right metadata panel */}
                <div className="hidden lg:block w-[180px] border-l border-border p-4">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 rounded-full px-3 py-1">
                    Unresolved
                  </span>
                  <div className="mt-5">
                    <p className="text-[10px] text-muted font-medium uppercase tracking-wider mb-3">Metadata</p>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="text-xs text-foreground">Andrew Miller</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="text-xs text-foreground">andrew@miller.co</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Reward Widget — overlaps right side of the chat */}
            <div className="absolute -right-4 top-16 z-20 hidden lg:block drop-shadow-2xl">
              <RewardWidget />
            </div>
          </div>

          {/* Mobile widget — below the chat */}
          <div className="lg:hidden mt-6 flex justify-center">
            <RewardWidget />
          </div>

          {/* Help button */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 hidden lg:flex h-12 w-12 rounded-full bg-blue-500 items-center justify-center text-white shadow-lg">
            <span className="text-lg font-bold">?</span>
          </div>
        </div>
      </div>
    </section>
  );
}

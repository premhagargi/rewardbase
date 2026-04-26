import { Play, MessageCircle } from "lucide-react";

export default function Walkthrough() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-12">
        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 mb-10">
          <h2
            className="lg:w-1/2 text-3xl sm:text-4xl tracking-tight text-foreground leading-tight"
            style={{ fontWeight: 650 }}
          >
            From setup to live programs
            <br />
            in minutes
          </h2>
          <p className="lg:w-2/5 lg:ml-auto text-base text-muted leading-relaxed">
            Watch how it all comes together - from creating your first program to rewarding your first user, in minutes.
          </p>
        </div>

        {/* Demo mockup container */}
        <div className="relative overflow-hidden rounded-xl bg-[#f4f4f4] p-6 sm:p-10 lg:p-12">
          <div className="relative max-w-4xl mx-auto">
            {/* Chat window mockup */}
            <div className="rounded-xl bg-background border border-border shadow-lg overflow-hidden">
              {/* Header */}
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
                  <span className="text-sm font-semibold text-foreground">Helploom</span>
                </div>
                <div className="flex items-center gap-5 text-xs text-muted font-medium">
                  <span>Inbox</span>
                  <span>Settings</span>
                  <div className="h-7 w-7 rounded-full bg-card border border-border" />
                </div>
              </div>

              {/* Body */}
              <div className="flex min-h-[420px]">
                {/* Sidebar */}
                <div className="hidden sm:block w-[200px] border-r border-border">
                  <div className="px-4 pt-4 pb-3">
                    <div className="flex gap-4 text-xs font-medium text-muted">
                      <span className="text-foreground font-semibold">Unresolved (2)</span>
                      <span>All (11)</span>
                    </div>
                  </div>
                  <div className="px-2 space-y-0.5">
                    <div className="rounded-md bg-card px-3 py-2.5 border-l-2 border-blue-500">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-foreground">Andrew Miller</p>
                        <span className="text-[10px] text-muted">Yesterday</span>
                      </div>
                      <p className="text-[11px] text-muted truncate mt-0.5">Yes, as you&apos;re already...</p>
                    </div>
                    <div className="rounded-md px-3 py-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-foreground">Felippe Nardi</p>
                        <span className="text-[10px] text-muted">Yesterday</span>
                      </div>
                      <p className="text-[11px] text-muted truncate mt-0.5">Hi, Felippe! You can us...</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 flex flex-col relative">
                  {/* Conversation header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <p className="text-sm font-semibold text-foreground">Andrew Miller</p>
                    <span className="text-[11px] font-medium text-orange-500 bg-orange-50 rounded-full px-3 py-1">
                      Unresolved
                    </span>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-5 space-y-4">
                    <p className="text-center text-[11px] text-muted font-medium">Yesterday</p>

                    <div className="flex flex-col items-start">
                      <div className="rounded-xl rounded-bl-sm bg-card border border-border px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-foreground">I signed up for free. How do I upgrade?</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 ml-1">Andrew &middot; 12:00 PM</span>
                    </div>

                    <div className="flex flex-col items-start">
                      <div className="rounded-xl rounded-bl-sm bg-card border border-border px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-foreground">I&apos;d like to subscribe to the paid plan.</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 ml-1">Andrew &middot; 12:01 PM</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="rounded-xl rounded-br-sm bg-foreground px-4 py-2.5 max-w-[300px]">
                        <p className="text-sm text-white">Hi, Andrew!</p>
                      </div>
                      <span className="text-[10px] text-muted mt-1 mr-1">12:02 PM &middot; You</span>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="rounded-xl rounded-br-sm bg-foreground px-4 py-2.5 max-w-[300px]">
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
                        <span className="ml-2 text-[11px] text-muted bg-card rounded px-2 py-0.5 border border-border font-medium">
                          AI Assist
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button className="pointer-events-auto h-20 w-20 rounded-full bg-background/80 backdrop-blur-sm shadow-xl flex items-center justify-center hover:bg-background hover:scale-105 transition-all">
                      <Play size={32} className="text-foreground ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Right metadata panel */}
                <div className="hidden lg:block w-[180px] border-l border-border p-4">
                  <span className="text-[11px] font-medium text-orange-500 bg-orange-50 rounded-full px-3 py-1">
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
          </div>

          {/* Help button */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg">
            <span className="text-lg font-bold">?</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is a participant and how is billing calculated?",
    answer:
      "A participant is any unique user who submits a proof of action for one of your reward programs. Each user is counted once per month, regardless of how many programs they participate in or how many times they submit.\n\nBilling is calculated on the 1st of each month based on your previous month's participant count, and you're automatically charged based on whichever pricing tier that count falls into.",
  },
  {
    question: "Do I need engineering support to set up RewardBase?",
    answer:
      "Yes. Initial setup requires engineering support to install the widget on your site or app and configure the rewards. We're happy to work with your team through this process and offer continued support along the way. We're also actively building no-code features to reduce engineering dependency.",
  },
  {
    question: "How do I integrate RewardBase into my app or website?",
    answer:
      "Add a single JavaScript snippet to the <head> of your website or at your app's bootstrap entry point (e.g. _app in Next.js or your React root). From there, you can trigger the widget from any button or link, and optionally pass user details when opening the widget.",
  },
  {
    question: "Do users need to log in or create an account to participate?",
    answer:
      "No separate login is required. If user details are passed during widget initialization, users are identified automatically. If not set up, users can be identified through email and OTP sign-in as a fallback.",
  },
  {
    question: "What programs can I create with RewardBase?",
    answer:
      "Currently, you can create programs that accept manual submissions - users submit screenshots, URLs, or text for review and approval. We're actively building more program types, including in-app event tracking, referrals, and more.",
  },
  {
    question: "I already have a referral or affiliate program?",
    answer:
      "Yes. You can add external programs to RewardBase using the placeholder program template. This makes the external programs visible alongside RewardBase's programs in one unified interface. Participants in these programs are handled by the respective external systems and are not counted toward your billing.",
  },
  {
    question: "How do I verify that an action actually happened?",
    answer:
      "Users submit proof as screenshot, URL, or text directly through the RewardBase widget. Submissions land in the dashboard, where you can review and approve or reject them with comments.\n\nYou'll receive email reminders for any pending reviews. Users are notified by email on the status of their submission.",
  },
  {
    question: "How are rewards issued?",
    answer:
      "Currently, rewards can be issued via webhook or manually. With webhooks - once you approve a submission, RewardBase automatically triggers a webhook to your system where you handle fulfillment - credits, perks, etc. With manual method - you fulfill the reward directly and update the status in your dashboard.",
  },
  {
    question: "How does RewardBase handle user data?",
    answer:
      "You own all your user and reward data. We process data securely using industry-standard practices on secure cloud infrastructure. If you prefer stricter control, you can share only user_id with RewardBase - we'll use it to track participation and process rewards.",
  },
  {
    question: "What support do you offer?",
    answer:
      "We offer hands-on support for setup and are here to support whenever you need us as you grow. We help design programs that align with your business and users, and work directly with your engineering team to get everything running quickly.\n\nAt any point, you can refer to our documentation for guidance - we continuously improve it to cover the most common questions and use cases.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left */}
          <div>
            <div className="mb-4">
              <span className="inline-flex items-center gap-3 text-[15px] font-medium text-blue-600 uppercase tracking-wider">
                <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted leading-relaxed mb-1">
              Can&apos;t find what you are looking for?
            </p>
            <p className="text-base font-semibold text-foreground mb-4">
              We would like to chat with you
            </p>

            {/* Chat card */}
            <div className="inline-flex items-center gap-3 rounded-2xl bg-foreground text-white px-2 py-2">
              <div className="relative shrink-0">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                  N
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-gray-400 border-2 border-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-tight">
                  Nico &middot; Founder
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/60 leading-tight">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  Offline
                </span>
              </div>
              <button className="ml-1 rounded-xl bg-white text-foreground text-sm font-medium px-4 py-1.5 hover:bg-white/90 transition-colors">
                Chat now
              </button>
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="flex items-start justify-between gap-4 w-full text-left"
                >
                  <span
                    className={`text-base font-semibold transition-colors ${
                      "text-foreground"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="shrink-0 mt-0.5">
                    {openIndex === i ? (
                      <Minus size={18} className="text-foreground" />
                    ) : (
                      <Plus size={18} className="text-muted" />
                    )}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="mt-3 pr-8 space-y-3">
                    {faq.answer.split("\n\n").map((para, idx) => (
                      <p key={idx} className="text-sm text-muted leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

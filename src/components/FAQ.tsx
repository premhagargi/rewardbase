"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does RewardBase work?",
    answer:
      "RewardBase lets you create reward programs that incentivize users to take specific actions — like referring friends, writing reviews, or joining your community. You define the action and the reward, embed our widget, and we handle verification and fulfillment automatically.",
  },
  {
    question: "How do I integrate RewardBase into my product?",
    answer:
      "Integration takes under 3 minutes. Simply copy our lightweight embed snippet into your website or app. We also offer React and JavaScript SDKs, webhook integrations, and a Zapier connector for more advanced setups.",
  },
  {
    question: "What types of rewards can I offer?",
    answer:
      "RewardBase supports six reward types: AI Credits, Access Unlock, Discounts & Coupons, Wallet Credits, Payout (real cash via Stripe/PayPal), and Gift Cards from popular brands. Mix and match to create the perfect incentive for your audience.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes! Our Free plan includes up to 20 participants per month, 10 active programs, and 1 team member — no credit card required. Upgrade to Pro or grab our Life Time Deal when you're ready to scale.",
  },
  {
    question: "How is reward fulfillment handled?",
    answer:
      "Rewards can be fulfilled automatically via webhooks, Zapier, or our API. For payouts and gift cards, we partner with trusted providers to ensure reliable delivery. You can also build custom fulfillment logic using our SDK.",
  },
  {
    question: "Do you have terms & conditions?",
    answer:
      "Absolutely. Our terms of service and privacy policy are available in the footer of our website. We take data privacy seriously and are fully compliant with GDPR and SOC 2 standards.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label — left aligned */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            FAQ
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted leading-relaxed">
              If you have any other questions, please reach out to us from the
              bottom right corner of your screen.
            </p>
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
                      <Minus size={18} className="text-accent" />
                    ) : (
                      <Plus size={18} className="text-muted" />
                    )}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="text-sm text-muted leading-relaxed mt-3 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

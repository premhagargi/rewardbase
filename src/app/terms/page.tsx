import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — RewardBase",
  description:
    "Read the terms and conditions governing your use of RewardBase services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-8 sm:px-10 lg:px-12">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500 mb-4">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
            Terms and Conditions
          </h1>
          <p className="text-sm text-muted mb-2">
            Last updated: April 22, 2026
          </p>
          <p className="text-sm text-muted mb-10">
            &ldquo;RewardBase&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo; refers to the RewardBase platform and its operators.
          </p>

          <div className="space-y-8 text-base text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Terms
              </h2>
              <p className="mb-3">
                By accessing RewardBase and its services, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
              <p className="mb-3">
                If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
              </p>
              <p>
                The materials and services contained in RewardBase are protected by applicable copyright, trademark, and intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Use of Service
              </h2>
              <p className="mb-3">
                RewardBase is a software platform that enables individuals and businesses to incentivize user and customer actions through structured reward programs.
              </p>
              <p className="mb-3">
                You may use RewardBase to build and run these programs within your own product or service, or for your clients.
              </p>
              <p className="mb-2">However, you are solely responsible for:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-4">
                <li>how you design and run your programs</li>
                <li>the actions you incentivize</li>
                <li>the rewards you offer and distribute</li>
                <li>how users interact with your programs</li>
              </ul>
              <p className="mb-4">
                RewardBase acts as infrastructure for managing programs and incentive systems and does not control how programs are designed or executed by users.
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2">Restrictions</h3>
              <p className="mb-2">While using this service, you may not:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>resell, sublicense, or white-label RewardBase without explicit permission</li>
                <li>copy, modify, or reverse engineer any part of the platform</li>
                <li>inject malicious scripts, malware, or unauthorized tracking mechanisms</li>
                <li>use abusive, illegal, or harmful content in any program or campaign</li>
                <li>create multiple accounts to bypass limits or restrictions</li>
                <li>overload or disrupt the platform through excessive automated usage</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate usage that violates these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Account and Access
              </h2>
              <p className="mb-3">
                To use RewardBase, you must create an account and provide accurate information.
              </p>
              <p className="mb-2">You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>maintaining the security of your account</li>
                <li>all activity under your account</li>
                <li>ensuring your use complies with applicable laws</li>
              </ul>
              <p>
                We may suspend or terminate access if your usage violates these terms or creates risk to the platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Acceptable Use
              </h2>
              <p className="mb-3">
                You agree to use RewardBase only for lawful and legitimate purposes.
              </p>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>run fraudulent or misleading reward programs</li>
                <li>incentivize spam, fake reviews, or inauthentic behavior</li>
                <li>misrepresent rewards, eligibility, or outcomes</li>
                <li>use the platform to deceive, exploit, or manipulate users</li>
                <li>attempt to bypass system limits or safeguards</li>
                <li>use the platform in a way that harms other users or the platform</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate usage that violates these principles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Program Representation and Integrations
              </h2>
              <p className="mb-3">
                RewardBase may be integrated into your product, website, or business through widgets or other integrations.
              </p>
              <p className="mb-2">By using these:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>you are responsible for how programs are presented to users</li>
                <li>you must clearly communicate rules, rewards, and conditions</li>
                <li>you must not design experiences that mislead or obscure important information</li>
              </ul>
              <p>
                Any misuse of widgets or program interfaces is solely your responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Rewards and Fulfillment
              </h2>
              <p className="mb-3">
                RewardBase enables you to define and manage rewards but does not operate as a provider or guarantor of those rewards.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>All rewards are offered and fulfilled by you</li>
                <li>RewardBase is not a party to any transaction between you and your users</li>
                <li>We do not guarantee reward delivery, accuracy, or eligibility</li>
              </ul>
              <p>
                Any disputes related to rewards are solely between you and your users.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Intellectual Property
              </h2>
              <p className="mb-3">
                RewardBase and its underlying technology, interfaces, and materials are protected by applicable intellectual property laws.
              </p>
              <p className="mb-3">
                All content, program designs, campaign assets, and data created by you or your users through the platform remain owned by you or your users, as governed by your own terms with them.
              </p>
              <p>
                RewardBase does not claim ownership over any user-generated content created on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. User Data and Privacy
              </h2>
              <p className="mb-3">
                RewardBase processes user data to enable tracking, validation, and reward fulfillment.
              </p>
              <p className="mb-2">You are responsible for:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>obtaining user consent where required</li>
                <li>complying with applicable data protection laws</li>
                <li>ensuring that the data you collect and send is lawful</li>
              </ul>
              <p className="mb-4">
                You retain ownership of your user data. RewardBase processes this data only to provide the service.
              </p>
              <h3 className="text-base font-semibold text-foreground mb-2">Data Deletion</h3>
              <p className="mb-3">
                When an organization account is deleted within the platform, all associated data - including user data linked to that organization - is permanently deleted.
              </p>
              <p className="mb-3">
                You are responsible for exporting any data you require before initiating deletion.
              </p>
              <p>
                For more information on how we handle personal data, please refer to our{" "}
                <a
                  href="/privacy"
                  className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
                {" "}available on our website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Third-Party Services and Sub-Processors
              </h2>
              <p className="mb-3">
                RewardBase may integrate with and rely on third-party tools, services, and sub-processors to deliver its functionality.
              </p>
              <p className="mb-3">
                As a result, certain data may be processed by these third parties as part of normal platform operations.
              </p>
              <p className="mb-2">We are not responsible for:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>availability or performance of third-party services</li>
                <li>data shared through integrations configured by you</li>
              </ul>
              <p>Your use of such services is subject to their respective terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                10. Force Majeure
              </h2>
              <p>
                RewardBase shall not be liable for any disruption, degradation, or unavailability of the platform resulting from circumstances beyond our reasonable control, including but not limited to: failures of third-party, infrastructure or services, natural disasters, internet outages, governmental actions, other events outside our control.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                11. Disclaimer
              </h2>
              <p className="mb-3">
                RewardBase is provided on an &ldquo;as is&rdquo; basis without warranties of any kind.
              </p>
              <p className="mb-2">We do not guarantee:</p>
              <ul className="list-disc pl-5 space-y-1.5 mb-3">
                <li>uninterrupted or error-free operation</li>
                <li>accuracy of tracking or attribution</li>
                <li>accuracy, completeness, or reliability of any information presented on the platform</li>
                <li>that your programs will achieve any specific business outcomes</li>
              </ul>
              <p>We will make reasonable efforts to maintain availability.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                12. Limitation of Liability and Indemnification
              </h2>
              <p className="mb-3">
                RewardBase shall not be liable for any indirect, incidental, or consequential damages, including loss of data, revenue, or business opportunities.
              </p>
              <p>
                You agree to indemnify and hold harmless RewardBase from any claims, damages, or liabilities arising from: your use of the platform, your reward programs and incentives, user interactions or disputes related to your programs and your violation of these terms or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                13. Payment Processing
              </h2>
              <p>
                Our order process is conducted by our online reseller LemonSqueezy.com, which acts as the Merchant of Record for all orders. LemonSqueezy handles customer service inquiries and returns related to payment processing.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                14. Refund Policy
              </h2>
              <p>
                A refund is issued only if there is a technical problem with the product and we are unable to resolve it.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                15. Fair Use
              </h2>
              <p>
                We may monitor usage to ensure fair access and may restrict excessive or abusive usage.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                16. Modifications to Terms
              </h2>
              <p>
                We may revise these terms at any time. By continuing to use RewardBase, you agree to be bound by the then-current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                17. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. You irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                18. Pricing
              </h2>
              <p>
                Our service pricing plans may be changed at any time, including price adjustments and updates to plan features.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                19. Lifetime Deal / Pay Once Plan
              </h2>
              <p className="mb-3">
                Lifetime access grants access to RewardBase for the duration of the platform&apos;s operational existence.
              </p>
              <p className="mb-3">
                We reserve the right to modify, update, or discontinue any features or services without prior notice.
              </p>
              <p className="mb-3">
                The Lifetime Plan is personal and non-transferable. Sharing account credentials or reselling access under this plan is strictly prohibited and may result in termination without refund.
              </p>
              <p className="mb-2">If RewardBase is discontinued:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><span className="font-semibold text-foreground">Notice Period:</span> At least 30 days prior notice will be provided</li>
                <li><span className="font-semibold text-foreground">Data Export:</span> Users will be given an option to export data</li>
                <li><span className="font-semibold text-foreground">No Refunds:</span> Lifetime fees are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                20. Termination
              </h2>
              <p>
                We may suspend or terminate your access if you violate these terms or create risk to the platform or other users.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                21. Miscellaneous
              </h2>
              <p className="mb-2">By using RewardBase:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>you agree that your use may be referenced as a customer example (unless opted out)</li>
                <li>you agree not to misuse or misrepresent the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, contact:{" "}
                <a
                  href="mailto:team@rewardbase.app"
                  className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
                >
                  team@rewardbase.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

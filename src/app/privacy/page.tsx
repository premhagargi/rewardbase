import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — RewardBase",
  description:
    "Learn how RewardBase collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-8 sm:px-10 lg:px-12">
          <span className="inline-flex items-center gap-3 label font-semibold text-gradient-blue uppercase tracking-wider mb-4">
            <span className="h-5 w-[3px] rounded-full bg-brand-blue/40"></span>
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-10">
            Last updated: April 22, 2026
          </p>

          <div className="space-y-8 text-base text-muted leading-relaxed">
            <section className="space-y-3">
              <p>
                RewardBase (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy and ensuring that your data is handled securely and responsibly.
              </p>
              <p>
                We take appropriate technical and organizational measures to safeguard data and ensure it is used only for the purpose of operating and improving the service. We do not access, use, or share your data beyond what is necessary to provide the service.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, process, and protect information when you use RewardBase.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Scope of this Policy
              </h2>
              <p className="mb-3">This Privacy Policy applies to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>customers and clients who use RewardBase to create and manage programs</li>
                <li>end-users who interact with reward programs powered by RewardBase</li>
                <li>visitors to our website and platform</li>
              </ul>
              <p>
                By using RewardBase, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>

              <h3 className="text-base font-semibold text-foreground mb-2">
                2.1 Information You Provide (Customers)
              </h3>
              <p className="mb-3">
                When you create and use an account, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>name</li>
                <li>email address</li>
                <li>company name</li>
                <li>account-related information</li>
                <li>communication or support data</li>
              </ul>
              <p className="mb-6">
                If you purchase a paid plan, billing and payment information is processed securely by our payment provider. We do not store full payment details on our servers.
              </p>

              <h3 className="text-base font-semibold text-foreground mb-2">
                2.2 Information from End-Users (Program Participants)
              </h3>
              <p className="mb-3">
                When users interact with programs powered by RewardBase, we may process:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>user identifiers (such as user ID or email, if provided by the customer)</li>
                <li>referral data and attribution information</li>
                <li>actions performed (clicks, submissions, shares, etc.)</li>
                <li>rewards earned or redeemed</li>
                <li>device and network-related data used for tracking and validation</li>
              </ul>
              <p className="mb-6">
                This data is collected and processed as part of enabling reward programs and ensuring accurate tracking and fulfillment.
              </p>

              <h3 className="text-base font-semibold text-foreground mb-2">
                2.3 Cookies and Tracking Technologies
              </h3>
              <p className="mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>maintain sessions and platform functionality</li>
                <li>track participation in programs</li>
                <li>enable referral attribution and validation</li>
                <li>improve performance and user experience</li>
              </ul>
              <p>
                When RewardBase is integrated with a customer&rsquo;s product, tracking may occur through scripts or widgets. It is the responsibility of the customer to disclose and configure these appropriately in their own privacy and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. How We Use Information
              </h2>
              <p className="mb-3">We use collected information to:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>provide, operate, and maintain RewardBase</li>
                <li>enable creation and execution of reward programs</li>
                <li>track user participation and validate actions</li>
                <li>manage accounts and provide customer support</li>
                <li>process transactions and manage subscriptions</li>
                <li>analyze usage patterns and improve the platform</li>
                <li>detect and prevent fraud, abuse, or misuse</li>
              </ul>
              <p>
                We use data only to the extent necessary to operate and improve the service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Data Ownership and Responsibility
              </h2>
              <p className="mb-3">
                Customers retain ownership and control over the data they provide and collect through RewardBase.
              </p>
              <p className="mb-3">When RewardBase is used to run programs:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>customers are responsible for how they collect and use end-user data</li>
                <li>customers are responsible for obtaining any required user consent</li>
                <li>customers are responsible for complying with applicable data protection laws</li>
              </ul>
              <p>
                RewardBase processes data to enable the service and does not independently use or repurpose this data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Data Sharing
              </h2>
              <p className="mb-3">We do not sell your data.</p>
              <p className="mb-3">We may share data only in the following cases:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>with service providers who help operate the platform (e.g., infrastructure, analytics, communication tools)</li>
                <li>to comply with legal obligations or lawful requests</li>
                <li>in connection with a business transfer (e.g., merger or acquisition)</li>
                <li>with your consent</li>
              </ul>
              <p>
                All third-party service providers are required to handle data securely and only for the purpose of providing services to us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Data Retention and Deletion
              </h2>
              <p className="mb-3">
                We retain data only as long as necessary to provide the service and meet legal or operational requirements.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>When an account is deleted, associated data is deleted from active systems</li>
                <li>Backup systems may retain data for up to 30 days before permanent deletion</li>
              </ul>
              <p>
                You are responsible for exporting any data you require before deletion.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Data Security
              </h2>
              <p className="mb-3">
                We take appropriate technical and organizational measures to protect data from unauthorized access, loss, misuse, or alteration.
              </p>
              <p className="mb-3">These measures include:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>secure data transmission and storage</li>
                <li>access controls and authentication mechanisms</li>
                <li>monitoring and protection against abuse or unauthorized activity</li>
              </ul>
              <p>
                However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. International Use
              </h2>
              <p>
                RewardBase is currently operated with a primary focus on specific regions. If you require compliance with specific regulations (such as GDPR or other regional data protection laws), you may contact us to discuss arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>access the data we hold about you</li>
                <li>request correction or deletion of your data</li>
                <li>object to or restrict certain processing</li>
                <li>request a copy of your data</li>
              </ul>
              <p>To make a request, contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                10. Third-Party Links
              </h2>
              <p>
                Our platform may contain links or integrations with third-party websites or services. We are not responsible for their privacy practices, and you should review their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                11. Changes to this Policy
              </h2>
              <p className="mb-3">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
              </p>
              <p>
                Continued use of the service after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                13. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle data, contact:{" "}
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

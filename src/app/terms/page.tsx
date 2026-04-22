import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — RewardBase",
  description:
    "Read the terms and conditions governing your use of RewardBase services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-flex items-center gap-3 font-medium text-blue-600 uppercase tracking-wider mb-4">
            <span className="w-[3px] h-5 rounded-full bg-blue-200"></span>
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-muted mb-10">
            Last updated: April 12, 2026
          </p>

          <div className="space-y-8 text-base text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using RewardBase (&ldquo;the Service&rdquo;),
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, you may not access or use the Service. We
                reserve the right to modify these terms at any time, and your
                continued use of the Service constitutes acceptance of any
                changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. Description of Service
              </h2>
              <p>
                RewardBase provides a platform for creating and managing reward
                programs that incentivize users to take specific actions such as
                referrals, reviews, social shares, and community engagement. The
                Service includes tools for configuring reward types, embedding
                widgets, tracking participation, and automating fulfillment.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Account Registration
              </h2>
              <p className="mb-3">
                To use certain features of the Service, you must register for an
                account. You agree to provide accurate, current, and complete
                information during registration and to update such information
                to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all
                activities that occur under your account. You must notify us
                immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Acceptable Use
              </h2>
              <p className="mb-3">You agree not to use the Service to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Infringe upon the rights of others, including intellectual
                  property rights
                </li>
                <li>
                  Distribute spam, malware, or other harmful content
                </li>
                <li>
                  Create fraudulent reward programs or manipulate program
                  outcomes
                </li>
                <li>
                  Attempt to gain unauthorized access to the Service or its
                  related systems
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Payment Terms
              </h2>
              <p>
                Paid plans are billed in advance on a monthly basis. All fees
                are non-refundable unless otherwise stated. We reserve the right
                to change our pricing at any time, with 30 days&apos; notice for
                existing subscribers. If you cancel your subscription, you will
                retain access to paid features until the end of your current
                billing period.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Intellectual Property
              </h2>
              <p>
                The Service, including its original content, features, and
                functionality, is owned by RewardBase and is protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws. You retain all rights to the
                content you create using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, RewardBase shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses resulting from your use of
                the Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Termination
              </h2>
              <p>
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice or liability, for any
                reason, including if you breach these Terms. Upon termination,
                your right to use the Service will immediately cease. All
                provisions of these Terms which by their nature should survive
                termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Disclaimer
              </h2>
              <p>
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind, either
                express or implied, including but not limited to implied
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                10. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which RewardBase operates,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at{" "}
                <a
                  href="mailto:legal@rewardbase.com"
                  className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
                >
                  legal@rewardbase.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

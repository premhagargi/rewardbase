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
      <main className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <span className="inline-flex items-center gap-3 text-base font-medium text-pink-500 mb-4">
            <span className="w-[3px] h-5 rounded-full bg-pink-200"></span>
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-10">
            Last updated: April 12, 2026
          </p>

          <div className="space-y-8 text-base text-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information you provide directly when you create an
                account, set up reward programs, or contact us for support. This
                includes your name, email address, company name, and billing
                information.
              </p>
              <p>
                We also automatically collect certain technical information when
                you use our services, including your IP address, browser type,
                device information, and usage patterns through cookies and
                similar technologies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>
                  To send you technical notices, updates, and support messages
                </li>
                <li>
                  To respond to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  To monitor and analyze trends, usage, and activities in
                  connection with our services
                </li>
                <li>
                  To detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                3. Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with third-party service providers who perform
                services on our behalf, such as payment processing, data
                analysis, email delivery, hosting, and customer service. These
                providers are contractually obligated to use your information
                only as necessary to provide their services to us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information, including encryption in transit and at
                rest, regular security audits, and access controls. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                5. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as your account
                is active or as needed to provide you services. We will retain
                and use your information as necessary to comply with our legal
                obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                6. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify or update inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                7. Cookies
              </h2>
              <p>
                We use cookies and similar tracking technologies to collect and
                track information about your activity on our services. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, some features of our services
                may not function properly without cookies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the &ldquo;Last updated&rdquo; date. You
                are advised to review this page periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href="mailto:privacy@rewardbase.com"
                  className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
                >
                  privacy@rewardbase.com
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

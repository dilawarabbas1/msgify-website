import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Msgify',
  description: 'Msgify Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="pt-[120px] pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 8, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>Msgify (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our WhatsApp automation platform and related services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p><strong>Account Information:</strong> When you register, we collect your name, email address, company name, phone number, and country. This information is required to create and manage your account.</p>
            <p><strong>Payment Information:</strong> Payment processing is handled by Stripe. We do not store your credit card details. Stripe&apos;s privacy policy governs the handling of your payment data.</p>
            <p><strong>Usage Data:</strong> We collect information about how you use our platform, including campaign metrics, message volumes, login times, and feature usage to improve our services.</p>
            <p><strong>Contact Data:</strong> Contacts you upload to Msgify (names, phone numbers, tags) are stored securely and used solely for delivering your campaigns and messages.</p>
            <p><strong>WhatsApp Session Data:</strong> We store WhatsApp Web session tokens to maintain your connection. These tokens are encrypted at rest.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, maintain, and improve our platform and services</li>
              <li>To process your transactions and manage your subscription</li>
              <li>To send you service-related communications (account alerts, security notices)</li>
              <li>To provide customer support and respond to your inquiries</li>
              <li>To monitor and analyze usage patterns to improve user experience</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Sharing & Disclosure</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third parties that help us operate our platform (hosting, payment processing, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, access controls, and regular security audits. However, no method of electronic transmission or storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p>We retain your account data for as long as your account is active. Upon account deletion, we remove your personal data within 30 days, except where retention is required by law or for legitimate business purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Data portability — receive your data in a structured format</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <strong>privacy@msgify.io</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Cookies</h2>
            <p>We use essential cookies to maintain your session and preferences. We do not use third-party tracking cookies. Analytics data is collected in aggregate and does not identify individual users.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>Msgify is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our platform. Your continued use of Msgify after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p><strong>Email:</strong> privacy@msgify.io</p>
            <p><strong>Address:</strong> Msgify Inc.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

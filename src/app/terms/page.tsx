import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Msgify',
  description: 'Msgify Terms of Service. Read the terms and conditions that govern your use of our WhatsApp automation platform.',
};

export default function TermsPage() {
  return (
    <main className="pt-[120px] pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: April 8, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Msgify (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>Msgify provides a WhatsApp automation platform that enables businesses to send bulk messages, manage conversations, create campaigns, and automate customer communication through WhatsApp Web integration.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Account Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete registration information</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must be at least 18 years old to create an account</li>
              <li>One person or entity may not maintain more than one account without prior approval</li>
              <li>You are responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Acceptable Use</h2>
            <p>You agree NOT to use Msgify to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send spam, unsolicited messages, or messages to recipients who have not consented</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Send content that is illegal, threatening, abusive, defamatory, or obscene</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Attempt to circumvent WhatsApp&apos;s terms of service or rate limits</li>
              <li>Use the Service for phishing, scams, or fraudulent activities</li>
              <li>Upload or transmit viruses, malware, or harmful code</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Subscription & Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscriptions are billed monthly or annually based on your selected plan</li>
              <li>All fees are non-refundable except as required by applicable law</li>
              <li>We may change pricing with 30 days&apos; advance notice</li>
              <li>Failure to pay may result in service suspension or termination</li>
              <li>Free trials automatically convert to paid subscriptions unless canceled before the trial ends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Ownership</h2>
            <p>You retain ownership of all content and data you upload to Msgify, including contacts, message templates, and campaign content. We do not claim any intellectual property rights over your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Service Availability</h2>
            <p>We strive to provide 99.9% uptime but do not guarantee uninterrupted service. Msgify relies on WhatsApp Web, which may experience changes or outages beyond our control. We are not liable for service interruptions caused by third-party platforms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. WhatsApp Compliance</h2>
            <p>Msgify is an independent third-party tool and is not affiliated with, endorsed by, or sponsored by WhatsApp or Meta. You are solely responsible for ensuring your use of WhatsApp complies with WhatsApp&apos;s Terms of Service and applicable laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Msgify shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Termination</h2>
            <p>Either party may terminate the agreement at any time. Upon termination, your access to the Service will be revoked and your data will be deleted within 30 days. We reserve the right to suspend or terminate accounts that violate these terms without prior notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of material changes via email or through the platform. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Contact</h2>
            <p>For questions about these Terms, contact us at <strong>legal@msgify.io</strong>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

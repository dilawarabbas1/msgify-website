import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us — Msgify',
  description: 'Get in touch with the Msgify team. We\'re here to help you get started with WhatsApp automation.',
};

export default function ContactPage() {
  return (
    <main className="pt-[140px] pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-500 max-w-[600px] mx-auto">
            Have a question, need a demo, or want to discuss enterprise plans? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Email</div>
                    <div className="text-sm text-gray-500">support@msgify.io</div>
                    <div className="text-sm text-gray-500">sales@msgify.io</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Business Hours</div>
                    <div className="text-sm text-gray-500">Mon - Fri: 9:00 AM - 6:00 PM</div>
                    <div className="text-sm text-gray-500">Weekend: Email support only</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Office</div>
                    <div className="text-sm text-gray-500">Msgify Inc.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-3">Need Urgent Help?</h3>
              <p className="text-sm text-gray-400 mb-4">Existing customers can reach our priority support team directly through the Msgify dashboard.</p>
              <a
                href={`${process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:5400'}/login`}
                className="inline-flex items-center px-5 py-2.5 rounded-[10px] font-semibold text-sm bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-all"
              >
                Go to Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { SignupForm } from '@/components/signup-form';

export const metadata: Metadata = {
  title: 'Sign Up — Msgify WhatsApp Automation Platform',
  description:
    'Create your Msgify account and start sending WhatsApp campaigns in minutes. Free trial, no credit card required.',
  robots: { index: true, follow: true },
};

export default function SignupPage() {
  return (
    <main className="min-h-screen pt-[100px] pb-20 bg-gradient-to-b from-white via-green-50/50 to-white">
      <div className="max-w-[520px] mx-auto px-6">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold text-2xl text-green-700 mb-4">
            <div className="w-[38px] h-[38px] bg-gradient-to-br from-green-500 to-green-700 rounded-[10px] flex items-center justify-center text-white">
              <MessageSquare size={20} />
            </div>
            Msgify
          </Link>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Create Your Account</h1>
          <p className="text-gray-500">Get started with Msgify in minutes</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <SignupForm />
        </div>
      </div>
    </main>
  );
}

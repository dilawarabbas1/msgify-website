import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white text-center relative overflow-hidden">
      <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-10">
          Join thousands of businesses using Msgify to engage customers on WhatsApp. Start your free trial today — no credit card required.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-green-700 hover:bg-green-50 transition-all"
          >
            Start Free Trial
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-base bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-all"
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

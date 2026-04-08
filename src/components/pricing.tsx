'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { type Plan, MSG_PER_MIN, DEFAULT_ANNUAL_DISCOUNT, POPULAR_PLAN } from '@/lib/constants';

const COMMON_FEATURES = [
  'Unlimited campaigns',
  'Unlimited contacts',
  'Real-time inbox',
  'Auto-reply',
  'Message templates',
  'WhatsApp Channels',
  'Messaging API access',
];

export function Pricing({ plans }: { plans: Plan[] }) {
  const [isYearly, setIsYearly] = useState(false);
  const sorted = [...plans].sort((a, b) => a.basePrice - b.basePrice);
  const maxDiscount = Math.max(...sorted.map((p) => p.annualDiscount || DEFAULT_ANNUAL_DISCOUNT));

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Simple, Flat-Rate Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px]">
            No per-message charges. No hidden fees. No destination-based pricing.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-[15px] font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-[26px] bg-green-600 rounded-full relative cursor-pointer transition-all"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-[3px] w-5 h-5 bg-white rounded-full transition-transform duration-200 ${isYearly ? 'left-[25px]' : 'left-[3px]'}`}
            />
          </button>
          <span className={`text-[15px] font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
            Yearly{' '}
            {maxDiscount > 0 && (
              <span className="text-green-400 text-xs font-semibold">Save {maxDiscount}%</span>
            )}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sorted.map((plan) => {
            const isPopular = plan.name === POPULAR_PLAN;
            const discount = plan.annualDiscount || DEFAULT_ANNUAL_DISCOUNT;
            const totalMsg = plan.includedNumbers * MSG_PER_MIN;
            const displayPrice = isYearly ? Math.round(plan.basePrice * (1 - discount / 100)) : plan.basePrice;

            return (
              <div
                key={plan._id}
                className={`rounded-2xl p-9 relative transition-all duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? 'bg-green-500/10 border-green-500 border shadow-[0_0_40px_rgba(34,197,94,0.15)]'
                    : 'bg-white/5 border border-white/10 hover:bg-white/[0.08]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-[22px] font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6">
                  {plan.description || `${plan.includedNumbers} WhatsApp number${plan.includedNumbers > 1 ? 's' : ''} included`}
                </p>
                <div className="text-5xl font-black mb-1">
                  ${displayPrice}
                  <span className="text-base font-medium text-gray-400">/mo</span>
                </div>
                {isYearly && discount > 0 && (
                  <p className="text-[13px] text-green-400 mb-4">
                    Billed ${displayPrice * 12}/year (Save {discount}%)
                  </p>
                )}
                {!isYearly && <div className="mb-6" />}

                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2.5 py-2 text-sm text-gray-300">
                    <Check size={16} className="text-green-400" />
                    {plan.includedNumbers} WhatsApp number{plan.includedNumbers > 1 ? 's' : ''}
                  </li>
                  <li className="flex items-center gap-2.5 py-2 text-sm text-gray-300">
                    <Check size={16} className="text-green-400" />
                    Up to {totalMsg} messages/min
                  </li>
                  {COMMON_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 py-2 text-sm text-gray-300">
                      <Check size={16} className="text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`block w-full text-center py-3 rounded-[10px] font-semibold text-[15px] transition-all ${
                    isPopular
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.5)]'
                      : 'border border-white/20 text-white hover:border-white/40'
                  }`}
                >
                  {plan.trialDays > 0 ? `Start ${plan.trialDays}-Day Trial` : 'Get Started'}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

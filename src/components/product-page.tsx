import Link from 'next/link';
import { ArrowRight, Check, type LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
}

export interface ProductPageProps {
  icon: LucideIcon;
  name: string;
  tagline: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  features: Feature[];
  highlights: string[];
  screenshotAlt: string;
}

export function ProductPage({
  icon: Icon,
  name,
  tagline,
  headline,
  headlineHighlight,
  description,
  features,
  highlights,
  screenshotAlt,
}: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
              <Icon size={14} />
              {tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] text-gray-900 mb-5 tracking-tight">
              {headline}{' '}
              <span className="text-gradient">{headlineHighlight}</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[520px]">
              {description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <ArrowRight size={18} />
                Try It Free
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-base bg-transparent border-[1.5px] border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[480px] bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-sm text-gray-500">{screenshotAlt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Key Capabilities
            </h2>
            <p className="text-lg text-gray-500 max-w-[600px] mx-auto">
              Everything you need to get the most out of {name}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Why Choose Msgify {name}</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3.5 text-base text-gray-600">
                  <span className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-0.5">
                    <Check size={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to Try {name}?
          </h2>
          <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-10">
            Start your free trial and experience the power of Msgify&apos;s {name.toLowerCase()} — no credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-green-700 hover:bg-green-50 transition-all"
          >
            Start Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

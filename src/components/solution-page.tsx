import Link from 'next/link';
import { ArrowRight, Check, MessageSquare, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

interface UseCase {
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface SolutionPageProps {
  industry: string;
  tagline: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  heroImage: string;
  stats: Stat[];
  features: Feature[];
  useCases: UseCase[];
  benefits: string[];
  testimonial: Testimonial;
  ctaTitle: string;
  ctaDescription: string;
}

export function SolutionPage({
  industry,
  tagline,
  headline,
  headlineHighlight,
  description,
  heroImage,
  stats,
  features,
  useCases,
  benefits,
  testimonial,
  ctaTitle,
  ctaDescription,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" />
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
                Start Free Trial
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-base bg-transparent border-[1.5px] border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-green-600 to-green-700 px-5 py-4 flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold">Msgify for {industry}</h4>
                  <span className="text-xs opacity-80">WhatsApp Automation</span>
                </div>
              </div>
              <div className="p-6">
                <img
                  src={heroImage}
                  alt={`WhatsApp automation for ${industry}`}
                  className="w-full h-[260px] object-cover rounded-xl bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-100 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
              Built for {industry}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Features That Drive Results
            </h2>
            <p className="text-lg text-gray-500 max-w-[600px] leading-relaxed">
              Purpose-built WhatsApp automation tools designed for {industry.toLowerCase()} businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:border-green-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 bg-green-100 text-green-600">
                  <f.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases + Benefits */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Use Cases */}
            <div>
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
                Use Cases
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                How {industry} Teams Use Msgify
              </h2>
              <div className="space-y-5">
                {useCases.map((uc, i) => (
                  <div key={uc.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{uc.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
                Why Msgify
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
                Key Benefits
              </h2>
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <ul className="space-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-3.5 text-base text-gray-600">
                      <span className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-0.5">
                        <Check size={14} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="text-5xl text-green-200 mb-6">&ldquo;</div>
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed mb-8">
            {testimonial.quote}
          </blockquote>
          <div>
            <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">{ctaTitle}</h2>
          <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-10">{ctaDescription}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-green-700 hover:bg-green-50 transition-all"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-base bg-white/15 text-white border border-white/30 hover:bg-white/25 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

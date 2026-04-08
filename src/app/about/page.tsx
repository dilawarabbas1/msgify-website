import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Globe, Shield, Zap, Users, Heart, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — Msgify',
  description: 'Learn about Msgify, the team behind the most powerful WhatsApp automation platform trusted by 2,000+ businesses in 80+ countries.',
};

const values = [
  { icon: Zap, title: 'Speed First', desc: 'We believe every message matters. Our infrastructure is built for real-time delivery so your customers never wait.' },
  { icon: Shield, title: 'Trust & Security', desc: 'Your data security is non-negotiable. We implement enterprise-grade encryption and strict access controls at every layer.' },
  { icon: Heart, title: 'Customer Obsession', desc: 'Every feature we build starts with a real customer problem. We ship fast, listen carefully, and iterate relentlessly.' },
  { icon: Globe, title: 'Global by Default', desc: 'Built for businesses worldwide. Multi-language, multi-timezone, and compliant with international data regulations.' },
];

const milestones = [
  { year: '2023', title: 'Founded', desc: 'Msgify was born from a simple idea — make WhatsApp automation accessible to every business, not just enterprises.' },
  { year: '2024', title: '1,000 Customers', desc: 'Crossed 1,000 active customers across 50 countries. Launched multi-account support and the Messaging API.' },
  { year: '2025', title: 'Global Expansion', desc: 'Expanded to 80+ countries. Launched WhatsApp Channels, advanced analytics, and enterprise-grade infrastructure.' },
  { year: '2026', title: '50M+ Messages', desc: 'Surpassed 50 million messages delivered. Introduced AI-powered auto-replies and smart campaign optimization.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-[140px] pb-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" />
            About Msgify
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] text-gray-900 mb-6 tracking-tight">
            Making WhatsApp Work for <span className="text-gradient">Every Business</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto">
            We&apos;re on a mission to help businesses of all sizes connect with their customers through the world&apos;s most popular messaging platform — simply, affordably, and at scale.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-100 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2,000+', label: 'Businesses Served' },
            { value: '80+', label: 'Countries' },
            { value: '50M+', label: 'Messages Delivered' },
            { value: '99.2%', label: 'Delivery Rate' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Democratizing Business Messaging
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Before Msgify, WhatsApp automation was complex, expensive, and reserved for large enterprises with dedicated engineering teams. We changed that.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our platform lets any business — from a single-person shop to a global brand — send campaigns, manage conversations, and automate customer engagement in minutes, not months. No coding required, no API approvals needed, and no per-message fees.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-[300px]">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Msgify</h3>
              <p className="text-sm text-gray-500">WhatsApp automation made simple for every business worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-5">
                  <v.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Milestones</h2>
          </div>
          <div className="space-y-8 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-green-200" />
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 relative">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-xs font-bold shadow-md z-10">
                  {m.year.slice(2)}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-semibold text-green-600 mb-1">{m.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Join 2,000+ Businesses on Msgify</h2>
          <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-10">Start your free trial today and see why businesses in 80+ countries trust Msgify for their WhatsApp automation.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-green-700 hover:bg-green-50 transition-all">
            Start Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-[140px] pb-20 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,197,94,0.06)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" />
            Trusted by 2,000+ businesses worldwide
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-[1.1] text-gray-900 mb-5 tracking-tight">
            The Most Powerful{' '}
            <span className="text-gradient">WhatsApp Automation</span>{' '}
            Platform
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-[520px] mx-auto lg:mx-0">
            Send bulk messages, manage real-time conversations, automate replies, and run targeted campaigns across multiple WhatsApp accounts — all from one dashboard.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start mb-10">
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
              Contact Sales
            </Link>
          </div>

          <div className="flex gap-10 justify-center lg:justify-start">
            {[
              { num: '50M+', label: 'Messages Delivered' },
              { num: '99.2%', label: 'Delivery Rate' },
              { num: '80+', label: 'Countries' },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div className="text-[28px] font-extrabold text-gray-900">{stat.num}</div>
                <div className="text-[13px] text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-green-700 px-5 py-4 flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="text-[15px] font-semibold">Campaign Dashboard</h4>
                <span className="text-xs opacity-80">3 campaigns running</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {[
                { title: 'Summer Sale Launch', status: 'Running', statusColor: 'bg-green-100 text-green-700', progress: 72, meta: '4,320 / 6,000 sent', rate: '98.5% delivered' },
                { title: 'New Product Teaser', status: 'Scheduled', statusColor: 'bg-blue-100 text-blue-700', progress: 0, meta: '0 / 12,500 sent', rate: 'Starts in 2h' },
                { title: 'Weekly Newsletter', status: 'Completed', statusColor: 'bg-gray-100 text-gray-600', progress: 100, meta: '8,900 / 8,900 sent', rate: '97.1% delivered' },
              ].map((c) => (
                <div key={c.title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-semibold text-gray-800">{c.title}</span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${c.statusColor}`}>{c.status}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${c.progress}%` }} />
                  </div>
                  <div className="flex gap-4 text-xs text-gray-400">
                    <span>{c.meta}</span>
                    <span>{c.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

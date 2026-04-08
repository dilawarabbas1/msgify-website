import { Check } from 'lucide-react';

const inboxMessages = [
  { initials: 'JD', color: 'bg-indigo-500', name: 'John Doe', msg: "Hey, I'm interested in the summer deal! Can you send me more details?", time: '2m ago', badge: 2 },
  { initials: 'SK', color: 'bg-pink-500', name: 'Sarah Khan', msg: "Thanks for the quick response! I'll place my order today.", time: '15m ago' },
  { initials: 'MP', color: 'bg-amber-500', name: 'Mike Patel', msg: 'Can I reschedule my delivery to next week?', time: '1h ago', badge: 1 },
  { initials: 'AL', color: 'bg-green-500', name: 'Anna Lee', msg: 'The product arrived in perfect condition. 5 stars!', time: '3h ago' },
];

const accounts = [
  { phone: '+1 (555) 012-3456', label: 'Sales Team', health: 95, color: 'bg-green-50 border-green-200', healthColor: 'text-green-600', dot: 'bg-green-500', status: 'Health' },
  { phone: '+44 20 7946 0958', label: 'Support UK', health: 88, color: 'bg-green-50 border-green-200', healthColor: 'text-green-600', dot: 'bg-green-500', status: 'Health' },
  { phone: '+91 98765 43210', label: 'Marketing India', health: 62, color: 'bg-yellow-50 border-yellow-300', healthColor: 'text-yellow-600', dot: 'bg-yellow-500', status: 'Warming Up' },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 space-y-24">
        {/* Inbox */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
              Unified Inbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Every Conversation,<br />One Dashboard
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Manage all your WhatsApp conversations from a single real-time inbox. Send text, images, videos, and documents instantly.
            </p>
            <ul className="space-y-0">
              {['Real-time message sync via WebSockets', 'Send images, videos, PDFs, and audio', 'Read receipts and delivery status', 'Quick replies with saved templates', 'Contact quality scoring (saved, interacted, cold)'].map((item) => (
                <li key={item} className="flex gap-3.5 py-3.5 text-base text-gray-600">
                  <span className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
              {inboxMessages.map((m) => (
                <div key={m.name} className="flex items-center gap-3 p-3 rounded-[10px] hover:bg-gray-50">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0 ${m.color}`}>
                    {m.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-800">{m.name}</div>
                    <div className="text-[13px] text-gray-400 truncate">{m.msg}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[11px] text-gray-400">{m.time}</div>
                    {m.badge && (
                      <div className="w-[18px] h-[18px] bg-green-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold mt-0.5 ml-auto">
                        {m.badge}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Account */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              {accounts.map((a) => (
                <div key={a.phone} className={`flex justify-between items-center p-3.5 rounded-[10px] border ${a.color}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{a.phone}</div>
                      <div className="text-xs text-gray-400">{a.label}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${a.healthColor}`}>{a.health}</div>
                    <div className="text-[11px] text-gray-400">{a.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
              Multi-Account
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Multiple Numbers,<br />One Platform
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Connect multiple WhatsApp accounts and distribute campaign load intelligently across numbers with built-in health monitoring.
            </p>
            <ul className="space-y-0">
              {['QR code authentication — connect in seconds', 'Account health scoring (0-100)', 'Smart warm-up system for new accounts', 'Automatic block detection & alerts', 'Configurable throttle rates (1-60 msg/min)'].map((item) => (
                <li key={item} className="flex gap-3.5 py-3.5 text-base text-gray-600">
                  <span className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

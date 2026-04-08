import {
  MessageSquare, Monitor, Users, PenLine,
  Shield, Clock, FileText, BarChart3,
} from 'lucide-react';

const features = [
  { icon: MessageSquare, title: 'Bulk Campaigns', desc: 'Send targeted campaigns to thousands of contacts with throttle controls, media attachments, and real-time progress tracking.', color: 'bg-green-100 text-green-600' },
  { icon: Monitor, title: 'Real-Time Inbox', desc: 'Manage all conversations in one unified inbox with instant message delivery, read receipts, and media sharing.', color: 'bg-blue-100 text-blue-600' },
  { icon: Users, title: 'Contact Management', desc: 'Import contacts via CSV, tag and segment your audience, and personalize messages with custom variables.', color: 'bg-purple-100 text-purple-600' },
  { icon: PenLine, title: 'Message Templates', desc: 'Create reusable templates with dynamic variable substitution. Personalize every message at scale.', color: 'bg-orange-100 text-orange-600' },
  { icon: Shield, title: 'Multi-Account Support', desc: 'Connect and manage multiple WhatsApp accounts with QR code authentication, health monitoring, and warm-up protection.', color: 'bg-pink-100 text-pink-600' },
  { icon: Clock, title: 'Auto-Reply', desc: 'Configure automatic responses for each WhatsApp account. Never miss a customer inquiry again.', color: 'bg-cyan-100 text-cyan-600' },
  { icon: FileText, title: 'WhatsApp Channels', desc: 'Create and manage WhatsApp newsletter channels. Schedule posts, attach media, and track reactions.', color: 'bg-yellow-100 text-yellow-600' },
  { icon: BarChart3, title: 'Analytics & Reports', desc: 'Track delivery rates, read receipts, campaign performance, and account health with a comprehensive dashboard.', color: 'bg-red-100 text-red-600' },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Everything You Need for WhatsApp Marketing
          </h2>
          <p className="text-lg text-gray-500 max-w-[600px] leading-relaxed">
            A complete suite of tools to manage campaigns, automate messaging, and grow your customer engagement at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="p-8 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:border-green-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-5 ${f.color}`}>
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

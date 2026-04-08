import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const columns: { title: string; links: FooterLink[] }[] = [
  { title: 'Product', links: [
    { label: 'Bulk Campaigns', href: '/products/campaigns' },
    { label: 'Inbox', href: '/products/inbox' },
    { label: 'Contacts', href: '/products/contacts' },
    { label: 'Templates', href: '/products/templates' },
    { label: 'Channels', href: '/products/channels' },
    { label: 'API', href: '/products/api' },
  ]},
  { title: 'Solutions', links: [
    { label: 'E-Commerce', href: '/solutions/e-commerce' },
    { label: 'Real Estate', href: '/solutions/real-estate' },
    { label: 'Education', href: '/solutions/education' },
    { label: 'Healthcare', href: '/solutions/healthcare' },
    { label: 'Travel', href: '/solutions/travel' },
  ]},
  { title: 'Resources', links: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '/products/api' },
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Support', href: '/contact' },
  ]},
  { title: 'Company', links: [
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ]},
];

export function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-gray-900 text-gray-400">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-extrabold text-2xl text-white mb-4">
              <div className="w-[38px] h-[38px] bg-gradient-to-br from-green-500 to-green-700 rounded-[10px] flex items-center justify-center text-white">
                <MessageSquare size={20} />
              </div>
              Msgify
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px]">
              The most powerful WhatsApp automation platform. Engage customers, grow your business, and scale your messaging.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">{col.title}</h4>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-sm hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px]">
          <span>&copy; {new Date().getFullYear()} Msgify. All rights reserved.</span>
          <div className="flex gap-4">
            {[
              { label: 'X', href: '#' },
              { label: 'in', href: '#' },
              { label: 'GH', href: '#' },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-sm hover:bg-green-600 hover:text-white transition-all"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

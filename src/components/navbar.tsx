'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Menu, X } from 'lucide-react';
import { PORTAL_URL } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-2xl text-green-700">
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-green-500 to-green-700 rounded-[10px] flex items-center justify-center text-white">
            <MessageSquare size={20} />
          </div>
          Msgify
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {['Features', 'How It Works', 'Pricing', 'API'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[15px] font-medium text-gray-600 hover:text-green-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={`${PORTAL_URL}/login`}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] font-semibold text-[15px] bg-transparent border-[1.5px] border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600 transition-all"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] font-semibold text-[15px] bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Start Free Trial
          </Link>
        </div>

        <button className="lg:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {['Features', 'How It Works', 'Pricing', 'API'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[15px] font-medium text-gray-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <Link href={`${PORTAL_URL}/login`} className="flex-1 text-center px-4 py-2.5 rounded-[10px] border border-gray-200 font-semibold text-sm text-gray-700">
              Log In
            </Link>
            <Link href="/signup" className="flex-1 text-center px-4 py-2.5 rounded-[10px] bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold text-sm">
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

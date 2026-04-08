'use client';

import { useState } from 'react';
import { API_BASE } from '@/lib/constants';

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      subject: fd.get('subject'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to send message');
      setSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-[10px] text-sm bg-red-50 text-red-600 border border-red-200">{error}</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            name="subject"
            required
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10"
          >
            <option value="">Select a topic</option>
            <option value="sales">Sales Inquiry</option>
            <option value="demo">Request a Demo</option>
            <option value="support">Technical Support</option>
            <option value="enterprise">Enterprise Plan</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white text-base font-bold cursor-pointer transition-all hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

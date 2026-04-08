'use client';

import { useState } from 'react';
import { PORTAL_URL, COUNTRIES } from '@/lib/constants';
import { apiFetch } from '@/lib/api';

export function SignupForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const fd = new FormData(form);
    const password = fd.get('password') as string;
    const confirmPassword = fd.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setSubmitting(true);
    try {
      const res = await apiFetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('fullName'),
          email: fd.get('email'),
          password,
          companyName: fd.get('companyName'),
          phone: fd.get('phone'),
          country: fd.get('country'),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Registration failed');

      setSuccess('Account created successfully! Redirecting to your dashboard...');
      localStorage.setItem('msgify_token', data.token);
      setTimeout(() => {
        window.location.href = `${PORTAL_URL}/login?registered=true`;
      }, 1500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-[10px] text-sm bg-red-50 text-red-600 border border-red-200">{error}</div>
      )}
      {success && (
        <div className="p-3 rounded-[10px] text-sm bg-green-50 text-green-700 border border-green-200">{success}</div>
      )}

      <div>
        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
          Customer Name <span className="text-red-500">*</span>
        </label>
        <input
          name="companyName"
          type="text"
          required
          minLength={2}
          placeholder="Your company or business name"
          className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="fullName"
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Contact Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Email (User ID) <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            required
            className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2712%27%20height%3D%278%27%20viewBox%3D%270%200%2012%208%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1%201.5L6%206.5L11%201.5%27%20stroke%3D%27%239CA3AF%27%20stroke-width%3D%271.5%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_14px_center]"
          >
            <option value="">Select Country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          placeholder="Minimum 8 characters"
          className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
        />
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <input
          name="confirmPassword"
          type="password"
          required
          minLength={8}
          placeholder="Re-enter your password"
          className="w-full px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-[10px] text-[15px] text-gray-800 outline-none focus:border-green-500 focus:ring-[3px] focus:ring-green-500/10 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3.5 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white text-base font-bold cursor-pointer transition-all hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mt-2"
      >
        {submitting ? 'Creating Account...' : 'Create Account'}
      </button>

      <p className="text-center text-[13px] text-gray-400 mt-4">
        Already have an account?{' '}
        <a href={`${PORTAL_URL}/login`} className="text-green-600 font-medium">
          Log in
        </a>
      </p>
    </form>
  );
}

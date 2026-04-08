const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4400';
const WEBSITE_API_KEY = process.env.NEXT_PUBLIC_WEBSITE_API_KEY || '';

/**
 * Authenticated fetch wrapper for all website-to-backend API calls.
 * Automatically includes the X-Website-Api-Key header.
 */
export async function apiFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const url = `${API_BASE}${path}`;
  const headers: Record<string, string> = {
    'X-Website-Api-Key': WEBSITE_API_KEY,
    ...(options.headers as Record<string, string> || {}),
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

/**
 * Server-side fetch for Next.js SSR (e.g., pricing on homepage).
 * Includes API key and cache control.
 */
export async function serverFetch(path: string): Promise<Response> {
  const url = `${API_BASE}${path}`;
  return fetch(url, {
    cache: 'no-store',
    headers: {
      'X-Website-Api-Key': WEBSITE_API_KEY,
    },
  });
}

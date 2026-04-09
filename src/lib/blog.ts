import { serverFetch } from './api';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  categoryId: { _id: string; name: string; slug: string } | null;
  tags: string[];
  author: string;
  status: string;
  publishDate: string;
  metaTitle: string;
  metaDescription: string;
  viewCount: number;
  createdAt: string;
}

export interface BlogCategory {
  _id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export async function getPosts(page = 1, category?: string, tag?: string): Promise<{ posts: BlogPost[]; total: number; pages: number }> {
  try {
    const params = new URLSearchParams({ page: String(page), limit: '12' });
    if (category) params.set('category', category);
    if (tag) params.set('tag', tag);
    const res = await serverFetch(`/api/blog/posts/public?${params}`);
    if (!res.ok) return { posts: [], total: 0, pages: 0 };
    const data = await res.json();
    return { posts: data.posts, total: data.total, pages: data.pages };
  } catch {
    return { posts: [], total: 0, pages: 0 };
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await serverFetch(`/api/blog/posts/public/${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.post;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<BlogCategory[]> {
  try {
    const res = await serverFetch('/api/blog/categories/public');
    if (!res.ok) return [];
    const data = await res.json();
    return data.categories;
  } catch {
    return [];
  }
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

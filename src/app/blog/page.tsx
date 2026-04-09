import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Eye, Tag } from 'lucide-react';
import { getPosts, getCategories, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Msgify | WhatsApp Marketing Tips & Guides',
  description: 'Learn WhatsApp marketing strategies, automation tips, bulk messaging best practices, and business growth insights from the Msgify team.',
  openGraph: {
    title: 'Blog — Msgify',
    description: 'WhatsApp marketing tips, automation guides, and business growth insights.',
    url: 'https://msgify.io/blog',
    siteName: 'Msgify',
    type: 'website',
  },
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string; category?: string; tag?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const [{ posts, pages }, categories] = await Promise.all([
    getPosts(page, params.category, params.tag),
    getCategories(),
  ]);

  const activeCategory = params.category;
  const activeTag = params.tag;

  return (
    <main>
      {/* Hero */}
      <section className="pt-[140px] pb-16 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse-dot" />
            Msgify Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] text-gray-900 mb-4 tracking-tight">
            WhatsApp Marketing <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto">
            Strategies, guides, and best practices to help you grow your business with WhatsApp automation.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !activeCategory && !activeTag
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Posts
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  href={`/blog?category=${cat.slug}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.slug
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name} ({cat.postCount})
                </Link>
              ))}
            </div>
          )}

          {activeTag && (
            <div className="mb-8 flex items-center gap-2">
              <Tag size={16} className="text-green-600" />
              <span className="text-sm text-gray-500">Tagged:</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{activeTag}</span>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600 ml-2">Clear</Link>
            </div>
          )}

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className={`group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-green-200 hover:-translate-y-1 transition-all duration-300 ${
                      idx === 0 && posts.length > 2 ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                  >
                    {post.coverImage ? (
                      <div className={`relative w-full ${idx === 0 && posts.length > 2 ? 'h-[320px]' : 'h-[220px]'} bg-gray-100 overflow-hidden`}>
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : (
                      <div className={`${idx === 0 && posts.length > 2 ? 'h-[320px]' : 'h-[220px]'} bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center`}>
                        <div className="w-16 h-16 bg-green-200 rounded-2xl flex items-center justify-center">
                          <Tag size={24} className="text-green-600" />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      {post.categoryId && (
                        <span className="inline-block self-start px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-3">
                          {post.categoryId.name}
                        </span>
                      )}
                      <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors ${idx === 0 && posts.length > 2 ? 'text-2xl' : 'text-lg'}`}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {formatDate(post.publishDate)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={13} />
                            {post.viewCount} views
                          </span>
                        </div>
                        <span className="font-medium text-gray-500">{post.author}</span>
                      </div>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[11px]">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/blog?page=${p}${activeCategory ? `&category=${activeCategory}` : ''}${activeTag ? `&tag=${activeTag}` : ''}`}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
                        p === page ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Tag size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-500 mb-6">Check back soon for new content!</p>
              {(activeCategory || activeTag) && (
                <Link href="/blog" className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700">
                  View all posts <ArrowRight size={16} />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 text-white text-center relative overflow-hidden">
        <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">Ready to Automate Your WhatsApp?</h2>
          <p className="text-lg opacity-85 max-w-[600px] mx-auto mb-10">Join 2,000+ businesses using Msgify to engage customers at scale.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-white text-green-700 hover:bg-green-50 transition-all">
            Start Free Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Eye, Tag } from 'lucide-react';
import { getPosts, getCategories, formatDate } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  const name = category?.name || slug;

  return {
    title: `${name} — Msgify Blog`,
    description: `Read our latest articles about ${name.toLowerCase()}. Tips, guides, and insights from the Msgify team.`,
  };
}

export default async function BlogCategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = parseInt(sp.page || '1');

  const [{ posts, pages }, categories] = await Promise.all([
    getPosts(page, slug),
    getCategories(),
  ]);

  const category = categories.find((c) => c.slug === slug);
  const categoryName = category?.name || slug;

  return (
    <main>
      {/* Hero */}
      <section className="pt-[140px] pb-16 bg-gradient-to-b from-white via-green-50 to-white relative overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 transition-colors mb-6">
            <ArrowLeft size={15} />
            All Posts
          </Link>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            Category
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] text-gray-900 mb-4 tracking-tight">
            {categoryName}
          </h1>
          {category?.description && (
            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto">{category.description}</p>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Other categories */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Link href="/blog" className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all">
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  cat.slug === slug ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({cat.postCount})
              </Link>
            ))}
          </div>

          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-green-200 hover:-translate-y-1 transition-all duration-300"
                  >
                    {post.coverImage ? (
                      <div className="h-[220px] bg-gray-100 overflow-hidden">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : (
                      <div className="h-[220px] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                        <Tag size={24} className="text-green-400" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{post.title}</h2>
                      {post.excerpt && <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2">{post.excerpt}</p>}
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1"><Calendar size={13} />{formatDate(post.publishDate)}</span>
                          <span className="flex items-center gap-1"><Eye size={13} />{post.viewCount}</span>
                        </div>
                        <span className="font-medium text-gray-500">{post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {pages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/blog/category/${slug}?page=${p}`}
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">No posts in this category</h3>
              <p className="text-gray-500 mb-6">Check back soon or browse other categories.</p>
              <Link href="/blog" className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700">
                View all posts <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

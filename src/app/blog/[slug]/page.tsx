import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts, formatDate } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { Calendar, Eye, ArrowLeft, User, Tag } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = post.metaTitle || `${post.title} — Msgify Blog`;
  const description = post.metaDescription || post.excerpt || post.title;

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://msgify.io/blog/${post.slug}`,
      siteName: 'Msgify',
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      ...(post.coverImage ? { images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      ...(post.coverImage ? { images: [post.coverImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  // Get related posts (same category, excluding current)
  const categorySlug = post.categoryId?.slug;
  const { posts: relatedPosts } = await getPosts(1, categorySlug);
  const related = relatedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    ...(post.coverImage ? { image: post.coverImage } : {}),
    datePublished: post.publishDate,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Msgify',
      logo: { '@type': 'ImageObject', url: 'https://msgify.io/favicon.svg' },
    },
    mainEntityOfPage: `https://msgify.io/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="pt-32 pb-20">
        <article className="max-w-[800px] mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>

          {/* Category */}
          {post.categoryId && (
            <Link
              href={`/blog?category=${post.categoryId.slug}`}
              className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-4 hover:bg-green-100 transition-colors"
            >
              {post.categoryId.name}
            </Link>
          )}

          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <User size={15} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye size={15} />
              {post.viewCount} views
            </span>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative w-full rounded-2xl overflow-hidden mb-10 bg-gray-100">
              <img src={post.coverImage} alt={post.title} className="w-full object-cover rounded-2xl" />
            </div>
          )}

          {/* Content */}
          <div className="prose-custom" dangerouslySetInnerHTML={{ __html: html }} />

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to grow your business with WhatsApp?</h3>
            <p className="text-gray-600 mb-5">
              Start sending bulk messages, automate conversations, and manage multiple accounts — all from one dashboard.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold text-[15px] shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.5)] transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="max-w-[1200px] mx-auto px-6 mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-green-200 transition-all duration-300"
                >
                  {p.coverImage ? (
                    <div className="relative w-full h-[180px] bg-gray-100 overflow-hidden">
                      <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="h-[180px] bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                      <Tag size={24} className="text-green-400" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500">{formatDate(p.publishDate)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

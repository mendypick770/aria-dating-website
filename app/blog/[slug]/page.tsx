import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { marked } from "marked";


interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    alternates: {
      canonical: `https://www.ariadating.com/blog/${slug}`,
    },
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      publishedTime: post.publish_date,
      authors: post.author ? [post.author] : [],
      url: `https://www.ariadating.com/blog/${slug}`,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.cover_image ? [post.cover_image] : [],
    "datePublished": post.publish_date,
    "author": {
      "@type": "Person",
      "name": post.author || "Aria Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aria",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ariadating.com/aria-black-dating-app-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.ariadating.com/blog/${slug}`
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#ededed] py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-[800px] mx-auto w-full">
        
        {/* Back Link */}
        <div className="mb-12 pt-10">
          <Link href="/blog" className="inline-flex items-center text-[#a1a1aa] hover:text-white transition-colors text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-[#a1a1aa] text-sm md:text-base gap-4">
            {post.publish_date && (
              <time className="flex-shrink-0">{post.publish_date}</time>
            )}
            {post.publish_date && post.author && (
              <span className="text-white/20">•</span>
            )}
            {post.author && (
              <span className="font-medium text-white/80">{post.author}</span>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {post.cover_image && (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white/5 rounded-[28px] overflow-hidden mb-16 border border-white/5">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}

        {/* Content Body */}
        <div 
          className="prose prose-invert prose-lg md:prose-xl max-w-none text-white/80 leading-relaxed 
          prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-[1.125rem] md:prose-p:text-[1.25rem] prose-p:font-light
          prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-12
          prose-a:text-pink-400 hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-3
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
          prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12
          mx-auto"
          dangerouslySetInnerHTML={{ 
            __html: await marked.parse(post.content.replace(/\n+/g, '\n\n'), { breaks: true, gfm: true }) 
          }}
        />
        
      </article>
    </main>
  );
}

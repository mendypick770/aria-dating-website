import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Insights, updates, and stories from Aria, the black dating app for serious relationships.",
  alternates: {
    canonical: "https://www.ariadating.com/blog",
  },
};

export const dynamic = "force-dynamic";

export default async function BlogListingPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-[#050505] text-[#ededed] py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto w-full">
        
        <header className="mb-16 md:mb-24 flex flex-col space-y-4 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-md">
            Blog
          </h1>
          <p className="text-[#a1a1aa] text-lg font-light max-w-2xl">
            Insights, updates, and stories from the Aria team.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-[#a1a1aa] text-lg">No published posts available at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-[28px] overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Cover Image */}
                <div className="relative w-full aspect-[4/3] bg-black/50 overflow-hidden">
                  {post.cover_image ? (
                    // Using standard img instead of next/image to support arbitrary google drive/imgur links
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8 space-y-5">
                  <div className="flex items-center space-x-3 text-sm text-[#a1a1aa] uppercase tracking-wider font-semibold">
                    {post.publish_date && <time>{post.publish_date}</time>}
                  </div>
                  
                  <h2 className="text-[26px] md:text-3xl font-semibold text-white leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#a1a1aa] text-base md:text-[17px] font-light leading-relaxed flex-grow pt-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-8 mt-auto">
                    <span className="text-white font-medium text-[15px] inline-flex items-center group-hover:text-pink-400 transition-colors">
                      Read more
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

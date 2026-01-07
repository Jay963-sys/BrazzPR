import { client } from "../../sanity/lib/client";
import { urlFor as urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface Post {
  title: string;
  slug: { current: string } | null;
  mainImage?: SanityImage;
  publishedAt: string;
  excerpt: string;
}

// Fetch data
async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": body[0].children[0].text
  }`;
  return client.fetch(query);
}

export const revalidate = 60;

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <section className="bg-white min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 border-b border-neutral-200 pb-8">
          <span className="text-red-600 font-bold text-xs uppercase tracking-[0.2em]">
            Insights & News
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mt-4 tracking-tight">
            The <span className="text-red-600 font-serif italic">Latest.</span>
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: Post) => {
            if (!post.slug?.current) return null;

            return (
              <Link
                key={post.slug.current}
                href={`/blog/${post.slug.current}`}
                className="group cursor-pointer"
              >
                <div className="relative h-64 w-full bg-neutral-100 overflow-hidden mb-6">
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="flex flex-col">
                  <p className="text-xs font-mono text-neutral-400 mb-2">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                  <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors leading-tight mb-3">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-2">
                    Read Article <span>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

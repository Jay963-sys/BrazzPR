// app/blog/page.tsx
import { client } from "../../sanity/lib/client";
import { urlFor as urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import ShareButton from "../components/ShareButton";

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
        <div className="mb-20 border-b border-neutral-200 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.2em]">
              Insights & News
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mt-4 tracking-tight">
              The{" "}
              <span className="text-red-600 font-serif italic">Latest.</span>
            </h1>
          </div>
          {/* Main Page Share Button */}
          <div className="mb-2">
            <ShareButton title="The Latest Insights & News from BrazzPR" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: Post) => {
            if (!post.slug?.current) return null;

            const postPath = `/blog/${post.slug.current}`;

            return (
              <div key={post.slug.current} className="group flex flex-col">
                {/* Image Link */}
                <Link
                  href={postPath}
                  className="relative h-64 w-full bg-neutral-100 overflow-hidden mb-6 block"
                >
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </Link>

                <div className="flex flex-col flex-grow">
                  {/* Date & Individual Share Button Row */}
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-mono text-neutral-400">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                    <ShareButton title={post.title} path={postPath} />
                  </div>

                  {/* Title Link */}
                  <Link href={postPath} className="block">
                    <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors leading-tight mb-3">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-neutral-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read Article Link */}
                  <Link
                    href={postPath}
                    className="mt-auto text-xs font-bold uppercase tracking-widest text-red-600 flex items-center gap-2 w-fit hover:text-red-800 transition-colors"
                  >
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

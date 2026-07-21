// app/blog/[slug]/page.tsx

import { client } from "../../../sanity/lib/client";
import { urlFor as urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "../../components/ShareButton";

export const revalidate = 60;

async function getPost(slug: string) {
  const query = `*[
    _type == "post" &&
    slug.current == $slug
  ][0]{
    title,
    publishedAt,
    mainImage,
    body
  }`;

  return client.fetch(query, { slug });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-neutral-500 hover:text-red-600 text-xs font-bold uppercase tracking-widest mb-8 inline-block transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Date & Share Button Wrapper */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-neutral-200 pb-8">
          <p className="text-neutral-400 font-mono text-sm">
            Published on {new Date(post.publishedAt).toDateString()}
          </p>
          <ShareButton title={post.title} />
        </div>

        {/* Main Image */}
        {post.mainImage && (
          <div className="relative w-full h-[300px] md:h-[500px] mb-12">
            <Image
              src={urlForImage(post.mainImage).width(1200).quality(80).url()}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Body */}
        <div className="pb-20">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="relative h-96 w-full my-10 rounded-lg overflow-hidden bg-neutral-100">
                    <Image
                      src={urlForImage(value).width(1200).quality(80).url()}
                      alt="Blog visual"
                      fill
                      className="object-contain"
                    />
                  </div>
                ),
              },
              block: {
                normal: ({ children }) => (
                  <p className="text-lg text-neutral-800 leading-relaxed mb-6 font-light">
                    {children}
                  </p>
                ),
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-neutral-900 mt-10 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 border-l-4 border-red-600 pl-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">
                    {children}
                  </h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-red-600 pl-4 py-2 my-8 italic text-xl text-neutral-700 bg-neutral-50 pr-4">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc ml-6 mb-6 text-lg text-neutral-800 space-y-2 marker:text-red-600">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal ml-6 mb-6 text-lg text-neutral-800 space-y-2 marker:font-bold">
                    {children}
                  </ol>
                ),
              },
              marks: {
                link: ({ children, value }) => {
                  return (
                    <Link
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 underline hover:text-red-800 decoration-red-600 underline-offset-2 transition-colors"
                    >
                      {children}
                    </Link>
                  );
                },
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}

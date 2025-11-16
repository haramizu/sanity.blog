import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import Hero from "@/components/Hero";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(date desc)[0...12]{_id, title, slug, date}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <Hero
        title="Welcome to My Blog"
        publishDate="2025/11/16"
        imageUrl="/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg"
      />
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

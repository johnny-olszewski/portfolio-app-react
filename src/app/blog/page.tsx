import { getAllPosts } from "@/lib/wpClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Johnny Olszewski",
  description: "Thoughts on software engineering, building, and technology.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map((post: any) => (
        <article key={post.id} className="mb-8">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))}
    </main>
  );
}

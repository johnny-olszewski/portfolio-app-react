import BackgroundComponent from "@/components/background-component/BackgroundComponent";
import { getAllPosts } from "@/lib/wpClient";
import { features } from "@/config/features";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

export const metadata: Metadata = {
  title: "Blog - Johnny Olszewski",
  description: "Thoughts on software engineering, building, and technology.",
};

export default async function BlogPage() {
  // Redirect to 404 if blog feature is disabled
  if (!features.blog) {
    notFound();
  }
  const posts = await getAllPosts();

  const firstColumnWidth = "w-3/4";
  const secondColumnWidth = "w-1/4";

  const _renderPost = (post: Post) => {
    return (
      <article key={post.id} className="w-full bg-lime-600/20 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </article>
    );
  };

  const _renderTestPosts = () => {
    if (!posts || posts.length === 0) return null;
    const testPosts = Array.from({ length: 100 }, (_, i) => {
      const post = {
        ...posts[0],
        id: `${posts[0].id}-test-${i}`,
      };
      return _renderPost(post);
    });
    return <>{testPosts}</>;
  };

  const _renderHeader = () => {
    return (
      <div className="flex flex-row w-full items-end gap-8">
        <div className={`flex ${firstColumnWidth}`}>
          <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 w-fit">
            recent posts
          </h2>
        </div>
        <div className={`flex ${secondColumnWidth}`}>
          <h2 className="shrink-0 text-3xl font-semibold border-lime-600/30 border-b-4 w-fit">
            categories
          </h2>
        </div>
      </div>
    );
  };

  return (
    <BackgroundComponent backgroundColor="bg-white">
      <main className="flex flex-col w-2/3 items-start justify-center mx-auto pt-24 gap-8 z-100">
        {_renderHeader()}
        <div className="flex flex-row w-full gap-8">
          <div className="flex flex-col w-3/4">
            <div className="flex flex-col overflow-y-auto max-h-[80vh] gap-4 ">
              {/* {posts.map((post: any) => _renderPost(post))} */}
              {_renderTestPosts()}
            </div>
          </div>
          <div className="flex w-1/4"></div>
        </div>
      </main>
    </BackgroundComponent>
  );
}

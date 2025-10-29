import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Johnny Olszewski",
  description: "Thoughts on software engineering, building, and technology.",
};

export default function BlogPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Blog</h1>
        <p className="text-xl text-gray-500">Coming soon...</p>
      </div>
    </div>
  );
}

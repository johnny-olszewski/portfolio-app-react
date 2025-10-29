import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance - Johnny Olszewski",
  description: "Freelance software engineering services and consulting.",
};

export default function FreelancePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Freelance</h1>
        <p className="text-xl text-gray-500">Coming soon...</p>
      </div>
    </div>
  );
}

"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderComponentProps {
  children: ReactNode;
}

const HeaderComponent = ({ children }: HeaderComponentProps) => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-between px-8 py-6 z-[100] bg-transparent">
        <Link
          href="/"
          className="text-xl font-bold hover:text-lime-600 transition-colors"
        >
          johnnyo.dev
        </Link>
        <nav className="flex flex-row items-center gap-6 text-lg">
          <Link
            href="/"
            className={`hover:text-gray-900 transition-colors p-2 rounded-lg ${
              pathname === "/"
                ? "text-blue-500 bg-slate-500/40"
                : "text-gray-600"
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/freelance"
            className={`hover:text-gray-900 transition-colors p-2 rounded-lg ${
              pathname === "/freelance"
                ? "text-blue-500 bg-slate-500/40"
                : "text-gray-600"
            }`}
          >
            Freelance
          </Link>
          <Link
            href="/blog"
            className={`hover:text-gray-900 transition-colors p-2 rounded-lg ${
              pathname === "/blog"
                ? "text-blue-500 bg-slate-500/40"
                : "text-gray-600"
            }`}
          >
            Blog
          </Link>
        </nav>
      </header>
      <main className="z-[1]">{children}</main>
    </>
  );
};

export default HeaderComponent;

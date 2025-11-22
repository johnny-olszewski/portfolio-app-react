"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "./constants";

interface HeaderComponentProps {
  children: ReactNode;
}

const HeaderComponent = ({ children }: HeaderComponentProps) => {
  const pathname = usePathname();

  const _renderLinks = () => {
    return HEADER_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`hover:text-lime-800 transition-colors p-2 rounded-lg text-2xl ${
          pathname === link.href
            ? "text-lime-800 bg-lime-600/20"
            : "text-lime-600"
        }`}
      >
        {link.label}
      </Link>
    ));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-start px-8 py-6 z-[100] bg-transparent">
        <nav className="flex flex-row items-center gap-6 font-medium">
          {HEADER_LINKS.length > 1 ? (
            _renderLinks()
          ) : (
            <p className="text-lime-800 text-3xl">johnnyo.dev</p>
          )}
        </nav>
      </header>
      <main className="z-[1]">{children}</main>
    </>
  );
};

export default HeaderComponent;

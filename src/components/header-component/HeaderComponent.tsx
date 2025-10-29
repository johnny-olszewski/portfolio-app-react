import type { ReactNode } from "react";

interface HeaderComponentProps {
  children: ReactNode;
}

const HeaderComponent = ({ children }: HeaderComponentProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full flex flex-row items-center justify-between px-8 py-6 z-20">
        <div className="text-xl font-bold">johnnyo.dev</div>
        <nav className="flex flex-row items-center gap-6 text-lg">
          <a
            href=""
            className="text-blue-500 hover:text-gray-900 transition-colors bg-slate-500/40 p-2 rounded-lg"
          >
            Portfolio
          </a>
          <a
            href=""
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Freelance
          </a>
          <a
            href=""
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </a>
        </nav>
      </div>
      {children}
    </>
  );
};

export default HeaderComponent;

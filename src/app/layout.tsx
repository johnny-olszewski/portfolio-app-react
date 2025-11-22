import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header-component/HeaderComponent";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meet JohnnyO.dev",
  description:
    "Software Engineer. Builder. Portfolio showcasing my work and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HeaderComponent>{children}</HeaderComponent>
      </body>
    </html>
  );
}

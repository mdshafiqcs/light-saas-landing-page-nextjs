import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Light Saas Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(outfit.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}

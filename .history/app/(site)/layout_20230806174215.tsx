import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12
      md:py-20 lg:px-24 lg:py-0"
      >
        {children}
      </body>
    </html>
  );
}
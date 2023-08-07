import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Soeyadi",
  description: "Ryan Soeyadi | Software Engineer and Pianist",
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
      md:py-20 lg:px-24 md:py-0 bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      >
        {children}
      </body>
    </html>
  );
}

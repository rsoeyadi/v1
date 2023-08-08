import React from "react";
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
        className={`${inter.className} mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0 bg-gradient-to-t from-blue-700 via-blue-800 to-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}

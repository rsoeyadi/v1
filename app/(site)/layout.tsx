import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Provider } from "../components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Soeyadi | Software Engineer",
  description: "Ryan Soeyadi's Portfolio Site",
  generator: "Next.js",
  applicationName: "Ryan Soeyadi | Software Engineer",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ryan Soeyadi",
    "Soeyadi",
    "Next.js",
    "React",
    "JavaScript",
    "Software Engineer",
    "Pianist",
    "Juilliard Graduate",
    "Web Development",
    "Frontend Development",
    "UI/UX",
    "Musician",
    "Classical Music",
    "Programming",
    "Coding",
  ],
  colorScheme: "light",
  creator: "Ryan Soeyadi",
  publisher: "Ryan Soeyadi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://ryansoeyadi.com",
    title: "Ryan Soeyadi | Software Engineer",
    description: "Ryan Soeyadi's Portfolio Site",
    siteName: "Ryan Soeyadi | Software Engineer",
    images: [
      {
        url: "https://ryansoeyadi.com/images/social.jpg",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body
        className={`
        ${inter.className} mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0 dark:text-slate-300`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

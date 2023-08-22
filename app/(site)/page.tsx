import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Projects from "../components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan Soeyadi's Portfolio",
  description: "Ryan Soeyadi's portfolio website",
  metadataBase: new URL("https://ryansoeyadi.com"),
  openGraph: {
    images: "https://ryansoeyadi.com/images/social.jpg",
  },
};

export default function Home() {
  const sections = [
    { id: "about", title: "About", component: <About /> },
    { id: "experience", title: "Experience", component: <Experience /> },
    { id: "projects", title: "Personal Projects", component: <Projects /> },
  ];

  return (
    <div className="md:flex md:justify-between md:gap-4 ">
      <Hero />
      <div className="md:w-1/2 md:py-23 lg:py-24">
        {sections.map(({ id, title, component }) => (
          <section id={id} key={title}>
            <div className="mb-10">
              <h1
                key={title}
                className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight"
              >
                {title}
              </h1>
              {component}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  const sections = [
    { title: "About", component: <About /> },
    { title: "Experience", component: <Experience /> },
    { title: "Personal Projects", component: <Projects /> },
  ];

  return (
    <div className="md:flex md:justify-between md:gap-4 ">
      <Hero />
      <div className="md:w-1/2 md:py-23 lg:py-24">
        {sections.map(({ title, component }) => (
          <div key={title} className="mb-10">
            <h1 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight">
              {title}
            </h1>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Metadata } from "next";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

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
  ];

  return (
    <div className="md:flex md:justify-between md:gap-4">
      <Hero />
      <div className="md:w-1/2 py-10">
        {sections.map(({ id, title, component }) => (
          <section id={id} key={id}>
            <div className="mb-10">
              <h1 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight">
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

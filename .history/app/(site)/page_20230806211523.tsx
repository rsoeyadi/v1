import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Hero from "../components/Hero";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <div className="md:flex md:justify-between md:gap-4 md:py-23">
      <Hero />
      <div className="md:w-1/2 py-24">
        <PortableText value={aboutInformation.content} />
      </div>
    </div>
  );
}

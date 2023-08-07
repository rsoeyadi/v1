import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Hero from "../components/Hero";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <div className="md:flex md:justify-between md:gap-4">
      <Hero />
      <div className="sm:pt-24 md:w-1/2 lg:py-24">
        <PortableText value={aboutInformation.content} />
      </div>
    </div>
  );
}

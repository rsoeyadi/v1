import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <>
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        COLUMN 1
      </div>
      <div className="text-lg text-gray-700">
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
      </div>
    </>
  );
}

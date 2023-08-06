import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <>
      <div className="sticky">COLUMN 1</div>
      <div className="text-lg text-gray-700">
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
      </div>
    </>
  );
}

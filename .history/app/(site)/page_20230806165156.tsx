import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <>
      <div className="h-screen flex">
        COLUMN 1 SIDEBAR
        <div className="bg-gray-600 w-64"></div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll"></div>
        </div>
      </div>

      <div className="sticky top-0">COLUMN 1</div>
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

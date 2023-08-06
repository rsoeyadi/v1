import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <>
      <div className="h-screen flex">
        <div className="bg-gray-600 w-64"> SIDEBAR CONTENT</div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <PortableText value={aboutInformation.content} />
            <PortableText value={aboutInformation.content} />
            <PortableText value={aboutInformation.content} />
            <PortableText value={aboutInformation.content} />
            <PortableText value={aboutInformation.content} />
            <PortableText value={aboutInformation.content} />
          </div>
        </div>
      </div>
    </>
  );
}

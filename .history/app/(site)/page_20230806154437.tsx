import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  console.log({ aboutInformation });
  return (
    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={aboutInformation.content[0]} />
    </div>
  );
}

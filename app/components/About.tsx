import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function About() {
  const aboutInformation = await getAboutInformation();
  return (
    <div tabIndex={0}>
      <PortableText value={aboutInformation.content} />
    </div>
  );
}

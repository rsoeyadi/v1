import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  console.log({ aboutInformation });
  return <div>{aboutInformation.content}</div>;
}

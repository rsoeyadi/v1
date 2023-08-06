import { getAboutInformation } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const aboutInformation = getAboutInformation();

  console.log({ aboutInformation });
  return <div>{aboutInformation.content}</div>;
}

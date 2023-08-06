import { getAboutInformation } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const aboutInformation = getAboutInformation();
  return <div>{aboutInformation}</div>;
}

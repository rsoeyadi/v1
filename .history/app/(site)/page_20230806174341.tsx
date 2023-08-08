import { getAboutInformation } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const aboutInformation = await getAboutInformation();

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Ryan Soeyadi </Link>
          <a href="/">Ryan Soeyadi</a>
        </h1>
      </div>
      <div className="pt-24 lg:w-1/2 lg:py-24">
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
        <PortableText value={aboutInformation.content} />
      </div>
    </div>
  );
}
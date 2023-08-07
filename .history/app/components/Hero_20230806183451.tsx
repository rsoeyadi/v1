import { getSocialMediaIcons } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default async function Hero() {
  const socialMediaIcons = await getSocialMediaIcons();
  socialMediaIcons.map((i) => console.log(i.link));
  console.log("\n");
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link href="/">Ryan Soeyadi</Link>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer Pianist
      </h2>
      <SocialIcon url="http://youtube.com/rsoeyadi"
      <div>
        {socialMediaIcons.map((icon) => {
          <SocialIcon url={`${icon.link}`} />;
          <p>HEl</p>;
        })}
      </div>
    </div>
  );
}

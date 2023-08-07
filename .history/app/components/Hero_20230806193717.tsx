import { getProfileImage, getSocialMediaIcons } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default async function Hero() {
  const socialMediaIcons = await getSocialMediaIcons();
  const { name: imageName, image: url } = await getProfileImage();
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link href="/">Ryan Soeyadi</Link>
      </h1>
      <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer Pianist
      </h2>
      <div className="mt-5">
        <div className="px-4">
          <Image
            src={url}
            alt="..."
            className="rounded-full"
            width={700}
            height={700}
          />
        </div>
      </div>

      <ul className="ml-1 mt-8 flex items-center">
        {socialMediaIcons.map((socialMediaIcon: any) => (
          <li className="mr-3 text-xs" key={`${socialMediaIcon.link}`}>
            <SocialIcon url={`${socialMediaIcon.link}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

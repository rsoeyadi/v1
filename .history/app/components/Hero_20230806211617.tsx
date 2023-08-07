import { getProfileImage, getSocialMediaIcons } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default async function Hero() {
  const socialMediaIcons = await getSocialMediaIcons();
  const { name: imageName, image: url } = await getProfileImage();
  return (
    <div className="md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col sm:py-23 md:py-23 lg:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link href="/">Ryan Soeyadi</Link>
      </h1>
      <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer and Pianist
      </h2>
      <div className="mt-5">
        <Image
          src={url}
          alt={imageName}
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        {socialMediaIcons.map((socialMediaIcon: any) => (
          <li className="mr-3 text-xs" key={`${socialMediaIcon.link}`}>
            <SocialIcon
              url={`${socialMediaIcon.link}`}
              style={{ height: 40, width: 40 }}
              bgColor="#e2e8f0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

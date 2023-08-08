import { getProfileImage, getSocialMediaIcons } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default async function Hero() {
  const socialMediaIcons = await getSocialMediaIcons();
  const { name: imageName, image: url } = await getProfileImage();
  return (
    <>
      <div className="md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:py-23 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold">
          <Link href="/">Ryan Soeyadi</Link>
        </h1>
        <h2 className="mt-3 text-xl sm:text-xl font-medium">
          Software Engineer and Pianist
        </h2>
        <div className="mt-5">
          <Image
            src={url}
            alt={imageName}
            className="rounded-full"
            width={300}
            height={300}
          />
        </div>
        <ul className="mb-5 mt-8 flex items-center">
          {socialMediaIcons.map((socialMediaIcon: any) => (
            <li className="mr-3 text-xs" key={`${socialMediaIcon.link}`}>
              <SocialIcon
                url={`${socialMediaIcon.link}`}
                style={{ height: 40, width: 40 }}
                bgColor="#e2e8f0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full transition transform hover:scale-125"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
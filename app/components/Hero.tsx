import { getProfileImage, getSocialMediaIcons } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

export default async function Hero() {
  const socialMediaIcons = await getSocialMediaIcons();
  const { name: imageName, image: url } = await getProfileImage();

  return (
    <>
      <div
        className="
        max-md:grid max-md:place-items-center md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:py-23 lg:py-24
      "
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          <Link href="/">Hi, I&apos;m Ryan Soeyadi</Link>
        </h1>
        <h2 className="mt-3 text-xl sm:text-xl font-medium">
          Software Engineer
        </h2>
        <h3 className="mt-2 text-xl sm:text-xl font-medium">Pianist</h3>
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
            <li className="mr-3 text-xs" key={socialMediaIcon.link}>
              <SocialIcon
                url={socialMediaIcon.link}
                style={{ height: 40, width: 40 }}
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

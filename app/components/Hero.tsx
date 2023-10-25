import { getProfileImage } from "@/sanity/sanity-utils";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Navigation from "./Navigation";
import DarkModeButton from "./DarkMode";

export default async function Hero() {
  const { name: imageName, image: url } = await getProfileImage();

  return (
    <>
      <div
        className="
        max-md:grid max-md:place-items-center md:sticky md:top-0 md:flex md:max-h-screen md:w-1/2 md:flex-col md:py-10
      "
      >
        <h1 className="text-3xl sm:text-4xl font-bold">
          <Link href="/">Ryan Soeyadi</Link>
        </h1>
        <h2 className="mt-3 text-xl sm:text-xl font-medium">
          Software Engineer
        </h2>{" "}
        <div className="inline-block py-5">
          <DarkModeButton />
        </div>
        <div className="mt-5">
          <Image
            src={url}
            alt={imageName}
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <Navigation />
        <ul className="mb-5 mt-8 flex items-center">
          <li className="mr-3 text-xs">
            <SocialIcon
              url="https://github.com/rsoeyadi"
              style={{ height: 40, width: 40 }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition transform hover:scale-125 dark:bg-white"
            />
          </li>
          <li className="mr-3 text-xs">
            <SocialIcon
              url="https://www.linkedin.com/in/ryan-soeyadi/"
              style={{ height: 40, width: 40 }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition transform hover:scale-125 dark:bg-white"
            />
          </li>
          <li className="mr-3 text-xs">
            <SocialIcon
              url="https://www.youtube.com/channel/UCHWHTmKpZ28LsE62h45FB7A"
              style={{ height: 40, width: 40 }}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full transition transform hover:scale-125 dark:bg-white"
            />
          </li>
        </ul>{" "}
      </div>
    </>
  );
}

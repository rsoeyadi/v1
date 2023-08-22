"use client";
import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "sanity";

interface ProjectCardProps {
  name: string;
  link: string;
  description: PortableTextBlock[];
  imgSource: string;
  imgAlt: string;
  technologies: string[];
}

interface LinkSvgProps {
  className: string;
}

const LinkSvg: React.FC<LinkSvgProps> = ({ className }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
        fill="currentColor"
      />
      <path
        d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
        fill="currentColor"
      />
      <path
        d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  link,
  description,
  imgSource,
  imgAlt,
  technologies,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link href={link} target="_blank">
      <div className="relative mb-10 px-6 pt-4 pb-2 md:gap-4 rounded overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  dark:slate-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5">
          <LinkSvg
            className={
              "absolute top-5 right-5 sm:top-7 sm:right-9 lg:top-1 lg:right-1"
            }
          ></LinkSvg>
          <div className="pb-3 ">
            <Image
              src={imgSource}
              alt={imgAlt}
              width={200}
              height={200}
              className="mx-auto mb-2 content-center rounded shadow-[rgba(0,_0,_0,_0.4)_0px_20px_20px]  duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
            />
          </div>
          <div className="pb-2 lg:pr-1">
            <h5 className="text-2xl font-bold inline-block">{name}</h5>

            <div className="font-normal">
              <PortableText value={description} />
            </div>
          </div>
        </div>
        <div>
          {technologies.map((technology) => (
            <span
              key={technology}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

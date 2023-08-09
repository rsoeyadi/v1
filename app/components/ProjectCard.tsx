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
      <div className="mb-10 px-6 pt-4 pb-2 md:gap-4 rounded overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:-translate-y-1 hover:scale-105 duration-300">
        <div className="lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="pb-3">
            <Image src={imgSource} alt={imgAlt} width={200} height={200} />
          </div>
          <div className="pb-2">
            <h5 className="text-2xl font-bold">{name}</h5>
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

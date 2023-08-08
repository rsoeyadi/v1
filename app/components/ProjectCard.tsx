"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";

interface ProjectCardProps {
  name: string;
  link: string;
  description: PortableTextBlock[];
  imgSource: string;
  imgAlt: string;
  technologies: string[];
}

export default function ProjectCard({
  name,
  link,
  description,
  imgSource,
  imgAlt,
  technologies,
}: ProjectCardProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <Link href={link} target="_blank">
      <div className="px-6 pt-4 pb-2 mb-10 lg:grid lg:grid-cols-2 md:gap-4 rounded overflow-hidden shadow-2xl shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 duration-300 ">
        <div className="pb-3">
          <Image src={imgSource} alt={imgAlt} width={200} height={200} />
        </div>
        <div className="pb-2">
          <h5 className="text-2xl font-bold">{name}</h5>
          <div className="font-normal">
            <PortableText value={description} />
          </div>
          <div className="pt-4">
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
      </div>
    </Link>
  );
}

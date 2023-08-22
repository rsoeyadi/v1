import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { PortableTextBlock } from "sanity";

interface JobCardProps {
  company: string;
  position: string;
  description: PortableTextBlock[];
  imgSource: string;
  imgAlt: string;
  dates: Date[];
  technologies: string[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default function JobCard({
  company,
  position,
  description,
  imgSource,
  imgAlt,
  dates,
  technologies,
}: JobCardProps) {
  return (
    <div
      className="rounded overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] mb-10 dark:slate-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={position}
      tabIndex={0}
    >
      <Image
        src={imgSource}
        alt={imgAlt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{company}</div>
        <div className="text-sm font-bold mb-2">{position}</div>
        {dates.length == 2 && (
          <p className="text-sm font-bold mb-2">
            {formatDate(dates[0].toString())} -&nbsp;
            {formatDate(dates[1].toString())}
          </p>
        )}
        {dates.length === 1 && (
          <p className="text-sm font-bold mb-2">
            {formatDate(dates[0].toString())}
          </p>
        )}
        <PortableText value={description} />{" "}
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((technology) => {
          return (
            <span
              key={technology}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {technology}
            </span>
          );
        })}
      </div>
    </div>
  );
}

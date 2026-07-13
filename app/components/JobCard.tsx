import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { PortableTextBlock } from "sanity";

interface JobCardProps {
  company: string;
  position: string;
  description: PortableTextBlock[];
  imgSource: string[];
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
  const commonImageProps = {
    src: imgSource[0],
    alt: imgAlt,
    width: 0,
    height: 0,
    sizes: "100vw",
    style: { width: "100%", height: "auto" },
  };

  return (
    <div
      className="rounded overflow-hidden shadow-md hover:-translate-y-1 hover:scale-105 duration-300 hover:shadow-lg mb-10 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={position}
      tabIndex={0}
    >
      {imgSource.length > 1 ? (
        // Both variants stay laid out (opacity toggle, not display) so they
        // lazy-load together and the theme switch doesn't wait on a fetch.
        <div className="grid">
          <Image
            {...commonImageProps}
            className="col-start-1 row-start-1 transition-opacity duration-300 dark:opacity-0"
            alt={imgAlt}
          />
          <Image
            {...commonImageProps}
            src={imgSource[1]}
            className="col-start-1 row-start-1 opacity-0 transition-opacity duration-300 dark:opacity-100"
            alt={imgAlt}
            aria-hidden
          />
        </div>
      ) : (
        <Image {...commonImageProps} alt={imgAlt} />
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{company}</div>
        <div className="text-sm font-bold mb-2">{position}</div>
        {dates.length === 2 && (
          <p className="text-sm font-bold mb-2">
            {formatDate(dates[0].toString())} -{" "}
            {formatDate(dates[1].toString())}
          </p>
        )}
        {dates.length === 1 && (
          <p className="text-sm font-bold mb-2">
            {formatDate(dates[0].toString())} - present
          </p>
        )}
        <PortableText value={description} />
      </div>
      <div className="px-6 pt-4 pb-2">
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
  );
}

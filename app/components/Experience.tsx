import {
  getJobs,
  getProfileImage,
  getSocialMediaIcons,
} from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default async function Experience() {
  const jobs = await getJobs();

  return (
    <div className="">
      {jobs.map((job) => {
        return (
          <div key={job.position}>
            <p>{job.company}</p>
            <p>{job.position}</p>
            {job.dates.length == 2 && (
              <p>
                {formatDate(job.dates[0].toString())} -&nbsp;
                {formatDate(job.dates[1].toString())}
              </p>
            )}
            {job.dates.length === 1 && (
              <p>{formatDate(job.dates[0].toString())}</p>
            )}
            <PortableText value={job.description} />
          </div>
        );
      })}
    </div>
  );
}

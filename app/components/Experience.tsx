import { getJobs } from "@/sanity/sanity-utils";
import JobCard from "./JobCard";

export default async function Experience() {
  const jobs = await getJobs();

  return (
    <div>
      {jobs.map(
        ({ company, position, description, images, dates, technologies }) => (
          <JobCard
            key={company}
            company={company}
            position={position}
            description={description}
            imgSource={images}
            imgAlt={`${company} ${position}`}
            dates={dates}
            technologies={technologies}
          />
        )
      )}
    </div>
  );
}

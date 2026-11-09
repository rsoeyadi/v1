import { getJobs } from "@/sanity/sanity-utils";
import JobCard from "./JobCard";

export default async function Experience() {
  const jobs = await getJobs();

  return (
    <div>
      {jobs.map(
        ({ _id, company, position, description, images, dates, technologies }) => (
          <JobCard
            key={_id}
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

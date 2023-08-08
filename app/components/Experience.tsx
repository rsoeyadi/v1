import { getJobs } from "@/sanity/sanity-utils";
import JobCard from "./JobCard";

export default async function Experience() {
  const jobs = await getJobs();

  return (
    <div>
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.company}
            company={job.company}
            position={job.position}
            description={job.description}
            imgSource={job.image}
            imgAlt={job.company + "" + job.position}
            dates={job.dates}
            technologies={job.technologies}
          ></JobCard>
        );
      })}
    </div>
  );
}

import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";

export default async function Experience() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            link={project.link}
            description={project.description}
            imgSource={project.image}
            imgAlt={project.name}
            technologies={project.technologies}
            key={project.name}
          ></ProjectCard>
        );
      })}
    </div>
  );
}

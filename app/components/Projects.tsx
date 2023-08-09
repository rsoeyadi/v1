import { getProjects } from "@/sanity/sanity-utils";
import ProjectCard from "./ProjectCard";

export default async function Experience() {
  const projects = await getProjects();
  const sortedProjects = projects.slice(); // Sanity doesn't make it easy to sort so I have to do this :')
  const firstGroup = sortedProjects.filter(
    (project) =>
      project.name === "Professional Piano Website" ||
      project.name === "Juilcal"
  );
  const secondGroup = sortedProjects.filter(
    (project) =>
      project.name !== "Professional Piano Website" &&
      project.name !== "Juilcal"
  );
  firstGroup.sort((a, b) => a.name.localeCompare(b.name));
  const finalSortedProjects = firstGroup.concat(secondGroup);
  return (
    <div>
      {finalSortedProjects.map((project) => (
        <ProjectCard
          name={project.name}
          link={project.link}
          description={project.description}
          imgSource={project.image}
          imgAlt={project.name}
          technologies={project.technologies}
          key={project.name}
        />
      ))}
    </div>
  );
}

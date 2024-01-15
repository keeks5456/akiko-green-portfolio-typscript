import { projectData } from "../services";
import Image from "next/image";

const Projects = () => {
  const allProjects = () => {
    if (projectData) {
      return projectData.map((project) =>
        project.image ? (
          <Image
            src={project.image}
            alt="Logo"
            width={100}
            height={10}
            className="relative"
            key={project.id}
          />
        ) : null
      );
    }
  };

  allProjects();

  return <div>{allProjects()}</div>;
};
export default Projects;

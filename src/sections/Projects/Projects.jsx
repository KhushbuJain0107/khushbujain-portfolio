import ProjectsHeader from "./ProjectsHeader";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <ProjectsHeader />

        <div className="mt-16 space-y-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
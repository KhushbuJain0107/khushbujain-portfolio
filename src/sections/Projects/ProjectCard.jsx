import { CheckCircle2, ExternalLink } from "lucide-react";
import ScreenshotGallery from "./ScreenshotGallery";

const ProjectCard = ({ project }) => {
  return (
    <div className="grid lg:grid-cols-[38%_62%] gap-12 bg-white rounded-3xl border border-gray-200 shadow-lg p-8 lg:p-12 items-start">

      {/* LEFT */}
      <div>

        <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
          Featured Project
        </p>

        <h3 className="text-4xl font-bold mt-3">
          {project.title}
        </h3>

        <p className="text-xl text-gray-500 mt-2">
          {project.subtitle}
        </p>

        <p className="text-gray-700 leading-8 mt-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <h4 className="font-semibold text-lg mt-8 mb-4">
          Tech Stack
        </h4>

        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <h4 className="font-semibold text-lg mt-10 mb-4">
          Key Features
        </h4>

        <div className="space-y-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-green-600"
              />
              <span className="text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10 flex-wrap">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-black transition"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>

      {/* RIGHT */}
      <ScreenshotGallery
        screenshots={project.screenshots}
        title={project.title}
      />

    </div>
  );
};

export default ProjectCard;
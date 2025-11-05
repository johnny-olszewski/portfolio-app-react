import React from "react";
import { Constants } from "./constants";
import type { Project } from "./types";

const ProjectsComponent = () => {
  const projects = Constants.PROJECT_DATA;

  const _renderProject = (project: Project, index: number) => {
    return (
      <div
        key={index}
        className="border-4 border-lime-600/10 hover:border-lime-600/30 hover:scale-105 aspect-square rounded-lg transition-all duration-300 cursor-pointer p-4 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {project.description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1 mb-3">
            {project.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-lime-100 text-lime-800 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 hover:text-lime-800 text-sm font-medium"
          >
            View Project →
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center">
      <div className="flex flex-col w-3/4">
        <h2 className="shrink-0 text-5xl font-semibold border-lime-600/30 border-b-4 pb-1 w-fit">
          my projects
        </h2>

        <div className="flex flex-col w-full justify-center items-center">
          <div className="grid grid-cols-3 w-full gap-4 pt-8">
            {projects.map((project, index) => _renderProject(project, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;

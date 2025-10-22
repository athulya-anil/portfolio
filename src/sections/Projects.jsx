// src/components/ProjectsSection.jsx

import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/projectsData";


const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-white py-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          My Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Some of my recent AI and data-driven systems — each blending
          engineering precision with creative design.
        </p>
        <div className="w-24 h-1 bg-[#f5b642] mx-auto mt-5 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;


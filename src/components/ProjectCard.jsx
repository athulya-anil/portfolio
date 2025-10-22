// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => {
  return (
     <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,182,66,0.6)]">
      {/* Always-visible yellow underline */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#f5b642] rounded-b-2xl"></div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {project.title}
        </h3>
        <h4 className="text-md text-[#b97a00] font-semibold mb-2">
          {project.subtitle}
        </h4>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-[#f5b642]/20 text-[#b97a00] font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-800 hover:text-[#f5b642] transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-800 hover:text-[#f5b642] transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

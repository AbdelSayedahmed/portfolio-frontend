import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../functions";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-[36px] font-bold text-center mb-8 text-gray-800">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            key={project.id}
          >
            <Link to={`/projects/${project.id}`}>
              <img
                src={project.imageUrl}
                alt={project.name}
                className="rounded-t-lg w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {project.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skillSet.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-sm text-sm font-medium ${skill.color}`}
                  >
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-5 h-5"
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

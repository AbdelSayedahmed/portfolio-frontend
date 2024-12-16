import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects, getSkills } from "../functions";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectData = await getProjects();
        setProjects(projectData);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }

      try {
        const skillData = await getSkills();
        setSkills(skillData);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };

    fetchData();
  }, []);

  const getSkillDetails = (skillName) => {
    return skills.find((skill) => skill.name === skillName) || {};
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Projects
      </h1>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              key={project.id}
            >
              <Link to={`/projects/${project.id}`}>
                <img
                  src={
                    project.imageUrl ||
                    "https://via.placeholder.com/300?text=No+Image+Available"
                  }
                  alt={`Screenshot of ${project.name}`}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skillSet.map((skill) => {
                    const { icon, color } = getSkillDetails(skill);
                    return (
                      <div
                        key={`${project.id}-${skill}`}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full shadow-sm text-sm font-medium ${
                          color || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {icon && (
                          <img
                            src={icon}
                            alt={`${skill} icon`}
                            className="w-5 h-5"
                          />
                        )}
                        {skill}
                      </div>
                    );
                  })}
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Repositories:
                  </h3>
                  <ul className="list-disc list-inside">
                    {project.frontendLink.map((link, index) => (
                      <li key={index}>
                        <a
                          href={Object.values(link)[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {Object.keys(link)[0]}
                        </a>
                      </li>
                    ))}
                    {project.backendLink.map((link, index) => (
                      <li key={index}>
                        <a
                          href={Object.values(link)[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {Object.keys(link)[0]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">
                    Deployed Links:
                  </h3>
                  {project.deployedLink.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {project.deployedLink.map((link, index) => (
                        <li key={index}>
                          <a
                            href={Object.values(link)[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {Object.keys(link)[0]}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">Not available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}

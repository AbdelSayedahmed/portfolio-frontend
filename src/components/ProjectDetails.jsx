import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../functions";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProject(id);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-72 h-72 object-contain mx-auto rounded-md shadow-md"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            {project.name}
          </h1>
          <p className="text-gray-600 mt-2">{project.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Frontend Links
          </h2>
          <ul className="list-disc list-inside mt-2">
            {project.frontendLink.map((link, index) => (
              <li key={index}>
                <Link
                  to={Object.values(link)[0]}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {Object.keys(link)[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Backend Links
          </h2>
          <ul className="list-disc list-inside mt-2">
            {project.backendLink.map((link, index) => (
              <li key={index}>
                <Link
                  to={Object.values(link)[0]}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {Object.keys(link)[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Deployed Links
          </h2>
          <ul className="list-disc list-inside mt-2">
            {project.deployedLink.map((link, index) => (
              <li key={index}>
                <Link
                  to={Object.values(link)[0]}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {Object.keys(link)[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {project.skillSetIds && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Skill Set IDs
            </h2>
            <p className="text-gray-600">{project.skillSetIds}</p>
          </div>
        )}
      </div>
    </div>
  );
}

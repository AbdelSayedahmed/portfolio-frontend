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
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="w-[300px] h-[300px] p-4"
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="object-contain mx-auto rounded-md shadow-md"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

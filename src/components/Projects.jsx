import React, { useEffect, useState } from "react";
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

  const samlpleProject = {
    backend_link: "https://github.com/ayoublos/Recipe-Project-BackEnd",
    created_at: "2024-11-03T21:31:55.998Z",
    deployed_link: "https://culinarycompass.netlify.app/",
    description:
      "Culinary Compass is a web application designed to provide an extensive collection of recipes from around the world. Users can browse, contribute, and edit recipes while engaging with a community of food enthusiasts.",
    frontend_link:
      "https://github.com/AbdelSayedahmed/AbdelSayedahmed-Recipe-Project-FrontEnd",
    id: 1,
    image_url:
      "https://culinarycompass.netlify.app/app-logos/culinary-compass-logo.png",
    name: "Recipe Project",
    updated_at: "2024-11-03T21:31:55.998Z",
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex w-1/3 border border-black rounded-[12px] p-2 m-4 gap-2"
          >
            <div className="flex just-center items-center w-1/2">
              <img
                src={project.image_url}
                alt={project.name}
                className="rounded-[12px] bg-[grey] w-[100%]"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-[20px] font-semibold">{project.name}</h2>
              <p>{project.description}</p>
              <div>
                <h4 className="text-[20px] font-semibold">Links</h4>
                <div className="flex flex-col gap-1 font-medium">
                  <a href={project.frontend_link} target="_blank">
                    Frontend
                  </a>
                  <a href={project.backend_link} target="_blank">
                    Backend
                  </a>
                  <a href={project.deployed_link} target="_blank">
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

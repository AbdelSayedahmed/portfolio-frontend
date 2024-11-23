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

  const sampleProject = {
    id: 1,
    name: "iHelp",
    description:
      "iHelp is a dynamic platform designed to bridge the gap between community organizations and teen volunteers, fostering meaningful connections while making volunteering an engaging and rewarding experience. Tailored to address the challenges non-profits face in recruiting and managing volunteers, iHelp provides two distinct interfaces, Administrative Side and the Volunteer Side.",
    frontendLink: [
      "https://github.com/anthonymartz17/ihelp_frontend_organization",
      "https://github.com/anthonymartz17/ihelp-volunteers-frontend",
    ],
    backendLink: ["https://github.com/AbdelSayedahmed/ihelp-backend"],
    deployedLink: [
      "https://ihelp-org.netlify.app/login",
      "https://ihelp-demo.netlify.app/login",
    ],
    image_url:
      "https://github.com/anthonymartz17/ihelp_frontend_organization/blob/main/src/assets/logo/white_bg_ihelp_logo.png?raw=true",
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {projects.map((project) => (
          <div key={project.id} className="w-[300px] h-[300px] p-4">
            <img src={project.image_url} alt={project.name} className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

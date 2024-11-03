const URL = import.meta.env.VITE_APIURL;

const getProjects = async () => {
  const response = await fetch(`${URL}/data/projects`);
  const data = await response.json();
  return data;
};

const getSkills = async () => {
  const response = await fetch(`${URL}/data/skills`);
  const data = await response.json();
  return data;
};

export { getProjects, getSkills };

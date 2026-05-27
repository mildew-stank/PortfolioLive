import { useEffect, useState } from "react";
import { fetchProjects } from "../api";
import Project from "../components/Project";

interface ProjectData {
  Id: number;
  Title: string;
  Url: string;
  Children: string;
}

function Projects() {
  const [projects, setLabors] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setLabors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // TODO: make a skeleton
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>MEANINGLESS PROJECTS</h2>
      {projects.map((project) => (
        <Project title={project.Title} url={project.Url} key={project.Id}>
          {project.Children}
        </Project>
      ))}
    </>
  );
}

export default Projects;

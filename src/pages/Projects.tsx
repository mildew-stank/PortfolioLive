import { useEffect, useState } from "react";
import { fetchProjects } from "../api";
import Project from "../components/Project";
import SkeletonGeneric from "../skeletons/SkeletonGeneric";

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

  if (loading)
    return (
      <>
        <h2>MEANINGLESS PROJECTS</h2>
        <SkeletonGeneric />
        <SkeletonGeneric />
        <SkeletonGeneric />
      </>
    );
  if (error)
    return (
      <>
        <h2>MEANINGLESS PROJECTS</h2>
        <div>Error: {error}</div>
      </>
    );

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

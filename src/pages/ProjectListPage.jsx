import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function ProjectListPage() {
  const { projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <p>Hold please...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div id="project-list">
      {projects.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
}

export default ProjectListPage;

import { oneProject } from "../data";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";
import "./ProjectPage.css";

function ProjectPage() {
  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
  const { id } = useParams();
  // useProject returns three pieces of info, so we need to grab them all here
  const { project, isLoading, error } = useProject(id);

  if (isLoading) {
    return <p>Hold your horses boys...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="project-title">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="pledge-info">
        <h3>Pledges:</h3>
        <ul>
          {project.pledges.map((pledgeData, key) => {
            return (
              <div className="pledge-amount">
                <p key={key}>
                  {pledgeData.amount} of {project.goal}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
      <PledgeForm />
    </div>
  );
}
export default ProjectPage;

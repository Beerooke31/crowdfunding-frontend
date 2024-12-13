import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-project.js";
import { useAuth } from "../hooks/use-auth.js";
import "./ProjectForm.css";

function ProjectForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [projectDetail, setProjectDetail] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: true,
    date_created: new Date().toISOString(),
    owner: "",
  });
  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectDetail((prevProjectDetail) => ({
      ...prevProjectDetail,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      projectDetail.title &&
      projectDetail.description &&
      projectDetail.goal &&
      projectDetail.image
    ) {
      postProject(
        projectDetail.title,
        projectDetail.description,
        projectDetail.goal,
        projectDetail.image,
        projectDetail.is_open,
        projectDetail.date_created,
        projectDetail.owner
      ).then((response) => {
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
      });
    }
  };
  return (
    <form>
      <div class="createprojectform">
        <h1>Let's Start Searching</h1>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Project title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="description"
            id="description"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <input
            type="goal"
            id="goal"
            placeholder="Fundraising goal"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="input"
            id="image"
            placeholder="Add an image"
            onChange={handleChange}
          />
        </div>
        <button class="pinkbutton" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;

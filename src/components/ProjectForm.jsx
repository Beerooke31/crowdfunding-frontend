import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/use-auth.js";

function ProjectForm() {
  return (
    <form>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="What's the title of your project?"
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="description" id="description" placeholder="Description" />
      </div>
      <div>
        <label htmlFor="Goal">Goal:</label>
        <input type="goal" id="goal" placeholder="Fundraising goal" />
      </div>
      {/* Figure out what to do with image */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProjectForm;

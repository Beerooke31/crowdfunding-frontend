import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge.js";
import { useAuth } from "../hooks/use-auth.js";
import { useParams } from "react-router-dom";
import "./PledgeForm.css";
import "./ProjectCard.jsx";

function PledgeForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { auth, setAuth } = useAuth();
  const [pledge, setPledge] = useState({
    amount: "",
    comment: "",
    anonymous: false,
    project: id,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
      ...prevPledge,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pledge.amount && pledge.comment && pledge.project) {
      postPledge(
        pledge.amount,
        pledge.comment,
        pledge.anonymous,
        pledge.project
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
    <form onSubmit={handleSubmit}>
      <div class="pledge-container">
        <h1>Donate to Uncover the Truth</h1>
        <inputs>
          <div>
            <label htmlFor="supporter">Supporter name:</label>
            <input
              type="text"
              id="supporter"
              placeholder="Supporter name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="num"
              id="amount"
              placeholder="Amount"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Write a comment:</label>
            <input
              type="text"
              id="comment"
              placeholder="Comment"
              onChange={handleChange}
            />
          </div>
        </inputs>
        <button class="greybutton" type="submit">
          Donate
        </button>
      </div>
    </form>
  );
}

export default PledgeForm;

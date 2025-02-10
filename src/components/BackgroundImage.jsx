import React from "react";
import Squiggle from "../img/Squiggle.png";
import { px } from "framer-motion";


const BackgroundImage = ({ children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${Squiggle})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    position: "absolute", // Places it behind other components
    marginTop: "200px",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: -1, // Pushes it to the back
  };
  return <div style={backgroundStyle}>{children}</div>;
};

export default BackgroundImage;

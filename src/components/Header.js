import React from "react";
import Typed from "react-typed";
import Button from "./Button";
export const Header = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-text">
        <h1>FULL STACK DEVELOPER</h1>
        <Typed
          className="type-effect"
          strings={[
            "MERN stack",
            "Graphic Designs",
            "Web Designs",
            "Website Development",
          ]}
          typeSpeed={30}
          backSpeed={60}
          loop
        />
        <Button
          label="GitHub"
          link="https://github.com/LohithAmal"
          blank="_blank"
        ></Button>
      </div>
    </div>
  );
};

export default Header;

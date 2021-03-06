import React from "react";
import Button from "./Button";
import ResumeAmal from "../resume.pdf";
export const Resume = () => {
  return (
    <div>
      <section id="resume" className="portfolio rpg">
        <div className="container">
          <div className="title text-center">
            <h1>
              My Resume <hr />
            </h1>
            <p>Please click below to view and download my resume</p>
          </div>
        </div>
        <div className="text-center">
          <Button label="Resume" link={ResumeAmal} blank="_blank"></Button>
        </div>
      </section>
    </div>
  );
};

export default Resume;

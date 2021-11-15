import React from "react";
import Covid from "../covid.jpg";
import Smile from "../smile.jpg";
import Password from "../password.jpg";
import Quiz from "../code-quiz.jpg";
import Employee from "../employee.jpg";
import Pwa from "../pwa.jpg";
import Button from "./Button";
export const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <div className="container">
          <div className="title text-center">
            <h1>Portfolio</h1>
            <p>This is my featured projects and applications</p>
          </div>
          <div className="row">
            {/* covid life app */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={Covid}
                  alt="covid live app image"
                />
                <div className="card-body">
                  <h5 className="card-title">COVID LIVE UPDATE APP</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
            {/* work place emotion */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={Smile}
                  alt="work place image"
                />
                <div className="card-body">
                  <h5 className="card-title">Workplace emotion app</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
            {/* password generator */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={Password}
                  alt="password generator image"
                />
                <div className="card-body">
                  <h5 className="card-title">Random Password generator</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
            {/* Quiz  */}
            <div className="col-md-4">
              <div className="card text-center">
                <img className="card-img-top" src={Quiz} alt="Quiz app image" />
                <div className="card-body">
                  <h5 className="card-title">Coding Quiz </h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
            {/*  PWA app*/}
            <div className="col-md-4">
              <div className="card text-center">
                <img className="card-img-top" src={Pwa} alt="PWA app image" />
                <div className="card-body">
                  <h5 className="card-title">PWA Budget Tracker</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
            {/*  Employee tracker*/}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={Employee}
                  alt="Employee app image"
                />
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal"
                    blank="_blank"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
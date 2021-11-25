import React from "react";
import Covid from "../covid.jpg";
import Smile from "../smile.jpg";
import Password from "../password.jpg";
import Squid from "../squid.jpg";
import Quiz from "../code-quiz.jpg";
import Employee from "../employee.jpg";
import Pwa from "../pwa.jpg";
import Button from "./Button";

export const Portfolio = () => {
  return (
    <div id="potfolio">
      <section className="portfolio">
        <div className="container">
          <div className="title text-center">
            <h1>
              Portfolio <hr />
            </h1>
            <p>This is my featured projects and applications</p>
          </div>
          <div className="row">
            {/* covid life app */}
            <div className="col-md-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src={Squid}
                  alt="covid live app image"
                />
                <div className="card-body">
                  <h5 className="card-title">Squid game eCommorce</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://thesquidstore.herokuapp.com/"
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
                    link="https://github.com/utor2021/Work-feelings"
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
                  src={Covid}
                  alt="password generator image"
                />
                <div className="card-body">
                  <h5 className="card-title">Covid Live update</h5>
                  <p className="card-text">
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore
                  </p>
                  <Button
                    label="code"
                    link="https://github.com/LohithAmal/Task-3-passwordGenerator"
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
                    link="https://github.com/LohithAmal/code-quiz-lohith-amal"
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
                    link="https://github.com/LohithAmal/PWA-BUDGET-TRACKER"
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
                    link="https://github.com/LohithAmal/UFT-12-EMPLOYEE-TRACKER"
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

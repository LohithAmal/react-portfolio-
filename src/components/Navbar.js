import React from "react";
import myLogo from "../MYLOGO.jpg";
import { Link } from "react-scroll";
// font awsome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link
          smooth={true}
          to="home"
          offset={-100}
          className="navbar-brand"
          href="#"
        >
          <img className="my-logo" src={myLogo} alt="Amal Lohith logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#ffea00" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="about-me"
                offset={-100}
                className="nav-link"
                href="#"
              >
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="resume"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

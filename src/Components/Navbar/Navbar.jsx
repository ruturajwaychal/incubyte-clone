/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container text-center">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img className="nav-logo" src={logo} alt="..." height={55} />
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav mx-auto">
            <div className="dropdown">
              <button
                className="btn career dropdown-toggle"
                type="button"
                id="dropdownmenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </button>
              <ul className="dropdown-menu menu">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Why Incubyte
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Inspiration
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn career dropdown-toggle"
                type="button"
                id="dropdownmenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Work
              </button>
              <ul className="dropdown-menu menu">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Software Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Software Modernization
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn dropdown-toggle career"
                type="button"
                id="dropdownmenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </button>
              <ul className="dropdown-menu menu rounded-3">
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white" href="#">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <li className=" nav-item mx-2 ">
              <a className="nav-link  career" href="#home">
                Careers
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn btn-primary rounded-pill px-4 mx-auto py-2 talk"
          >
            LET'S TALK!
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

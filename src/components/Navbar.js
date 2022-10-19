import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="navbar header-nav header-white header-transparent navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span>Trung</span>
          </Link>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar-collapse-toggle"
          >
            <ul class="navbar-nav ml-auto">
              <li>
                <Link className="nav-link active" to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/about">
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/skills">
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/experiences">
                  <span>Experiences</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="/contact">
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

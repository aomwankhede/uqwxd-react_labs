import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid text-light bg-dark">
            <Link className="navbar-brand text-light bg-dark" to="/">
              WorldToday
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Business"
                  >
                    Bussiness
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/General"
                  >
                    General
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Health"
                  >
                    Health
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Science"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Sports"
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    to="/Technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

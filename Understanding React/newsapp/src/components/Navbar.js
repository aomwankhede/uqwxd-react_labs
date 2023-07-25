import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid text-light bg-dark">
            <a className="navbar-brand text-light bg-dark" href="/">
              WorldToday
            </a>
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
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    Bussiness
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    entertainment
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    general
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    health
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    science
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    sports
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link active text-light bg-dark"
                    aria-current="page"
                    href="/"
                  >
                    technology
                  </a>
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

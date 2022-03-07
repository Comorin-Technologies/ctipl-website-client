import "./NavBar.css";
import logo from "../../Assets/NavBar/CT_logo.png";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as React from "react";

export function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
        <div>
          <Link className="navbar-brand" to="/">
            <img src={logo} height="75" width="200" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item nav-items active">
              <Link className="nav-link nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-links" href="#aboutPage">
                About Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Offerings {<ArrowDropDownIcon />}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <b>Supply Chain Management</b>
                  </a>
                  <ul className="dropdown2in">
                    <li>
                      <a className="dropdown-item dropdown2in" href="#">
                        Supply Chain Planning
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown2in" href="#">
                        Supply Chain Executions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown2in" href="#">
                        Supply Chain Analytics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown2in" href="#">
                        Supply Chain Security
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item dropdown2in"
                        to="/our-projects"
                      >
                        Supply Chain Innovations
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>Enterprise Blockchain</b>
                  </a>
                  <ul className="dropdown2in">
                    <li>
                      <a className="dropdown-item dropdown2in" href="#">
                        Healthcare, IoT, Energy and Supply Chain
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>Financial Supply Chain Management</b>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b>Human Capital Management</b>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

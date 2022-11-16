import React from "react";
import ResumePDF from "../../assets/Omar-Daghestani-Resume.PDF";
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <header className="flex-row px-1">
      <nav
        class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand" href="/">
            {" "}
            Omar Daghestani
          </a>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1">
                <Link to="/portfolio" class="nav-link py-3 px-0 px-lg-3 rounded">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a
                  class="nav-link py-3 px-0 px-lg-3 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ResumePDF}
                >
                  Resume
                </a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [closed, setClosed] = useState(true)

  return (
    <nav className="navbar navbar-expand-lg d-print">
      <ul>
        <li>
          <Link to="#top" className="navbar-brand">
            Zara Tam
          </Link>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/zaratam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in socials"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/zaratam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github socials"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/zaratam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter socials"></i>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@zaratam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium-m socials"></i>
          </a>
        </li>
      </ul>

      <button
        className="navbar-toggler"
        onClick={() => setClosed(!closed)}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars"></i>
        </span>
      </button>

      {!closed && (
        <div
          className="show collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#code">
                Code
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#art">
                Art
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#photography">
                Photography
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#get-in-touch">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header

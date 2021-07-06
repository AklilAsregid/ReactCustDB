import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const navigation = (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" style={{ height: "40px" }} alt="soldev" />
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return <div className="nav-container">{navigation}</div>;
};

export default Header;

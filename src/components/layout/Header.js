import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">

          <li classame="nv-item">
            <Link to="/" className="nav-link">
             <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li classame="nv-item">
            <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus"></i>  Add
            </Link>
          </li>
            <li classame="nv-item">
            <Link to="/about" className="nav-link">
            <i className="fas fa-question"></i>  About
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "MY foot",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;

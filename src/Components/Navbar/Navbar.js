import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h3>
        <Link className="navbar_link" to="/">
          Job Listing
        </Link>
      </h3>
    </div>
  );
};

export default Navbar;

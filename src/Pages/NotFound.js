import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";
const NotFound = () => {
  return (
    <div className="container_notfound">
      <div>
        <h3>The page is not available</h3>
        <Link className="link" to="/">
          Return Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

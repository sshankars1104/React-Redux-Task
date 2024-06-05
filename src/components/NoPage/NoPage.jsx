import React from "react";
import "./NoPage.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="no-page-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default NoPage;

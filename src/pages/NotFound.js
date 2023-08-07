import React from "react";
import "./styles/not_found.css";
import { FaGhost } from "react-icons/fa";

const NotFound = () => {
  return (
    <main>
      <h1 className="not-found">
        4
        <span>
          <FaGhost />
        </span>
        4
      </h1>
      <h2>Error: 404 page not found</h2>
      <p>Sorry, the page you're looking for cannot be accessed</p>
    </main>
  );
};

export default NotFound;

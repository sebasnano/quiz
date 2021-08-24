import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Quizz
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/question">
          Questions
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;

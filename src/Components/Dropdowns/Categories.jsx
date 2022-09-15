import React from "react";
import "../../Styles/Dropdowns.scss";
import { Link } from "react-router-dom";

function Categories(loc) {
  return (
    <div className="dropdown">
      <div
        className={
          loc.loc === "categories" ||
          loc.loc === "learning" ||
          loc.loc === "design" ||
          loc.loc === "business"
            ? "active dropbtn"
            : "dropbtn"
        }
      >
        COURSES
      </div>
      <div className="dropdown-content">
        <Link className='link' to="/learning">UI/UX Design</Link>
        <Link to="/design">Project Management</Link>
        <Link to="/dashboard">Front-end Development</Link>
        <Link to="/">Backend Development</Link>
        <Link to="/business">Freelancing</Link>
        <Link to="/">Mobile App Development</Link>
        <Link to="/">Digital Marketing (Coming soon)</Link>
      </div>
    </div>
 
  );
}

export default Categories;

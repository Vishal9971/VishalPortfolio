import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <>
      <div className="text-white bg-black text-center p-10">
        <div className="w-1/2 m-auto flex flex-col justify-center">
          <h2 className="text-4xl font-semibold py-3" id="name">
            Vishal Sharma
          </h2>
          <h3 className="text-3xl font-thin">Student &#10242; Developer &#10242; Quick Learner </h3>
          <div className="w-full flex flex-wrap flex-row text-l text-white justify-evenly m-auto py-3 headerMedia">
            <Link to="/" className="hover:text-red-600 hover:text-2xl Link">
              Home
            </Link>
            <Link to="/project" className="hover:text-red-600 hover:text-2xl Link">
              Project
            </Link>
            <Link to="/contact" className="hover:text-red-600 hover:text-2xl Link">
              Contact
            </Link>
            <Link to="/resume" className="hover:text-red-600 hover:text-2xl Link">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

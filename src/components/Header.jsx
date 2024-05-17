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
          <div className="flex flex-wrap flex-row text-l text-white gap-36 m-auto py-3">
            <Link to="/" className="hover:text-red-600 hover:text-2xl">
              Home
            </Link>
            <Link to="/project" className="hover:text-red-600 hover:text-2xl">
              Project
            </Link>
            <Link to="/contact" className="hover:text-red-600 hover:text-2xl">
              Contact
            </Link>
            <Link to="/resume" className="hover:text-red-600 hover:text-2xl">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

function GridProject({ name, des, skill, code, site }) {
  return (
    <>
      <div className="bg-gray-600 m-5 w-full rounded-md p-5 text-white ">
        <p className="text-white text-xl font-serif font-semibold underline">{name}</p>
        <p className="text-white/80 font-medium font-serif">{skill}</p>
        <p className="text-white/70 font-thin font-sans">{des}</p>
        <button className="p-2 border bg-cyan-800 rounded-lg m-2  hover:bg-cyan-300 hover:text-black">
          <Link to={site}>Visit Site</Link>
        </button>
        <button className="p-2 border bg-cyan-800 rounded-lg m-2 hover:bg-cyan-300 hover:text-black">
          <Link to={code}>Visit Code</Link>
        </button>
      </div>
    </>
  );
}

export default GridProject;

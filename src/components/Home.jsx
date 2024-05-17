// import React from 'react';
function Home() {
  return (
    <>
      <div className="max-w-6xl flex flex-wrap flex-row min-h-96 justify-center m-auto gap-20">
        <div className="text-white w-1/2  py-20">
          <h2 className="font-mono text-2xl py-4">Hi, I'm Vishal Sharma</h2>
          <p className="text-justify text-xl font-light">
            I am Full Stack Developer who is addicted to learn new things and work with team. I have experience for
            2-year with <span className="font-medium">Sharma Trading and Service</span> of writing code without
            plagiarism for projects and assignments of international students. Graduated of Computer Application (2021).
          </p>
          <div className="flex flex-wrap">
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/html.png" alt="HTML5" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/css.png" alt="CSS3" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/bootstrap.png" alt="Bootstrap" />
            <img
              className="w-13 rounded-md h-14 p-1 m-3 bg-white"
              src="../../public/media/tailwind.png"
              alt="Tailwind"
            />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/js.png" alt="JavaScript" />
            <img className="w-13 rounded-md h-14 p-1 m-3 bg-white" src="../../public/media/jQuery.png" alt="jQuery" />
            <img className="w-13 rounded-md h-14 p-1 m-3 bg-white" src="../../public/media/nodeJs.png" alt="NodeJs" />
            <img
              className="w-13 rounded-md h-14 p-1 m-3 bg-white"
              src="../../public/media/express.png"
              alt="ExpressJs"
            />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/mongo.jpeg" alt="MongoDb" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/npm.png" alt="NPM" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/react.png" alt="React" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="../../public/media/redux.png" alt="Redux" />
          </div>
        </div>
        <div className=" ">
          <img className="" id="hero-img" src="../../public/media/Hero-img copy.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;

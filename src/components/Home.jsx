// import React from 'react';
function Home() {
  return (
    <>
      <div className="max-w-6xl flex flex-wrap flex-row min-h-96 justify-center m-auto gap-20 changes">
        <div className="text-white w-1/2  py-20">
          <h2 className="font-mono text-2xl py-4">Hi, I'm Vishal Sharma</h2>
          <p className="text-justify text-xl font-light">
            I am Full Stack Developer who is addicted to learn new things and work with team. I have done Data Structure and Algorithm with JAVA course and Mern Stack Web Developemnet course from Coding Blocks. Graduated of Computer Application (2021).
          </p>
          <div className="flex flex-wrap">
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/html.png" alt="HTML5" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/css.png" alt="CSS3" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/bootstrap.png" alt="Bootstrap" />
            <img
              className="w-13 rounded-md h-14 p-1 m-3 bg-white"
              src="/media/tailwind.png"
              alt="Tailwind"
            />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/js.png" alt="JavaScript" />
            <img className="w-13 rounded-md h-14 p-1 m-3 bg-white" src="/media/jQuery.png" alt="jQuery" />
            <img className="w-13 rounded-md h-14 p-1 m-3 bg-white" src="/media/nodeJs.png" alt="NodeJs" />
            <img
              className="w-13 rounded-md h-14 p-1 m-3 bg-white"
              src="/media/express.png"
              alt="ExpressJs"
            />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/mongo.jpeg" alt="MongoDb" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/npm.png" alt="NPM" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/react.png" alt="React" />
            <img className="w-13 rounded-md h-14 p-1 m-3" src="/media/redux.png" alt="Redux" />
          </div>
        </div>
        <div className="hero-div">
          <img className="hero-img" id="hero-img" src="/media/Hero-img copy.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;

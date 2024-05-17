import React from 'react';
import { Link } from 'react-router-dom';
// import

function Contact() {
  return (
    <div className="text-white m-auto w-1/2">
      <h1 className="text-3xl text-white m-2">Contact Details</h1>
      <hr />
      <div className="py-10">
        <p className="py-2">Mobile no. : +91-9971720423</p>
        <p className="">
          Mail :<Link to="https://mail.google.com/mail/u/0/#inbox"> sharmavis77@gmail.com</Link>
        </p>
        <p>
          <Link to="https://www.linkedin.com/in/vishal-sharma-01/">LinkedIn</Link>
        </p>
        <p>
          <Link>
            <i className="fa fa-github" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import GridProject from './GridProject';

function Project() {
  return (
    <>
      <div className="w-1/2 flex flex-wrap flex-col m-auto">
        <h1 className="text-white text-3xl py-2">Projects</h1>
        <hr />
        <GridProject
          name="Portfolio || Vishal Sharma"
          skill="React, React-Router-Dom, Tailwind"
          des="• Created my portfolio with react and styling with tailwind and deploy by netlify."
          code="https://github.com/Vishal9971/VishalPortfolio"
          site="https://vishalportfolio-1.onrender.com/"
        />
        <GridProject
          name="E-Commerce Web Application"
          skill="NodeJS, Express, MongoDB,JavaScript, HTML, CSS, Bootstrap"
          des="• Created a fully functional ecommerce website that allows to shop from the wide range of products with features
such as add-to-cart, admin dashboard, star rating, reviews, buyer seller dashboard, validations, payment, add-to
cart etc. • Created a REST API with NodeJS and MongoDB, and integrated secure user authentication using passport.js."
          code="https://github.com/Vishal9971/eCommerceClone"
          site="https://ecommerceclone-epd4.onrender.com/products"
        />
        <GridProject
          name="Passpord Suggestion"
          skill="React, Tailwind"
          des="• Created a web application by React using some hooks like {Use State, Use Effect}. This web application gives passpord suggestion. The styling of this application is very basic which is styled by the Tailwind css."
          code="https://github.com/Vishal9971/passwordSuggestion"
          site="https://passwordsuggestion-1.onrender.com/"
        />
        <GridProject
          name="Medium Clone Web Application"
          skill="NodeJS, Express, MongoDB,JavaScript, HTML, CSS, Bootstrap"
          des="• Created a fully functional blog website that allows to shop from the wide range of products with features such as adding blog, star rating, reviews, validations etc.
          • Created a REST API with NodeJS and MongoDB, and integrated secure user authentication using passport.js."
          code="https://github.com/Vishal9971/Medium_clone"
          site="https://medium-clone-u6s3.onrender.com/"
        />
        <GridProject
          name=" Shri Shyam Sweets"
          skill="JavaScript, HTML, CSS, Bootstrap"
          des=" • Deploy a responsive website using HTML, CSS, JavaScript for a sweet shop as per client satisfaction on the basis of requirement as a free-lancer."
          code="https://github.com/Vishal9971/shrishyamsweets"
          site="https://shrishyamsweets.com/"
        />
        <GridProject
          name=" Simon Game"
          skill="JavaScript, HTML, CSS, Bootstrap"
          des="• Creating a mind game with javascript with features such as click event, audio tracking, local storage."
          code="https://github.com/Vishal9971/simonGame"
          site="https://vishals-simongame.netlify.app"
        />
        <GridProject
          name="Snake Game"
          skill="JavaScript, HTML, CSS, Bootstrap"
          des="• Creating snake game fully functioning through canvas and build all logics. Deploy this game by Netlify using Github repo."
          code="https://github.com/Vishal9971/snakeGame"
          site="https://vishals-snakegame.netlify.app"
        />
      </div>
    </>
  );
}

export default Project;


import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="mt-5 about">
      <h4>Hi, here's what we do...</h4>
      <p>
        We are an information bridge between recruiters and job seekers
      </p>
      <p>
        Recruiters register/login and post jobs which are then accessed by many
        job seekers.<br/>
        Jobs can be searched by either title or company name or location from the 
        growing pool of various jobs posted.
      </p>
      <p>"We increase chances"</p>

      <Link className="browse" to="/">
        Go to jobs
      </Link> 
      
    </div>
  );
}

export default About;

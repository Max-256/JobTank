import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="about">
      <h3>Hi, welcome to the JobTank and here's our story...</h3>
      <p>
        We are a home to both recruiters and job seekers by providing a bridge
        in-between.
      </p>
      <p>
        In the JobTank, recruiters post open jobs and the prospective applicants
        apply directly to the jobs which best match their interests and
        qualifications.
      </p>
      <p>We bring applicants closer to their dream job</p>
      <Link className="browse" to="#">
        Browse Jobs
      </Link>
    </div>
  );
}

export default About;

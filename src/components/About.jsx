
import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="mt-5 about">
      <h3>Hi, welcome to the JobTank and here's our story...</h3>
      <p>
        We are a home to both recruiters and job seekers by providing a bridge
        in-between.
      </p>
      <p>
        In the JobTank, recruiters post open jobs. These are then accessed by a 
        wide number of prospective applicants which increases the chances of 
        getting really talented candidates. <br/>
        Applications then come in from a pool of candidates following the means
        of application as specified by the recruiter.
      </p>
      <p>We narrow the information gap between recruiters and applicants</p>

      <Link className="browse" to="/">
        Browse Jobs
      </Link> 
      OR
      <span className="contact" to="/">
        Contact us ☟
      </span>
      <div className="mt-5 support">
      <h5>We are right here...</h5>
       <p>    
        Reach us directly through..<br />
        Phone: +# ### ###  <br />
        email: jobtank@gmail.org
       </p>
    </div>
    </div>
  );
}

export default About;

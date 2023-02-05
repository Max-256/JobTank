
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJob } from '../services/jobService';

function JobDetails(props) {
    
    const id = props.match.params.id;
    
    const [job, setJob] = useState([]);
    useEffect(() => setJob(getJob(id)), []);

    return (
        <div>
            { job.map( (jb, index) => 
            <div key={index} className='mt-4 job-details'>
            <h5>JOB DETAILS</h5>

            <div className='row'>
                <div className='col'>
                    <h6>Company</h6>
                    {jb.companyName}
                </div>
                <div className='col'>
                    <h6>Deadline</h6>
                    {jb.deadline}
                </div>
            </div>


            <h6>About Company</h6>
            {jb.aboutCompany}

            <h5>JOB SUMMARY</h5>

            <h6>Title</h6>
            {jb.title}

            <h6>Location</h6>
            {jb.location}

            <h6>Duties And Responsibilities</h6>
            {jb.duties}

            <h6>Qualifications And Skills</h6>
            {jb.qualifications}

            <h6>Proffesional Experience</h6>
            {jb.experience}

            <h6>Benefits</h6>
            {jb.benefits}

            <h6>How To apply</h6>
            {jb.howToApply}

            <h6>Other</h6>
            {jb.other}

            <Link className='back' to="/">Back Home</Link>
        </div>
        )}
        </div>
    );
}

export default JobDetails;

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
            <h4>JOB DETAILS</h4>

            <div className='row'>
                <div className='col'>
                    <h5>Company</h5>
                    {jb.companyName}
                </div>
                <div className='col'>
                    <h5>Deadline</h5>
                    {jb.deadline}
                </div>
            </div>


            <h5>About Company</h5>
            {jb.aboutCompany}

            <h4>JOB SUMMARY</h4>

            <h5>Title</h5>
            {jb.title}

            <h5>Location</h5>
            {jb.location}

            <h5>Duties And Responsibilities</h5>
            {jb.duties}

            <h5>Qualifications And Skills</h5>
            {jb.qualifications}

            <h5>Proffesional Experience</h5>
            {jb.experience}

            <h5>Benefits</h5>
            {jb.benefits}

            <h5>How To apply</h5>
            {jb.howToApply}

            <h5>Other</h5>
            {jb.other}

            <Link className='back' to="/">Back Home</Link>
        </div>
        )}
        </div>
    );
}

export default JobDetails;
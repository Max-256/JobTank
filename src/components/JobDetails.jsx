
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
                    <p>{jb.companyName}</p>
                </div>
                <div className='col'>
                    <h6>Deadline</h6>
                    <p>{jb.deadline}</p>
                </div>
            </div>


            <h6>About Company</h6>
            <p>{jb.aboutCompany}</p>

            <h5>JOB SUMMARY</h5>

            <h6>Title</h6>
            <p>{jb.title}</p>

            <h6>Location</h6>
            <p>{jb.location}</p>

            <h6>Duties And Responsibilities</h6>
            <p>{jb.duties}</p>

            <h6>Qualifications And Skills</h6>
            <p>{jb.qualifications}</p>

            <h6>Proffesional Experience</h6>
            <p>{jb.experience}</p>

            <h6>Benefits</h6>
            <p>{jb.benefits}</p>

            <h6>How To apply</h6>
            <p>{jb.howToApply}</p>

            <h6>Other</h6>
            <p>{jb.other}</p>

            <Link className='back' to="/">Back Home</Link>
        </div>
        )}
        </div>
    );
}

export default JobDetails;
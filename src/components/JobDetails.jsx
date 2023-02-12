
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJob } from '../services/jobService';
import Spinner from './comon/Spinner';

function JobDetails(props) {
    
    const id = props.match.params.id;
    
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const job = await getJob(id);
            setJob(job.data);
            setLoading(false);
        })();
    },[]);

    return ( 
        <div>
        {loading && <Spinner />}         
        {!loading && <div className='mt-4 job-details'>                
            <h5>JOB DETAILS</h5>

            <div className='row'>
                <div className='col'>
                    <h6>Company</h6>
                    <p>{job.companyName}</p>
                </div>
                <div className='col'>
                    <h6>Deadline</h6>
                    <p>{job.deadline}</p>
                </div>
            </div>

            <h6>About Company</h6>
            <p>{job.aboutCompany}</p>

            <h5>JOB SUMMARY</h5>

            <h6>Title</h6>
            <p>{job.title}</p>

            <h6>Location</h6>
            <p>{job.location}</p>

            <h6>Duties And Responsibilities</h6>
            <p>{job.duties}</p>

            <h6>Job Requirements</h6>
            <p>{job.requirements}</p>

            <h6>Benefits</h6>
            <p>{job.benefits}</p>

            <h6>How To apply</h6>
            <p>{job.howToApply}</p>

            <h6>Other</h6>
            <p>{job.other}</p>

            <Link className='back' to="/">Back Home</Link>
        </div>}
        </div>
    );
}

export default JobDetails;
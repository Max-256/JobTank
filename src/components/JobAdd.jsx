
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {getJobs} from '../services/jobService';
import jobicon from '../images/job.png';

function JobAdd(props) {
    const [jobs, setJobs] = useState([]);
    useEffect(() => setJobs(getJobs()),[]);


    return (
        <div>
        { 
        jobs.map( job => 
            <div key={job._id} className='mt-5 ad grid-1x2'>

            <div className='ad-header row'>
                <div className='col-2'><img src={jobicon} alt="job icon" /> </div>
                <div className='col'>
                    <li className='row'>
                    <ul className='col-4'>Title:</ul> 
                    <ul className='col'>{job.title}</ul>
                    </li>
                    <li className='row'>
                    <ul className='col-4'>Company:</ul> 
                    <ul className='col'>{job.companyName}</ul>
                    </li>
                    <li className='row'>
                    <ul className='col-4'>Location:</ul> 
                    <ul className='col'>{job.location}</ul>
                    </li>
                    <li className='row'>
                    <ul className='col-4'>Deadline:</ul> 
                    <ul className='col'>{job.deadline}</ul>
                    </li>         
                </div>
            </div>

            <div className='ad-body'>
                <h5>Qualifications</h5> 
                {job.qualifications}
                <Link className='detailsLink' to={`/job-details/${job._id}`}>more details</Link>
            </div>
            </div>)
        }   
        </div>
    );
}

export default JobAdd;
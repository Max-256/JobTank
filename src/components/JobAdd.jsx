
import React from 'react';
import { Link } from 'react-router-dom';
import jobicon from '../images/job.png';

function JobAdd({jobs}) {
    return (
        <div>
        { 
        jobs.map( job => 
            <div key={job._id} className='mt-2 ad grid-1x2'>

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

            <div>
                <h6>Qualifications</h6> 
                {job.qualifications}
                <Link className='detailsLink' to={`/job-details/${job._id}`}>more details</Link>
            </div>
            </div>)
        }   
        </div>
    );
}

export default JobAdd;
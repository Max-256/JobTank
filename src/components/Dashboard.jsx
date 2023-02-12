
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({user, jobs}) => {

    const lastJob = jobs[0];

    return (
        <div className='dashboard grid-1x2 mt-5'>
            <div className='rec_profile'>
                <div className='recruiterIcon'>JTanker</div>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
            <div>
                <span>Jobs Posted: </span> 
                <span className='jobLength'>{jobs.length}</span>        
        
                {lastJob && 
                 <div className='lastPost'>
                    <h6>Last Post</h6>
                    <div className='row'>
                        <span className='col'>Job Title : {lastJob.title}</span>
                        <span className='col'>Company : {lastJob.companyName}</span>
                    </div>
                </div>}                      
                    
                <p><Link to = "/jobform" className='btn btn-primary'>
                   + Add Job
                </Link> </p>          
            </div>
        </div>
    );
};

export default Dashboard;
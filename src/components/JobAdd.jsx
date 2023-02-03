
import React from 'react';
import { Link } from 'react-router-dom';
import jobicon from '../images/job.png';

function JobAdd(props) {
    return (
        <div className='mt-5 ad grid-1x2'>

            <div className='ad-header row'>
                <div className='col-2'><img src={jobicon} alt="job icon" /></div>
                <div className='col'>
                    <li className='row'>
                        <ul className='col-4'>Title:</ul> 
                        <ul className='col'>Internal Auditor</ul>
                    </li>

                    <li className='row'>
                        <ul className='col-4'>Company:</ul> 
                        <ul className='col'>Airbus</ul>
                    </li>

                    <li className='row'>
                        <ul className='col-4'>Location:</ul> 
                        <ul className='col'>SanDiego</ul>
                    </li>

                    <li className='row'>
                        <ul className='col-4'>Deadline:</ul> 
                        <ul className='col'>1/2/2023</ul>
                    </li>         
                </div>
            </div>

            <div className='ad-body'>
                <h5>Qualifications</h5>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Voluptates dolor perspiciatis accusamus soluta quibusdam, 
                asperiores ipsum sequi, pariatur suscipit reiciendis 
                sapiente nobis, autem velit tempora odit voluptas alias 
                quasi. Ipsam perferendis, optio officiis veritatis hic 
                excepturi quae placeat officia qui.

                <Link className='detailsLink' to="/job-details">more details</Link>
            </div>
        </div>
    );
}

export default JobAdd;
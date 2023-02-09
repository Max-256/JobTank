

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getJob } from '../services/jobService';
import Input from './Input';

const EditJob = (props) => {
    const jobId = props.match.params.id;

    const [job, setJob] = useState({});
    const [error, setError] = useState({});


    useEffect(() => {
        (async () => {
            try{
                const response = await getJob(jobId);
                setJob(response.data);
            }catch(ex){
                setError({message: ex.response.data});
                toast.error(error.message);
            }            
        })();
    },[]);

    

    const handleChange = e => {
        // setJob({...job, [e.target.name] : e.target.value})
    }

    const handleSave = () => {
        console.log(job);
    } 

    return (
        <div>             
            <Input 
              name={"companyName"}  
              value={job.companyName} 
              label={"Company Name"} 
              job={job} setJob={setJob} />

            <Input 
              name={"location"} 
              value={job.location} 
              label={"Location"} 
              job={job} setJob={setJob}/>

    

            <div className="mb-3">
              <label htmlFor="aboutCompany" className="form-label">About Company</label>
              <textarea
              name='aboutCompany'
              value={job.aboutCompany}
              onChange={handleChange} 
              className="form-control" 
              id="aboutCompany" 
              rows="3">
              </textarea>
            </div>


            <Input 
              name={"title"}  
              value={job.title} 
              label={"Job Title"} 
              job={job} setJob={setJob}/>

            <Input 
              name={"deadline"}
              type="date" 
              value={job.deadline} 
              label={"Deadline"} 
              job={job} setJob={setJob}/>



            <div className="mb-3">
              <label htmlFor="duties" className="form-label">Duties</label>
              <textarea
              name='duties'
              value={job.duties}
              onChange={handleChange} 
              className="form-control" 
              id="duties" 
              rows="3">
              </textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="requirements" className="form-label">Requirements</label>
              <textarea
              name='requirements'
              value={job.requirements}
              onChange={handleChange} 
              className="form-control" 
              id="requirements" 
              rows="3">
              </textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="howToApply" className="form-label">How to apply</label>
              <textarea
              name='howToApply'
              value={job.howToApply}
              onChange={handleChange} 
              className="form-control" 
              id="howToApply" 
              rows="3">
              </textarea>
            </div>






            
            <button 
            className='btn btn-primary'
            onClick={handleSave}>
                save changes
            </button>




        
        </div>
    );
};

export default EditJob;
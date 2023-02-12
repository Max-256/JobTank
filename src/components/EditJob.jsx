

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getJob, putJob } from '../services/jobService';
import Input from './Input';
import Textarea from './Textarea';
import Spinner from './comon/Spinner';

const EditJob = (props) => {
    const jobId = props.match.params.id;

    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        (async () => {
            try{
                const response = await getJob(jobId);
                setJob(response.data);
                setLoading(false);
            }catch(ex){
                setError({message: ex.response.data});
                toast.error(error.message);
            }            
        })();
    },[]);

    const handleSave = async () => {
        delete job._id;
        delete job.__v;
        delete job.datePosted;

        try{
          await putJob(job, jobId);
          window.location = "/";
        }catch(ex){
          setError({message: ex.response.data});
          toast.error(error.message);
        }    
    } 

    return (
      <div>
        {loading && <Spinner />}
        {!loading && <div className='jobForm'>
            <h5>Company Profile</h5>             
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

            <Textarea 
              name={"aboutCompany"}
              value={job.aboutCompany}
              label="About Company"
              job={job} setJob={setJob} />

            <h5>Job Profile</h5>       

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


            <Textarea 
              name={"duties"}
              value={job.duties}
              label="Duties and Responsibilities"
              job={job} setJob={setJob} />

            <Textarea 
              name={"requirements"}
              value={job.requirements}
              label="Requirements"
              job={job} setJob={setJob} />  

            <Textarea 
              name={"howToApply"}
              value={job.howToApply}
              label="How to apply"
              job={job} setJob={setJob} />

            <button 
              className='btn btn-primary mb-5'
              onClick={handleSave}>
                save changes
            </button>        
        </div>}
      </div>  
    );
};

export default EditJob;
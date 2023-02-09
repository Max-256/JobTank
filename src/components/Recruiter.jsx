
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getJobs, putJob } from '../services/jobService';
import JobTable from './JobTable';

function Recruiter(props) {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        (async() => {
            try{
                const response = await getJobs();
                setJobs(response.data);
            }catch(ex){
                console.log(ex)
                setError({message: ex.response.data});
                toast.error(error.message);
            }
            
        })();
    },[]);

   const handleDelete = (id) => {
    console.log('delete clicked' + id)
   }

    return (
        <div>
            <JobTable
            jobs={jobs} 
            onDelete={handleDelete}
            />
        </div>
    );
}

export default Recruiter;
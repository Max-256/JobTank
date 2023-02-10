
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getJobs, deleteJob} from '../services/jobService';
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

   const handleDelete = async (id) => {
    try{
        await deleteJob(id)
        window.location.reload();
    }catch(ex){
        setError({message: error.message});
        toast.error(error.message);
    }
        
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
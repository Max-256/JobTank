
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCurrentUser } from '../services/authService';
import { getJobs, deleteJob} from '../services/jobService';
import Dashboard from './Dashboard';
import JobTable from './JobTable';
import Spinner from './comon/Spinner';

function Recruiter(props) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = getCurrentUser();

    useEffect(() => {
        (async() => {
            try{
                const response = await getJobs();                
                const jobs = response.data.filter(job =>  
                    job.userEmail === user.email);
                setJobs(jobs);
                setLoading(false);
            } catch(ex){ toast.error(ex.response.data); }
            
        })();
    },[]);

   const handleDelete = async (id) => {
    try{
        await deleteJob(id)
        window.location.reload();
    } catch(ex){ toast.error(ex.response.data); }     
   }

    return (
        <div>  
            <Dashboard user={user} jobs={jobs} />
            {loading && <Spinner/>}
            <JobTable
            jobs={jobs} 
            onDelete={handleDelete}
            />
        </div>
    );
}

export default Recruiter;
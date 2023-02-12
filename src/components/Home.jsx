
import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
import Hero from './Hero';
import JobAdd from './JobAdd';
import {getJobs} from '../services/jobService';
import Spinner from './comon/Spinner';

function Home(props) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        (async () => {
            const jobs = await getJobs();
            setJobs(jobs.data);
            setLoading(false);
        })();
    }, []);
    
    const handleChange = e => setQuery(e.target.value);

    const handleSearch = async () => {
        if(query.trim() === "") 
        return toast.warn("Search box is empty");
        
        const searchQuery = query.toLowerCase();

        const {data} = await getJobs();

        const filtered =  data.filter(j => 
            j.title.toLowerCase().includes(searchQuery) ||
            j.location.toLowerCase().includes(searchQuery) ||
            j.companyName.toLowerCase().includes(searchQuery));
        
        if(filtered.length === 0){
            const result = toast.error("No matches found. Try searching by job title or company name, or location");
            setQuery("");
            return result;
        }
            
        setJobs(filtered);
        setQuery("");
    }

    return (
        <div>
            <Hero
             onSearch={handleSearch} 
             onChange={handleChange}
             query={query} 
             />
             {loading && <Spinner />}
            <JobAdd jobs={jobs}/>
        </div>
    );
}

export default Home;
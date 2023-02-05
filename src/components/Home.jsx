import React, { useState } from 'react';
import Hero from './Hero';
import JobAdd from './JobAdd';

function Home(props) {
    const [query, setQuery] = useState("");
    
    const handleChange = e => setQuery(e.target.value);

    const handleSearch = () => {
        console.log(query);
        setQuery("");
    }

    return (
        <div>
            <Hero
             onSearch={handleSearch} 
             onChange={handleChange}
             query={query} 
             />
            <JobAdd />
        </div>
    );
}

export default Home;
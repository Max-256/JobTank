
import React, { useState } from 'react';
import {ImSearch} from 'react-icons/im';

function Hero(props) {
    const [query, setQuery] = useState("");
    
    const handleChange = e => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        console.log(query);
        setQuery("");
    }

    return (
        <div className='hero' >
            <h4>"Walking with you to your dream job"</h4>

            <div className='searchGroup'>
                <span>
                 <input value={query}
                        placeholder="Search jobs . . ." 
                        onChange={handleChange}
                        className="searchBox"/>
                </span>
                <span>
                 <button onClick={handleSearch}
                         className="searchButton">
                 <ImSearch />
                 </button>
                </span>
            </div>            
        </div>
    );
}

export default Hero;
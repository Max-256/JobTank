
import React from 'react';
import {ImSearch} from 'react-icons/im';

function Hero({onSearch, onChange, query}) {
    return (
        <div className='hero' >
            <h5>"Walking with you to your dream job"</h5>

            <div className='searchGroup'>
                <span>
                 <input value={query}
                        placeholder="Search jobs . . ." 
                        onChange={onChange}
                        className="searchBox"/>
                </span>
                <span>
                 <button onClick={onSearch}
                         className="searchButton">
                 <ImSearch />
                 </button>
                </span>
            </div>            
        </div>
    );
}

export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.png';

function NotFound(props) {
    return (
        <div className='mt-5 not-found'>
            <img src={notFound} alt="neutral emotion icon" /> 
            <h5>Sorry! Page not found. <br/>            
            <Link to="/"> Back Home</Link></h5>
        </div>
    );
}

export default NotFound;
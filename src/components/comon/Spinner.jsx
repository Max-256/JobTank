
import React from 'react';
import spin from "../../images/spin.gif"

const Spinner = () => {
    return (
        <div>
            <img className='spin-gif' src={spin} alt="Loading..." />
        </div>
    );
};

export default Spinner;


import React from 'react';

const Input = ({name, value, label, type="text", job, setJob}) => {

    const handleChange = e => {
        setJob({...job, [e.target.name] : e.target.value})
    }


    return (
        <div className="mb-3">
              <label htmlFor={name} 
                     className="form-label">{label}</label>
              <input
               name={name} 
               value={value}
               onChange={handleChange}
               type={type} 
               className="form-control" 
               id={name} />
            </div>
    );
};

export default Input;
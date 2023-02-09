import React from 'react';

const Textarea = ({name, value, label, job, setJob}) => {

    const handleChange = e => {
        setJob({...job, [e.target.name] : e.target.value})
    }

    return (
        <div className="mb-3">
              <label htmlFor={name} 
              className="form-label">{label}</label>
              <textarea
              name={name}
              value={value}
              onChange={handleChange} 
              className="form-control" 
              id={name} 
              rows="3">
              </textarea>
            </div>
    );
};

export default Textarea;
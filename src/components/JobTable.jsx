import React from 'react';
import { Link } from 'react-router-dom';

const JobTable = ({jobs, onDelete}) => {
    
    return (
        <div className='mt-5'>
            <Link 
            to = "/jobform"
            className='btn btn-primary mb-3'>
              Add Job
            </Link>
        
         <table className="table">
              <thead>
                <tr>
                  <th scope="col">JOB TITLE</th>
                  <th scope="col">COMPANY</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>

             { jobs.map( j => 
             <tbody key={j._id}>
                <tr>
                  <th scope="row">{j.title}</th>
                  <td>{j.companyName}</td>
                  <td>
                      <Link
                      to={`/editJob/${j._id}`} 
                      className='btn btn-primary'>
                       Edit
                      </Link>
                   </td>
                   <td>
                      <button 
                      className='btn btn-danger'
                      onClick={() => {onDelete(j._id)}}>
                      Delete
                      </button>
                   </td>
                </tr>
             </tbody>)}

        </table>
        </div>
    );
};

export default JobTable;
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
                  <td scope="row">{j.title}</td>
                  <td>{j.companyName}</td>
                  <td>
                      <Link
                      to={`/editJob/${j._id}`} 
                      className='edit'>
                       edit
                      </Link>
                   </td>
                   <td>
                      <button 
                      className='delete'
                      onClick={() => {onDelete(j._id)}}>
                      delete
                      </button>
                   </td>
                </tr>
             </tbody>)}

        </table>
        </div>
    );
};

export default JobTable;
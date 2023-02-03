import React from 'react';
import { Link } from 'react-router-dom';

function JobDetails(props) {
    return (
        <div className='mt-4 job-details'>
            <h4>JOB DETAILS</h4>

            <div className='row'>
                <div className='col'>
                    <h5>Company</h5>
                    Airbus 
                </div>
                <div className='col'>
                    <h5>Deadline</h5>
                    1/12/2000
                </div>
            </div>


            <h5>About Company</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum iure itaque quisquam commodi odio sint. Explicabo maiores quaerat eius? Magni eaque ea iusto beatae consequunturr epellendus rem, nam temporibus.

            <h4>JOB SUMMARY</h4>

            <h5>Title</h5>
            Marketing Officer

            <h5>Location</h5>
            Kisumu, Kenya

            <h5>Duties And Responsibilities</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae iure harum minima illo? Laudantium, assumenda, itaque consequuntur quo voluptate libero ab nesciunt aliquam quod beatae natus in temporibus quia odit accusantium dolores? Dolores libero id saepe modi nisi, sequi, accusamus itaque est doloremque qui temporibus amet eos voluptatem officiis quidem esse hic eveniet harum? Magnam obcaecati amet vitae rerum.

            <h5>Qualifications And Skills</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus voluptate expedita aut id, provident molestias obcaecati, maxime assumenda recusandae vel fugit voluptatibus quisquam hic!

            <h5>Proffesional Experience</h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tenetur unde rerum quaerat, illo eligendi?

            <h5>Benefits</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus qui provident eligendi consequuntur enim!

            <h5>Other</h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam exercitationem soluta cupiditate natus eaque!

            <Link className='apply' to="/application">Proceed to apply</Link>
        </div>
    );
}

export default JobDetails;
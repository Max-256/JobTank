
import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';

function Recruiter(props) {
    const formData = {
        companyName: "",
        deadline: "",
        aboutCompany: "",
        title: "",
        location: "",
        duties: "",
        requirements: "",
        benefits: "",
        howToApply: "",
        other: "",
        
    };

    const formSchema = {
        companyName: Joi.string().trim().max(255).required(),
        aboutCompany: Joi.string().trim().max(500).required(),
        location: Joi.string().trim().max(255).required(),
        title: Joi.string().trim().max(255).required(),
        duties: Joi.string().trim().required(),
        requirements: Joi.string().trim().required(),
        benefits: Joi.string().trim(),
        howToApply: Joi.string().trim().max(255).required(),
        other: Joi.string().trim(),
        deadline: Joi.date().required()
    }

    const doSubmit = () => {
        console.log(data);
    }

    const {data, renderInput, renderTextarea, renderButton, handleSubmit} = 
    useForm(formData, formSchema, doSubmit);

    return (
        <div className='jobForm'>
            <Form onSubmit={handleSubmit}>
            <h5>COMPANY PROFILE</h5>                
            {renderInput("companyName", "Company Name")}
            {renderInput("location", "Location")}
            {renderTextarea("aboutCompany", "About Company (brief)")}
            <h5>JOB PROFILE</h5>
            {renderInput("title", "Job Title")}
            {renderInput("deadline", "Deadline", "date")}
            {renderTextarea("duties", "Duties and Responsibilities")}
            {renderTextarea("requirements", "Requirements")}
            {renderTextarea("benefits", "Benefits")}
            {renderTextarea("howToApply", "How to apply")}
            {renderTextarea("other", "Other")}
            {renderButton("POST JOB")}
            </Form>
        </div>
    );
}

export default Recruiter;

import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';

function Recruiter(props) {
    const formData = {
        companyName: "",
        companyDescription: "",
        location: "",
        companyEmail: "",
        jobTitle: "",
        duties: "",
        qualifications: "",
        experience: "",
        benefits: "",
        howToApply: "",
        other: "",
        dutyStation: "",
        deadline: ""
    };

    const formSchema = {
        companyName: Joi.string().trim().max(255).required(),
        companyDescription: Joi.string().trim().max(500).required(),
        location: Joi.string().trim().max(255).required(),
        companyEmail: Joi.string().trim().max(255).email().required(),
        jobTitle: Joi.string().trim().max(255).required(),
        duties: Joi.string().trim().required(),
        qualifications: Joi.string().trim().required(),
        experience: Joi.string().trim().required(),
        benefits: Joi.string().trim(),
        howToApply: Joi.string().trim().max(255).required(),
        other: Joi.string().trim(),
        dutyStation: Joi.string().trim().max(255).required(),
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
            {renderInput("companyEmail", "Company Email", "email")}
            {renderTextarea("companyDescription", "Company description (brief)")}
            <h5>JOB PROFILE</h5>
            {renderInput("jobTitle", "Job Title")}
            {renderInput("dutyStation", "Duty Station")}
            {renderInput("deadline", "Deadline", "date")}
            {renderTextarea("duties", "Duties and Responsibilities")}
            {renderTextarea("qualifications", "Qualifications and skills")}
            {renderTextarea("experience", "Proffessional Experience")}
            {renderTextarea("benefits", "Benefits")}
            {renderTextarea("howToApply", "How to apply")}
            {renderTextarea("other", "Other")}
            {renderButton("POST JOB")}
            </Form>
        </div>
    );
}

export default Recruiter;
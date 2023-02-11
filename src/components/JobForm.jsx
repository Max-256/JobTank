
import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import {toast} from 'react-toastify';
import { Form } from 'react-bootstrap';
import { postJob } from '../services/jobService';
import { getCurrentUser } from '../services/authService';

const JobForm = () => {
    const formData = {
        companyName: "",
        deadline: "",
        aboutCompany: "",
        title: "",
        location: "",
        duties: "",
        requirements: "",
        howToApply: "",
       
    };

    const formSchema = {
        companyName: Joi.string().trim().max(255).required(),
        aboutCompany: Joi.string().trim().max(500).required(),
        location: Joi.string().trim().max(255).required(),
        title: Joi.string().trim().max(255).required(),
        duties: Joi.string().trim().required(),
        requirements: Joi.string().trim().required(),
        howToApply: Joi.string().trim().max(255).required(),
        deadline: Joi.date().required(),
    }

    const doSubmit = async () => {
        const user = getCurrentUser();
        const job = {...data, userEmail: user.email}
        try{
            await postJob(job);
            window.location = "/";
        } catch(ex){ toast.error(ex.response.data); }        
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
            {renderTextarea("howToApply", "How to apply")}
            {renderButton("POST JOB")}
            </Form>
        </div>
    );
};

export default JobForm;

import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';
import {toast} from 'react-toastify';
import { register  } from '../services/recruiter';

function Register(props) {
    const formData = {
        username: "",
        email: "",
        password: ""
    };

    const formSchema = {
        username: Joi.string().trim().min(5).max(50).required().label('Username'),
        email: Joi.string().trim().email().min(5).max(50).required(),
        password: Joi.string().trim().min(5).max(50).required()
    };

    const doSubmit = async () => {
        try{
            const response = await register(data);
            console.log(response.data);
        }
        catch(ex){
            if(ex.response && ex.response.status === 400)
            toast.error(ex.response.data);
        }     
    }

    const {data, handleSubmit, renderInput, renderButton} = 
    useForm(formData, formSchema, doSubmit);

    return (
        <div className='formBorder'>
            <Form onSubmit={handleSubmit}>
                {renderInput('username', 'Username')}
                {renderInput('email', 'Email', 'email')}
                {renderInput('password', 'Password', 'password')}
                {renderButton('Register')}
            </Form>
        </div>
    );
}

export default Register;
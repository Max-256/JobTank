
import React, { useState } from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';
import { register  } from '../services/recruiter';

function Register(props) {
    const [error, setError] = useState({});

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
            localStorage.setItem("token",response.data);

            window.location = '/recruiter';
        }
        catch(ex){
            if(ex.response && ex.response.status === 400)
            setError({message: ex.response.data});
        }     
    }

    const {data, handleSubmit, renderInput, renderButton} = 
    useForm(formData, formSchema, doSubmit);

    return (
        <div className='formBorder'>
            <Form onSubmit={handleSubmit}>
                {error && <p className='error'>{error.message}</p>}
                {renderInput('username', 'Username')}
                {renderInput('email', 'Email', 'email')}
                {renderInput('password', 'Password', 'password')}
                {renderButton('Register')}
            </Form>
        </div>
    );
}

export default Register;
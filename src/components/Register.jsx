
import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import { Form } from 'react-bootstrap';

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

    const doSubmit = () => {
        console.log(data);
    }

    const {data, handleSubmit, renderInput, renderButton} = 
    useForm(formData, formSchema, doSubmit);

    return (
        <div className='formBorder'>
            <Form onSubmit={handleSubmit}>
                {renderInput('username', 'Username')}
                {renderInput('email', 'email', 'email')}
                {renderInput('password', 'Password', 'password')}
                {renderButton('Register')}
            </Form>
        </div>
    );
}

export default Register;
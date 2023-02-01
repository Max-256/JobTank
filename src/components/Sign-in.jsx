
import React from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignIn(props) {
    const formData = {
        email: "",
        password: ""
    };

    const formSchema = {
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
                {renderInput('email', 'Email')}
                {renderInput('password', 'Password', 'password')}
                {renderButton('Sign in')}
                <br/>
                Don't have an account?
                <Link className='registerLink' to='/register'>Sign up</Link>            
            </Form>
        </div>
    );
}

export default SignIn;
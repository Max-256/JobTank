
import React, { useState } from 'react';
import Joi from 'joi-browser';
import useForm from '../hooks/useForm';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login } from '../services/authService';

function SignIn(props) {
    const [error, setError] = useState({});

    const formData = {
        email: "",
        password: ""
    };

    const formSchema = {
        email: Joi.string().trim().email().min(5).max(50).required(),
        password: Joi.string().trim().min(5).max(50).required()
    };

    const doSubmit = async () => {
        try{
            const response = await login(data.email, data.password);
            localStorage.setItem("token", response.data);

            const {state} = props.location;
            window.location = state ? state.from.pathname : "/recruiter";
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
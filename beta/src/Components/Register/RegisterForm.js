import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import * as yup from 'yup';

import schemaRegister from './schemaRegister';

// ************ THIS PAGE NOT FINISHED *************************

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
}
const initialErrors = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
}

export default function RegisterForm() {
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disableRegister, setDisableRegister] = useState(true);
    const { push } = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        yup
        .reach(schemaRegister, name)
        .validate(value)
        .then(() => {
            setErrors({...formValues, [name]: ''});
        })
        .catch((err) => {
            setErrors({...formValues, [name]: err.errors[0]});
        })
        setFormValues({...formValues,
        [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth.post('/api/auth/register', formValues)
        .then((res)=>{
            console.log(res.data)
            setFormValues(res.data);
            push('/login')
        })
    }

    useEffect(() => {
        schemaRegister.isValid(formValues).then((valid) => {
            setDisableRegister(!valid);
        });
    }, [formValues]);

    return(
        <div className='registration-form'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className='registration-input' type='text' name='firstName' placeholder='First Name' onChange={handleChange} value={formValues.firstName}/>
                <div>{errors.firstName}</div>
                <input className='registration-input' type='text' name='lastName' placeholder='Last Name' onChange={handleChange} value={formValues.lastName}/>
                <div>{errors.lastName}</div>
                <input className='registration-input' type='email' name='email' placeholder='Email' onChange={handleChange} value={formValues.email}/>
                <div>{errors.email}</div>
                <input className='registration-input' type='password' name='password' placeholder='Password' onChange={handleChange} value={formValues.password}/>
                <div>{errors.password}</div>
                <button className='registration-btn' disabled={disableRegister}>Register</button>
                <div>Already have an account? <Link to='/login'>Login</Link></div>
            </form>
        </div>
    )
}
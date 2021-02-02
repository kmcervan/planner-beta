import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    const handleChange = (e) => {
        setFormValues({...formValues,
        [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return(
        <div>
            <form>
                <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} value={formValues.firstName}/>
                <input type='text' name='lastName' placeholder='Last Name' onChange={handleChange} value={formValues.lastName}/>
                <input type='email' name='email' placeholder='Email' onChange={handleChange} value={formValues.email}/>
                <input type='password' name='password' placeholder='Password' onChange={handleChange} value={formValues.password}/>
                <div>{errors.email}</div>
                <button>Register</button>
                {/* <span>Already have an account? <Link to='/login'>Login</Link></span> */}
            </form>
        </div>
    )
}
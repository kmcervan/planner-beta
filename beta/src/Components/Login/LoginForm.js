import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialLoginValues = {
    email:'',
    password:''
}
const initialLoginErrors = {
    email:'',
    password:''
}

export default function LoginForm() {
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    // const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
    const { push } = useHistory();

    const handleChange = (e) => {
        setLoginValues({...loginValues,
        [e.target.name]: e.target.value})
    };

    const login = (e) => {
        e.preventDefault();
        axios.post('https://radiant-gorge-83314.herokuapp.com/api/auth/login', loginValues)
        .then(res=>{
            localStorage.setItem('token', res.data.payload);
            push('/user-home'); // ***************************************** Fill this in*******
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={login}>
                <input className='login-input' type='email' name='email' placeholder='Email' onChange={handleChange} value={loginValues.email}/>
                <input className='login-input' type='password' name='password' placeholder='Password' onChange={handleChange} value={loginValues.password}/>
                {/* <div>{loginErrors.email}</div> */}
                <button className='login-btn'>Login</button>
                <div >Don't have an account? Register<Link className='login-reg' to='/register'> here</Link>.</div>
            </form>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className='marketing-page-container'>
            <h1>Planner Beta</h1>
            <p>Do you need help planning your next event?</p>
            <p>Register to Planner Beta today to get started!</p>
            <Link to='/register' className='marketing-link'>Sign Up!</Link>
            <p>Already have an account?</p>
            <Link to='/login' className='marketing-link'>Login</Link>
        </div>
    )
}
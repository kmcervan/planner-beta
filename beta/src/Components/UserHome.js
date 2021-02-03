import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

export default function UserHome() {
    const [savedUsers, setSavedUsers] = useState([]);
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axiosWithAuth.get('')
    }
    return (
        <div className='user-home-container'>
            <h1>Main Page!</h1>
            <p>components will go here</p>
            <button><Link className='user-link' to='/add-potluck'>Add a New Potluck</Link></button>
            <button><Link className='user-link' to='/'>Your Potlucks</Link></button>

        </div>
    )
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import * as yup from 'yup';

import schemaPotluck from './schemaPotluck';

// ************ THIS PAGE NOT FINISHED *************************

const initialPotluckValues = {
    locationName:'',
    locationAddress:'',
    locationStreet:'',
    locationState:'',
    locationCity:'',
    locationCountry:'',
    locationPostcode:'',

}
const initialPotluckErrors = {
    locationName:'',
    locationAddress:'',
    locationStreet:'',
    locationState:'',
    locationCity:'',
    locationCountry:'',
    locationPostcode:'',
}

export default function AddPotlucks() {
    const [formPotluckValues, setFormPotluckValues] = useState(initialPotluckValues);
    const [errors, setErrors] = useState(initialPotluckErrors);
    const [disable, setDisable] = useState(true);
    const { push } = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        yup
        .reach(schemaPotluck, name)
        .validate(value)
        .then(()=>{
            setErrors({...errors, [name]: ''});
        })
        .catch((err)=> {setErrors({...errors, [name]: err.errors[0],});
        })
        setFormPotluckValues({...formPotluckValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth.post('/api/potlucks', formPotluckValues)
        .then((res)=>{
            console.log(res.data)
            setFormPotluckValues(res.data);
            push('/user-home')
        }) 
        .catch(err => {
            console.log(err);
        })
    };
    useEffect(() => {
        schemaPotluck.isValid(formPotluckValues).then((valid) => {
            setDisable(!valid);
        });
    }, [formPotluckValues]);

    return(
        <div className='add-potluck-form'>
            <h2>Add a New Potluck</h2>
            <form onSubmit={handleSubmit}>
                <input className='add-potluck-input' type='text' name='locationName' placeholder='Location Name' onChange={handleChange} value={formPotluckValues.locationName}/>
                <div>{errors.locationName}</div>
                <input className='add-potluck-input' type='number' name='locationAddress' placeholder='Location Address' onChange={handleChange} value={formPotluckValues.locationAddress}/>
                <div>{errors.locationAddress}</div>
                <input className='add-potluck-input' type='text' name='locationStreet' placeholder='Location Street' onChange={handleChange} value={formPotluckValues.locationStreet}/>
                <div>{errors.locationStreet}</div>
                <input className='add-potluck-input' type='text' name='locationState' placeholder='Location State' onChange={handleChange} value={formPotluckValues.locationState}/>
                <div>{errors.locationState}</div>
                <input className='add-potluck-input' type='text' name='locationCity' placeholder='Location City' onChange={handleChange} value={formPotluckValues.locationCity}/>
                <div>{errors.locationCity}</div>
                <input className='add-potluck-input' type='text' name='locationCountry' placeholder='Location Country' onChange={handleChange} value={formPotluckValues.locationCountry}/>
                <div>{errors.locationCountry}</div>
                <input className='add-potluck-input' type='text' name='locationPostcode' placeholder='Location Postcode' onChange={handleChange} value={formPotluckValues.locationPostcode}/>
                <div>{errors.locationPostcode}</div>
                <button className='add-potluck-btn' disabled={disable}>Start New Potluck</button>
            </form>
        </div>
    )
}
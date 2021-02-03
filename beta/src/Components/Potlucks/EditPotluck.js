import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const initialPotluckDetails = {
    locationName:'',
    locationAddress:'',
    locationStreet:'',
    locationState:'',
    locationCity:'',
    locationCountry:'',
    locationPostcode:'',
};

const EditPotluck = (props) => {
    const [editPotluck, setEditPotluck] = useState(initialPotluckDetails);
    const { push } = useHistory();
    const { id } = useParams();

    // useEffect(()=>{
    //     axiosWithAuth
    //     .get(`/api/potlucks/reqs/${id}`)
    //     .then(res=>{
    //         setEditPotluck(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err.response);
    //     })
    // }, []);

    const handleChange = event => {
        event.persist();
        let value = event.target.value;
        if (event.target.name === 'locationAddress'){
            value = parseInt(value, 10);
        }
        setEditPotluck({
            ...editPotluck,
            [event.target.name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth
        .put(`/api/putlucks/${id}`, editPotluck)
        .then(res=>{
            console.log(res.data);
            // setMovie(res.data);
            setEditPotluck(res.data); // This needs to be updated
            // push(`//${id}`); *************This also needs to be updated 
            // window.location.href = `/movies/${id}`;
        })
        .catch(err=>{
            console.log(err);
        });
    }

    return(
        <div className='edit-potluck-container'>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input className='edit-inputs' type='text' name='locationName' placeholder='Location Name' onChange={handleChange} value={editPotluck.locationName}/>
                <input className='edit-inputs' type='number' name='locationAddress' placeholder='Location Address' onChange={handleChange} value={editPotluck.locationAddress}/>
                <input className='edit-inputs' type='text' name='locationStreet' placeholder='Location Street' onChange={handleChange} value={editPotluck.locationStreet}/>
                <input className='edit-inputs' type='text' name='locationState' placeholder='Location State' onChange={handleChange} value={editPotluck.locationState}/>
                <input className='edit-inputs' type='text' name='locationCity' placeholder='Location City' onChange={handleChange} value={editPotluck.locationCity}/>
                <input className='edit-inputs' type='text' name='locationCountry' placeholder='Location Country' onChange={handleChange} value={editPotluck.locationCountry}/>
                <input className='edit-inputs' type='text' name='locationPostcode' placeholder='Location Postcode' onChange={handleChange} value={editPotluck.locationPostcode}/>
                <button className='edit-btn'>Edit Potluck</button>
            </form>
        </div>
    );
}

export default EditPotluck;
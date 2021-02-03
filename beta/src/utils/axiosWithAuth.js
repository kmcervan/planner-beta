import axios from 'axios';


export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://radiant-gorge-83314.herokuapp.com',
        headers: {
            Authorization: token
        }
    });
}
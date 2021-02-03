// import axiosWithAuth from '../../utils/axiosWithAuth';

// export const FETCHED_USERINFO = 'FETCHED_USERINFO';
// export const FETCHED_INVITED_POTLUCKS = 'FETCHED_INVITED_POTLUCKS';
// export const FETCHED_YOUR_POTLUCKS = 'FETCHED_YOUR_POTLUCKS';
// export const FETCHED_POTLUCK_REQUIRED = 'FETCHED_POTLUCK_REQUIRED';

// // export const postNewUser = () => dispatch => {
// //     axiosWithAuth
// //         .post(`/api/users/${id}`)
// //         .then((resp) => {
// //             dispatch({type:FETCHED_USERINFO, payload: resp.data});
// //         })
// //         .catch(err=>{
// //             console.log(err);
// //         })
// //     };
    

// export const getUserInfo = (id) => dispatch => {
// axiosWithAuth
//     .get(`/api/users/${id}`)
//     .then((resp) => {
//         dispatch({type:FETCHED_USERINFO, payload: resp.data});
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// };

// export const getInvitedPotlucks = () => dispatch => {
//     axiosWithAuth
//         .get('/api/potlucks')
//         .then((resp) => {
//             dispatch({type:FETCHED_INVITED_POTLUCKS, payload: resp.data});
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     };

// export const getYourPotlucks = () => dispatch => {
//     axiosWithAuth
//         .get('/api/potlucks/mine')
//         .then((resp) => {
//             dispatch({type:FETCHED_YOUR_POTLUCKS, payload: resp.data});
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     };

// export const getPotluckRequired = (id) => dispatch => {
//     axiosWithAuth
//         .get(`/api/potlucks/reqs/${id}`)
//         .then((resp) => {
//             dispatch({type:FETCHED_POTLUCK_REQUIRED, payload: resp.data});
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     };
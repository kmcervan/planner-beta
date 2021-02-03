import * as yup from 'yup';

export default yup.object().shape({
    locationName: yup.string().required('Location Name Required').min(2, 'at least 2 characters required'),
    locationAddress: yup.string().required('Location Address Required').min(1, 'at least 1 digit required'),
    locationStreet: yup.string().required('Location Street Required').min(1, 'at least 1 character required'),
    locationState: yup.string().required('Location State Required').min(2, 'at least 2 character required'),
    locationCity: yup.string().required('Location City Required').min(1, 'at least 1 character required'),
    locationCountry: yup.string().required('Location Country Required').min(2, 'at least 2 characters required'),
    locationPostcode: yup.string().required('Location Postcode Required').min(2, 'at least 2 characters required'),
})
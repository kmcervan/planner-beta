import * as yup from 'yup';

export default yup.object().shape({
    firstName: yup.string().required('First Name Required').min(2, 'at least 2 characters required'),
    lastName: yup.string().required('Last Name Required').min(2, 'at least 2 character required'),
    email: yup.string().email('Must be a Valid Email').required('Email is Required'),
    password: yup.string().required('Password is Required').min(3, 'password must be at least 3 characters or longer'),
})
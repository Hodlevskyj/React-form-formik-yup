import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  age: Yup.number().required('Age is required').min(18,'You must be at least 18').typeError('Age must be a number'),
  password: Yup.string().required('Password is required').min(6, 'Password is too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default validationSchema
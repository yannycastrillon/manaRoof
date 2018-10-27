import * as yup from 'yup';
const schema = values =>
  yup.object().shape({
    email: yup.string().trim().email('Please enter a valid email').required('Email is required'),
    first_name: yup.string().required('Please enter your First Name'),
    last_name: yup.string().required('Please enter your Last Name'),
    gender: yup.string().required('Please choose your gender'),
    date_of_birth: yup.string().required('Please enter your Date of birth'),
    driver_license: yup.string().required('Please enter your Driver License'),
    salary_per_hour: yup.number().positive().integer(),
    cell_phone: yup.string().required('Please enter a cellphone number'),
    start_date: yup.date().default(() => { return new Date })
  });

export default schema;

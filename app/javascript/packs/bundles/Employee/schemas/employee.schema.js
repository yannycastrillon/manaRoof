import * as yup from 'yup';
const schema = values =>
  yup.object().shape({
    email: yup.string().trim().email('Please enter a valid email').required('Email is required'),
    first_name: yup.string().required('Please enter your First Name'),
    last_name: yup.string().required('Please enter your Last Name'),
    gender: yup.string().required('Please choose your gender'),
    ssn: yup.string().required('Enter social security number'),
    date_of_birth: yup.date().required("Please enter a valid date").default(() => { return new Date }),
    driver_license: yup.string().required('Please enter your Driver License'),
    salary_per_hour: yup.number().positive().integer(),
    cell_phone: yup.string().required('Please enter a cellphone number'),
    phone_number: yup.string(),
    street: yup.string().required('Please enter a street address'),
    second_address: yup.string(),
    city: yup.string().required('Please select a city'),
    state: yup.string().required('Please select a state'),
    nationality: yup.string(),
    start_date: yup.date().required("Please enter a valid date starting date").default(() => { return new Date })

    });

export default schema;

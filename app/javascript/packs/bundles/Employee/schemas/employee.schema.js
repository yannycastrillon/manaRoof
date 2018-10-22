import * as yup from 'yup';
const schema = values =>
  yup.object().shape({
    email: yup
      .string()
      .trim()
      .email('Please enter a valid email')
      .required('Email is required'),

    first_name: yup.string().required('Please enter your First Name'),
    last_name: yup.string().required('Please enter your Last Name'),
    date_of_birth: yup.string().required('Please enter your Date of birth'),
    cell_phone: yup.string().required('Please enter a cellphone number')
  });

export default schema;

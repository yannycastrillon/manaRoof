import React from 'react';
import InputText from '../../../components/forms/inputs/text_input';
import { withFormik } from 'formik';
import EmployeeSchema '../schemas/employee.schema';
import axios from 'axios';

class InnerForm extends React.Component {
  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isValid
    } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="employee-form">
          <div className="input-container">
            <InputText
              label="First Name"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button type="submit" disable={!isValid} className="rbutton">
            Create Employee
          </button>
          <style jsx></style>
        </div>
      </form>
    )
  }
}


const Employee = withFormik({
  validate: (value, props) => {
    return EmployeeSchema(values).validate(values, { abortEarly: false });
  },
  handleSubmit: (
    values,
    { props, setSubmitting, setErrors, resetForm, setValues }
  ) => {
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.post('/employees', values)
      .then(response => {
        console.log("SUCCESSS YANNYYY POST EMPLOYEE")
      })
      .catch(error => {
        if (error.response.data.errors.length > 0) {
          error.resposne.data.errors.forEach(function(serverSideError) {
            setErrors({ serverSide: serverSideError });
          });
        }
      });
  }
})(InnerForm)

export default Employee;

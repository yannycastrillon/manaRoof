import React from 'react';
import InputText from '../../../components/forms/inputs/text_input';
import employeeFormStyles from './employee_form.styles';
import { withFormik } from 'formik';
import employeeSchema from '../schemas/employee.schema';
import axios from 'axios';

class InnerForm extends React.Component {
  renderErrors = (errors, key) => {
    if (errors.hasOwnProperty('inner')) {
      const errorObect = errors.InnerForm
        .filter(error => {
          return error.path === key;
        })
        .map(errorObject => {
          return errorObject.errors[0];
        });
      return errorObject;
    }
    return [];
  };

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
            <div className="employee-form__error-container">
              {touched.first_name &&
                this.renderErrors(errors, 'first_name').map((ele, ind) => (
                  <p key={ind}>{ele}</p>
                ))
              }
            </div>
          </div>
          <button type="submit" disable={!isValid} className="r-button">
            Create Employee
          </button>
          <style jsx>{employeeFormStyles}</style>
        </div>
      </form>
    )
  }
}


const Employee = withFormik({
  validate: (value, props) => {
    return employeeSchema(values).validate(values, { abortEarly: false });
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

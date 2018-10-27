import React from 'react';
// Forms components
import TextInput from '../../../components/forms/inputs/text_input';
import DateInput from '../../../components/forms/inputs/date_input';

// Styles
import employeeFormStyles from './employee_form.styles';
import { withFormik } from 'formik';
import employeeSchema from '../schemas/employee.schema';
import axios from 'axios';

class InnerForm extends React.Component {
  renderErrors = (errors, field) => {
    console.log("Errors Employee: ", errors)
    if (errors.hasOwnProperty('inner')) {
      const errorObject = errors.inner
        .filter(error => {
          return error.path === field;
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
    console.log("props", this.props);
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="employee-form">
          <div className="input-container">
            <TextInput
              label="First Name"
              name="first_name"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter yourFirst Name"
            />
            <div className="employee-form__error-container">
              {touched.first_name &&
                this.renderErrors(errors, 'first_name').map((e, i) => (
                  <p key={i}>{e}</p>
                ))
              }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Last Name"
              name="last_name"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter your Last Name"
            />
            <div className="employee-form__error-container">
              {touched.last_name &&
                this.renderErrors(errors, 'last_name').map((e, i) => (
                  <p key={i}>{e}</p>
                ))
              }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter your Email"
            />
            <div className="employee-form__error-container">
             {touched.email &&
               this.renderErrors(errors, 'email').map((e, i) => {
                 return <p key={i}>{e}</p>
               })
             }
            </div>
          </div>
          <div className="input-container">
            <DateInput
              label="Date of birth"
              name="date_of_birth"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter your Date of birth"
            />
            <div className="employee-form__error-container">
             {touched.date_of_birth &&
               this.renderErrors(errors, 'date_of_birth').map((e, i) => {
                 return <p key={i}>{e}</p>
               })
             }
            </div>
          </div>
          <button type="submit" disabled={!isValid} className="r-button">
            Create Employee
          </button>
          <style jsx>{employeeFormStyles}</style>
        </div>
      </form>
    )
  }
}


const Employee = withFormik({
  validate: (values, props) => {
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

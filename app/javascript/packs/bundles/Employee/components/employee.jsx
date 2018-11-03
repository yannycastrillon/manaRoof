import React from 'react';
// Forms components
import TextInput from '../../../components/forms/inputs/text_input';
import DateInput from '../../../components/forms/inputs/date_input';
import SelectInput from '../../../components/forms/inputs/select_input';
import Alert from '../../../components/alerts/alert_base';

// Styles
import employeeFormStyles from './employee_form.styles';
import { withFormik, Field } from 'formik';
import employeeSchema from '../schemas/employee.schema';
import axios from 'axios';

//data
import states from '../../../components/forms/inputs/dropdown_data';

class InnerForm extends React.Component {
  renderErrors = (errors, field) => {
    console.log("Errors Employee: ", errors)
    if (errors.hasOwnProperty('inner')) {
      const errorObject = errors.inner
        .filter(error => error.path === field)
        .map(errorObject => errorObject.errors[0]);
      return errorObject;
    }
    return [];
  };

  render() {
    console.log("STATES",states);
    const {california} = states
    const stateNames = Object.keys(states)
    const genders = ["male", "female"]
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
              hintText="Enter your First Name"
            />
            <div className="employee-form__error-container">
              {touched.first_name &&
                this.renderErrors(errors, 'first_name')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
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
                  <Alert type="error" key={i}>{e}</Alert>
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
               this.renderErrors(errors, 'email')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <SelectInput
              label="Gender"
              name="gender"
              options={genders}
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="--Select--"
              ref="j_select_input"
            />
            <div className="employee-form__error-container">
             {touched.gender &&
               errors.gender && (
                 <Alert type="error">{errors.gender}</Alert>
               )}
            </div>
          </div>
          <div className="input-container">
            <DateInput
              label="Date of birth"
              name="date_of_birth"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="employee-form__error-container">
              {touched.date_of_birth &&
                this.renderErrors(errors, 'date_of_birth')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Driver License"
              name="driver_license"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter Driver License"
            />
            <div className="employee-form__error-container">
             {touched.driver_license &&
               this.renderErrors(errors, 'driver_license')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Salary Rate (hours)"
              type="number"
              name="salary_per_hour"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter Salary per hour"
            />
            <div className="employee-form__error-container">
             {touched.salary_per_hour &&
               this.renderErrors(errors, 'salary_per_hour')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <DateInput
              label="Start Date"
              name="start_date"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="employee-form__error-container">
             {touched.start_date &&
               this.renderErrors(errors, 'start_date')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>

          <div className="input-container">
            <TextInput
              label="Cellphone Number"
              name="cell_phone"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="(xxx) xxx-xxxx"
            />
            <div className="employee-form__error-container">
             {touched.cell_phone &&
               this.renderErrors(errors, 'cell_phone')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Phone Number"
              type="number"
              name="phone_number"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter phone number"
            />
            <div className="employee-form__error-container">
             {touched.phone_number &&
               errors.phone_number && (
                 <Alert type="error">{errors.phone_number}</Alert>
               )
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Street"
              name="street"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter Street Address"
            />
            <div className="employee-form__error-container">
             {touched.street &&
               errors.street && (
                 <Alert type="error">{errors.street}</Alert>
               )
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Second Address"
              name="second_address"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter Address 2"
            />
            <div className="employee-form__error-container">
             {touched.second_address &&
               errors.second_address && (
                 <Alert type="error">{errors.second_address}</Alert>
               )
             }
            </div>
          </div>
          <div className="input-container">
            <SelectInput
              label="State"
              name="state"
              options={stateNames}
              hintText="--Select--"
            />
            <div className="employee-form__error-container">
             {touched.state &&
               errors.state && (
                 <Alert type="error">{errors.state}</Alert>
               )
             }
            </div>
          </div>
          <div className="input-container">
            <SelectInput
              label="City"
              name="city"
              options={california.cities}
              hintText="--Select--"
            />
            <div className="employee-form__error-container">
             {touched.city &&
               this.renderErrors(errors, 'city')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Zipcode"
              name="zipcode"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="90028"
            />
            <div className="employee-form__error-container">
             {touched.zipcode &&
               this.renderErrors(errors, 'zipcode')
                .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
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

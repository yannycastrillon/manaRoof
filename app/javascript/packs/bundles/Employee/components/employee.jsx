import React from 'react';
import ReactOnRails from 'react-on-rails';

// Forms components
import TextInput from '../../../components/forms/inputs/text_input';
import DateInput from '../../../components/forms/inputs/date_input';
import SelectInput from '../../../components/forms/inputs/select_input';
import Alert from '../../../components/alerts/alert_base';
import Button from '../../../lib/components/buttons/primary/button';
import ResetButton from '../../../lib/components/buttons/secondary/button';
import RadioGroup from '../../../components/forms/inputs/radio-input/radio_group';
import RadioInput from '../../../components/forms/inputs/radio-input/radio_input';

// Styles
import employeeFormStyles from './employee_form.styles';
import { withFormik } from 'formik';
import employeeSchema from '../schemas/employee.schema';
import axios from 'axios';

//data
import states from '../../../components/forms/inputs/dropdown_data';

class InnerForm extends React.Component {
  renderErrors = (errors, field) => {
    if (errors.hasOwnProperty('inner')) {
      const errorObject = errors.inner
        .filter(error => error.path === field)
        .map(errorObject => errorObject.errors[0]);
      return errorObject;
    }
    return [];
  };

  render() {
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
      isSubmitting,
      isValid,
      handleReset,
      status
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit}
        autoComplete="off">
        <div className="employee-form">
          <div className="input-container">
            <TextInput
              label="First Name"
              name="first_name"
              value={values.first_name || ''}
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
              value={values.last_name || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="Enter your Last Name"
            />
            <div className="employee-form__error-container">
              {touched.last_name &&
                this.renderErrors(errors, 'last_name')
                    .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Email"
              name="email"
              value={values.email || ''}
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
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              options={genders}
              ref="j_select_input"
              hintText="--Select a gender--"
            />
            <div className="employee-form__error-container">
             {touched.gender &&
               errors.gender && (<Alert type="error">{errors.gender}</Alert>)
             }
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
              value="(323)561-5903"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="(xxx)xxx-xxxx"
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
              hintText="1234 Riverside Av"
            />
            <div className="employee-form__error-container">
             {touched.street &&
               errors.street && (<Alert type="error">{errors.street}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Second Address"
              name="second_address"
              onChange={handleChange}
              onBlur={handleBlur}
              hintText="house, aprt, complex"
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
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              options={stateNames}
              hintText="--Select a state--"
            />
            <div className="employee-form__error-container">
             {touched.state &&
               errors.state && (<Alert type="error">{errors.state}</Alert>)
             }
            </div>
          </div>
          <div className="input-container">
            <SelectInput
              label="City"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              options={california.cities}
              hintText="--Select a city--"
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
          <div className="input-container">
            <RadioGroup
              label="Employee Type"
              name="employable_type"
              onChange={handleChange}
              onBlur={handleBlur}>
              <RadioInput value="worker" label="Worker"/>
              <RadioInput value="manager" label="Manager"/>
            </RadioGroup>
          </div>
          <div className="action-container">
            <ResetButton
              label="Reset"
              type="button"
              action={handleReset}
              disabled={!isValid || isSubmitting}
            />
            <Button
              label="New Employee"
              type="submit"
              disabled={!isValid}
              action={handleSubmit}
            />
          </div>
          <style jsx>{employeeFormStyles}</style>
        </div>
      </form>
    )
  }
}


const Employee = withFormik({
  mapPropsToValues(props) {
    return {
      first_name: props.first_name || '',
      last_name: props.last_name || '',
      email: props.email || '',
      gender: props.gender || '',
      driver_license: props.driver_license || '',
      date_of_birth: props.date_of_birth || '',
      salary_per_hour: props.salary_per_hour || 0,
      start_date: props.start_date || '',
      cell_phone: props.cell_phone || 0,
      phone_number: props.phone_number || 0,
      street: props.street || '',
      second_address: props.second_address || '',
      city: props.city || 'LOS ANGELES',
      state: props.state || 'CALIFORNIA',
      zipcode: props.zipcode || 90028,
      employable_type: 'worker',
    }
  },
  validate: (values, props) => {
    console.log("Validate values: ",values);
    return employeeSchema(values).validate(values, { abortEarly: false });
  },
  handleSubmit: (
    values,
    { props, setSubmitting, setErrors, resetForm, setValues }
  ) => {
    const csrfToken = document.querySelector("meta[name=csrf-token]").content
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken
    // const headers = ReactOnRails.authenticityHeaders({'Accept':'application/json'});
    axios.post('v1/employees', values)
      .then(response => {
        console.log("SUCCESSS YANNYYY POST EMPLOYEE");
      })
      .catch(error => {
        console.log("ERROR::::", error);
        if (error.response.data.errors.length > 0) {
          error.response.data.errors.forEach(function(serverSideError) {
            setErrors({ serverSide: serverSideError });
          });
        }
      });
  }
})(InnerForm)

export default Employee;

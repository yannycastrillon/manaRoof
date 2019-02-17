import React from 'react';
import ReactOnRails from 'react-on-rails';

// Forms components
import TextInput from '../../../components/forms/inputs/text_input';
import ReadOnlyText from '../../../components/forms/inputs/read_only_text_input';
import DateInput from '../../../components/forms/inputs/date_input';
import SelectInput from '../../../components/forms/inputs/select_input';
import RadioGroup from '../../../components/forms/inputs/radio-input/radio_group';
import RadioInput from '../../../components/forms/inputs/radio-input/radio_input';
import Alert from '../../../components/alerts/alert_base';

// Buttons
import Button from '../../../lib/components/buttons/primary/button';
import ResetButton from '../../../lib/components/buttons/secondary/button';


// Styles
import employeeFormStyles from './employee_form.styles';
import {buttonContainerStyles} from '../../AccountSettings/styles/account_settings_main';
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

  renderButtonIfEditable = (isValid, isSubmitting) => {
    if (this.viewIsEditable()) {
      return (
        <div className="button-container">
          <button className="rbutton-primary" onClick={this.props.onEditClick}>
            Save
          </button>
          <style jsx>{buttonContainerStyles}</style>
        </div>
      )
    } else {
      return (
        <div className="action-container">
          <ResetButton label="Reset" type="button" disabled={!isValid || isSubmitting} />
          <Button label="New Employee" type="submit" disabled={!isValid}/>
        </div>
    )}
  }

  viewIsEditable = () => {
    return this.props.accountSettingsViewId === 'editEmployee';
  }

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
      handleReset
    } = this.props;
    const isEditable = this.viewIsEditable();
    const TextFieldComponent =  isEditable ? TextInput : ReadOnlyText;
    const SelectFieldComponent = isEditable ? SelectInput : ReadOnlyText;
    const DateFieldComponent = isEditable ? DateInput : ReadOnlyText;
    console.log("This profile:::", this.props);
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="employee-form">
          <div className="input-container">
            <TextFieldComponent
              label="First Name"
              name="first_name"
              value={this.props.profile.first_name}
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
            <TextFieldComponent
              label="Last Name"
              name="last_name"
              value={this.props.profile.last_name}
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
            <TextFieldComponent
              label="Email"
              name="email"
              value={this.props.profile.email}
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
            <SelectFieldComponent
              label="Gender"
              name="gender"
              value={this.props.profile.gender}
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
            <DateFieldComponent
              label="Date of birth"
              name="date_of_birth"
              value={this.props.profile.date_of_birth}
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
            <TextFieldComponent
              label="Driver License"
              name="driver_license"
              value={this.props.profile.driver_license}
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
            <TextFieldComponent
              label="Salary Rate (hours)"
              name="salary_per_hour"
              value={this.props.profile.salary_per_hour}
              type="number"
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
            <DateFieldComponent
              label="Start Date"
              name="start_date"
              value={this.props.profile.start_date}
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
            <TextFieldComponent
              label="Cellphone Number"
              name="cell_phone"
              value={this.props.profile.cell_phone}
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
            <TextFieldComponent
              label="Phone Number"
              name="phone_number"
              value={this.props.profile.phone_number || ''}
              type="number"
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
            <TextFieldComponent
              label="Street"
              name="street"
              value={this.props.profile.street}
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
            <TextFieldComponent
              label="Second Address"
              name="second_address"
              value={this.props.profile.second_address}
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
            <SelectFieldComponent
              label="State"
              name="state"
              value={this.props.profile.state}
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
            <SelectFieldComponent
              label="City"
              name="city"
              value={this.props.profile.city}
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
            <TextFieldComponent
              label="Zipcode"
              name="zipcode"
              value={this.props.profile.zipcode}
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
          {this.renderButtonIfEditable(isValid, isSubmitting)}
          <style jsx>{employeeFormStyles}</style>
        </div>
      </form>
    )
  }
}


const Employee = withFormik({
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
    axios.post('/v1/employees', values)
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

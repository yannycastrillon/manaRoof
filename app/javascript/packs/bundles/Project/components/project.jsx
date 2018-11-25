import React from 'react';
import ReactOnRails from 'react-on-rails';
import { withFormik } from 'formik';
import axios from 'axios';

// Froms components
import TextInput from '../../../components/forms/inputs/text_input';
import DateInput from '../../../components/forms/inputs/date_input';
import SelectInput from '../../../components/forms/inputs/select_input';
import Alert from '../../../components/alerts/alert_base';
import Button from '../../../lib/components/buttons/primary/button';

// Styles
import projectFormStyles from './project_form.styles';

//schema
import projectSchema from '../schemas/project.schema';

class InnerForm extends React.Component {
  renderErrors = (errors, field) => {
    if (errors.hasOwnProperty('inner')) {
      const errorObj = errors.inner
        .filter(error => error.path === field)
        .map(errorObj => errorObj.errors[0]);
      return errorObj;
    }
    return [];
  };

  render() {
    const StatusOptions = ["active", "inactive"]

    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      isValid
    } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="project-form">
          <div className="input-container">
            <TextInput
              label="Project Name"
              name="name"
              onFocus={this.onInputFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              hintText="Enter project name"
            />
            <div className="project-form__error-container">
              {touched.name &&
                this.renderErrors(errors, 'name')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <TextInput
              label="Price"
              type="number"
              name="price"
              onBlur={handleBlur}
              onChange={handleChange}
              hintText="Project price $$$"
            />
            <div className="project-form__error-container">
              {touched.price &&
                this.renderErrors(errors, 'price')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <SelectInput
              label="Status"
              name="status"
              onBlur={handleBlur}
              onChange={handleChange}
              options={StatusOptions}
              hintText="--Select--"
            />
            <div className="project-form__error-container">
              {touched.status &&
                this.renderErrors(errors, 'status')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <DateInput
              label="Start Date"
              name="start_date"
              onBlur={handleBlur}
              onChange={handleChange}
              hintText="--Select--"
            />
            <div className="project-form__error-container">
              {touched.start_date &&
                this.renderErrors(errors, 'start_date')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <div className="input-container">
            <DateInput
              label="End Date"
              name="end_date"
              onBlur={handleBlur}
              onChange={handleChange}
              hintText="--Select--"
            />
            <div className="project-form__error-container">
              {touched.end_date &&
                this.renderErrors(errors, 'end_date')
                  .map((e, i) => <Alert type="error" key={i}>{e}</Alert>)
              }
            </div>
          </div>
          <Button
            label="Create new project"
            type="submit"
            disabled={!isValid}
            action={handleSubmit}
          />
          <style jsx>{projectFormStyles}</style>
        </div>
      </form>
    )
  }
}


const Project = withFormik({
  validate: (values, props) => {
    return projectSchema(values).validate(values, { abortEarly: false });
  },
  handleSubmit: (
    values,
    { props, setSubmitting, setErrors, resetForm, setValues }
  ) => {
    const headers = ReactOnRails.authenticityHeaders({'Accept':'application/json'});
    console.log("POST Project creation");
  }

})(InnerForm)

export default Project;

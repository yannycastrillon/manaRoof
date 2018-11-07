import React from 'react';
import ReadOnlyText from '../../../components/forms/inputs/read_only_text_input';

//Styles
import employeeFormStyles from './employee_form.styles';

class EmployeeView extends React.Component {
  render() {
    return(
      <div>
        <div className="input-container">
          <ReadOnlyText
            label="First Name"
            name="first_name"
            value={this.props.employeeProfile.first_name}
          />
        </div>
        <div className="input-container">
          <ReadOnlyText
            label="Last Name"
            name="last_name"
            value={this.props.employeeProfile.last_name}
          />
        </div>
        <div className="input-container">
          <ReadOnlyText
            label="Gender"
            name="gender"
            value={this.props.employeeProfile.gender}
          />
        </div>
        <div className="input-container">
          <ReadOnlyText
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            value={this.props.employeeProfile.date_of_birth}
          />
        </div>
        <style jsx>{employeeFormStyles}</style>
      </div>
    )
  }
}

export default EmployeeView;

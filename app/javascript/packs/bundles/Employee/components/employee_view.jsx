import React from 'react';
import ReadOnlyText form '../../../components/forms/inputs/read_only_text_input';

class EmployeeView extends React.Component {
  render() {
    return(
      <div>
        <ReadOnlyText label="First Name" value={this.props.employee.first_name} />
        <ReadOnlyText label="Last Name" value={this.props.employee.last_name} />
        <ReadOnlyText label="Gender" value={this.props.employee.gender} />
        <ReadOnlyText label="Date of Birth" value={this.props.employee.date_of_birth} />
      </div>
    )
  }
}

export default EmployeeView;

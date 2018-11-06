import React from 'react';
import Employee from './employee';
import SingleCardLayout from '../../../lib/layouts/layout_single_card';

class EmployeeContainer extends React.Component {
  render() {
    return (
      <SingleCardLayout
        title="Employees"
        body={<Employee {...this.props} />}
      />
    )
  }
}

export default EmployeeContainer;

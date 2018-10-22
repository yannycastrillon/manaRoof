import React from 'react';
import Employee from './employee';
import SingleCardLayout '../../../lib/layouts/layout_single_card';

class EmployeeContainer extends React.Component {
  render() {
    return (
      <SingleCardLayout
        cardTitle="Employees"
        cardBody={<Employee {...this.props} />}
        cardFooter={<Footer />}
      />
    )
  }
}

export default EmployeeContainer;

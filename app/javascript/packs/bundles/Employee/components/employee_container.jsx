import React from 'react';
import EmployeeForm from './employee';
import EmployeeView from './employee_view';

import SingleCardLayout from '../../../lib/layouts/layout_single_card';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeViewId: '',
      cardTitle: '',
      employeeProfile: {
        first_name: "Jhon",
        last_name: "Snow",
        gender: "male",
        date_of_birth: "1987-12-12"
      }
    }
  }

  _updateEmployeeViewId = (viewId) => {
    this.setState({employeeViewId: viewId})
  }

  renderEmployeeComponent = () => {
    switch (this.state.employeeViewId) {
      case "employeeEdit":
        return <EmployeeForm {...this.props} />
      default:
        return <EmployeeView employeeProfile={this.state.employeeProfile} {...this.props} />
    }
  }
  render() {
    return (
      <SingleCardLayout
        title={this.state.cardTitle}
        body={this.renderEmployeeComponent()}
        onViewId={this._updateEmployeeViewId}
      />
    )
  }
}

export default EmployeeContainer;

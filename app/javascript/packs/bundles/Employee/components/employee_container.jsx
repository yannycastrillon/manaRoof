import React from 'react';
import Employee from './employee';
import SingleCardLayout from '../../../lib/layouts/layout_single_card';

class EmployeeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: {}
    };
  }

  componentWillMount() {
    // API Call to bring Data of a single Employee
    const profile = {
      first_name: "Andres", last_name:"Martinez", gender: 'male',
      date_of_birth: '19900709', email: 'amartinez@gmail.com', driver_license: 'mar123',
      salary_per_hour: 25, start_date: '2019-01-03', cell_phone: 3235615878,
      phone_number: '', street: '7456 Hollywood Av', second_address: '',
      city: 'LOS ANGELES', state: 'CALIFORNIA', zipcode: 90123, employable_type: 'worker'
    }
    this.setState({
      employeeInfo: { profile: { ...profile } }
    })
  }

  render() {
    return (
      <SingleCardLayout
        title={this.props.title}
        body={<Employee {...this.props} {...this.state}/>}
      />
    )
  }
}

export default EmployeeContainer;

import React from 'react';
import AccountSettingsMain from './account_settings_main';

class AccountSettingsMainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountSettingsViewId: this.props.accountSettingsViewId
    };
  }

  editEmployeeClick = () => {
    this.setState({ accountSettingsViewId: 'editEmployee' });
  }

  render() {
    return <AccountSettingsMain {...this.props} {...this.state} onEditClick={this.editEmployeeClick}/>;
  }
}

export default AccountSettingsMainContainer;

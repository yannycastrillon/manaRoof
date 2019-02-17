import React from 'react';

import EmployeeContainer from '../Employee/components/employee_container';
import ProjectContainer from '../Project/components/project_container';

class AccountSettingsMain extends React.Component {
  renderEmployeeContainer = (viewId) => {
    const cardTitle = (viewId === 'editEmployee') ? 'Edit Account' : 'My Employee';
    return ( <EmployeeContainer
      title={cardTitle}
      accountSettingsViewId={viewId}
      onEditClick={this.props.onEditClick}
      {...this.props.employeeInfo} />
    );
  }

  renderProjectContainer = (viewId) => {
    const cardTitle = (viewId === 'editProject') ? 'Edit Project' : 'My Project';
    return (<ProjectContainer
      title={cardTitle}
      accountSettingsViewId={viewId}
      {...this.props.projectInfo} />
    );
  }

  render() {
    const { accountSettingsViewId } = this.props;
    switch (accountSettingsViewId) {
      case 'readOnlyEmployee':
        return this.renderEmployeeContainer(accountSettingsViewId);
      case 'editEmployee':
        return this.renderEmployeeContainer(accountSettingsViewId);
      case 'readOnlyProject':
        return this.renderProjectContainer(accountSettingsViewId);
      case 'editProject':
        return this.renderProjectContainer(accountSettingsViewId);
    }
  }
}

export default AccountSettingsMain;

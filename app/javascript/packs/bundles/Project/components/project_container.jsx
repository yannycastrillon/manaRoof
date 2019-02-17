import React from 'react';
import Project from './project';
import SingleCardLayout from '../../../lib/layouts/layout_single_card';

class ProjectContainer extends React.Component {
  render() {
    return(
      <SingleCardLayout
        title={this.props.title}
        body={<Project {...this.props} />}
      />
    )
  }
}

export default ProjectContainer;

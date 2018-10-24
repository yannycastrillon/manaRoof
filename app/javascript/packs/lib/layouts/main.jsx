import React from 'react';
import baseStyles from '../theme/base.styles';

class BaseLayout extends React.Component {
  render() {
    return (
      <div className="manaroof-theme">
        {this.props.children}
        <style jsx global>{baseStyles}</style>
      </div>
    )
  }
}

export default BaseLayout;

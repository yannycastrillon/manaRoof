import React from 'react';
import classnames from 'classnames';
import alertStyles from './alert.styles';

class Alert extends React.Component {
  getAlertClassNames = () => {
    return classnames('r-alert', {
      'has--error': this.props.type === 'error',
      'has--success': this.props.type === 'success'
    });
  }

  getAlertIcon = type => {
    switch (type) {
      case 'error':
        return 'images/alerts/error.svg';
      case 'success':
        return 'images/alerts/check.svg';
      default:
        return 'images/alerts/check.svg';
    }
  };

  render() {
    return (
      <div className={this.getAlertClassNames()} key={this.props.key}>
        {this.props.children}
        <img src={this.getAlertIcon(this.props.type)}/>
        <style jsx>{alertStyles}</style>
      </div>
    )
  }
}

export default Alert;

import React from 'react';
import { baseButton, secondaryButton } from '../button.styles';

import PropTypes from 'prop-types';

class SecondaryButton extends React.Component {
  onButtonClick = () => {
    if (this.props.action) {
      this.props.action();
    }
  }

  render() {
    return (
      <div>
        <button className="button" type={this.props.type} onClick={this.onButtonClick} >
          {this.props.label}
        </button>
        <style jsx>{baseButton}</style>
        <style jsx>{secondaryButton}</style>
      </div>
    )
  }
}

SecondaryButton.propTypes = {
  type: PropTypes.string.isRequired
}

export default SecondaryButton;

import React from 'react';
import { baseButton, primaryButton, buttonDisabled } from '../button.styles';
import classnames from 'classnames';

//types of buttons
import ButtonDisable from './disabled';

import PropTypes from 'prop-types';

class PrimaryButton extends React.Component {
  onButtonClick = () => {
    if (this.props.action) {
      this.props.action()
    }
  }

  getClassnames() {
    return classnames("button", {
      "is--disabled": this.props.disabled
    })
  }

  renderButton() {
    if (this.props.disabled) {
      return(<ButtonDisable />)
    }
    return (
      <div>
        <button
          className={this.getClassnames()}
          type={this.props.type}
          disabled={this.props.disabled}
          onClick={this.onButtonClick}>
          {this.props.label}
        </button>
          <style jsx>{baseButton}</style>
          <style jsx>{primaryButton}</style>
      </div>
    )
  }

  render() {
    return (this.renderButton())
  }
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default PrimaryButton;

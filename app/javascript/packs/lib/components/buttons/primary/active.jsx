import React from 'react';
import { baseButton, buttonDisabled } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Active</span>
        <style jsx>{baseButton}</style>
        <style jsx>{buttonDisabled}</style>
      </div>
    )
  }
}

export default Button;

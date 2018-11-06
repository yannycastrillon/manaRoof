import React from 'react';
import { baseButton, secondaryButton, secondaryButtonDisabled } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Disabled</span>
        <style jsx>{baseButton}</style>
        <style jsx>{secondaryButton}</style>
        <style jsx>{secondaryButtonDisabled}</style>
      </div>
    )
  }
}

export default Button;

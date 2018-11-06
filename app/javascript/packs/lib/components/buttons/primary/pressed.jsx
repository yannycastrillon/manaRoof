import React from 'react';
import { baseButton, primaryButton, buttonPressed } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Pressed</span>
        <style jsx>{baseButton}</style>
        <style jsx>{primaryButton}</style>
        <style jsx>{buttonPressed}</style>
      </div>
    )
  }
}

export default Button;

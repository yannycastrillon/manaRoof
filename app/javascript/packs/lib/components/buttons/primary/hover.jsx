import React from 'react';
import { baseButton, primaryButton, buttonHover } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Disabled</span>
        <style jsx>{baseButton}</style>
        <style jsx>{primaryButton}</style>
        <style jsx>{buttonHover}</style>
      </div>
    )
  }
}

export default Button;

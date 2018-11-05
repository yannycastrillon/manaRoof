import React from 'react';
import { baseButton, secondaryButton, secondaryButtonHover } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Disabled</span>
        <style jsx>{baseButton}</style>
        <style jsx>{secondaryButton}</style>
        <style jsx>{secondaryButtonHover}</style>
      </div>
    )
  }
}

export default Button;

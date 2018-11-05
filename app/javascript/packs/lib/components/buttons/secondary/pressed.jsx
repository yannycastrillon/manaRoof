import React from 'react';
import { baseButton, secondaryButton, secondaryButtonPressed } from '../button.styles';

class Button extends React.Component {
  render() {
    return (
      <div>
        <span className="button">Pressed</span>
        <style jsx>{baseButton}</style>
        <style jsx>{secondaryButton}</style>
        <style jsx>{secondaryButtonPressed}</style>
      </div>
    )
  }
}

export default Button;

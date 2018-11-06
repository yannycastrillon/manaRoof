import React from 'react';
import { baseButton, secondaryButton } from '../button.styles';

class SecondaryButton extends React.Component {
  onButtonClick = () => {
    if (this.props.action) {
      this.props.action();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick} className="button">
          {this.props.label}
        </button>
        <style jsx>{baseButton}</style>
        <style jsx>{secondaryButton}</style>
      </div>
    )
  }
}

export default SecondaryButton;

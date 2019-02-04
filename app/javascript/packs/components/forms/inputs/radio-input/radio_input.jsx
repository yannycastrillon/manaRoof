import React from 'react';

class RadioInput extends React.Component {
  render() {
    return(
      <div>
        <input
          type="radio"
          name={this.props.name}
          id={this.props.value}
          value={this.props.value}
          checked={this.props.isChecked}
          onChange={this.props.onChange} />
        <label htmlFor={this.props.value}>{this.props.label}</label>
      </div>
    )
  }
}

export default RadioInput;

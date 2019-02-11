import React from 'react';

import PropTypes from 'prop-types';

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
          onBlur={this.props.onBlur}
          onChange={this.props.onChange} />
        <label htmlFor={this.value}>{this.props.label}</label>
      </div>
    )
  }
}

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default RadioInput;

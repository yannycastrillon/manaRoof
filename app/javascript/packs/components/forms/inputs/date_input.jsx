import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import TextInputCSS, { hintTextCSS } from './text_input.styles';

import PropTypes from 'prop-types';

class DateInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      isTouched: true,
      hasValue: false,
      dob: ''
    }
  }

  getClassnames() {
    return classnames('input-container', {
      'is--touched': this.state.isTouched,
      'is--focused': this.state.isFocused,
      'has--value': this.state.hasValue
    })
  }

  onTextInputChange = e => {
    const date = e.target.value;
    const dob = moment(date).format('MM/DD/YYYY');
    this.setState({ dob, hasValue: !!date.length });
    this.props.onChange(e);
  }

  onInputBlur = e => {
    this.setState({ isFocused: false });
    this.props.onBlur(e);
  }

  onInputFocus = e => {
    this.setState({ isTouched: true, isFocused: true });
  }

  renderHintText() {
    const { hintText } = this.props;
    if (hintText && this.state.isFocused && !this.state.hasValue) {
      return (
        <div className="hint-text">
          {hintText}
          <style jsx>{hintTextCSS}</style>
        </div>
      )
    }
  }

  renderHorizontalLines = () => {
    if (this.props.employeeViewId !== 'readOnlyEmployee') {
      return (
        <div>
          <hr aria-hidden="true" className="baseline" />
          <hr aria-hidden="true" className="scored" />
          <style jsx>{TextInputCSS}</style>
        </div>
      );
    }
  };

  render() {
    return (
      <div className={this.getClassnames()}>
        <div className="input-container__input-field">
          <label>{this.props.label}</label>
          {this.renderHintText()}
          <input
            type={this.state.isFocused ? "date" : "text"}
            name={this.props.name}
            value={this.props.value}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            onChange={this.onTextInputChange}
            onClick={this.onInputClick}
            ref="j_date_input"
          />
        </div>
        <style jsx>{TextInputCSS}</style>
      </div>
    )
  }
}

DateInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default DateInput;

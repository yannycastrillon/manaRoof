import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import moment from 'moment';
import TextInputCSS, { hintTextCSS } from './text_input.styles';

import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      isTouched: true,
      hasValue: true,
      selectedOption: this.props.value,
      options: []
    }
  }

  componentWillMount() {
    console.log("willMountProps", this.props);
    this.setState({
      options: this.props.options.map((e) => ({ value: e, label: e.toUpperCase() }))
    })
  }

  getClassnames() {
    return classnames('input-container', {
      'is--touched': this.state.isTouched,
      'is--focused': this.state.isFocused,
      'has--value': this.state.hasValue
    })
  }

  handleChange = (selectedOption) => {
    console.log("Select OnChange: ", selectedOption);
    this.setState({ selectedOption, hasValue: !!selectedOption });
    this.props.onChange;
  }

  handleBlur = e => {
    console.log("inputBlur: ", e);
    this.setState({ isFocused: false })
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
    const { selectedOption } = this.state;
    return (
      <div className={this.getClassnames()}>
        <div className="input-container__input-field">
          <label>{this.props.label}</label>
          {this.renderHintText()}
          <Select
            autoBlur
            labelKey={this.props.label}
            name={this.props.name}
            value={selectedOption}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            options={this.state.options}
            placeholder={this.props.hintText}
          />
        </div>
        <style jsx>{`
          .input-container__input-field {
            padding-top: 25px;
            line-height: 24px;
            height: 72px;
            cursor: auto;
            color: Gray;
          }
          label {
            color: Orange;
            line-height: 24px;
          }
        `}</style>
      </div>
    )
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SelectInput;

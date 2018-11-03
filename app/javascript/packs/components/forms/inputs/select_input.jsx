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
      isFocused: false,
      isTouched: false,
      hasValue: false,
      selectedOption: null,
      options: this.mapOptions(props.options)
    }
  }

  mapOptions = options => {
    return options.map((e) => {
      return { value: e, label: e }
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
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  onInputBlur = e => {
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
    console.log("Options: ",this.state.options);
    return (
      <div className={this.getClassnames()}>
        <div className="input-container__input-field">
          <label>{this.props.label}</label>
          {this.renderHintText()}
          <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.options}
              placeholder={this.props.hintText}
            />
        </div>
        <style jsx>{`
        `}</style>
      </div>
    )
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default SelectInput;

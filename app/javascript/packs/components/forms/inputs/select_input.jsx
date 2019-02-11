import React from 'react';
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
      options: []
    }
  }

  componentWillMount() {
    this.setState({
      options: this.props.options.map(e => ({ value: e, label: e.toUpperCase() }))
    })
  }

  getClassnames() {
    return classnames('input-container', {
      'is--touched': this.state.isTouched,
      'is--focused': this.state.isFocused,
      'has--value': this.state.hasValue
    })
  }

  handleBlur = e => {
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

  renderOptions = () => {
    const { hintText } = this.props;
    let optionElements = this.state.options.map(option => {
      return <option key={option.value} value={option.value}>{option.label}</option>
    })
    if (hintText){
      const defaultElement =
        <option key={hintText.split(" ").pop()} value="">{hintText}</option>;
      optionElements.unshift(defaultElement);
    }
    return optionElements;
  }

  render() {
    return (
      <div className={this.getClassnames()}>
        <div className="input-container__input-field">
          <label>{this.props.label}</label>
          {this.renderHintText()}
          <div>
            <select
              name={this.props.name}
              value={this.props.value}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}>
            { this.renderOptions() }
            </select>
          </div>
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

}

export default SelectInput;

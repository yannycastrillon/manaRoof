import React from 'react';
import classnames from 'classnames';
import textInputCSS, { hintTextCSS } from './text_input.styles';

import PropTypes from 'prop-types';

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      isTouched: true,
      hasValue: true
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
    this.setState({ hasValue: !!e.target.value.length });
    this.props.onChange(e);
  }

  onInputBlur = e => {
    this.setState({ isFocused: false })
    this.props.onBlur(e);
  }

  onInputFocus = e => {
    this.setState({ isTouched: true, isFocused: true });
  }

  onInputClick = () => {
    if (this.props.onUpdateView) {
      this.props.onUpdateView();
    }
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
          <style jsx>{textInputCSS}</style>
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
            type={this.props.type || 'text'}
            name={this.props.name}
            value={this.props.value}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            onChange={this.onTextInputChange}
            onClick={this.onInputClick}
            ref="j_text_input"
          />
        </div>
        <style jsx>{textInputCSS}</style>
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default TextInput;

import React from 'react';
import classnames from 'classnames';
import textInputCSS, { hintTextCSS } from './text_input.styles';

import PropTypes from 'prop-types';

class ReadOnlyText extends React.Component {
  getClassnames() {
    const hasValue = !!this.props.value.length;
    return classnames('input-container', {
      'is--touched': !hasValue,
      'is--blurred': !hasValue,
      'has--value': hasValue
    });
  }
  render() {
    return (
      <div className={this.getClassnames()}>
        <div className="input-container__input-field">
          <label>{this.props.label}</label>
          <input
            readOnly
            type={this.props.type || 'text'}
            name={this.props.name}
            value={this.props.value}
          />
        </div>
        <style jsx>{textInputCSS}</style>
      </div>
    )
  }
}

ReadOnlyText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default ReadOnlyText;

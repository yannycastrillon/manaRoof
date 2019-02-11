import React from 'react';
import RadioInput from './radio_input';
import textInputCSS from '../text_input.styles';
import classnames from 'classnames';

import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  getClassnames() {
    return classnames('input-container');
  }

  state = {
    value: "worker"
  }

  handleRadioChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e);
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      if (child.type === RadioInput) {
        return React.cloneElement(child, {
          name: this.props.name,
          isChecked: this.state.value === child.props.value,
          onChange: this.handleRadioChange
        })
      }
      return child;
    })
  }

  render() {
    return(
      <div className={this.getClassnames()}>
        <label>{this.props.label}</label>
        <div className="input-choices">
          {this.renderChildren()}
        </div>
        <style jsx>{textInputCSS}</style>
      </div>
    )
  }
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RadioGroup;

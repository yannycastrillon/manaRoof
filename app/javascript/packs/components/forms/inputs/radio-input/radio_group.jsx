import React from 'react';
import RadioInput from './radio_input';
import textInputCSS from '../text_input.styles';
import classnames from 'classnames';

class RadioGroup extends React.Component {
  getClassnames() {
    return classnames('input-container');
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      if (child.type === RadioInput) {
        return React.cloneElement(child, {
          name: this.props.name,
          isChecked: this.props.value === child.props.value,
          onChange: this.props.onChange
        })
      }
      return child;
    })
  }

  render() {
    return(
      <div className={this.getClassnames()}>
        <div>
          {this.renderChildren()}
        </div>
        <style jsx>{textInputCSS}</style>
      </div>
    )
  }
}

export default RadioGroup;

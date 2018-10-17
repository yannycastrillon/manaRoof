import React from 'react';
import baseCardStyles from './baseCard.styles';

class Card extends React.Component {
  render() {
    return (
      <div className="r-card">
        {this.props.children}
        <style jsx>{baseCardStyles}</style>
      </div>
    )
  }
}

export default Card;

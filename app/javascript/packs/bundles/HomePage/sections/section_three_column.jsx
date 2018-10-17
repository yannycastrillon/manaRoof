import React from 'react';
import SectionThreeColStyles from './section_three_col.styles';

class SectionThreeCol extends React.Component {
  render() {
    return (
      <div className="section-three">
        <div className="section-three-col">
          <div className="section-three-col__left">{this.props.left}</div>
          <div className="section-three-col__middle">{this.props.middle}</div>
          <div className="section-three-col__right">{this.props.right}</div>
        </div>
        <style jsx>{SectionThreeColStyles}</style>
      </div>
    )
  }
}

export default SectionThreeCol;

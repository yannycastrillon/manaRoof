import React from 'react';
import Colors from '../../theme/colors';

const CardHeader = ({title, image, onViewId}) => (
  <div className="card-header">
    <img src={image} />
    <h4 className="r-subheader2">{title}</h4>
    <button onClick={this.handleClick} />
    <style jsx>{`
      .card-header {
        padding: 1.5rem;
        display: flex;
        justify-content: center;
        background: ${Colors.red}
      }
      .card-header img {
        max-width: 10rem;
      }
      h4 {
        margin: 0;
        color: ${Colors.red};
      }
      .r-subheader2 {
        font-family: 'Graphik Bold';
        font-size: 50px;
        color: ${Colors.white85};
      }
    `}</style>
  </div>
)

export default CardHeader;

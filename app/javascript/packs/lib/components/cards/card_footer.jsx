import React from 'react';
import Colors from '../../theme/colors';

const CardFooter = props => (
  <div className="card-footer">
    {props.children}
    <style jsx>{`
      .card-footer {
        margin-bottom: auto;
        background: ${Colors.red};
        padding: 2.5rem;
      }
    `}</style>
  </div>
)

export default CardFooter;

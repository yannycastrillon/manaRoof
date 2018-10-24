import React from 'react';

const CardFooter = props => (
  <div className="card-footer">
    {props.children}
    <style jsx>{`
      .card-footer {
        margin-bottom: auto;
      }
    `}</style>
  </div>
)

export default CardFooter;

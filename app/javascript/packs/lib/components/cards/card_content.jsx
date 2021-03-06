import React from 'react';

const CardContent = props => (
  <div className="card-content">
    {props.children}
    <style jsx>{`
      .card-content {
        min-width: 30rem;
        max-width: 30rem;
        margin-top: auto;
      }
      @media screen and (min-width: 375px) {
        .card-content {
          max-width: 34.5rem;
        }
      }
    `}</style>
  </div>
)

export default CardContent;

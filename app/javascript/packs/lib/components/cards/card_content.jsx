
const CardContent = props => {
  <div className="card-content">
    {props.children}
    <style jsx>{`
      .card-content {
        min-width: 30rem;
        max-width: 30rem;
        margin-top: auto;
        margin-bottom: 2.5rem;
      }
      @media screen and (min-width: 375px) {
        .card-content {
          max-width: 34.5rem;
        }
      }
    `}</style>
  </div>
}

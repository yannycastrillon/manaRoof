import Colors from '../../lib/theme/color';

const CardHeader = ({title, image}) => (
  <div className="card-header">
    <img src={image} />
    <h4 className="r-subheader2">{title}</h4>
    <style jsx>{`
      .card-header {
        margin-top: 4.5rem;
        margin-bottom: 2rem;
        padding: 1.5rem;
        height: 100%;
      }
      .card-header img {
        max-width: 10rem;
      }
      h4 {
        margin: 0;
        color: ${Colors.red};
      }
    `}</style>
  </div>
)

export default CardHeader;

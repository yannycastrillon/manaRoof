import React from 'react';
import Colors from '../../../lib/theme/colors';

class HomeTeamSection extends React.Component {
  render() {
    return (
      <section className="home-team-section">
        <div className="home-team-section__right">
          <img src={this.props.team_image_url} />
        </div>
        <div className="home-team-section__left">
          <h1 className="r-title" dangerouslySetInnerHTML={{ __html: this.props.title }} />
          <h2 className="r-subtitle" dangerouslySetInnerHTML={{ __html: this.props.subtitle }} />
        </div>
        <style jsx>{`
          .home-team-section {
            text-align: center;
          }
          img {
            max-width: 65rem;
            margin-bottom:2.4rem;
            width: 100%;
          }
          h1 {
            margin: 0 auto 1.2rem;
            letter-spacing:-1.4px;
          }
          h2 {
            color: ${Colors.black};
            max-width:43.5rem;
            margin: 0 auto 2.4rem;
          }
          @media and screen (min-width: 800px) {
            .home-team-section {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .home-team-section__right {
              order: 2;
              width: 50%;
            }
            .home-team-section__left {
              order: 1;
              text-align: left;
              width: 50%;
            }
            h1 {
              font-size: 43px;
            }
            h2 {
              text-align: left;
              max-width: 54rem;
              margin-left: 0;
            }
            @media screen and (min-width: 1200px) {
              h1 {
                font-size: 78px;
                letter-spacing: -6px;
              }
              .home-team-section__right {
                min-width: 65rem;
              }
              .home-team-section__left {
                min-width: 65rem;
                margin-right: -15rem;
                z-index: 0;
              }
              .home-team-section__right {
                min-width: 65rem;
              }
            }
            @media screen and (min-width: 1300px) {
              .home-team-section__left {
                margin-right: -10rem;
              }
            }
          }
        `}</style>
      </section>
    )
  }
}

export default HomeTeamSection

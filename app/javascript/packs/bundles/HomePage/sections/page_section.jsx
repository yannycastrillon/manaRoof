import React from 'react';
import Colors from '../../../lib/theme/colors';

class PageSection extends React.Component {
  render() {
    return (
      <section className="page-section">
        {this.props.children}
        <style jsx>{`
          .page-section {
            padding: 4rem 2.5rem;
            background: ${Colors.red}
          }
          .page-section:first-of-type {
            padding-top: 8rem;
          }
          .page-section:last-of-type {
            padding-bottom: 8rem;
          }
          @media and screen (min-width: 1200px) {
            .page-section {
              max-width: 120rem;
              padding: 8rem 0;
              margin: auto;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default PageSection;

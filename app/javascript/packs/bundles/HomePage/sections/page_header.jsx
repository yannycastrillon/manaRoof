import React from 'react';

class PageHeader extends React.Component {
  render() {
    return (
      <section className="page-header">
        {this.props.children}
        <style jsx>{`
          .page-header {
            padding: 11.5rem 2.5rem 5rem;
          }
          @media screen and (min-width: 800px) {
            .page-header {
              margin: 0;
              padding: 16 rem 2.5 rem 8rem;
            }
          }
          @media screen and (min-width: 1200px) {
            .page-header {
              max-width: 120rem;
              padding-left: 0;
              padding-right: 0;
              margin: auto;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default PageHeader

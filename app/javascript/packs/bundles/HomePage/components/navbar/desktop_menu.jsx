import React from 'react';

class DesktopMenu extends React.Component {
  render() {
    return (
      <div className="desktop-menu">
        {this.props.children}
        <style jsx>{`
          .desktop-menu {
            display: none;
          }
          @media screen and (min-width: 800px) {
            .desktop-menu {
              display: block;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default DesktopMenu

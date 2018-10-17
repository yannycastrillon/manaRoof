import React from 'react';
import menuLinkStyle from './menu_link.styles';

class MenuLinks extends React.Component {

  renderLogInOrLogOutLink = () => {
    if (this.props.isUserlogIn) {
      return (
        <a date-method="delete" href="/users/sign_in">
          Log Out
          <style jsx>{menuLinkStyle}</style>
        </a>
      )
    }
    else {
      return (
        <a href="/users/sign_in">
          Log In
          <style jsx>{menuLinkStyle}</style>
        </a>
      )
    }
  }

  render() {
    return (
      <ul className="menu-links">
        <li>{this.renderLogInOrLogOutLink()}</li>
        <li><a href="/about_us">About ManaRoof</a></li>
        <li><a href="/employees">Employee</a></li>
        <li><a href="/projects">Projects</a></li>
        <style jsx>{menuLinkStyle}</style>
      </ul>
    )
  }
}

export default MenuLinks

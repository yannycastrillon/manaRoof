import React from 'react';
import {NavLink} from 'react-router-dom';
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
        <li><span><NavLink to="/about_us"  style={{color: 'white', textDecoration: 'none'}}>About ManaRoof</NavLink></span></li>
        <li><span><NavLink to="/employees" className="nav_link" activeClassName="active">Employee</NavLink></span></li>
        <li><span><NavLink to="/projects" className="nav_link" activeClassName="active">Projects</NavLink></span></li>
        <style jsx>{menuLinkStyle}</style>
      </ul>
    )
  }
}

export default MenuLinks

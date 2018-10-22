import React from 'react';
import {NavLink} from 'react-router-dom';
import { menuLinkStyle, navLinkStyle } from './menu_link.styles';

class MenuLinks extends React.Component {

  renderLogInOrLogOutLink = () => {
    if (this.props.isUserlogIn) {
      return (
        <NavLink
          date-method="delete"
          to="/users/sign_in"
          exact
          activeStyle={{color: 'green' }}
          style={navLinkStyle}> Log Out
        </NavLink>
      )
    } else {
      return (
        <NavLink
          to="/users/sign_in"
          exact
          activeStyle={{color: 'green' }}
          style={navLinkStyle}> Log In
        </NavLink>
      )
    }
  }

  render() {
    return (
      <ul className="menu-links">
        <li>{this.renderLogInOrLogOutLink()}</li>
        <li><NavLink to="/about_us"  activeStyle={{color: 'green'}} style={navLinkStyle}>About ManaRoof</NavLink></li>
        <li><NavLink to="/employees" activeStyle={{color: 'green'}} style={navLinkStyle}>Employee</NavLink></li>
        <li><NavLink to="/projects" activeStyle={{color: 'green'}} style={navLinkStyle}>Projects</NavLink></li>
        <style jsx>{menuLinkStyle}</style>
      </ul>
    )
  }
}

export default MenuLinks

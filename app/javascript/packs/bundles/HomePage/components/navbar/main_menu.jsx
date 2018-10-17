import React from 'react';
import Colors from '../../../../lib/theme/colors';
import DesktopMenu from './desktop_menu.jsx';
import MenuLinks from './menu_links.jsx';
import mainMenuStyle from './main_menu.styles';

class Menu extends React.Component {

  render() {
    return (
      <div className="main-menu">
        <div className="main-menu__container">
          <div className="main-menu__image-container">
            <span className="icon-logo-manaroof" alt="ManaRoof" />
          </div>
          <DesktopMenu>
            <MenuLinks isUserlogIn={this.props.isUserlogIn} />
          </DesktopMenu>
        </div>
        <style jsx>{mainMenuStyle}</style>
      </div>
    )
  }
}

export default Menu;

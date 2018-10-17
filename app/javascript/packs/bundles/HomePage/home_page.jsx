import React from 'react';
import Footer from './components/footer/main_footer.jsx';
import Menu from './components/navbar/main_menu.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <Menu isUserlogIn={this.props.isUserlogIn} />
        <Footer />
      </div>
    )
  }
}

export default HomePage;

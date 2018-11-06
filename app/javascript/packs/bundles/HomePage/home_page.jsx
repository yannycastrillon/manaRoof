import React from 'react';
import Footer from './components/footer/main_footer';
import Menu from './components/navbar/main_menu';

// Sections
import PageHeader from './sections/page_header';
import PageSection from './sections/page_section';
import HomeTeamSection from './sections/home_team_section';

//Images
import HomePageTeam from 'images/home-page/home-team.png';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <Menu isUserlogIn={this.props.isUserlogIn} />
        <PageHeader>
        <HomeTeamSection
          title="Taking care of our Workers."
          subtitle="ManaRoof brings quality and team opportunities to our workforce."
          team_image_url={HomePageTeam} />
        </PageHeader>
        <PageSection />
        <PageSection />
        <Footer />
      </div>
    )
  }
}

export default HomePage;

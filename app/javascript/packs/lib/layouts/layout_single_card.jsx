import React from 'react';
import BaseLayout from './main';
import Colors from '../theme/colors';

// Card components
import Card from '../components/cards/card';
import CardHeader from '../components/cards/card_header';
import CardContent from '../components/cards/card_content';
import CardFooter from '../components/cards/card_footer';

const Layout = props => (
  <BaseLayout>
    <div className="layout-single-card">
      <Card>
        <CardHeader title={props.title} image={props.image} onViewId={props.onViewId}/>
        <CardContent>
          {props.body}
        </CardContent>
        <CardFooter />
      </Card>
      <style jsx>{`
        .layout-single-card {
          min-height: 100vh;
          background: ${Colors.white};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  </BaseLayout>
)
export default Layout;

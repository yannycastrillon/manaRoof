import BaseLayout from './main';
import Colors from '../theme/colors';

// Card components
import CardHeader from '../cards/card_header';
import CardContent from '../cards/card_content';
import CardFooter from '../cards/card_footer';

const Layout = props => (
  <BaseLayout>
    <div className="layout-single-card">
      <Card>
        <CardHeader title={props.title} image={props.image}/>
        <CardContent/>
        <CardFooter/>
      </Card>
      <style jsx>{`
        .layout-single-card {
          min-height: 100vh;
          background: ${Colors.purple};
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

import React from 'react';
import Colors from '../../../../lib/theme/colors';
import { leftSection, middleSection, rightSection } from './footer_content';

import SectionThreeCol from '../../sections/section_three_column';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <SectionThreeCol left={leftSection()} middle={middleSection()} right={rightSection()} />
        <style jsx>{`
          .footer {
            background: ${Colors.white};
            padding-top: 7rem;
            padding-bottom: 10rem;
          }
        `}</style>
      </div>
    )
  }
}

export default Footer;

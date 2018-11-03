import css from 'styled-jsx/css';
import Colors from '../../lib/theme/colors';

export default css`
  .r-alert {
    color: ${Colors.roofGreen};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Graphik Bold';
    font-size: 10px;
    line-height: 1.3rem;
  }
  img {
    width: 24px;
  }
  .r-alert.has--error {
    color: ${Colors.warnOrange};
  }
  .r-alert.has--success {
    color: ${Colors.roofGreen};
  }
`;

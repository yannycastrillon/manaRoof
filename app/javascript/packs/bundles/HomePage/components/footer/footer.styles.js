import css from 'styled-jsx/css';
import Colors from '../../../../lib/theme/colors'

export default css`
  .r-subheader {
    font-family: "HelveticaNeue";
    font-size: 16px;
    line-height: 24px
  }
  p {
    color: ${Colors.paragraph};
  }
  h3 {
    color: ${Colors.black};
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }
  a {
    color: ${Colors.paragraph};
  }
  a:hover {
    text-decoration: none;
  }
  li {
    padding-bottom: 1rem;
  }
  li:last-child {
    padding-bottom: 0;
  }
  ul {
    list-style-type: none;
    margin: 2rem 0 4rem;
    padding: 0;
  }
  li:last-of-type {
    margin-bottom: 5rem;
  }
  @media screen and (min-width: 1200px) {
    p {
      margin-top: 4rem;
    }
  }
`;

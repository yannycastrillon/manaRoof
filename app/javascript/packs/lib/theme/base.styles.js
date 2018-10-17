import css from 'styled-jsx/css';
import baseColors from './colors';

export default css`
  body {
    backgound-color: ${baseColors.tan}
    color: ${baseColors.black}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Graphik Bold"
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h1 a:hover,
  h2 a:hover,
  h3 a:hover,
  h4 a:hover,
  h5 a:hover {
    color: ${baseColors.roofRed}
  }

  a,
  a:hover {
    text-decoration: none;
  }
`;

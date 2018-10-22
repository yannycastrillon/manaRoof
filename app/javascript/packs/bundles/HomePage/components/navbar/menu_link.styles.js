import css from 'styled-jsx/css';
import Colors from '../../../../lib/theme/colors';

export const menuLinkStyle = css`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    font-family: sans-serif;
    font-weight: 200;
  }
  li {
    margin: 1rem 2.5rem;
  }
  a {
    color: ${Colors.linksWhite};
    transition: all .2s ease-in-out;
    text-decoration: none;
  }
  li:hover {
    border-bottom: solid 1px ${Colors.linksWhite};
  }

  @media screen and (min-width: 800px) {
    ul {
      flex-direction: row;
      justify-content: space-between;
      height: auto;
      font-family: Graphik;
      align-items: center;
    }
  }
`;

export const navLinkStyle = {
  color: Colors.linksWhite,
  transition: 'all .2s ease-in-out',
  textDecoration: 'none'
}

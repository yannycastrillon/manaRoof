import css from 'styled-jsx/css';
import Colors from '../../../../lib/theme/colors';

export default css`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  li {
    margin: 1rem 2.5rem;
  }
  a {
    color: ${Colors.black};
    transition: all .2s ease-in-out;
  }
  a:hover {
    text-decoration: none;
  }

  @media screen and (min-width: 800px) {
    ul {
      flex-direction: row;
      justify-content: space-between;
      height: auto;
      font-family: "Graphik Regular";
      align-items: center;
    }
  }
`;

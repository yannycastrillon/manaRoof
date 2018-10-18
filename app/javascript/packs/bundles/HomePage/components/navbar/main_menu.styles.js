import css from 'styled-jsx/css';
import Colors from '../../../../lib/theme/colors';

export default css`
  .main-menu {
    background: ${Colors.gray};
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transition: all .05s ease-in-out;
  }
  .main-menu__container {
    max-width: 120rem;
    padding: 3rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  img {
    width: 200px;
    max-width: 10rem;
  }
  .main-menu__image-container {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    .main-menu__image-container {
      width: auto;
    }
  }
`;

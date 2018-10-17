import css from 'styled-jsx/css'

export default css`
  .section-three-col {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    max-width: 120rem;
    flex: 1 1 auto;
    text-align: left;
    justify-content: space-between;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .section-three-col__left {
    width: 58%;
  }
  .section-three-col__middle {
    width: 12%;
  }
  .section-three-col__right {
    width: 18%;
  }

  @media screen and (max-width: 800px) {
    .section-three-col {
      flex-direction: column;
    }
    .section-three-col__left {
      display: block;
      width: 100%;
      order: 3;
    }
    .section-three-col__middle {
      display: block;
      width: 100%;
      order: 2;
    }
    .section-three-col_right {
      display: block;
      width: 100%;
      order: 1;
    }
  }
`;

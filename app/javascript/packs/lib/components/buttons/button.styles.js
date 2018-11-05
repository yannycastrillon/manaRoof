import css from 'styled-jsx/css';
import Colors from '../../theme/colors';

export default css``;

export const baseButton = css`
  .button {
    font-family: 'Graphik Bold';
    font-size: 14px;
    line-height: 0.85;
    border: none;
    text-decoration: none;
    border-radius: 100px;
    outline: 0;
    box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.1);
    color: ${Colors.white};
    padding: 0.8em 1.5em 1em;
    min-width: 5rem;
    display: flex;
    justify-content: center;
  }
`;

export const primaryButton = css`
  .button {
    background: ${Colors.roofGreen};
  }

  .button:hover {
    box-shadow: 0 4px 8px 0 rgba(65, 75, 86, 0.4)
  }

  .button:active {
    box-shadow: none;
  }

  .button.is--disable {
    background: ${Colors.blackDisabled};
    box-shadow: none;
  }

  .button.is--disable:hover,
  .button.is--disable:active,
  .button.is--disable:visited {
    cursor: default;
  }
`;

export const secondaryButton = css`
  .button {
    color: ${Colors.infoBlue};
    border-color: ${Colors.infoBlue};
  }
`;

export const secondaryButtonHover = css`
  .button {
    border-color: ${Colors.infoBlue};
    border-color: transparent;
    color: ${Colors.white};
  }
`;

export const secondaryButtonPressed = css`
  .button {
    background: #01747f;
    border-color: transparent;
    color: ${Colors.white};
  }
`;

export const secondaryButtonDisabled = css`
  .button {
    border-color: ${Colors.blackDisabled};
    color: ${Colors.blackDisabled};
    background: none;
    box-shadow: none;
  }
`;

export const buttonHover = css`
  .button {
    box-shadow: 0 4px 8px 0 rgba(65, 75, 86, 0.4);
    color: ${Colors.white};
    text-decoration: none;
    border: none;
  }
`;

export const buttonPressed = css`
  .button {
    box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.1);
  }
`;

export const buttonDisabled = css`
  .button {
    background-color: #bbbbbb;
    box-shadow: none;
  }
`;

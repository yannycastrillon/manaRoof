import css from 'styled-jsx/css';
import Colors from '../../../lib/theme/colors';

export default css`
  .input-container {
  }
  .input-container__input-field {
    font-size: 16px;
    line-height: 24px;
    height: 72px;

    position: relative;
    backgound-color: transparent;
    font-family: 'Graphik Bold';
    transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    cursor: auto;
    color: Gray;
  }
  label {
    position: absolute;
    line-height: 22px;
    top: 38px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    z-index: 1;
    transform: scale(1) translate(0px, 0px);
    transform-origin: left top 0px;
    pointer-events: none;
    user-select: none;
    color: Orange;
  }

  .is--focused label,
  .has--value label {
    transform: scale(0.75) translate(0px, -28px);
    color: Black;
  }
  .hint-text {
    position: absolute;
    opacity: 0;
    color: rgba(0, 0, 0, 0.3);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    bottom: 12px;
  }
  .is--focused .hint-text {
    opacity: 1;
  }
  .has--value .hint-text {
    opacity: 0;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  input[type='date'] {
    padding: 0px;
    position: relative;
    width: 100%;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0.87);
    cursor: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    opacity: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    height: 100%;
    box-sizing: border-box;
    margin-top: 14px;
  }

  input[type='date'] {
    position: absolute;
    color: rgba(0, 0, 0, 0.3);
    opacity: 1;
  }
  .baseline {
    bottom: 8px;
    box-sizing: content-box;
    margin: 0px;
    position: absolute;
    width: 100%;
    border-bottom: 1px solid ${Colors.greyHorizontalLine};
  }
  .scored {
    border-bottom: 1px solid ${Colors.red};
    bottom: 8px;
    box-sizing: content-box;
    margin: 0px;
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  }
  .is--focused .scored {
    transform: scaleX(1);
  }
  .is--touched.has--error .scored {
    transform: scaleX(1);
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${Colors.warnOrange};
  }
  .error { // specific to account settings
    color: ${Colors.warnOrange};
    padding-bottom: 1rem;
    font-size: 1rem;
    font-family: "Graphik Bold";
    height: 1.5rem;
    background: none;
  }
  .is--touched.is--blurred.has--value .baseline {
    border-bottom: 1px solid ${Colors.greyHorizontalLine};
  }
  .is--touched.is--focused.has--error .baseline,
  .is--touched.is--focused.has--value .baseline,
  .is--touched.is--blurred.has--error .baseline, {
    border-top: none;
    border-right: none;
    border-left: none;
  }
  `;

  export const hintTextCSS = css`
  .hint-text {
    position: absolute;
    color: rgba(0, 0, 0, 0.3);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    bottom: 12px;
    opacity: 1;
  }
`;

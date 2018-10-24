import css from 'styled-jsx/css';
import Colors from '../../../lib/theme/colors';

export default css``;

export const employeeFormStyles = css`
  .employee-form {
    padding: 2rem 2rem 2.5rem;
  }
  .input-container {
    position: relative;
    margin-bottom: 1rem;
  }
  .input-container:last-of-type {
    margin-bottom: 4rem;
  }
  .employee-form__error-container {
    position: absolute;
    width: 100%;
  }
  .employee-form__alert_container {
    margin-bottom: 0.5rem;
  }
  .employee-form__alert_container:last-of-type {
    margin-bottom: 0;
  }
  p {
    font-family: 'Graphik Bold';
    font-size: 12px;
    color: ${Colors.warningOrange};
    text-align: left;
  }
  .employee-form button {
    width: 100%;
  }
  .employee-form img {
    width: 100%;
    padding: 0 2rem;
  }
  .employee-form button[disabled] {
    background: ${Colors.blackDisabled};
    pointer-events: none;
  }
`;

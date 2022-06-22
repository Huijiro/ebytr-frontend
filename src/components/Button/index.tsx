import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import CSS from './button.module.css';

interface Props {
  /**
   * OnClick handler
   * */
  onClick: () => void;

  /**
   *   Content of the button
   * */
  children: React.ReactNode;
}

function Button({ onClick, children }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <button
      onClick={onClick}
      className={mode === 'light' ? CSS['button-light'] : CSS['button-dark']}
      type="button"
    >
      <div>{children}</div>
    </button>
  );
}

export default Button;

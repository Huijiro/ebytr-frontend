import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import CSS from './button.module.css';

interface Props {
  /**
   * OnClick handler
   * */
  onClick?: () => void;

  /**
   *   Content of the button
   * */
  children: React.ReactNode;

  /*
   * Color of the button
   * */

  color?: 'primary' | 'secondary';

  /**
   * Size of text
   * */

  size?: 'small' | 'medium' | 'large';
}

const defaultProps = {
  onClick: () => {},
  size: 'medium',
  color: undefined,
};

function Button({ onClick, children, size, color }: Props) {
  const { mode } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      data-mode={color || mode}
      style={{ fontSize: size }}
      className={CSS.button}
      type="button"
    >
      <div>{children}</div>
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;

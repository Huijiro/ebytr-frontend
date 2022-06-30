import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import CSS from './button.module.css';

interface Props {
  /**
   * OnClick handler
   * */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;

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

  /* Type of the button */

  type?: 'button' | 'submit' | 'reset';

  /* Disable the button */

  disable?: boolean;

  /* Class name */

  className?: string;
}

const defaultProps = {
  onClick: () => {},
  size: 'medium',
  color: undefined,
  type: 'button',
  disable: false,
  className: '',
};

function Button({
  onClick,
  children,
  size,
  color,
  type,
  disable,
  className,
}: Props) {
  const { mode } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      data-mode={color || mode}
      style={{ fontSize: size }}
      className={`${className} ${CSS.button}`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disable}
    >
      <div>{children}</div>
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;

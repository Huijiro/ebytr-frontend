import { createElement, useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import CSS from './text.module.css';

interface Props {
  /** Type of text */
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  /** Text color */
  color?: 'primary' | 'secondary';

  children: React.ReactNode;
}

const defaultProps = { color: 'primary' };

function Text({ type, children, color }: Props) {
  const { mode } = useContext(ThemeContext);
  return createElement(
    type,
    { className: mode === 'light' ? CSS.light : CSS.dark, 'data-color': color },
    children,
  );
}

Text.defaultProps = defaultProps;

export default Text;

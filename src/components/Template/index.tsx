import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import CSS from './template.module.css';

interface Props {
  /**
   * Contents of the page
   */
  children: React.ReactNode;
}

function Template({ children }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode === 'light' ? CSS.light : CSS.dark}>
      <div className={CSS.base}>{children}</div>
    </div>
  );
}

export default Template;

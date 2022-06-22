import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import ColorToggleButton from '../ColorModeButton';
import CSS from './header.module.css';

function Header() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode === 'light' ? CSS.light : CSS.dark}>
      <div className={CSS.header}>
        <h1>Task Manager</h1>
        <ColorToggleButton />
      </div>
    </div>
  );
}

export default Header;

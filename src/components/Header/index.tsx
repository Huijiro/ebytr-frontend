import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import ColorToggleButton from '../ColorModeButton';
import Text from '../Text';
import CSS from './header.module.css';

function Header() {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={mode === 'light' ? CSS.light : CSS.dark}>
      <div className={CSS.header}>
        <Text type="h1">Task Manager</Text>
        <ColorToggleButton />
      </div>
    </div>
  );
}

export default Header;

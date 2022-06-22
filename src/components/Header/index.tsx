import ColorToggleButton from '../ColorModeButton';
import CSS from './header.module.css';

function Header() {
  return (
    <div className={CSS.header}>
      <h1>Task Manager</h1>
      <ColorToggleButton />
    </div>
  );
}

export default Header;

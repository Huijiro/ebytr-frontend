import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import Button from '../Button';

function ColorToggleButton() {
  const { mode, setMode } = useContext(ThemeContext);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <Button onClick={toggleMode}>{mode === 'light' ? <>☀️</> : <>🌙</>}</Button>
  );
}

export default ColorToggleButton;

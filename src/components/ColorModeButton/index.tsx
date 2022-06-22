import { useState } from 'react';
import Button from '../Button';

function ColorToggleButton() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <Button onClick={toggleMode}>{mode === 'light' ? <>☀️</> : <>🌙</>}</Button>
  );
}

export default ColorToggleButton;

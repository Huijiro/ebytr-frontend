import React, { useMemo, useState } from 'react';

interface Context {
  /**
   * Theme mode
   */
  mode: 'light' | 'dark';
  /**
   * Set theme mode
   * @param mode
   * */
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext({
  mode: 'light',
  setMode: () => {},
} as Context);

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState('light');

  const value = useMemo(
    () => ({
      mode: theme as Context['mode'],
      setMode: setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

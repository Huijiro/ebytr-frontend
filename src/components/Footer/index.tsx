import { useContext } from 'react';
import { ThemeContext } from '../../utils/themeContext';
import Text from '../Text';
import CSS from './footer.module.css';

function Footer() {
  const { mode } = useContext(ThemeContext);
  return (
    <footer className={CSS.footer} data-mode={mode}>
      <Text type="h4">Made by: Huijiro</Text>
    </footer>
  );
}

export default Footer;

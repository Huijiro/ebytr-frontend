import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './input.module.css';

interface Props {
  label: string;
  id: string;
}

function InputText({ label, id }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id}>
      <input
        className={CSS.input}
        id={id}
        type="text"
        placeholder={label}
        data-mode={mode}
      />
    </label>
  );
}

export default InputText;

import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './input.module.css';

interface Props {
  label: string;
  id: string;
}

function InputTextArea({ label, id }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id}>
      <textarea
        className={CSS.input}
        id={id}
        placeholder={label}
        data-mode={mode}
        rows={5}
        cols={50}
      />
    </label>
  );
}

export default InputTextArea;

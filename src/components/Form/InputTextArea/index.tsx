import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './input.module.css';

interface Props {
  value: string;
  label: string;
  id: string;
  err: string;
}

function InputTextArea({ value, label, id, err }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id} className={CSS.label}>
      {err ? <span className={CSS.error}>{err}</span> : null}
      <textarea
        value={value}
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

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
        className={CSS.input}
        defaultValue={value}
        id={id}
        placeholder={label}
        data-mode={mode}
      />
    </label>
  );
}

export default InputTextArea;

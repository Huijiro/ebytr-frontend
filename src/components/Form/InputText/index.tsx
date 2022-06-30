import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './input.module.css';

interface Props {
  value: string;
  label: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  err: string;
}

const defaultProps = { onChange: () => {} };

function InputText({ value, label, id, err, onChange }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id} className={CSS.label}>
      {err ? <span className={CSS.error}>{err}</span> : null}
      <input
        className={CSS.input}
        defaultValue={value}
        id={id}
        type="text"
        placeholder={label}
        data-mode={mode}
        onChange={onChange}
      />
    </label>
  );
}

InputText.defaultProps = defaultProps;

export default InputText;

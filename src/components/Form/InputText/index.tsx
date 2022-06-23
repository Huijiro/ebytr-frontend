import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './input.module.css';

interface Props {
  label: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps = { onChange: () => {} };

function InputText({ label, id, onChange }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id}>
      <input
        className={CSS.input}
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

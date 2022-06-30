import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import CSS from './select.module.css';

interface Props {
  id: string;
  options: { value: number; label: string }[];
}

function Select({ id, options }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <label htmlFor={id}>
      <select id={id} className={CSS.select} data-mode={mode}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;

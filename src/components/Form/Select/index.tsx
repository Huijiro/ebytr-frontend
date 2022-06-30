interface Props {
  id: string;
  options: { value: number; label: string }[];
}

function Select({ id, options }: Props) {
  return (
    <label htmlFor={id}>
      <select id={id}>
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

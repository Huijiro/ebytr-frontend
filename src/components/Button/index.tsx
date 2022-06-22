import CSS from './button.module.css';

interface Props {
  /**
   * OnClick handler
   * */
  onClick: () => void;

  /**
   *   Content of the button
   * */
  children: React.ReactNode;
}

function Button({ onClick, children }: Props) {
  return (
    <button onClick={onClick} className={CSS.button} type="button">
      {children}
    </button>
  );
}

export default Button;

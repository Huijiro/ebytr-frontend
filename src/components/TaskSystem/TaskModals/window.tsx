import { useContext } from 'react';
import { ThemeContext } from '../../../utils/themeContext';
import Button from '../../Button';
import Text from '../../Text';
import CSS from './modal.module.css';

interface Props {
  /* Title of the window */
  title: string;
  /* Is the window open? */
  setOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

function Window({ title, setOpen, children }: Props) {
  const { mode } = useContext(ThemeContext);
  return (
    <div className={CSS.modal}>
      <div className={CSS.window} data-mode={mode}>
        <div className={CSS.head}>
          <Text type="h2">{title}</Text>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="secondary"
            className={CSS.close}
          >
            ✕
          </Button>
        </div>
        <div className={CSS.body}>{children}</div>
      </div>
    </div>
  );
}

export default Window;

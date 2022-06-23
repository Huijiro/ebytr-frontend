import { useContext } from 'react';
import TaskI from '../../../interfaces/task.interface';
import { ThemeContext } from '../../../utils/themeContext';
import Button from '../../Button';
import Text from '../../Text';
import CSS from './task.module.css';

interface Props {
  task: TaskI;
}

function Task({ task }: Props) {
  const { mode } = useContext(ThemeContext);

  const shotenDescripition = (description: string) => {
    if (description.length > 20) {
      return `${description.substring(0, 20)}...`;
    }
    return description;
  };

  return (
    <div className={CSS.container} data-mode={mode}>
      <Text type="h3">{task.title}</Text>
      <Text type="p" color="secondary">
        {shotenDescripition(task.description)}
      </Text>
      <div className={CSS.buttons}>
        <Button>✏️</Button>
        <Button>🗑️</Button>
      </div>
    </div>
  );
}

export default Task;

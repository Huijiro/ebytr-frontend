import { useContext } from 'react';
import TaskI from '../../../interfaces/task.interface';
import { ThemeContext } from '../../../utils/themeContext';
import Button from '../../Button';
import Text from '../../Text';
import { TasksModalContext } from '../TaskModals';
import TaskStatus from '../TaskStatus';
import CSS from './task.module.css';

interface Props {
  task: TaskI;
}

function Task({ task }: Props) {
  const { mode } = useContext(ThemeContext);
  const { openEdit, setCurrentTask, openDelete } = useContext(TasksModalContext);

  const shotenDescripition = (description: string) => {
    if (description.length > 20) {
      return `${description.substring(0, 20)}...`;
    }
    return description;
  };

  const editTask = () => {
    setCurrentTask(task);
    openEdit(true);
  };

  const deleteTask = () => {
    setCurrentTask(task);
    openDelete(true);
  };

  return (
    <div className={CSS.container} data-mode={mode}>
      <div className={CSS.head}>
        <TaskStatus status={task.status} />
        <Text type="h3">{task.title}</Text>
      </div>
      <div className={CSS.body}>
        <Text type="p">{shotenDescripition(task.description)}</Text>
      </div>
      <div className={CSS.buttons}>
        <Button onClick={editTask}>✏️</Button>
        <Button onClick={deleteTask}>🗑️</Button>
      </div>
    </div>
  );
}

export default Task;
